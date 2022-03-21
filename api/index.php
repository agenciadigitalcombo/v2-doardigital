<?php 

header("Access-Control-Allow-Headers: Authorization, Content-Type");
header("Access-Control-Allow-Origin: *");
// header('content-type: application/json; charset=utf-8');

date_default_timezone_set('America/Sao_Paulo');

if(!empty($_REQUEST['debug'])){
    
    error_reporting(E_ALL);
    ini_set('display_errors', 1);
}

include __DIR__ . "/core/Banco.php";
include __DIR__ . "/core/help.php";
include __DIR__ . "/core/Jwt.php";
include __DIR__ . "/core/autoload.php";
