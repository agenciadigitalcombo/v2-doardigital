<?php

class DoadorControler{


    static function create_doador()
    {
        echo json_encode([
            'next' => true,
            'message' => 'Doador Criado'
        ]);
    }

    static function list_doador()
    {
        $doador = new Doador();
        
        token();

        $cpf = cpf();

        $list_doador = $doador->get_by_cpf($cpf);

        $payload = [
            'id' => $list_doador['id'],
            'nome' => $list_doador['nome'],
            'email' => $list_doador['email'],
            'cpf' => $list_doador['cpf'],
            'telefone' => $list_doador['telefone'],
            'foto' => $list_doador['foto'],
            'data_nascimento' => $list_doador['data_nascimento'],
            'data_registro' => $list_doador['data_registro']

        ];

        echo json_encode([
            'next' => true,
            'message' => 'Doador',
            'dados' => $payload
        ]);

    }

    static function doador()
    {
        $doador = new Doador();

        token();

        $dados = $doador->list_all();

        foreach($dados as $g){
            $payload [] = [
                'id' => $g['id'],
                'nome' => $g['nome'],
                'email' => $g['email'],
                'cpf' => $g['cpf'],
                'telefone' => $g['telefone'],
                'foto' => $g['foto'],
                'data_nascimento' => $g['data_nascimento'],
                'data_registro' => $g['data_registro']
            ];
            
        }   
        echo json_encode([
            'next' => true,
            'message' => 'Lista de Doadores',
            'dados' => $payload
        ]);

    }
}