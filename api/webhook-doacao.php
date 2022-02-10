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

include __DIR__ . "/interfaces/IDoacoes.php";
include __DIR__ . "/interfaces/IDoador.php";
include __DIR__ . "/interfaces/IInstituicao.php";

include __DIR__ . "/models/Doacoes.php";
include __DIR__ . "/models/Doador.php";
include __DIR__ . "/models/Instituicao.php";
include __DIR__ . "/models/SendGrid.php";

$doacao = new Doacao();
$doador = new Doador();
$instituicao = new Instituicao();

$payload = $_REQUEST;

$reference_key = $_REQUEST['transaction']['reference_key'];
$status = $_REQUEST['transaction']['status'];


$doc = $doacao->get_doacao_by_reference_key($reference_key);

$instituicao_id = $doc['instituicao_id'];
$doador_id = $doc['doador_id'];

$list_doador = $doador->get_by_id($doador_id);
$list_instituicao = $instituicao->get_by_id($instituicao_id);

$doacao->set_status_hook(
    $reference_key,
    $status
);

$payload = json_encode($payload);

@mail("br.rafael@outlook.com", "webhook - " . date("d/m/Y H:i"), $payload);
@mail("victorfernandomagalhaes@gmail.com", "webhook - " . date("d/m/Y H:i"), $payload);

SendGrid::send(
    $list_doador['nome'],
    $list_doador['email'],
    $list_instituicao['nome_fantasia'],
    $list_instituicao['email'],
    "Atualização Doação",
    "Atualização Doação",
    "A sua doação de codigo {$reference_key} agora esta com o status {$status}",
    $list_instituicao['cor'],
    $list_instituicao['nome_fantasia'],
    $list_instituicao['logo'],
    'instituicao'
);
