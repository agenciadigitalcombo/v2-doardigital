<?php

header("Access-Control-Allow-Headers: Authorization, Content-Type");
header("Access-Control-Allow-Origin: *");
header('content-type: application/json; charset=utf-8');
date_default_timezone_set('America/Sao_Paulo');

if (!empty($_REQUEST['debug'])) {
    error_reporting(E_ALL);
    ini_set('display_errors', 1);
}

include __DIR__ . "/core/Banco.php";
include __DIR__ . "/models/Asaas.php";
include __DIR__ . "/models/AsaasPay.php";
include __DIR__ . "/models/FilaAws.php";
include __DIR__ . "/webHookTemplateEmail.php";

$env = include __DIR__ . "/config.php";

$pay = new AsaasPay();

$faturas = new Banco();
$faturas->table("fatura");

$sub = new Banco();
$sub->table("assinatura");

$message = new Banco();
$message->table("message");

$inst = new Banco();
$inst->table("institution");

$doadores = new Banco();
$doadores->table("doador");

$getJson = file_get_contents('php://input');
$getJson = (array) json_decode($getJson, true);
$request = $_REQUEST;
$payload = array_merge($getJson, $request);

$subscription =  $payload['payment']['subscription'] ?? "";
$reference_key = $payload['payment']['externalReference'] ?? "";
$dueDate = $payload['payment']['dueDate'] ?? "";
$dueDateInvoice = $payload['payment']['dueDate'] ?? "";
// $dueDate = date('Y-m-d', strtotime('-7 days', strtotime($dueDate)));
$status = $payload['payment']['status'] ?? "";
$tipo = $payload['payment']['billingType'] ?? "";
$url = $payload['payment']['invoiceUrl'] ?? "";
$ID = $payload['payment']['id'] ?? "";
$subPrefix = "";

$value = $payload['payment']['value'];
$billingType = $tipo;

$event = $payload['event'];
$whiteList = [
    "PAYMENT_CREATED",
    "PAYMENT_UPDATED",
    "PAYMENT_CONFIRMED",
    "PAYMENT_RECEIVED",
    "PAYMENT_OVERDUE",
    "PAYMENT_REFUNDED",
];

if (!in_array($event, $whiteList)) {
    echo json_encode([
        "next" => false,
        "message" => "evento desconhecido",
        "payload" => []
    ]);
    die;
}

if (empty($reference_key)) {
    echo json_encode([
        "next" => false,
        "message" => "É necessário um referencia",
        "payload" => []
    ]);
    die;
}

$title = "WEBHOOK ASAAS - " . date("d/m/Y H:i");
$copy = [
    "br.rafael@outlook.com",
    "john@digitalcombo.com.br"
];
foreach ($copy as $email) {
    @mail($email, $title, json_encode($payload));
}

$faturas->where([
    "fatura_id" => $ID
]);

$fatura = $faturas->select()[0];

if (empty($fatura)) {
    $subPrefix = "_SIGNATURE";
    $faturas->where([
        "external_fk" => $reference_key
    ]);
    $copy = $faturas->select()[0] ?? [];
    $faturas->insert([
        "instituicao_fk" => $copy["instituicao_fk"] ?? "",
        "fatura_id" => $ID,
        "tipo_pagamento" => $copy["tipo_pagamento"] ?? "",
        "recorrente" => $copy["recorrente"] ?? "",
        "external_fk" => $copy["external_fk"] ?? "",
        "status_pagamento" => $copy["status_pagamento"] ?? "",
        "valor" => $copy["valor"] ?? "",
        "codigo" => $copy["codigo"] ?? "",
        "url" => $url ?? "",
        "data" => $copy["tipo_pagamento"] == "CREDIT_CARD" ? $dueDateInvoice : $dueDate,
        "hora" => $copy["hora"] ?? "",
        "doador_fk" => $copy["doador_fk"] ?? "",
        "doador_nome" => $copy["doador_nome"] ?? "",
        "doador_email" => $copy["doador_email"] ?? "",
    ]);

    $faturas->where([
        "fatura_id" => $ID
    ]);
    $fatura = $faturas->select()[0];
}

$e_vendas = new Banco();
$e_vendas->table("integration");
$e_vendas->where([
    "instituicao_fk" => $fatura["instituicao_fk"],
    "tipo" => "EVENDAS"
]);
$token_e_vendas = $e_vendas->select()[0] ?? [];

$token_e_vendas = $token_e_vendas["key_1"] ?? $env['evendas'] ?? "";

$faturas->update([
    "status_pagamento" => $status,
    "data" => $dueDate,
    "valor" => $value,
    "tipo_pagamento" => $billingType,
]);

$sub->where([
    "external_fk" => $reference_key
]);
$sub->update([
    "status_pagamento" => $status,
]);

$institution_fk = $fatura["instituicao_fk"];

$inst->where([
    "institution_fk" => $institution_fk,
]);

$company = $inst->select()[0] ?? [];

$doador_fk = $fatura["doador_fk"] ?? "";

$carteira_fk = $company["carteira_fk"] ?? "";

$pay->set_api_key($carteira_fk);

$code = null;

if ($tipo == "PIX") {
    $resCode = $pay->getCodePix($ID);
    $code = $resCode["payload"] ?? "";
}

if ($tipo == "BOLETO") {
    $resCode = $pay->getBarcodeBoleto($ID);
    $code = $resCode["identificationField"] ?? "";
}

$faturas->where([
    "fatura_id" => $ID
]);
$faturas->update([
    "codigo" => $code,
]);

$doadores->where([
    "external_fk" => $doador_fk
]);
$doador = $doadores->select()[0] ?? [];

$telefone = $doador["telefone"] ?? "";

$payload = [
    "instituicao" => $company,
    "nome" => $fatura["doador_nome"] ?? "",
    "email" => $fatura["doador_email"] ?? "",
    "telefone" => substr($telefone, 2, 20),
    "valor" => $fatura["valor"] ?? "",
    "status_payment" => $status,
    "type_payment" => $tipo .''. $subPrefix,
    "url" => $url,
    "code" => $code,
    "ddd" => substr($telefone, 0, 2),
    "boleto_url" => $url,
    "url_pix" => $code,
    "code_boleto" => $code,
    "logradouro" => $company["nome"] ??  "",
    "token" => $token_e_vendas,
    "external_id" => $reference_key,
];

// $message->insert([
//     "tipo" => "EMAIL",
//     "data" => strtotime($dueDate),
//     "payload" => json_encode($payload, JSON_UNESCAPED_UNICODE),
// ]);

// $message->insert([
//     "tipo" => "WHATS",
//     "data" => strtotime($dueDate),
//     "payload" => json_encode($payload, JSON_UNESCAPED_UNICODE),
// ]);

$Fila = new FilaAws();


@$mailActive = $company['mailActive'] ?? 0;
@$emailInst = $company['mailSender'] ?? "contato@doardigital.com.br";

$payload["sender"] = $mailActive == "1" ? $emailInst : "contato@doardigital.com.br";
$payload["dataDeEnvio"] = $dueDate . "T" . date('H:i:s') . '.600-03:00';
$payload["transacao"] = intval((time() / 50) + rand(1, 99));
$payload["data"] = date('Y-m-d H:i:s');
$templateEmail = generateHtmlEmail($payload);
$payload["htmlContent"] = base64_encode($templateEmail['html']);
$payload["subject"] = $templateEmail['assunto'];

foreach ($copy as $email) {
    @mail($email, 'AWS FILA - ' . $payload["dataDeEnvio"], json_encode($res));
}

if ($event == 'PAYMENT_CREATED' && $tipo == 'CREDIT_CARD') {
    echo json_encode([
        "next" => true,
        "message" => "Web Hook",
        "payload" => [],
    ]);
    die;
}

$res = $Fila->send($payload, 'EMAIL');
$Fila->send($payload, 'WHATS');

echo json_encode([
    "next" => true,
    "message" => "Web Hook",
    "payload" => [],
]);
