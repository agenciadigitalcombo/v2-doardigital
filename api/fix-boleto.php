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

function getInstitutionKey() {
    $inst = new Banco();
    $inst->table("institution");
    $all = $inst->select();
    $all = array_reduce( $all, function($acc,$company) {
        $acc[$company["institution_fk"]] = $company["carteira_fk"];
        return $acc;
    }, [] );
    return $all;
}

function getFaturas() {
    $fatura = new Banco();
    $fatura->table("fatura");
    $fatura->where([
        "recorrente" => 1,
        "tipo_pagamento" => "BOLETO"
    ]);
    $data = strtotime( "2022-06-21");
    $all = $fatura->select();
    $all = array_filter( $all, fn($f) =>strtotime($f["data"]) >= $data  );
    $all = array_values($all);
    $all = array_map(function($f){
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

$institutions = getInstitutionKey();
$faturas = getFaturas();



echo json_encode([
    "next" => true,
    "message" => "Correção boletos recorrentes",
    "payload" => [
        "dataInit" => "2022-06-21",
        "total" => count($faturas),
        "debug" => $faturas[0]
    ],
]);
