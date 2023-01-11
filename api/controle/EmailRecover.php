<?php

class EmailRecover  extends Controle
{
    static function start()
    {
        self::requireInputs([
            "pay_id" => "Informe o identificador de doação",
        ]);
        $pay_id = $_REQUEST["pay_id"];
        $preview = isset($_REQUEST["preview"]);
        $content = file_get_contents(__DIR__ . "/../template/DEFAULT.html");




        $donation = new Banco();
        $donation->table('fatura');
        $donation->where([
            "fatura_id" => $pay_id,
        ]);
        $fatura = $donation->select()[0] ?? [];

        if (!$fatura) {
            self::printError(
                "Fatura não existe",
                []
            );
        }

        $fatura = Fatura::porter($fatura);

        $sufixo = '';
        $dataFatura = strtotime($fatura['dataCreated']);
        $hoje = time();
        $intervalo = intval(($hoje - $dataFatura) / 86400);

        if ($fatura['status_pagamento'] == 'PENDING' || $fatura['status_pagamento'] == 'OVERDUE') {
            if ($intervalo == 3) {
                $sufixo = "_3_DAY";
            }
           
            if ($intervalo == 12) {
                $sufixo = "_5_DAY";
            }
        }

        $institution = new Banco();
        $institution->table('institution');
        $institution->where([
            "institution_fk" => $fatura['instituicao_fk']
        ]);
        $inst = $institution->select()[0] ?? [];
        $inst = Instituicao::porter($inst);

        $doador = new Banco();
        $doador->table('doador');
        $doador->where([
            "external_fk" => $fatura['doador_fk']
        ]);
        $do = $doador->select()[0] ?? [];
        $do = Doador::porter($do);


        $email = new Banco();
        $email->table('template_email');
        $email->where([
            "instituicao_fk" => $fatura['instituicao_fk'],
            "tipo" => $fatura['tipo_pagamento'],
            "status_pagamento" => $fatura['status_pagamento'] . $sufixo,
        ]);
        $mail = $email->select()[0] ?? [];
        $mail = EmailTemplate::porter($mail);

        $WhatsApp = new Banco();
        $WhatsApp->table('template_whats');
        $WhatsApp->where([
            "instituicao_fk" => $fatura['instituicao_fk'],
            "tipo" => $fatura['tipo_pagamento'],
            "status_pagamento" => $fatura['status_pagamento'] . $sufixo,
        ]);
        $whats = $WhatsApp->select()[0] ?? [];
        $whats = MessagesWhats::porter($whats);

        $payload = [
            "message" => [
                "email" => "",
                "whats" => ""
            ],
            "template" => [
                "html" => base64_encode($content),
                "email" => $mail,
                "whats" => $whats,
            ],
            "whats" => "Isso é um teste",
            "preview" => $preview,
            "fatura" => $fatura,
            "NOME" => $fatura["doador_nome"],
            "instituicao" => $inst,
            "doador" => $do,
            "CODE" => $fatura['codigo'],
            "LINK" => '//' . $inst['domain'] . "/pix/#/?code=" . $fatura['codigo'],
            "STYLE_BTN" => 'style="border-radius: 20px; background-color: green; color: #FFF; display:block; width: 200px; margin: 0 auto; padding: 10px 20px; text-align: center; text-decoration: none;"'
        ];

        if( $fatura['tipo_pagamento'] == "BOLETO") {
            $payload["LINK"] =  $fatura['url'];
        }

        

        foreach ($payload as $index => $cont) {
            if (is_array($cont)) {
                foreach ($cont as $k => $v) {
                    $payload["{$index}_{$k}"] = $v;
                }
            }
        }

        $blade_mail = $mail["content"];
        $blade_mail = str_replace("\n", "<br />", $blade_mail);
        $template = str_replace("{my_content}", $blade_mail, $content);

        $blade = self::blade($payload, $template);
        $blade_whats = self::blade($payload, $whats["content"]);

        $message_arn = new Banco();
        $message_arn->table('message_aws');
        $message_arn->where([
            "fatura_fk" => $pay_id,
        ]);
        $select_arn = $message_arn->select()[0] ?? [];
        $arn = $select_arn["execution_arn"] ?? 'arn_fail';

        if ($preview) {
            header("Content-Type: text/html");
            echo $blade;
            die;
        }

        self::printSuccess(
            "Dados para email de recuperação",
            [
                "intervalo" => $intervalo,
                "status_temp" => $fatura['status_pagamento'] . $sufixo,
                "message" => [
                    "email" => base64_encode($blade),
                    "whats" => $blade_whats
                ],
                "template" => [
                    "html" => base64_encode($content),
                    "email" => $mail,
                    "whats" => $whats,
                ],
                "whats" => "Isso é um teste",
                "preview" => $preview,
                "fatura" => $fatura,
                "institution" => $inst,
                "doador" => $do,
                "LINK" => '//' . $inst['domain'] . "/pix/#/?code=" . $fatura['codigo'],
                'arn' => $arn
            ]
        );
    }

    static function blade(array $payload, string $template)
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
