<?php

class CredencialControler{
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
        $credencial = new Credencial();
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