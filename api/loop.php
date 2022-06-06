<?php

header("Access-Control-Allow-Headers: Authorization, Content-Type");
header("Access-Control-Allow-Origin: *");
header('content-type: application/json; charset=utf-8');
date_default_timezone_set('America/Sao_Paulo');
if (!empty($_REQUEST['debug'])) {
    error_reporting(E_ALL);
    ini_set('display_errors', 1);
}
include __DIR__ . "/core/Banco.php";
$db = new Banco();
$db->table("message");
$all = $db->select();
$action = $all[0] ?? [];
if (empty($action)) {
    echo json_encode([
        "next" => false,
        "message" => "Lista em branco",
        "payload" => [],
    ]);
    die;
}
$action = [
    "id" => $action["id"] ?? 0,
    "hoje" => time(),
    "data" => ($action["data"] ?? time()) + 0,
    "tipo" => $action["tipo"] ?? "FAIL",
    "tipo" => $action["tipo"] ?? "FAIL",
    "payload" => json_decode($action['payload'] ?? '[]', true)
];
if ($action["tipo"] == "EMAIL") {
    $email = $action["payload"]["email"] ?? "br.rafael@outlook.com";
    mail($email, "TESTE CRON",  json_encode($action));
    mail("br.rafael@outlook.com", "TESTE CRON",  json_encode($action));
}
$db->where(["id" => $action["id"]]);
$db->delete();
echo json_encode([
    "next" => true,
    "message" => "Lista de agendamentos",
    "payload" => $action,
]);
