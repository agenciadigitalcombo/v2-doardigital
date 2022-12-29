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
            "fatura_id" => $pay_id
        ]);
        $fatura = $donation->select()[0] ?? [];

        if(!$fatura) {
            self::printError(
                "Fatura não existe",
                []
            );
        }

        $fatura = Fatura::porter($fatura); 
        
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
            "status_pagamento" => $fatura['status_pagamento'],
        ]);
        $mail = $email->select()[0] ?? [];
        $mail = EmailTemplate::porter($mail);

        $WhatsApp = new Banco();
        $WhatsApp->table('template_whats');
        $WhatsApp->where([
            "instituicao_fk" => $fatura['instituicao_fk'],
            "tipo" => $fatura['tipo_pagamento'],
            "status_pagamento" => $fatura['status_pagamento'],
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
            "LINK" => '//' . $inst['domain'] . "/pix/#/?code=" . $fatura['codigo'],
        ];

        foreach ($payload as $index => $cont) {
            if (is_array($cont)) {
                foreach ($cont as $k => $v) {
                    $payload["{$index}_{$k}"] = $v;
                }
            }
        }

        $blade_mail = $mail["content"];
        $blade_mail = str_replace("\n","<br /> <br />", $blade_mail);
        $template = str_replace("{my_content}", $blade_mail, $content);

        $blade = self::blade($payload , $template);
        $blade_whats = self::blade($payload , $whats["content"]);        

        if($preview) {
            header("Content-Type: text/html");
            echo $blade;
            die;
        }

        self::printSuccess(
            "Dados para email de recuperação",
            [
                "message" => [
                    "email" => base64_encode( $blade ),
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
                "LINK" => '//' . $inst['domain'] . "/api/pix/#/?code=" . $fatura['codigo'],

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
