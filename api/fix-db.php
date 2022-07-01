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

include __DIR__ . "/models/Asaas.php";
include __DIR__ . "/models/AsaasPay.php";
include __DIR__ . "/core/Banco.php";

function allInvoices($db)
{
    return $db->select();
}

function allSubscriptions($invoices)
{
    return array_filter($invoices, fn ($i) => stripos($i["fatura_id"], "sub_") !== false);
}

function porterInvoices($payload)
{
    return array_map(function ($i) {
        return [
            "instituicao_fk" => $i["instituicao_fk"],
            "sub_id" => $i["fatura_id"],
            "tipo_pagamento" => $i["tipo_pagamento"],
            "external_fk" => $i["external_fk"],
            "status_pagamento" => $i["status_pagamento"],
            "valor" => $i["valor"],
            "hora" => $i["hora"],
            "doador_fk" => $i["doador_fk"],
            "doador_nome" => $i["doador_nome"],
            "doador_email" => $i["doador_email"],
        ];
    }, $payload);
}

function porterCompany( $allCompany ) {
    return array_reduce( $allCompany, function( $acc, $c ) {
        $acc[$c["institution_fk"]] = $c["carteira_fk"];
        return $acc;
    }, [] );
}

function render()
{
    $invoice = new Banco();
    $invoice->table("fatura");
    $allInvoices = allInvoices($invoice);
    $allSubscriptions = allSubscriptions($allInvoices);
    $allSubscriptions = porterInvoices($allSubscriptions);
    $company = new Banco();
    $company->table("institution");
    $allCompany = $company->select();
    $allCompanyKey = porterCompany($allCompany);
    $sql = [];
    $pay = new AsaasPay();
    foreach( $allSubscriptions as $fatura ) {
        $key = $allCompanyKey[$fatura["instituicao_fk"]];
        $pay->set_api_key($key); 
        $subApiAsa = $pay->listSubs($fatura["sub_id"])["data"];
        var_dump($subApiAsa);        
        die;
    }
    // $subs = listSubs("ok");
}

render();
