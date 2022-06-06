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

function get_template(string $status_pagamento): string
{
    $pathDefault = __DIR__ . "/template/DEFAULT.html";
    $path = __DIR__ . "/template/{$status_pagamento}.html";
    if (!file_exists($path)) {
        return file_get_contents($pathDefault);
    }
    return file_get_contents($path);
}

function blade(array $payload, string $template)
{
    $html = $template;
    $body = $payload['body'] ?? "";
    $html = str_replace('@@body@@', $body, $html);
    foreach ($payload as $k => $v) {
        $html = str_replace("{" . $k . "}", $v, $html);
    }
    $html = trim(str_replace("%20", ' ', $html));
    return $html;
}

$db = new Banco();
$db->table("message");
$all = $db->select();
$all = array_filter($all, function ($mem) {
    $hoje =  time();
    $data = $mem["data"] + 0;
    return $hoje >= $data;
});
$all = array_values($all);
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

    $status_payment = $action["payload"]["status_payment"];
    $template = get_template($status_payment);
    $email = $action["payload"]["email"] ?? null;
    $nome = $action["payload"]["nome"] ?? null;
    $subject = $action["payload"]["subject"] ?? null;

    $blade = blade((array)$action["payload"], $template);

    $headers[] = 'MIME-Version: 1.0';
    $headers[] = 'Content-type: text/html; charset=iso-8859-1';
    $headers[] = "To: {$nome} <{$email}>";
    $headers[] = 'From: Doar Digital <contato@doardigital.com.br>';

    mail($email, $subject, $blade, implode("\r\n", $headers));
}

if ($action["tipo"] == "EVENDAS") {
    $zap = new Evendas();
    $tel = $action["payload"]["telefone"];
    $tel = preg_replace('/\D/', '', $tel);
    $nome = $action["payload"]["nome"];
    $email = $action["payload"]["email"];
    $telefone = substr($tel, 2, 9);
    $ddd = substr($tel, 0, 2);
    $valor = $action["payload"]["valor"];
    $status_payment = $action["payload"]["status_payment"];
    $type_payment = $action["payload"]["type_payment"];
    $boleto_url = $action["payload"]["boleto_url"];
    $url_pix = $action["payload"]["url_pix"];
    $code_boleto = $action["payload"]["code_boleto"];
    $logradouro = $action["payload"]["logradouro"];
    $token = $action["payload"]["token"];
    $external_id = $action["payload"]["external_id"];
    $res = $zap->send(
        $nome,
        $email,
        $telefone,
        $ddd,
        $valor,
        $status_payment,
        $type_payment,
        $boleto_url,
        $url_pix,
        $code_boleto,
        $logradouro,
        $token,
        $external_id
    );
    file_put_contents( __DIR__ . "/logs/whats.txt", $res);
}

$db->where(["id" => $action["id"]]);
$db->delete();

echo json_encode([
    "next" => true,
    "message" => "Lista de agendamentos",
    "payload" => $action,
]);
