<?php

class ApiZapControle extends Controle
{
    static function start()
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

}