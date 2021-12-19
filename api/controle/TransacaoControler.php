<?php

class TransacaoControler{
    
    static function primeira_parte_create_transacao()
    {
        $doacao = new Doacao();
        $adm = new Adm(); 
        $doador = new Doador();
        $instituicao = new Instituicao;
        $plano = new Plano();
        $endereco = new Endereco;


        // Token Adm
        $token_parce = token();
        
        // listagem adm
        $get_secret_adm = $token_parce['secret'];
        $secret = $adm->list_profile($get_secret_adm);
        $id = $secret['id']; 

        // Listagem instituicao
        $get_instituicao_id = $instituicao->list_all_by_adm_id($id);
        $instituicao_id = $get_instituicao_id['id'];
        
        

        // listagem doador
        //$cpf = cpf();
        $cpf = 13213213;
        $list_doador = $doador->get_by_cpf($cpf);
        $doador_id = $list_doador['id'];

        
        //$tipo = $_REQUEST['tipo'];
        
        // $email_notificacao = email();
        
        // Cadastro Doador
        // $nome = $_REQUEST['nome'];
        // $genero = $_REQUEST['genero'];
        // $telefone = telefone();
        // $cpf = "cpf()";
        // $email_doador = email();
        //Criar doador-> $doador->create();
         
        // Cadastro Endereco

        // $nome_identificacao = $_REQUEST['nome_identificacao'] ?? '';
        // $logradouro = $_REQUEST['logradouro'] ?? '';
        // $complemento = $_REQUEST['complemento'] ?? '';
        // $bairro = $_REQUEST['bairro'] ?? '';
        // $cidade = $_REQUEST['cidade'] ?? '';
        // $estado = $_REQUEST['estado'] ?? '';
        // $numero = $_REQUEST['numero'] ?? '';
        // $cep = cep();
        // $transform_numero = withdraw_caracter($numero);
        // Criar endereco-> $endereco-> create($id, $nome_identificacao, $cep, $logradouro, $transform_numero, $complemento, $bairro, $cidade, $estado);

        
        // Plano

        // $plano_id = id();
        $list_instituicao = $plano->list_all_by_instituicao($instituicao_id);
        // foreach($list_instituicao as $g){
        //     $payload [] = [
        //         'id' => $get_plano_id = $g['id'],
        //         'amount' => $get_plano_amount = $g['amount']
        //     ];
        // }
        
        // var_dump($get_plano_id, $get_plano_amount);
        // die;

        // Pagar-me
        $status_pagamento = "aguardando";
        
        

        
        $doacao->create($instituicao_id, $doador_id, '', $tipo = "mensal", $status_pagamento, $plano_id = 13, $valor = 1000);
        
        echo json_encode([
            'next' => true,
            'message' => 'Transacao'
        ]);
        

    }

    static function segunda_parte_create_transacao(){

    }
}