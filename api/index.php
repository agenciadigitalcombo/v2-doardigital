<?php

header('Content-Type: text/html; charset=utf-8');
header('Access-Control-Allow-Origin: *');
date_default_timezone_set('America/Sao_Paulo');

error_reporting(E_ALL);
ini_set('display_errors', 1);

include __DIR__ . "/core/Banco.php";
include __DIR__ . "/core/help.php";
include __DIR__ . "/core/Jwt.php";
include __DIR__ . "/core/autoload.php";
