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
include __DIR__ . "/models/Asaas.php";
include __DIR__ . "/models/AsaasPay.php";

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
$status = $payload['payment']['status'] ?? "";
$tipo = $payload['payment']['billingType'] ?? "";
$url = $payload['payment']['invoiceUrl'] ?? "";
$ID = $payload['payment']['id'] ?? "";

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

if( empty($fatura) ) {
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
        "url" => $copy["url"] ?? "",
        "data" => $dueDate,
        "hora" => $copy["hora"] ?? "",
        "doador_fk" => $copy["doador_fk"] ?? "",
        "doador_nome" => $copy["doador_nome"] ?? "",
        "doador_email" => $copy["doador_email"] ?? "",
    ]);

    $faturas->where([
        "fatura_id" => $ID
    ]);
}

$faturas->update([
    "status_pagamento" => $status,
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
    $resCode = $Pay->getCodePix($ID);
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
    "external_fk"=> $doador_fk
]);
$doador = $doadores->select()[0] ?? [];

$telefone = $doador["telefone"] ?? "";

$payload = json_encode([
    "instituicao" => $company,
    "nome" => $fatura["doador_nome"] ?? "",
    "email" => $fatura["doador_email"] ?? "",
    "telefone" => $telefone,
    "valor" => $fatura["valor"] ?? "",
    "status_payment" => $status,
    "type_payment" => $tipo,
    "url" => $url,
    "code" => $code,
    "ddd" => $telefone,
    "boleto_url" => $url,
    "url_pix" => $code,
    "code_boleto" => $code,
    "logradouro" => $company["nome"] ??  "",
    "token" => $env['evendas'] ?? "",
    "external_id" => $reference_key,
]);

$message->insert([
    "tipo" => "EMAIL",
    "data" => strtotime($dueDate),
    "payload" => $payload,
]);
$message->insert([
    "tipo" => "WHATS",
    "data" => strtotime($dueDate),
    "payload" => $payload,
]);

echo json_encode([
    "next" => true,
    "message" => "Web Hook",
    "payload" => []
]);
