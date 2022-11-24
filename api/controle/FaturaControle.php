<?php

class FaturaControle extends Controle
{
    static function start()
    {
        self::printError(
            "Você não tem permissão",
            []
        );
        // self::privateRouter();
    }

    static function contator() {

        @$token = $_REQUEST['token'] ?? null;

        $maxTentativas = 5;
        $ip = $_SERVER['REMOTE_ADDR'];

        $contador = new Banco();
        $contador->table('contador_ip');
        $contador->where([
            "ip" => $ip
        ]);
        @$total = $contador->select()[0]['total'] ?? 0;
        if($total) {
            $total = intval($total) + 1;
            $contador->where([
                "ip" => $ip
            ]);
            $contador->update([
                "total" => $total
            ]);
        } else {
            $contador->insert([
                "ip" => $ip,
                "total" => 1
            ]);
        }        
        if( $total > $maxTentativas ) {
            if($token) {
                self::privateRouter();
            }else {
                self::printError(
                    "Você atingiu o máximo de tentativas",
                    []
                );
            }
        }
    }

    static function register()
    {

        self::requireInputs([
            "instituicao_fk" => "Informe a referencia da instituição",
            "nome" => "Informe seu nome",
            "cpf" => "informe CPF",
            "telefone" => "Informe seu telefone",
            "email" => "Informe seu email",
            "cep" => "Informe seu CEP",
            "logadouro" => "Informe seu Logadouro",
            "numero" => "Informe o numero do Logadouro",
            "bairro" => "INforme seu bairro",
            "cidade" => "Informe sua cidade",
            "estado" => "Informe seu estado",
            "valor" => "Informe o valor",
            "tipo_pagamento" => "Informe um tipo de pagamento",
        ]);
       
        self::contator();

        $instituicao_fk = $_REQUEST['instituicao_fk'] ?? "";
        $nome = $_REQUEST['nome'] ?? "";
        $cpf = $_REQUEST['cpf'] ?? "";
        $sexo = $_REQUEST['sexo'] ?? "";
        $telefone = $_REQUEST['telefone'] ?? "";
        $email = $_REQUEST['email'] ?? "";
        $cep = $_REQUEST['cep'] ?? "";
        $logadouro = $_REQUEST['logadouro'] ?? "";
        $complemento = $_REQUEST['complemento'] ?? "";
        $numero = $_REQUEST['numero'] ?? "";
        $bairro = $_REQUEST['bairro'] ?? "";
        $cidade = $_REQUEST['cidade'] ?? "";
        $estado = $_REQUEST['estado'] ?? "";
        $valor = (float) $_REQUEST['valor'] ? $_REQUEST['valor'] : 0;
        $recorrente = (int) $_REQUEST['recorrente'] ?? 0;
        $tipo_pagamento = $_REQUEST['tipo_pagamento'] ?? "";
        $card_nome = $_REQUEST['card_nome'] ?? "";
        $card_numero = $_REQUEST['card_numero'] ?? "";
        $card_validade = $_REQUEST['card_validade'] ?? "";
        $card_cvv = $_REQUEST['card_cvv'] ?? "";
        $nascimento = "";

        $client = new Doador();
        $clientAsa = new AsaasCliente();
        $address = new Endereco();
        $fatura = new Fatura();
        $institution = new Instituicao();
        $Pay = new AsaasPay();
        $split = new Split();
        $env = require __DIR__ . "/../config.php";

        $code = null;
        $url = null;
        $debug = null;

        $carteira_fk = $institution->get_key($instituicao_fk);

        if (empty($carteira_fk)) {
            self::printError(
                "Instituição não possui uma código de carteira",
                []
            );
        }

        $clientAsa->set_api_key($carteira_fk);
        $Pay->set_api_key($carteira_fk);

        $exist = $client->exist($cpf, $instituicao_fk);
        if (!$exist) {
            $external_fk = $client->maker_external_fk();
            $resClienteAsa = $clientAsa->create(
                $external_fk,
                $nome,
                $email,
                $telefone,
                $cpf,
                $cep,
                $logadouro,
                $numero,
                $complemento,
                $bairro
            );
            $pagamento_fk = $resClienteAsa['id'] ?? "cus_error";
            if (!empty($resClienteAsa["errors"])) {
                self::printError(
                    $resClienteAsa["errors"][0]["description"],
                    $resClienteAsa
                );
            }
            $client->register(
                $instituicao_fk,
                $pagamento_fk,
                $external_fk,
                $nome,
                $cpf,
                $telefone,
                $email,
                $nascimento
            );
        }

        $clientInfo = $client->info($cpf, $instituicao_fk);
        $client->update(
            $instituicao_fk,
            $nome,
            $cpf,
            $telefone,
            $email,
            $nascimento
        );
        $address->save(
            $clientInfo["external_fk"],
            "ADDRESS_COSTUMER",
            $cep,
            $logadouro,
            $numero,
            $complemento,
            $bairro,
            $cidade,
            $estado
        );

        $pay_external_fk = $fatura->maker_fk();
        $customer = $clientInfo['pagamento_fk'];

        $allSplit = $split->listAll($instituicao_fk);

        $split = [];
        $response = [];
        if (!empty($allSplit)) {
            $split = array_map(function ($s) {
                return [
                    "walletId" => $s["code"],
                    "percentualValue" => $s["porcentagem"],

                ];
            }, $allSplit);
        }

        if ($recorrente) {
            $response = $Pay->signature(
                $pay_external_fk,
                $tipo_pagamento,
                $customer,
                $valor,
                $card_nome,
                $card_numero,
                $card_validade,
                $card_cvv,
                $nome,
                $cpf,
                $telefone,
                $email,
                $cep,
                $numero,
                $complemento,
                $split
            );
        } else {
            $response = $Pay->single(
                $pay_external_fk,
                $tipo_pagamento,
                $customer,
                $valor,
                $card_nome,
                $card_numero,
                $card_validade,
                $card_cvv,
                $nome,
                $cpf,
                $telefone,
                $email,
                $cep,
                $numero,
                $complemento,
                $split
            );
        }

        $error = $response['errors'] ?? [];

        if (!empty($error)) {
            self::printError(
                $error[0]["description"],
                $error
            );
        }

        $debug = $response;

        $fatura_id = $response["id"];
        $external_fk = $pay_external_fk;
        $status_pagamento = $response["status"];

        $codigo = $response["identificationField"] ?? $response["invoiceNumber"] ?? "";
        $url = $response["bankSlipUrl"] ?? $response["invoiceUrl"] ?? "";

        $ID = false;
        if ($recorrente) {
            $resCodeListSubs = $Pay->listSubs($fatura_id);
            $ID = $resCodeListSubs["data"][0]["id"];
            $status_pagamento = $resCodeListSubs["data"][0]["status"];
        }

        if ($recorrente && $tipo_pagamento == "PIX" && $ID) {
            $resCode = $Pay->getCodePix($ID);
            $code = $resCode["payload"] ?? "";
            $url = $resCodeListSubs["data"][0]["invoiceUrl"] ?? "";
        }

        if (!$recorrente && $tipo_pagamento == "PIX") {
            $resCode = $Pay->getCodePix($response["id"]);
            $code = $resCode["payload"] ?? "";
            $url = $resCodeListSubs["data"][0]["invoiceUrl"] ?? "";
        }

        if ($recorrente && $tipo_pagamento == "BOLETO" && $ID) {
            $resCode = $Pay->getBarcodeBoleto($ID);
            $code = $resCode["identificationField"] ?? "";
            $url = $resCodeListSubs["data"][0]["bankSlipUrl"] ?? "";
        }

        $doador_fk = $clientInfo["external_fk"];
        $doador_nome = $nome;
        $doador_email = $email;

        if ($recorrente) {
            $sub = new Assinatura();
            $sub->register(
                $instituicao_fk,
                $external_fk,
                $doador_fk,
                $fatura_id,
                $tipo_pagamento,
                $status_pagamento,
                $valor
            );
        }

        $fatura->create(
            $instituicao_fk,
            $ID ? $ID : $fatura_id,
            $tipo_pagamento,
            $recorrente,
            $external_fk,
            $status_pagamento,
            $valor,
            $codigo,
            $url,
            $doador_fk,
            $doador_nome,
            $doador_email
        );

        self::printSuccess(
            "Fatura registrada com sucesso",
            [
                "recorrente" => $recorrente ?? null,
                "valor" => $valor ?? null,
                "code" => $code ?? $codigo ?? null,
                "url" => $url ?? null,
                "tipo_pagamento" => $tipo_pagamento ?? null,
                "debug" => $debug
            ]
        );
    }
}
