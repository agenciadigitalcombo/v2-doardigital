<?php

use function PHPSTORM_META\type;

class TransacaoControler{
    
    static function create_transacao()
    {
        header('Content-Type: text/html; charset=utf-8');
        $doacao = new Doacao();
        $doador = new Doador();
        $Endereco = new Endereco;
        $pagarme_Costumer = new PagarMeCostumer();
        $pagarme_plano = new PagarmePlano();
        
       

        $instituicao_id = $_REQUEST['instituicao_id'];

        $planos_id = $_REQUEST['planos_id'];
        $planos_nome = $_REQUEST['planos_nome'];
        $planos_valor = $_REQUEST['planos_valor'];

        $mensal = $_REQUEST['mensal'] ?? null;
        
        $nome = $_REQUEST['nome'];
        // $genero = $_REQUEST['genero'];
        
        $cpf_campo = $_REQUEST['cpf'];
        $telefone_campo = $_REQUEST['telefone'];
        $email_campo = $_REQUEST['email'];
        $data_nascimento_campo = $_REQUEST['data_nascimento'];
        $cep_campo = $_REQUEST['cep'];

        $email = valid_email($email_campo);
        $telefone = valid_telefone($telefone_campo);
        $phone_ddd = telefone_get_ddd($telefone);
        $cpf = valid_cpf_cnpj($cpf_campo);
        $data_nascimento = data_format($data_nascimento_campo);

        
        $cep = withdraw_caracter($cep_campo);
        $numero = $_REQUEST['numero'];
        $estado = $_REQUEST['estado'];
        $endereco = $_REQUEST['endereco'];
        $bairro = $_REQUEST['bairro'];
        $cidade = $_REQUEST['cidade'];

        $type_pagamento = $_REQUEST['type_pagamento'];

        $cart_numero = $_REQUEST['cart_numero'];
        $cart_cvv = $_REQUEST['cart_cvv'];
        $cart_validade_campo = $_REQUEST['cart_validade'];
        $cart_validade = withdraw_caracter($cart_validade_campo);
        
        
        
        campo_obrigatorios([
            'planos_valor' => 'Campo planos_valor opbrigatorio',
            'type_pagamento' => 'Campo type_pagamento opbrigatorio',
            'nome' => 'Campo nome opbrigatorio',
            'email' => 'Campo email opbrigatorio',
            'cpf' => 'Campo cpf opbrigatorio',
            'telefone' => 'Campo telefone opbrigatorio',
            'estado' => 'Campo estado opbrigatorio',
            'cidade' => 'Campo cidade opbrigatorio',
            'bairro' => 'Campo bairro opbrigatorio',
            'endereco' => 'Campo endereco opbrigatorio',
            'numero' => 'Campo numero opbrigatorio',
            'cep' => 'Campo cep opbrigatorio',
        ]);


        if(!$doacao->valid_type_pagamento($type_pagamento)){
            echo json_encode([
                'next' => false,
                'message' => 'Tipo pagamento invalido'
            ]);
            return null;
        }
        
        $is_doador = $doador->exist($cpf);
        if(!$is_doador){
            $doador->create($nome, $email, $telefone, $cpf, "1234567890");
        }
        
        
        $doador_dados = $doador->get_by_cpf($cpf);
        $doador_id = $doador_dados['id'];
        
        if($doador_dados['token'] == null){
            $token_doador = $pagarme_Costumer->create($nome, $email, $doador_id, ['+55' . $telefone], $cpf);
            $get_token_doador = $token_doador['id'];
            $doador->set_token($doador_id, $get_token_doador);
            $doador_dados['token'] = $token_doador;
        }
        
        
        $res_plano = $pagarme_plano->create($nome, $planos_valor);
        $plano_token = $res_plano['id'];
        
        $Endereco->create($doador_id, "Endereco Doacao" , $cep, $endereco, $numero, "casa", $bairro, $cidade, $estado);
        
        $codigo = null;
        $url = null;
        
        
        
        $doador_dados = $doador->get_by_cpf($cpf);
        $get_token = $doador_dados['token'];
        
        
        if($mensal == 1 and $type_pagamento == "credit_card"){
            
            $pagarme_cartao = new PagarMeCartao();
            $res_pagarme_cartao = $pagarme_cartao->create_cartao($cart_numero, $cart_cvv, $cart_validade, $nome);
            $get_id_cartao = $res_pagarme_cartao['id'];
            $res_pagarme_recorrencia = $pagarme_cartao->create_recorrencia($plano_token, $get_id_cartao, $bairro, $endereco, $numero, $cep, $cpf, $email, $nome, substr($telefone, 2, 10), $phone_ddd, $type_pagamento);
            $get_status = $res_pagarme_recorrencia['status'];
            $codigo = "";
            $url = "";
        }

        if($mensal == 1 and $type_pagamento == "boleto"){
            
            $pagarme_cartao = new PagarMeBoleto();
            $res_pagarme_recorrencia = $pagarme_cartao->create_recorrencia_boleto($plano_token, $bairro, $endereco, $numero, $cep, $cpf, $email, $nome, substr($telefone, 2, 10), $phone_ddd, $type_pagamento);
            $get_status = $res_pagarme_recorrencia['current_transaction'] ['status'];
            $codigo = $res_pagarme_recorrencia['current_transaction'] ['boleto_barcode'];
            $url = $res_pagarme_recorrencia['current_transaction'] ['boleto_url'];
        }


        if($type_pagamento == "credit_card" and $mensal == 0){

            campo_obrigatorios([
                'cart_numero' => 'Campo cart_numero Obrigatorio',
                'cart_cvv' => 'Campo cart_cvv Obrigatorio',
                'cart_validade' => 'Campo cart_validade Obrigatorio',
                'planos_valor' => 'Campo planos_valor Obrigatorio',
            ]);

            $pagarme_cartao = new PagarMeCartao();
            
            $res_pagarme = $pagarme_cartao->create($planos_valor, $type_pagamento, $cart_numero, $cart_cvv, $cart_validade, $nome, $get_token, $nome, $email, $cpf, ['+55' . $telefone], $data_nascimento, $estado, $cidade, $bairro, $endereco, $numero, $cep, $plano_token, $planos_nome);
            $get_token = $res_pagarme['id'];

            $codigo = "";
            $url = "";
            
        }
    
        
        if($type_pagamento == "pix"){

            campo_obrigatorios([
                'planos_valor' => 'Campo planos_valor opbrigatorio',
            ]);

            $pagarme_pix = new PagarMePix();
            
            $res_pagarme = $pagarme_pix->pay($planos_valor);
            
            $get_token = $res_pagarme['id'];
            $get_status = $res_pagarme['status'];
            $codigo = $res_pagarme['pix_qr_code'];
            $url = $res_pagarme['pix_qr_code'];
            
            
        }


        if($type_pagamento == "boleto"){

            campo_obrigatorios([
                'planos_valor' => 'Campo planos_valor opbrigatorio',
                'data_nascimento' => 'Campo data_nascimento opbrigatorio',
                'planos_nome' => 'Campo planos_nome opbrigatorio'
            ]);

            $pagarme_boleto = new PagarMeBoleto();
             
            $res_pagarme = $pagarme_boleto->create($planos_valor, $type_pagamento, $get_token, $nome, $email, $cpf, ['+55' . $telefone], $data_nascimento, $estado, $cidade, $bairro, $endereco, $numero, $cep, $plano_token, $planos_nome);
            $get_token = $res_pagarme['id'];
            $get_status = $res_pagarme['status'];
            $codigo = $res_pagarme['boleto_barcode'];
            $url = $res_pagarme['boleto_url'];
            
            
            
        }
        
        
        $doacao->create($instituicao_id, $doador_id, $get_token, $type_pagamento, $get_status, $planos_id, $planos_valor, $codigo, $url);
        
        echo json_encode([
            'next' => true,
            'message' => 'Transacao Concluida',
            'codigo' => $codigo,
            'url' => $url
        ]);
        

    }

    static function create_recorrencias(){
        $doacao = new Doacao();
        $adm = new Adm(); 
        $doador = new Doador();
        $instituicao = new Instituicao;
        $plano = new Plano();
        $Endereco = new Endereco;
        $pagarme_Costumer = new PagarMeCostumer();
        $pagarme_plano = new PagarmePlano();
 
       

        $instituicao_id = $_REQUEST['instituicao_id'] ?? null;

        $planos_id = $_REQUEST['planos_id'];
        $planos_nome = $_REQUEST['planos_nome'] ?? null;
        $planos_valor = $_REQUEST['planos_valor'] ?? null;

        $mensal = $_REQUEST['mensal'] ?? null;
        
        $nome = $_REQUEST['nome'] ?? null;
        $genero = $_REQUEST['genero'] ?? null;
        
        $cpf_campo = $_REQUEST['cpf'];
        $telefone_campo = $_REQUEST['telefone'];
        $email_campo = $_REQUEST['email'];
        $data_nascimento_campo = $_REQUEST['data_nascimento'];

        $email = valid_email($email_campo);
        $telefone = withdraw_caracter($telefone_campo);
        $cpf = valid_cpf_cnpj($cpf_campo);
        $data_nascimento = data_format($data_nascimento_campo);
        $cep_campo = $_REQUEST['cep'];

        
        $cep = withdraw_caracter($cep_campo);
        $numero = $_REQUEST['numero'];
        $estado = $_REQUEST['estado'];
        $endereco = $_REQUEST['endereco'];
        $bairro = $_REQUEST['bairro'];
        $cidade = $_REQUEST['cidade'];

        $type_pagamento = $_REQUEST['type_pagamento'];

        $cart_numero = $_REQUEST['cart_numero'];
        $cart_cvv = $_REQUEST['cart_cvv'];
        $cart_validade_campo = $_REQUEST['cart_validade'];
        $cart_validade = withdraw_caracter($cart_validade_campo);
        
        
        
        campo_obrigatorios([
            'planos_valor' => 'Campo planos_valor opbrigatorio',
            'type_pagamento' => 'Campo type_pagamento opbrigatorio',
            'nome' => 'Campo nome opbrigatorio',
            'email' => 'Campo email opbrigatorio',
            'cpf' => 'Campo cpf opbrigatorio',
            'telefone' => 'Campo telefone opbrigatorio',
            'estado' => 'Campo estado opbrigatorio',
            'cidade' => 'Campo cidade opbrigatorio',
            'bairro' => 'Campo bairro opbrigatorio',
            'endereco' => 'Campo endereco opbrigatorio',
            'numero' => 'Campo numero opbrigatorio',
            'cep' => 'Campo cep opbrigatorio',
        ]);


        if(!$doacao->valid_type_pagamento($type_pagamento)){
            echo json_encode([
                'next' => false,
                'message' => 'Tipo pagamento invalido'
            ]);
            return null;
        }
        
        $is_doador = $doador->exist($cpf);
        if(!$is_doador){
            $doador->create($nome, $email, $telefone, $cpf, "1234567890");
        }
        
        
        $doador_dados = $doador->get_by_cpf($cpf);
        $doador_id = $doador_dados['id'];
        
        if($doador_dados['token'] == null){
            $token_doador = $pagarme_Costumer->create($nome, $email, $doador_id, ['+55' . $telefone], $cpf);
            $get_token_doador = $token_doador['id'];
            $doador->set_token($doador_id, $get_token_doador);
            $doador_dados['token'] = $token_doador;
        }
        
        
        $res_plano = $pagarme_plano->create($nome, $planos_valor);
        $plano_token = $res_plano['id'];
        
        $Endereco->create($doador_id, "Endereco Doacao" , $cep, $endereco, $numero, "casa", $bairro, $cidade, $estado);
        
        $codigo = null;
        $url = null;
        
        
        
        $doador_dados = $doador->get_by_cpf($cpf);
        $get_token = $doador_dados['token'];
        

        if($type_pagamento == "credit_card"){

            campo_obrigatorios([
                'cart_numero' => 'Campo cart_numero Obrigatorio',
                'cart_cvv' => 'Campo cart_cvv Obrigatorio',
                'cart_validade' => 'Campo cart_validade Obrigatorio',
                'planos_valor' => 'Campo planos_valor Obrigatorio',
            ]);

            $pagarme_cartao = new PagarMeCartao();
            
            // $res_pagarme = $pagarme_cartao->create_recorrencia($plano_token, $type_pagamento, $cart_id, $nome, $get_token, $nome, $email, $cpf, ['+55' . $telefone], $data_nascimento, $estado, $cidade, $bairro, $endereco, $numero, $cep, $plano_token, $planos_nome);
            
            // $get_token = $res_pagarme['id'];
            // $get_status = $res_pagarme['status'];
            // $codigo = "";
            // $url = "";
            // var_dump($res_pagarme);
            
        }


        if($type_pagamento == "boleto"){

            campo_obrigatorios([
                'planos_valor' => 'Campo planos_valor opbrigatorio',
                'data_nascimento' => 'Campo data_nascimento opbrigatorio',
                'planos_nome' => 'Campo planos_nome opbrigatorio'
            ]);

            $pagarme_boleto = new PagarMeBoleto();
             
            $res_pagarme = $pagarme_boleto->create($planos_valor, $type_pagamento, $get_token, $nome, $email, $cpf, ['+55' . $telefone], $data_nascimento, $estado, $cidade, $bairro, $endereco, $numero, $cep, $plano_token, $planos_nome);
            $get_token = $res_pagarme['id'];
            $get_status = $res_pagarme['status'];
            $codigo = $res_pagarme['boleto_barcode'];
            $url = $res_pagarme['boleto_url'];
            
            
            
        }
        
        
        // $doacao->create($instituicao_id, $doador_id, $get_token, $type_pagamento, $get_status, $planos_id, $planos_valor, $codigo, $url);
        
        echo json_encode([
            'next' => true,
            'message' => 'Transacao Concluida',
            'codigo' => $codigo,
            'url' => $url
        ]);
    }
}