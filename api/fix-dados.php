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

function tupla($token, $costumer_id)
{
    return "UPDATE doador SET card_token='{$token}' WHERE pagamento_fk = '{$costumer_id}';";
}
function tpl_tupla($tupla)
{
    $tupla = str_replace(["\n", "\r", " "], '', $tupla);
    $split = explode(',', $tupla);
    return tupla($split[1], $split[0]);
}

$file_csv = __DIR__ . "/migrate-dados.csv";
if (file_exists($file_csv)) {
    $lines = file($file_csv);
    $lines = array_map('tpl_tupla', $lines);
    $lines = implode("\n", $lines);
    $db = new Banco();
    $db->exec($lines);
    echo json_encode([
        "next" => true,
        "message" => "Migrate dados",
        "payload" => []
    ]);
}
