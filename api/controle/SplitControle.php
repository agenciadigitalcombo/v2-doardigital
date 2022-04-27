<?php

class SplitControle extends Controle
{
    static function start()
    {
        self::printError(
            "Você não tem permissão",
            []
        );
    }

    static function register()
    {
        self::requireInputs([
            "token" => "informe um token",
            "fk" => "Informe uma identificação de instituição",
            "code" => "Informe o code de carteira",
            "porcentagem" => "Informe uma porcentagem em numero inteiro",
        ]);
        self::privateRouter();
        $fk = $_REQUEST['fk'];
        $code = $_REQUEST['code'];
        $porcentagem = (int) $_REQUEST['porcentagem'] ?? 1;
        $split = new Split();
        $split->register(
            $fk,
            $code,
            $porcentagem
        );
        self::printSuccess(
            "Registrado com sucesso",
            []
        );
    }

    static function update()
    {
        self::requireInputs([
            "token" => "informe um token",
            "id" => "Informe uma ID",
            "fk" => "Informe uma identificação de instituição",
            "code" => "Informe o code de carteira",
            "porcentagem" => "Informe uma porcentagem em numero inteiro",
        ]);
        self::privateRouter();
        $id = (int) $_REQUEST['id'] ?? 0;
        $fk = $_REQUEST['fk'];
        $code = $_REQUEST['code'];
        $porcentagem = (int) $_REQUEST['porcentagem'] ?? 1;
        $split = new Split();
        $split->update(
            $id ,
            $fk,
            $code,
            $porcentagem
        );
        self::printSuccess(
            "Atualizado com sucesso",
            []
        );
    }

    static function del()
    {
        self::requireInputs([
            "token" => "informe um token",
            "id" => "Informe uma ID",
        ]);
        self::privateRouter();
        $id = (int) $_REQUEST['id'] ?? 0;
        $split = new Split();
        $split->del( $id );
        self::printSuccess(
            "Apagado com sucesso",
            []
        );
    }

    static function list()
    {
        self::requireInputs([
            "token" => "informe um token",
            "fk" => "Informe uma identificação de instituição",
        ]);
        self::privateRouter();
        $fk = $_REQUEST['fk'];
        $split = new Split();
        self::printSuccess(
            "Lista de divisão de pagamento",
            $split->listAll( $fk )
        );
    }
    
    static function info()
    {
        self::requireInputs([
            "token" => "informe um token",
            "id" => "Informe uma ID",
        ]);
        self::privateRouter();
        $id = (int) $_REQUEST['id'] ?? 0;
        $split = new Split();
        self::printSuccess(
            "Informações de divisão de pagamento",
            $split->info( $id )
        );
    }
}
