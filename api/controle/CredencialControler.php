<?php

class CredencialControler extends Controle
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
            "nome" => "Informe seu nome",
            "recursos" => "Informe os recursos",
        ]);
        self::privateRouter();
        $credencial = new Credencial();
        $nome = $_REQUEST['nome'];
        $recursos = $_REQUEST['recursos'];
        $credencial->register($nome, $recursos);
        self::printSuccess(
            "Registrado com sucesso",
            []
        );
    }

    static function update()
    {
        self::requireInputs([
            "token" => "informe um token",
            "id" => "Informe um id",
            "nome" => "Informe seu nome",
            "recursos" => "Informe os recursos",
        ]);
        self::privateRouter();
        $credencial = new Credencial();
        $nome = $_REQUEST['nome'];
        $recursos = $_REQUEST['recursos'];
        $id = $_REQUEST['id'];
        $credencial->update($id, $nome, $recursos);
        self::printSuccess(
            "Atualizado com sucesso",
            []
        );
    }

    static function list()
    {
        self::requireInputs([
            "token" => "informe um token"
        ]);
        self::privateRouter();
        $credencial = new Credencial();
        self::printSuccess(
            "Lista de credenciais",
            $credencial->listAll()
        );
    }

    static function info()
    {
        self::requireInputs([
            "token" => "informe um token",
            "id" => "Informe um id"
        ]);
        self::privateRouter();
        $credencial = new Credencial();
        $id = $_REQUEST['id'];
        self::printSuccess(
            "Atualizado com sucesso",
            $credencial->getById($id)
        );
    }

    static function del()
    {
        self::requireInputs([
            "token" => "informe um token",
            "id" => "Informe um id",
        ]);
        self::privateRouter();
        $credencial = new Credencial();
        $id = $_REQUEST['id'];
        $credencial->del($id);
        self::printSuccess(
            "Apagado com sucesso",
            []
        );
    }
}
