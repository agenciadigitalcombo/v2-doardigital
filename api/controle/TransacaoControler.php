<?php

use function PHPSTORM_META\type;

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
        
        if($type_pagamento == "pix"){
            $pagarme_pix = new PagarMePix();
            
            $res_pagarme = $pagarme_pix->pay($planos_valor);
            
            $get_token = $res_pagarme['id'];
            $get_status = $res_pagarme['status'];
            $codigo = $res_pagarme['pix_qr_code'];
            $url = $res_pagarme['pix_qr_code'];
            
            
        }


        if($type_pagamento == "boleto"){
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

    static function segunda_parte_create_transacao(){

    }
}