<?php

class InscritoControler
{

    static function start()
    {
        echo json_encode([
            "next" => false,
            "message" => "Você não tem permissão"
        ]);
    }

    static function create_inscrito()
    {
        $inscrito = new Inscrito();

        $instituicao_id = $_REQUEST['instituicao_id'];
        $nome = $_REQUEST['nome'];

        $campo_email = $_REQUEST['email'];
        $email = valid_email($campo_email);

        $telefone = $_REQUEST['telefone'];

        $transform_tel = withdraw_caracter($telefone);

        $inscrito->register($instituicao_id, $nome, $email, $transform_tel);

        echo json_encode([
            "next" => true,
            "message" => "Inscrito Criado ou Atualizado"
        ]);
    }

    static function list_inscrito()
    {
        $inscrito = new Inscrito();
        
        $guard = $inscrito->list_all();
        
        foreach ($guard as $g) {
            $payload[] = [
                'nome' => $g['nome'],
                'email' => $g['email'],
                'telefone' => $g['telefone']
            ];
        }

        echo json_encode([
            "next" => true,
            "message" => "Inscritos",
            'dados' => $payload
        ]);
    }

    static function inscrito()
    {
        $inscrito = new Inscrito();

        $instituicao_id = $_REQUEST['instituicao_id'];
        
        $guard = $inscrito->list_all_by_instituicao($instituicao_id);
        $payload = [
            'nome' => $guard['nome'],
            'email' => $guard['email'],
            'telefone' => $guard['telefone']
        ];

        echo json_encode([
            "next" => true,
            "message" => "Inscrito",
            'dados' => $payload
        ]);
    }

    static function detete_inscrito()
    {
        $inscrito = new Inscrito();

        $instituicao_id = $_REQUEST['instituicao_id'];
        
        $campo_email = $_REQUEST['email'];
        $email = valid_email($campo_email);
        
        $telefone = $_REQUEST['telefone'];
        $transform_tel = withdraw_caracter($telefone);

        $inscrito->del($instituicao_id, $email, $transform_tel);
        echo json_encode([
            "next" => true,
            "message" => "Inscrito deletado"
        ]);
    }
}