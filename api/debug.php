<?php

include __DIR__ . "/models/SendInBlue.php";

$Email = new SendInBlue();

$Email->send( "john", "johnhoffmannsantos@yahoo.com", "Teste API", "ok" );
$res = $Email->send( "Bruno", "br.rafael@outlook.com", "Teste API", "ok" );

echo json_encode( $res );