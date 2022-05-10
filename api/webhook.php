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

$getJson = file_get_contents('php://input');
$getJson = (array) json_decode($getJson, true);
$request = $_REQUEST;
$payload = array_merge($getJson, $request);

$subscription =  $payload['payment']['subscription'] ?? "";
$reference_key = $payload['payment']['externalReference'] ?? "";
$status = $payload['payment']['status'] ?? "";
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
$faturas->update([
    "status_pagamento" => $status,
]);

echo json_encode([
    "next" => true,
    "message" => "Web Hook",
    "payload" => []
]);
