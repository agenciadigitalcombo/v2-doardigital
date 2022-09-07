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

$data_inicio = $_REQUEST["data_inicio"] ?? date('Y-m-d');
$data_fim = $_REQUEST["data_fim"] ?? date('Y-m-d');
$status = $_REQUEST["status"] ?? "PENDING";
$institution_fk = $_REQUEST["institution_fk"] ?? "";
$save = $_REQUEST["save"] ?? 0;
$evendas = $_REQUEST["evendas"] ?? "";

$save = !!$save;

$invoice = new Banco();
$invoice->table("fatura");
$invoice->orderByAsc("data");
$allInvoices =  $invoice->select();

$total = count($allInvoices);

$message = $allInvoices;

function hashCompany($allCompany)
{
    return array_reduce($allCompany, function ($acc, $c) {
        $acc[$c["institution_fk"]] = $c;
        return $acc;
    }, []);
}

$message = array_map(function ($payload) {
    return [
        "instituicao_fk" => $payload["instituicao_fk"],
        "fatura_id" => $payload["fatura_id"],
        "tipo_pagamento" => $payload["tipo_pagamento"],
        "recorrente" => $payload["recorrente"],
        "status_pagamento" => $payload["status_pagamento"],
        "valor" => $payload["valor"],
        "external_fk" => $payload["external_fk"],
        "codigo" => $payload["codigo"],
        "url" => $payload["url"],
        "data" => $payload["data"],
        "doador_fk" => $payload["doador_fk"],
        "doador_nome" => $payload["doador_nome"],
        "doador_email" => $payload["doador_email"],
    ];
}, $message);

$message = array_filter($message, function ($f) use ($data_inicio, $data_fim, $status, $institution_fk) {
    $data_inicio_time = strtotime($data_inicio);
    $data_fim_time = strtotime($data_fim);
    $data_time = strtotime($f["data"]);
    if ($f["status_pagamento"] != $status) {
        return false;
    }
    if ( $data_time < $data_inicio_time ) {
        return false;
    }
    if ($data_time > $data_fim_time ) {
        return false;
    }
    if ($institution_fk != $f["instituicao_fk"]) {
        return false;
    }
    return true;
});

$doador = new Banco();
$doador->table("doador");
$doadorFks = $doador->select();
$doadorFks = array_reduce( $doadorFks, function($acc,$do) {
    $acc[$do["external_fk"]] = $do;
    return $acc;
}, [] );

$company = new Banco();
$company->table("institution");
$allCompany = $company->select();

$hashCompany = hashCompany($allCompany);

$message =  array_map(function($fatura) use ($hashCompany, $evendas, $doadorFks, $allInvoices) {
    $telefone = $doadorFks[$fatura["doador_fk"]]["telefone"];
    $sub = "";

    $total_invoices = array_filter( $allInvoices, function($i) use ($fatura) {
        return $fatura["external_fk"] == $i["external_fk"];
    } );

    $total_invoices = array_values($total_invoices);

    if( count($total_invoices) > 1 ) {
        $sub = "SUB_";
    }

    $dueDate = date('Y-m-d', strtotime('-7 days', strtotime($fatura["data"])));

    return [
        "tipo" => "WHATS",
        "data" => strtotime($dueDate),
        "payload" => json_encode([
            "instituicao" => $hashCompany[$fatura["instituicao_fk"]],
            "nome" => $fatura["doador_nome"] ?? "",
            "email" => $fatura["doador_email"] ?? "",
            "telefone" => $telefone,
            "valor" => $fatura["valor"] ?? "",
            "status_payment" => $sub ."".$fatura["status_pagamento"],
            "type_payment" => $fatura["tipo_pagamento"],
            "url" => $fatura["url"],
            "code" => $fatura["codigo"],
            "ddd" => $telefone,
            "boleto_url" => $fatura["url"],
            "url_pix" => $fatura["codigo"],
            "code_boleto" => $fatura["codigo"],
            "logradouro" => $hashCompany[$fatura["instituicao_fk"]]["nome"] ??  "",
            "token" => $evendas,
            "external_id" => $fatura["external_fk"],
        ], JSON_UNESCAPED_UNICODE),
    ];
}, $message );


$message = array_reduce( $message, function($messages, $payloadMessage) {
    $keysMessage = implode(",", array_keys($payloadMessage));
    $valuesMessage = implode(",", array_map(fn ($v) => "'$v'", array_values($payloadMessage)));
    $messages[] = "INSERT INTO message ($keysMessage) VALUES ($valuesMessage)";
    // $payloadMessage["tipo"] = "EMAIL";
    // $keysMessage = implode(",", array_keys($payloadMessage));
    // $valuesMessage = implode(",", array_map(fn ($v) => "'$v'", array_values($payloadMessage)));
    // $messages[] = "INSERT INTO message ($keysMessage) VALUES ($valuesMessage)";
    return $messages;
}, [] );

$message = array_values($message);

$total = count($message);


$query = implode(";", $message);
if($save) {
    $invoice->exec($query);
}

echo json_encode([
    "next" => true,
    "message" => "lista de mensagem",
    "payload" => [
        "total" => $total,
        "data_inicio" => $data_inicio,
        "data_fim" => $data_fim,
        "status" => $status,
        "institution_fk" => $institution_fk,
        "save" => $save,
        // "message" => $message,
        "query" => $query,
    ]
]);
