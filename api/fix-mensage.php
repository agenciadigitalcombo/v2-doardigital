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

$invoice = new Banco();
$invoice->table("fatura");
$allInvoices =  $invoice->select();


echo json_encode([
    "next" => true,
    "message" => "lista de mensagem",
    "payload" => [
        "total" => null,
        "data_inicio" => null,
        "data_fim" => null,
        "status" => null,

    ]
]);
