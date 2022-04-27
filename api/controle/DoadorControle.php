<?php

class DoadorControle extends Controle
{
    static function start()
    {
        self::printError(
            "Você não tem permissão",
            []
        );
    }

    static function list()
    {
        self::requireInputs([
            "token" => "informe um token",
            "instituicao_fk" => "informe uma identificação de instituição",
        ]);
        self::privateRouter();
        $instituicao_fk = $_REQUEST['instituicao_fk'];
        $doador = new Doador();
        self::printSuccess(
            "Lista de doadores",
            $doador->listAll($instituicao_fk)
        );
    }

    static function info()
    {
        self::requireInputs([
            "token" => "informe um token",
            "instituicao_fk" => "Informe uma identificação de instituição",
            "cpf" => "Informe o CPF"
        ]);
        self::privateRouter();
        $instituicao_fk = $_REQUEST['instituicao_fk'];
        $cpf = $_REQUEST['cpf'];
        $doador = new Doador();
        self::printSuccess(
            "Informação doador",
            $doador->info($cpf, $instituicao_fk)
        );
    }
}
