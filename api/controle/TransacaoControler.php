<?php

class TransacaoControler{
    
    static function primeira_parte_create_transacao()
    {
        header('Content-Type: text/html; charset=utf-8');
        $doacao = new Doacao();
        $adm = new Adm(); 
        $doador = new Doador();
        $instituicao = new Instituicao;
        $plano = new Plano();
        $endereco = new Endereco;

        

        $token_parce = token();

        $instituicao_id = $_REQUEST['instituicao_id'];
        $mensal = $_REQUEST['mensal'] ?? null;
        $planos_id = $_REQUEST['planos_id'] ?? null;
        $planos_valor = $_REQUEST['planos_valor'] ?? null;
        $email = $_REQUEST['email'];
        $nome = $_REQUEST['nome'] ?? null;
        $genero = $_REQUEST['genero'] ?? null;
        $cpf = cpf();
        $telefone = telefone();
        $cep = $_REQUEST['cep'];
        $numero = $_REQUEST['numero'] ?? null;
        $estado = $_REQUEST['estado'] ?? null;
        $endereco = $_REQUEST['endereco'] ?? null;
        $bairro = $_REQUEST['bairro'] ?? null;
        $cidade = $_REQUEST['cidade'] ?? null;
        $type_pagamento = $_REQUEST['type_pagamento'] ?? null;
        $cart_numero = $_REQUEST['cart_numero'] ?? null;
        $cart_cvv = $_REQUEST['cart_cvv'] ?? null;
        $cart_validade = $_REQUEST['cart_validade'] ?? null;
        $cart_nome = $_REQUEST['cart_nome'] ?? null;

        $is_doador = $doador->exist($cpf);
        if(!$is_doador){
            $doador->create($nome, $email, $telefone, $cpf, "", $genero, "", $instituicao_id, []);
        }

        $doador_dados = $doador->get_by_cpf($cpf);
        $doador_id = $doador_dados['id'];


        $endereco-> create($doador_id, "Endereco Doacao" , $cep, $endereco, $numero, "", $bairro, $cidade, $estado);

        $doacao->create($instituicao_id, $doador_id, '', $type_pagamento, "await", $planos_id, $planos_valor);


    
        echo json_encode([
            'next' => true,
            'message' => 'Transacao Concluida',
            'codigo' => null,
            'url' => null
        ]);
        

    }

    static function segunda_parte_create_transacao(){

    }
}