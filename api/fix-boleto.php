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

function getInstitutionKey()
{
    $inst = new Banco();
    $inst->table("institution");
    $all = $inst->select();
    $all = array_reduce($all, function ($acc, $company) {
        $acc[$company["institution_fk"]] = $company["carteira_fk"];
        return $acc;
    }, []);
    return $all;
}

function getFaturas()
{
    $fatura = new Banco();
    $fatura->table("fatura");
    $fatura->where([
        "recorrente" => 1,
        "tipo_pagamento" => "BOLETO"
    ]);
    $data = strtotime("2022-06-21");
    $all = $fatura->select();
    $all = array_filter($all, fn ($f) => strtotime($f["data"]) >= $data);
    $all = array_values($all);
    $all = array_map(function ($f) {
        return [
            "id" => $f["id"],
            "instituicao_fk" => $f["instituicao_fk"],
            "fatura_id" => $f["fatura_id"],
            "tipo_pagamento" => $f["tipo_pagamento"],
            "recorrente" => $f["recorrente"],
            "external_fk" => $f["external_fk"],
            "status_pagamento" => $f["status_pagamento"],
            "valor" => $f["valor"],
            "codigo" => $f["codigo"],
            "url" => $f["url"],
            "data" => $f["data"],
            "doador_fk" => $f["doador_fk"],
            "doador_nome" => $f["doador_nome"],
            "doador_email" => $f["doador_email"],
        ];
    }, $all);
    return $all;
}

function contador()
{
    $path = __DIR__ . "/fix-boleto-count.txt";
    $count = intval(file_get_contents($path) ?? "0");
    $count++;
    file_put_contents($path, $count);
    return $count;
}

$institutions = getInstitutionKey();
$faturas = getFaturas();
$step = contador();
$fatura = $faturas[$step];

if (empty($fatura)) {
    echo json_encode([
        "next" => false,
        "message" => "Lista vazia",
        "payload" => [
            "total" => count($faturas),
            "step" => $step,
        ]
    ]);
    die;
}

$pay = new AsaasPay();
$key = $institutions[$fatura["instituicao_fk"]] ?? "";
$pay->set_api_key($key);

if (empty($key)) {
    echo json_encode([
        "next" => false,
        "message" => "Instituição não possui chave api",
        "payload" => [
            "total" => count($faturas),
            "step" => $step,
        ]
    ]);
    die;
}

$resFatura = $pay->getInvoice($fatura["fatura_id"]);

$url = $resFatura["invoiceUrl"];

$db = new Banco();
$db->table("fatura");
$db->where(["id" => $fatura["id"]]);
$db->update([
    "url" => $url
]);

echo json_encode([
    "next" => true,
    "message" => "Correção boletos recorrentes",
    "payload" => [
        "dataInit" => "2022-06-21",
        "total" => count($faturas),
        "step" => $step,
        "debugUrl" => $url,
        "fatura" => $fatura,
    ],
]);
