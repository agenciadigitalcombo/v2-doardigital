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

function filter_date( $payload ) {
    $data_now = date('Y-m');
    $data_donation = substr($payload['data'], 0, 7) ;
    return $data_now == $data_donation;
}

function porter($payload) {
    return [
        "payment_id" => $payload["fatura_id"],
        "external_id" => $payload["external_fk"],
        "data" => $payload["data"],
    ];
}

$db = new Banco();
$db->table('fatura');
$db->where([
    "recorrente" => 1,
    "status_pagamento" => "OVERDUE",
    "tipo_pagamento" => "CREDIT_CARD",
]);
$lines = $db->select();

$lines = array_filter($lines, 'filter_date');
$lines = array_values($lines);
$lines = array_map('porter', $lines);

echo json_encode([
    "next" => true,
    "message" => "Migrate dados",
    "payload" => [
        "total" => count($lines),
        "lines" => $lines,
    ]
]);