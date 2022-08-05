<?php

header("Access-Control-Allow-Headers: Authorization, Content-Type");
header("Access-Control-Allow-Origin: *");
header('Content-Type: charset=utf-8');
set_time_limit(60);
date_default_timezone_set('America/Sao_Paulo');
if (!empty($_REQUEST['debug'])) {
    error_reporting(E_ALL);
    ini_set('display_errors', 1);
}

include __DIR__ . "/core/Banco.php";

$data_inicio = $_REQUEST["data_inicio"] ?? date('Y-m-d');
$data_fim = $_REQUEST["data_fim"] ?? date('Y-m-d');
$status = $_REQUEST["status"] ?? "PENDING";
$institution_fk = $_REQUEST["institution_fk"] ?? "";
$save = $_REQUEST["save"] ?? 0;

$invoice = new Banco();
$invoice->table("fatura");
$invoice->orderByDesc("data");
$allInvoices =  $invoice->select();

$total = count($allInvoices);

$message = $allInvoices;

$message = array_map(function ($payload) {
    return [
        "instituicao_fk" => $payload["instituicao_fk"],
        // "fatura_id" => $payload["fatura_id"],
        // "tipo_pagamento" => $payload["tipo_pagamento"],
        // "recorrente" => $payload["recorrente"],
        "status_pagamento" => $payload["status_pagamento"],
        // "valor" => $payload["valor"],
        // "codigo" => $payload["codigo"],
        // "url" => $payload["url"],
        "data" => $payload["data"],
        // "doador_nome" => $payload["doador_nome"],
        // "doador_email" => $payload["doador_email"],
    ];
}, $message);

$message = array_filter($message, function ($f) use ($data_inicio, $data_fim, $status, $institution_fk) {
    $data_inicio_time = strtotime($data_inicio);
    $data_fim_time = strtotime($data_fim);
    $data_time = strtotime($f["data"]);
    if ($f["status_pagamento"] != $status) {
        return false;
    }
    if ( $data_time < $data_inicio_time ) {
        return false;
    }
    if ($data_time > $data_fim_time ) {
        return false;
    }
    if ($institution_fk != $f["instituicao_fk"]) {
        return false;
    }
    return true;
});

$message = array_values($message);

$total = count($message);

echo json_encode([
    "next" => true,
    "message" => "lista de mensagem",
    "params" => [
        "data_inicio",
        "data_fim",
        "status",
        "institution_fk",
        "save",
    ],
    "payload" => [
        "total" => $total,
        "data_inicio" => $data_inicio,
        "data_fim" => $data_fim,
        "status" => $status,
        "institution_fk" => $institution_fk,
        "save" => $save,
        "message" => $message
    ]
]);
