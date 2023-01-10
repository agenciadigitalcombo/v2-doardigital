<?php 

header("Access-Control-Allow-Headers: Authorization, Content-Type");
header("Access-Control-Allow-Origin: *");
// header('content-type: application/json; charset=utf-8');

// ini_set('memory_limit', '-1');
// set_time_limit(0);

set_time_limit(20);

date_default_timezone_set('America/Sao_Paulo');

$getJson = file_get_contents('php://input');
$getJson = (array) json_decode($getJson, true);
$_REQUEST = array_merge($getJson, $_REQUEST);

if(!empty($_REQUEST['debug'])){    
    error_reporting(E_ALL);
    ini_set('display_errors', 1);
}

include __DIR__ . "/core/Banco.php";
include __DIR__ . "/core/help.php";
include __DIR__ . "/core/Jwt.php";
include __DIR__ . "/core/Controle.php";
include __DIR__ . "/core/autoload.php";