<?php

header("Access-Control-Allow-Headers: Authorization, Content-Type");
header("Access-Control-Allow-Origin: *");
// header('content-type: application/json; charset=utf-8');
date_default_timezone_set('America/Sao_Paulo');

if (!empty($_REQUEST['debug'])) {
    error_reporting(E_ALL);
    ini_set('display_errors', 1);
}

$doacao = new Doacao();

$payload = $_REQUEST;

$reference_key = $_REQUEST['transaction']['reference_key'];
$status = $_REQUEST['transaction']['status'];

$doacao->set_status_hook(
    $reference_key,
    $status
);

$payload = json_encode($payload);

@mail("br.rafael@outlook.com", "webhook - " . date("d/m/Y H:i"), $payload);
@mail("victorfernandomagalhaes@gmail.com", "webhook - " . date("d/m/Y H:i"), $payload);
