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
include __DIR__ . "/core/help.php";

include __DIR__ . "/interfaces/IDoacoes.php";
include __DIR__ . "/interfaces/IDoador.php";
include __DIR__ . "/interfaces/IInstituicao.php";
include __DIR__ . "/interfaces/IEvendas.php";

include __DIR__ . "/models/Doacoes.php";
include __DIR__ . "/models/Doador.php";
include __DIR__ . "/models/Instituicao.php";
include __DIR__ . "/models/SendGrid.php";
include __DIR__ . "/models/EvendasNotificacao.php";
include __DIR__ . "/models/Evendas.php";

$doacao = new Doacao();
$doador = new Doador();
$instituicao = new Instituicao();
$evendas = new EvendasNotificacao();


$getJson = file_get_contents('php://input');

$getJson = (array) json_decode($getJson, true);
$request = $_REQUEST;

$payload = array_merge($getJson, $request);

$subscription =  $payload['payment']['subscription'] ?? null;
$reference_key = $payload['payment']['externalReference'] ?? 'error';
$status = $payload['payment']['status'] ?? 'error';



$doc = $doacao->get_doacao_by_reference_key($reference_key);


$title = "WEBHOOK ASAAS - " . date("d/m/Y H:i");
$copy = [
    "br.rafael@outlook.com",
    "victorfernandomagalhaes@gmail.com",
    "john@digitalcombo.com.br"
];


foreach( $copy as $email ) {
    @mail($email, $title, json_encode($payload));
}



if(empty($doc)){
    die;
}

$instituicao_id = $doc['instituicao_id'];
$doador_id = $doc['doador_id'];



$list_doador = $doador->get_by_id($doador_id);

if(empty($list_doador)){
    die;
}


$list_instituicao = $instituicao->get_by_id($instituicao_id);


if(empty($list_instituicao)){
    die;
}

$cpf = $list_doador['cpf'] ?? '';

$type_pagamento = $doc['tipo'] ?? '';
$codigo = $doc['codigo'] ?? '';
$url = $doc['url'] ?? '';

$doacao->set_status_hook(
    $reference_key,
    $status
);

if(!empty($subscription)){
    
    $codigo = $payload['payment']['invoiceUrl'] ?? "error"; 
    $url = $payload['payment']['invoiceNumber'] ?? "error";

    $doacao->set_status_hook_recorrente(
        $reference_key, 
        $codigo, 
        $url
    );

}

$payload = json_encode($payload);


get_api('/email/preview', [
    "instituicao_id" => $instituicao_id,
    "doador_cpf" => $cpf,
    "status" => $status,
    "tipo" => $type_pagamento,
    "codigo" => $codigo,
    "link" => $url
], false);




$dados_evendas = $evendas->get_by_instituicao_id($instituicao_id);

$get_token_evendas = $dados_evendas['canal'] ?? false;

$nome = $list_doador['nome'];
$email = $list_doador['email'];
$telefone = telefone_get_number($list_doador['telefone']);
$phone_ddd = telefone_get_ddd($list_doador['telefone']);
$planos_valor = $payload['payment']['value'];
$get_status = $payload['payment']['status'];
$type_pagamento = $payload['payment']['billingType'];
$endereco = "";


if ($get_token_evendas) {
    $res_evendas = Evendas::send(
        $nome,
        $email,
        $telefone,
        $phone_ddd,
        $planos_valor,
        $get_status,
        $type_pagamento,
        $url,
        $codigo,
        $codigo,
        $endereco,
        $get_token_evendas
    );
}






echo json_encode([
    "next" => true,
    "message" => "Seja bem vindo a Doar Digital"
]);