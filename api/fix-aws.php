<?php

header("Access-Control-Allow-Headers: Authorization, Content-Type");
header("Access-Control-Allow-Origin: *");
// header('content-type: application/json; charset=utf-8');
date_default_timezone_set('America/Sao_Paulo');
if (!empty($_REQUEST['debug'])) {
    error_reporting(E_ALL);
    ini_set('display_errors', 1);
}

include __DIR__ . "/core/Banco.php";
include __DIR__ . "/models/FilaAws.php";
include __DIR__ . "/models/Asaas.php";
include __DIR__ . "/models/AsaasPay.php";

include __DIR__ . "/webHookTemplateEmail.php";

$db = new Banco();
$response = null;
$db->table("message");
$all = $db->select();

$action = $all[0] ?? [];

if (empty($action)) {
    echo json_encode([
        "next" => false,
        "message" => "Lista em branco",
        "payload" => [],
    ]);
    die;
}

$action = [
    "id" => $action["id"],
    "dataDeEnvio" => date('Y-m-d', $action["data"]) . "T" . date('H:i:s', $action["data"]) . '.600-03:00',
    "data" => date('Y-m-d H:i:s', $action["data"]),
    "tipo" => $action["tipo"],
    "payload" => json_decode($action['payload'] ?? '[]', true)
];

$payload = $action['payload'];
$payload["dataDeEnvio"] = $action['dataDeEnvio'];
$payload["data"] = $action['data'];
$payload["sender"] = "contato@doardigital.com.br";
$payload["transacao"] = intval((time() / 50) + rand(1, 99));
$templateEmail = generateHtmlEmail($payload);
$payload["htmlContent"] = base64_encode($templateEmail['html']);
$payload["subject"] = $templateEmail['assunto'];

$accessToken = $payload['instituicao']['carteira_fk'];

$asaPay = new AsaasPay();
$asaPay->set_api_key($accessToken);

$dbDoador = new Banco();
$dbDoador->table('doador');
$dbDoador->where([
    "instituicao_fk" => $payload['instituicao']['institution_fk'],
    "email" => $payload['email'],
]);

// $dbFatura = new Banco();
// $dbFatura->table('fatura');
// $dbFatura->where([
//     "external_fk" => $payload['external_id'],
// ]);

$doador_fk = $dbDoador->select()[0]['external_fk'];
$ID = 'pay_' . array_reverse(explode('/', $payload['url']))[0];

$invoice_asa_api = $asaPay->getInvoice($ID);
$data_asa = $invoice_asa_api['dueDate'];
$tipo_asa = $invoice_asa_api['billingType'];

$subscribe_key = $invoice_asa_api['subscription'] ?? false;

if ($subscribe_key) {
    $subscribe_asa_api = $asaPay->getSubscribe($subscribe_key);
    $sub_status_asa = $subscribe_asa_api['status'];
    if ($sub_status_asa == 'INACTIVE') {
        $db->where(["id" => $action["id"]]);
        $db->delete();
        echo json_encode([
            "next" => true,
            "total" => count($all),
            "message" => "Lista de agendamentos",
        ]);
        die;
    }
}

$tmp_data = $data_asa;
if($tipo_asa != 'CREDIT_CARD') {
    $tmp_data = date("Y-m-d", strtotime('-7 days', strtotime($tmp_data)));
}
$payload["dataDeEnvio"] =  $tmp_data . "T09:00:00.600-03:00";



$Fila = new FilaAws();
$resAws = $Fila->send((array) $payload, $action["tipo"]);

$menAws = new Banco();
$menAws->table('message_aws');
$menAws->insert([
    "tipo" => $action["tipo"],
    "status" => 'Succeeded',
    "data" => $payload["dataDeEnvio"],
    "doador_fk" => $doador_fk,
    "fatura_fk" => $ID,
    "ref_fk" => $payload['external_id'],
    "execution_arn" => $resAws['executionArn'],
    "institution_fk" => $payload['instituicao']['institution_fk'],
]);

$db->where(["id" => $action["id"]]);
$db->delete();


echo json_encode([
    "next" => true,
    "total" => count($all),
    "message" => "Lista de agendamentos",
]);