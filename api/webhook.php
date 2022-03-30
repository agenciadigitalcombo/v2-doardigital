<?php

header("Access-Control-Allow-Headers: Authorization, Content-Type");
header("Access-Control-Allow-Origin: *");
// header('content-type: application/json; charset=utf-8');
date_default_timezone_set('America/Sao_Paulo');

$getJson = file_get_contents('php://input');
$getJson = (array) json_decode($getJson, true);
$request = $_REQUEST;

$payload = array_merge($getJson, $request);
$payload = json_encode($payload);

$title = "WEBHOOK ASAAS - " . date("d/m/Y H:i");
$copy = [
    "br.rafael@outlook.com",
    "victorfernandomagalhaes@gmail.com",
    "john@digitalcombo.com.br"
];

foreach( $copy as $email ) {
    @mail($email, $title , $payload);
}

echo json_encode([
    "next" => true,
    "message" => "Seja bem vindo a Doar Digital"
]);