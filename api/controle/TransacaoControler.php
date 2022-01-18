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
        $Endereco = new Endereco;
        $pagarme_Costumer = new PagarMeCostumer();
        
 
        $token_parce = token();

        $instituicao_id = $_REQUEST['instituicao_id'];
        $mensal = $_REQUEST['mensal'] ?? null;
        $planos_id = $_REQUEST['planos_id'] ?? null;
        $planos_valor = $_REQUEST['planos_valor'] ?? null;
        $email = $_REQUEST['email'];
        $nome = $_REQUEST['nome'] ?? null;
        $genero = $_REQUEST['genero'] ?? null;
        $cpf_campo = $_REQUEST['cpf'];
        $cpf = cpf($cpf_campo);
        $telefone_campo = $_REQUEST['telefone'];
        $telefone = withdraw_caracter($telefone_campo);
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
            $doador->create($nome, $email, $telefone, $cpf, "1234567890");
        }

        $type_valid = ['credit_card', 'boleto', 'pix']; 
        
        $doador_dados = $doador->get_by_cpf($cpf);
        $doador_id = $doador_dados['id'];

        if($doador_dados['token'] == null){
            $token_doador = $pagarme_Costumer->create($nome, $email, $doador_id, ['+55' . $telefone], $cpf);
            $get_token = $token_doador['id'];
            $doador->set_token($doador_id, $get_token);
            $doador_dados['token'] = $token_doador;
        }
              

        
        $Endereco->create($doador_id, "Endereco Doacao" , $cep, $endereco, $numero, "casa", $bairro, $cidade, $estado);
        
        $codigo = null;
        $url = null;

        if($type_pagamento == "pix"){
            $pagarme_pix = new PagarMePix();

            $res_pagarme = $pagarme_pix->pay($planos_valor, []);

            $codigo = $res_pagarme['pix_qr_code'];
            $url = $res_pagarme['pix_qr_code'];
            
        }
        
        

        $doacao->create($instituicao_id, $doador_id, '', $type_pagamento, "await", $planos_id, $planos_valor);
        echo json_encode([
            'next' => true,
            'message' => 'Transacao Concluida',
            'codigo' => $codigo,
            'url' => $url
        ]);
        

    }

    static function segunda_parte_create_transacao(){

    }
}