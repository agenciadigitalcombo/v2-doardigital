<?php

include __DIR__ . "/core/Banco.php";

$donations = new Banco();
$donations->table("fatura");

$invoices = $donations->select();

$subscribe = new Banco();
$subscribe->table("assinatura");
$subs = $subscribe->select();

$subs = array_map(fn ($s) => $s["subscription_fk"], $subs);

$invoices = array_filter($invoices, function ($donation) use ($subs) {
    return stripos($donation["fatura_id"], "sub_") !== false && !in_array($donation["fatura_id"], $subs);
});

$invoices = array_values($invoices);

$invoices = array_map(function ($donation) {
    return [
        "instituicao_fk" => $donation["instituicao_fk"],
        "external_fk" => $donation["external_fk"],
        "doador_fk" => $donation["doador_fk"],
        "subscription_fk" => $donation["fatura_id"],
        "tipo_pagamento" => $donation["tipo_pagamento"],
        "status_pagamento" => $donation["status_pagamento"],
        "valor" => $donation["valor"],
    ];
}, $invoices);

$sql = array_map( function($donation) {
    $keys = implode(",", array_keys($donation) );
    $values =  implode(",", array_map( fn($k) => "'{$k}'", array_values($donation) )) ;
    return "INSERT INTO assinatura ({$keys}) VALUES ($values) ";
}, $invoices );

// echo implode(";", $sql);
// echo $sql[0];
$subscribe->exec( implode(";", $sql) );

echo json_encode($invoices);
