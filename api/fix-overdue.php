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
include __DIR__ . "/models/FilaAws.php";

function contador( $max ) {
    $file = __DIR__ . "/fix-overdue.txt";
    $step = (int) file_get_contents( $file );
    if($step < $max ) {
        $step++;
    }
    file_put_contents($file, $step );
    return $step;
}

function filter_date( $payload ) {    
    $data_donation = substr($payload['data'], 0, 7);
    return $data_donation == '2023-02' || $data_donation == '2023-01';
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

$step = contador(count($lines));
$exec = $lines[$step] ?? [];

$fila = new FilaAws();
$arn = "arn:aws:states:us-east-1:348265973939:stateMachine:Recupera-Cartao-Overdue";
$resAws = [];
if( !empty($exec) ) {
    $resAws = $fila->send( $exec, $arn );
}

echo json_encode([
    "next" => true,
    "message" => "Migrate dados",
    "payload" => [
        "total" => count($lines),
        "step" => $step,
        "lines" => $exec,
        "resAws" => $resAws,
    ]
]);