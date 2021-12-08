<?php

class CredencialControler
{

    static function start()
    {
        echo json_encode([
            "next" => false,
            "message" => "Você não tem permissão"
        ]);
    }

    static function create_credencial()
    {
        $credencial = new Credencial();
        $nome = $_REQUEST['nome'];
        $recursos = $_REQUEST['recursos'];
        $credencial->create($nome, $recursos);
        echo json_encode([
            'next' => true,
            'message' => 'Credencial criada'
        ]);
    }
    static function update_credencial()
    {
        $credencial = new Credencial();
        $id = $_REQUEST['id'];
        $nome = $_REQUEST['nome'];
        $recursos = $_REQUEST['recursos'];
        $credencial->update($id, $nome, $recursos);
        echo json_encode([
            'next' => true,
            'message' => 'Credencial atualizada'
        ]);
    }
    static function list_credencial()
    {
        echo json_encode([
            'next' => true,
            'message' => 'Credenciais',
            'dados' => [
                ["id" => 1, "nome_identificacao" => "Atendente", "recursos" => "doadores, doações, metas, emails, qrcode"],
                ["id" => 2, "nome_identificacao" => "Atendente 01", "recursos" => "início, doadores, doações, metas, emails, qrcode, configuração"],
                ["id" => 3, "nome_identificacao" => "Atendente 02", "recursos" => "Usuários, início, doadores, doações, metas, emails, qrcode, configuração"],
                ["id" => 4, "nome_identificacao" => "Atendente 03", "recursos" => "início, doadores, doações, metas"],
            ]
        ]);
    }
    static function credencial()
    {
        $credencial = new Credencial();
    }
    static function detete_credencial()
    {
        $credencial = new Credencial();
    }
}
