<?php

class ApiZapControle extends Controle
{
    static function init()
    {
        self::printError(
            "Você não tem permissão",
            []
        );
    }

    static function generate()
    {
        self::requireInputs([
            "nome" => "Informe um nome",
        ]);
        $nome = $_REQUEST['nome'];
        $api = new ApiZap();
        $response = $api->generate($nome);
        self::printSuccess(
            "Você não tem permissão",
            $response
        );
    }
    
    static function start()
    {
        self::requireInputs([
            "nome" => "Informe um nome",
            "token" => "Informe um token",
        ]);
        $nome = $_REQUEST['nome'];
        $token = $_REQUEST['token'];
        $api = new ApiZap();
        $api->setToken($token);
        $response = $api->start($nome);
        self::printSuccess(
            "Você não tem permissão",
            $response
        );
    }

}