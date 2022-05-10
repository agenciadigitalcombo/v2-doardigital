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

$faturas = new Banco();
$faturas->table("fatura");
$faturas->where([ "status_pagamento" => "FUTURE" ]);
$all = $faturas->select();

$hoje = strtotime( date('Y-d-m') );
$validarData = fn($f) => strtotime($f['data']) <= $hoje;

$all = array_filter( $all, $validarData);

echo json_encode([
    "next" => true,
    "message" => "Lista de agendamentos",
    "payload" => [
        "faturas" => $all
    ],
]);