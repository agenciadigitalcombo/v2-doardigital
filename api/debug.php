<?php

include __DIR__ . "/core/Banco.php";

$donations = new Banco();
$donations->table("fatura");

$invoices = $donations->select();

$subscribe = new Banco();
$subscribe->table("assinatura");





echo json_encode( $invoices );