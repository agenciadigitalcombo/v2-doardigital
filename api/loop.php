<?php

header("Access-Control-Allow-Headers: Authorization, Content-Type");
header("Access-Control-Allow-Origin: *");
// header('content-type: application/json; charset=utf-8');
date_default_timezone_set('America/Sao_Paulo');
if (!empty($_REQUEST['debug'])) {
    error_reporting(E_ALL);
    ini_set('display_errors', 1);
}

include __DIR__ . "/core/Banco.php";
include __DIR__ . "/models/Evendas.php";
include __DIR__ . "/models/SendInBlue.php";

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
        $tag = "{" . $k . "}";
        if (!is_array($v)) {
            $html = str_replace($tag, $v, $html);
        }
    }
    $html = trim(str_replace("%20", ' ', $html));
    return $html;
}

$db = new Banco();
$response = null;
$db->table("message");
$all = $db->select();
$all = array_filter($all, function ($mem) {
    $hoje =  time();
    $data = $mem["data"] + 0;
    return $hoje > $data;
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

$db->where(["id" => $action["id"]]);
$db->delete();

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
    $email = $action["payload"]["email"] ?? "";
    $nome = $action["payload"]["nome"] ?? "";

    $content = (array)$action["payload"];

    foreach ($content as $index => $cont) {
        if (is_array($cont)) {
            foreach ($cont as $k => $v) {
                $content["{$index}_{$k}"] = $v;
            }
        }
    }

    $type_payment = $content["type_payment"] ?? "";
    $status_payment = $content["status_payment"] ?? "";
    $institution_fk = $content["instituicao_institution_fk"] ?? "";

    

    $templateEmail = new Banco();
    $templateEmail->table("template_email");
    $templateEmail->where([
        "instituicao_fk" => $institution_fk,
        "tipo" => $type_payment,
        "status_pagamento" => $status_payment,
    ]);
    $bodyPerson = $templateEmail->select();

    $subject = $action["payload"]["subject"] ?? $bodyPerson[0]["assunto"] ?? "Doar Digital";
    $my_content = $bodyPerson[0]["content"];

    $my_content = str_replace("\n","<br >", $my_content);
    $template = str_replace("{my_content}", $my_content, $template);
    unset($content["instituicao"]);
    $content["NOME"] = $content["nome"];
    $content["LINK"] = $content["type_payment"] == "PIX" ? $content["code"] : $content["url"];
    $blade = blade($content, $template);

    $Email = new SendInBlue();

    $response = $Email->send($nome, $email, $subject, $blade);
}

if ($action["tipo"] == "WHATS") {
    $zap = new Evendas();
    $tel = $action["payload"]["telefone"];
    $tel = preg_replace('/\D/', '', $tel);
    $nome = $action["payload"]["nome"] ?? "";
    $email = $action["payload"]["email"] ?? "";
    $telefone = substr($tel, 2, 9);
    $ddd = substr($tel, 0, 2);
    $valor = $action["payload"]["valor"] ?? "";
    $status_payment = $action["payload"]["status_payment"] ?? "";
    $type_payment = $action["payload"]["type_payment"] ?? "";
    $boleto_url = $action["payload"]["boleto_url"] ?? "";
    $url_pix = $action["payload"]["url_pix"] ?? "";
    $code_boleto = $action["payload"]["code_boleto"] ?? "";
    $logradouro = $action["payload"]["logradouro"] ?? "";
    $token = $action["payload"]["token"] ?? "";
    $external_id = $action["payload"]["external_id"] ?? "";
    $response = $zap->send(
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
    $response = json_decode($response);
}

echo json_encode([
    "next" => true,
    "message" => "Lista de agendamentos",
    "payload" => $action,
    "payload_mail" => $content ?? [],
    "response" => $response
]);
