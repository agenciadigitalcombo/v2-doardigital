<?php

function get_template(string $status_pagamento): string
{
    $pathDefault = __DIR__ . "/template/DEFAULT.html";
    $path = __DIR__ . "/template/{$status_pagamento}.html";
    if (!file_exists($path)) {
        return file_get_contents($pathDefault);
    }
    return file_get_contents($path);
}

if( !function_exists('blade') ) {
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
}



function generateHtmlEmail($payload) {

    $status_payment = $payload["status_payment"];
    $template = get_template($status_payment);    

    $content = (array)$payload;

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

    $subject = $payload["subject"] ?? $bodyPerson[0]["assunto"] ?? "Doar Digital";
    $my_content = $bodyPerson[0]["content"] ?? '';

    if(strlen($my_content) < 20) {
        $filePath = __DIR__ . "/email/{$type_payment}/{$status_payment}.txt";
        $subject = file($filePath)[0] ?? "Doar Digital";
        $my_content = file_get_contents( $filePath );
    }

    $my_content = str_replace("\n","<br /> <br />", $my_content);
    $template = str_replace("{my_content}", $my_content, $template);

    unset($content["instituicao"]);
    $content["NOME"] = $content["nome"];
    $content["LINK"] = $content["type_payment"] == "PIX" ? $content["code"] : $content["url"];
    $blade = blade($content, $template);

    return [
        "assunto" => $subject,
        "html" => $blade
    ];

}