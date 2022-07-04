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
            "id" => $i["id"],
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

function porterCompany($allCompany)
{
    return array_reduce($allCompany, function ($acc, $c) {
        $acc[$c["institution_fk"]] = $c["carteira_fk"];
        return $acc;
    }, []);
}

function porterSubInvoice($invoices)
{
    return array_map(function ($i) {
        return [
            "id" => $i["id"],
            "subscription" => $i["subscription"],
            "status" => $i["status"],
            "dueDate" => $i["dueDate"],
            "invoiceUrl" => $i["invoiceUrl"],
            "invoiceNumber" => $i["invoiceNumber"],
        ];
    }, $invoices);
}

function render()
{
    $invoice = new Banco();
    $invoice->table("fatura");
    $allInvoices = allInvoices($invoice);
    $allSubscriptions = allSubscriptions($allInvoices);
    $allSubscriptions = porterInvoices($allSubscriptions);
    $allSubscriptions = array_values($allSubscriptions);
    // $allSubscriptions = array_reverse($allSubscriptions);
    $company = new Banco();
    $company->table("institution");
    $allCompany = $company->select();
    $allCompanyKey = porterCompany($allCompany);
    $assinatura = new Banco();
    $assinatura->table("assinatura");
    $assinaturaIDs = $assinatura->select();
    $assinaturaIDs = array_map(fn ($a) => $a["subscription_fk"], $assinaturaIDs);
    $inserts = [];
    $deletes = [];
    $addAssinaturas = [];
    $messages = [];
    $totalFetch = 0;
    $pay = new AsaasPay();
    $fatura = $allSubscriptions[0] ?? [];

    if (!empty($fatura)) {
        $key = $allCompanyKey[$fatura["instituicao_fk"]];
        $pay->set_api_key($key);
        $subApiAsa = $pay->listSubs($fatura["sub_id"])["data"];
        $totalFetch++;
        $subApiAsa = porterSubInvoice($subApiAsa);
        foreach ($subApiAsa as $f) {
            $portContent = [
                "instituicao_fk" => $fatura["instituicao_fk"],
                "fatura_id" => $f["id"],
                "tipo_pagamento" => $fatura["tipo_pagamento"],
                "recorrente" => $fatura["recorrente"],
                "external_fk" => $fatura["external_fk"],
                "status_pagamento" => $f["status"],
                "valor" => $fatura["valor"],
                "codigo" => $f["invoiceNumber"],
                "url" => $f["invoiceUrl"],
                "data" =>  date('Y-m-d', strtotime('-7 days', strtotime($f["dueDate"]))),
                "hora" => $fatura["hora"],
                "doador_fk" => $fatura["doador_fk"],
                "doador_nome" => $fatura["doador_nome"],
                "doador_email" => $fatura["doador_email"],
            ];
            $keys = implode(",", array_keys($portContent));
            $values = implode(",", array_map(fn ($v) => "'$v'", array_values($portContent)));
            $inserts[] = "INSERT INTO fatura ($keys) VALUES ($values)";
            $dataFatura = strtotime($portContent["data"]);
            $dataAtual = strtotime("2022-07-01");
            if($dataFatura >= $dataAtual ) {
                $payloadMessage = [
                    "tipo" => "WHATS",
                    "data" => $dataFatura,
                    "payload" => json_encode([
                        "instituicao" => null,
                        "nome" => $fatura["doador_nome"] ?? "",
                        "email" => $fatura["doador_email"] ?? "",
                        "telefone" => null,
                        "valor" => $fatura["valor"] ?? "",
                        "status_payment" => $f["status"],
                        "type_payment" => $fatura["tipo_pagamento"],
                        "url" => null,
                        "code" => null,
                        "ddd" => null,
                        "boleto_url" => null,
                        "url_pix" => null,
                        "code_boleto" => null,
                        "logradouro" => null ??  "",
                        "token" => null,
                        "external_id" => $fatura["external_fk"],
                    ], JSON_UNESCAPED_UNICODE),
                ];
                $keysMessage = implode(",", array_keys($payloadMessage));
                $valuesMessage = implode(",", array_map(fn ($v) => "'$v'", array_values($payloadMessage)));
                $messages [] = "INSERT INTO message ($keysMessage) VALUES ($valuesMessage)";
                $payloadMessage["tipo"] = "EMAIL";
                $messages [] = "INSERT INTO message ($keysMessage) VALUES ($valuesMessage)";
            }
        }
        if (!in_array($fatura["sub_id"], $assinaturaIDs)) {
            $portContentSubscription = [
                "instituicao_fk" => $fatura["instituicao_fk"],
                "external_fk" => $fatura["external_fk"],
                "doador_fk" => $fatura["doador_fk"],
                "subscription_fk" => $fatura["sub_id"],
                "tipo_pagamento" => $fatura["tipo_pagamento"],
                "status_pagamento" => $fatura["status_pagamento"],
                "valor" => $fatura["valor"],
            ];
            $keysSub = implode(",", array_keys($portContentSubscription));
            $valuesSub = implode(",", array_map(fn ($v) => "'$v'", array_values($portContentSubscription)));
            $addAssinaturas[] = "INSERT INTO assinatura ($keysSub) VALUES ($valuesSub)";
        }
        $ID = $fatura["id"];
        $deletes[] = "DELETE FROM fatura WHERE id={$ID}";
    }
    $allSQL = array_merge(
        $inserts,
        $deletes,
        $addAssinaturas,
        $messages
    );
    $query = implode(";", $allSQL);
    $invoice->exec($query);
    echo json_encode([
        "next" => true,
        "message" => "Script de correção",
        "payload" => [
            "falta" => count($allSubscriptions),
            "totalProcessosSQL" => count($allSQL),
            "totalFetch" => $totalFetch,
            "mensagem" => count($messages),
            "sql" => $allSQL
        ]
    ]);
    die;
}

render();
