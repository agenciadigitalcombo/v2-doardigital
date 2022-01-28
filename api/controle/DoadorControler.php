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
        $doacoes = new Doacao();
        $doador = new Doador();
        
        token();

        $cpf_campo = $_REQUEST['cpf'];

        $cpf = cpf($cpf_campo);

        $list_doador = $doador->get_by_cpf($cpf);

        $get_doador_id = $list_doador['id'];

        $get_doacoes = $doacoes->list_all_by_doador($get_doador_id);

        $all_doacoes = array_map(function($lis_dados){
            return [
                'instituicao_id' => $lis_dados['instituicao_id'],
                'tipo' => $lis_dados['tipo'],
                'status_pagamento' => $lis_dados['status_pagamento'],
                'plano_id' => $lis_dados['plano_id'],
                'valor' => $lis_dados['valor'],
                'data' => $lis_dados['data']
            ];
        },$get_doacoes);



        $payload = [
            'id' => $list_doador['id'],
            'nome' => $list_doador['nome'],
            'email' => $list_doador['email'],
            'cpf' => $list_doador['cpf'],
            'telefone' => $list_doador['telefone'],
            'foto' => $list_doador['foto'],
            'data_nascimento' => $list_doador['data_nascimento'],
            'data_registro' => $list_doador['data_registro'],
            'doacoes' => $all_doacoes

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

    // static function list_doacoes_by_doador(){
    //     $doacoes = new Doacao();
    //     $doador = new Doador();
        

    //     $cpf_campo = $_REQUEST['cpf'];

    //     $cpf = valid_cpf_cnpj($cpf_campo);

    //     $list_doador = $doador->get_by_cpf($cpf);

    //     $get_doador_id = $list_doador['id'];

    //     $get_doacoes = $doacoes->list_all_by_doador($get_doador_id);

        

    //     echo json_encode([
    //         'next' => true,
    //         'message' => 'Doador',
    //         'dados' => $payload
    //     ]);

        
    // }

}