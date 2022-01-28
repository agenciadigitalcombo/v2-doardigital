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
        $endereco = new Endereco;

        token();

        $cpf_campo = $_REQUEST['cpf'];

        $cpf = cpf($cpf_campo);

        $list_doador = $doador->get_by_cpf($cpf);

        $get_doador_id = $list_doador['id'];

        $get_doacoes = $doacoes->list_all_by_doador($get_doador_id);


        $get_endereco = $endereco->list_all_by_fk($get_doador_id);

        $dados_endereco = 
        [
            'cep' => $get_endereco['cep'],
            'logadouro' => $get_endereco['logadouro'],
            'numero' => $get_endereco['numero'],
            'complemento' => $get_endereco['complemento'],
            'bairro' => $get_endereco['bairro'],
            'cidade' => $get_endereco['cidade'],
            'estado' => $get_endereco['estado']
        ];


        $all_doacoes = array_map(function($lis_dados){
            return [
                'instituicao_id' => $lis_dados['instituicao_id'],
                'tipo' => $lis_dados['tipo'],
                'recorrente' => $lis_dados['recorrente'],
                'status_pagamento' => $lis_dados['status_pagamento'],
                'plano_id' => $lis_dados['plano_id'],
                'valor' => $lis_dados['valor'],
                'data' => $lis_dados['data'],
                'hora' => $lis_dados['hora']
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
            'endereco' => $dados_endereco,
            'doacoes' => $all_doacoes

        ];

        echo json_encode([
            'next' => true,
            'message' => 'Doador',
            'dados' => $payload
        ]);

    }

    static function list_get_doador()
    {
        $doacoes = new Doacao();
        $doador = new Doador();
        $endereco = new Endereco;

        token();


        $doacao_id = $_REQUEST['doacao_id'];

        campo_obrigatorios([
            'doacao_id' => 'Campo doacao_id obrigatorio'
        ]);


        $list_doador = $doador->get_by_id($doacao_id);

        
        $get_endereco = $endereco->list_all_by_fk($doacao_id);

        $get_doacoes = $doacoes->get_doador($doacao_id);

        

        $dados_endereco = 
        [
            'cep' => $get_endereco['cep'],
            'logadouro' => $get_endereco['logadouro'],
            'numero' => $get_endereco['numero'],
            'complemento' => $get_endereco['complemento'],
            'bairro' => $get_endereco['bairro'],
            'cidade' => $get_endereco['cidade'],
            'estado' => $get_endereco['estado']
        ];


        $all_doacoes = 
        [
            'instituicao_id' => $get_doacoes['instituicao_id'],
            'tipo' => $get_doacoes['tipo'],
            'recorrente' => $get_doacoes['recorrente'],
            'status_pagamento' => $get_doacoes['status_pagamento'],
            'plano_id' => $get_doacoes['plano_id'],
            'valor' => $get_doacoes['valor'],
            'data' => $get_doacoes['data'],
            'hora' => $get_doacoes['hora']
        ];



        $payload = 
        [
            'id' => $list_doador['id'],
            'nome' => $list_doador['nome'],
            'email' => $list_doador['email'],
            'cpf' => $list_doador['cpf'],
            'telefone' => $list_doador['telefone'],
            'foto' => $list_doador['foto'],
            'data_nascimento' => $list_doador['data_nascimento'],
            'data_registro' => $list_doador['data_registro'],
            'endereco' => $dados_endereco,
            'doacao' => $all_doacoes

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