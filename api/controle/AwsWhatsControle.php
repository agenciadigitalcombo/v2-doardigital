<?php

class AwsWhatsControle extends Controle
{
    static function start()
    {
        self::printError(
            "Você não tem permissão",
            []
        );
    }

    static function create()
    {
        self::requireInputs([
            "token" => "informe um token",
        ]);
        self::privateRouter();
        $token = $_REQUEST['token'];
        $code_name_session = Jwt::ler($token)['code'];

        $path = "https://zap.digitalcombo.com.br/api/{$code_name_session}/THISISMYSECURETOKEN/generate-token";

        $aws = new Aws();

        $resCreate = (array) $aws->post(
            $path,
            []
        );
        $tokenWhats = $resCreate['token'];
        $inter =  new Integration();
        $inter->save(
            $code_name_session,
            "CANAL_WHATS",
            $tokenWhats
        );

        self::printSuccess(
            "Registrado com sucesso",
            [
                "session" => $code_name_session,
                "token" => $tokenWhats
            ]
        );
    }

    static function connect()
    {
        self::requireInputs([
            "token" => "informe um token",
        ]);
        self::privateRouter();
        $token = $_REQUEST['token'];
        $code_name_session = Jwt::ler($token)['code'];

        $path = "https://zap.digitalcombo.com.br/api/{$code_name_session}/start-session";

        $aws = new Aws();
        $inter =  new Integration();

        $tokenWhats = $inter->info($code_name_session, "CANAL_WHATS")['key_1'];

        $resConnect = (array) $aws->post(
            $path,
            [],
            ["Authorization: Bearer {$tokenWhats}"]
        );

        self::printSuccess(
            "Conexão realizada com sucesso",
            $resConnect
        );
    }

    static function status()
    {
        self::requireInputs([
            "token" => "informe um token",
        ]);
        self::privateRouter();
        $token = $_REQUEST['token'];
        $code_name_session = Jwt::ler($token)['code'];

        $path = "https://zap.digitalcombo.com.br/api/{$code_name_session}/status-session";

        $aws = new Aws();
        $inter =  new Integration();

        $tokenWhats = $inter->info($code_name_session, "CANAL_WHATS")['key_1'];

        $resStatus = (array) $aws->post(
            $path,
            [],
            ["Authorization: Bearer {$tokenWhats}"]
        );

        self::printSuccess(
            "Status de conexão",
            [
                "link" => $path,
                "res" => $resStatus
            ]
        );
    }
}
