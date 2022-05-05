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

    static function register()
    {

        self::requireInputs([
            "instituicao_fk" => "Informe a referencia da instituição",
            "nome" => "Informe seu nome",
            "cpf" => "informe CPF",
            "sexo" => "Informe sexo",
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

        $instituicao_fk = $_REQUEST['instituicao_fk'] ?? null;
        $nome = $_REQUEST['nome'] ?? null;
        $cpf = $_REQUEST['cpf'] ?? null;
        $sexo = $_REQUEST['sexo'] ?? null;
        $telefone = $_REQUEST['telefone'] ?? null;
        $email = $_REQUEST['email'] ?? null;
        $cep = $_REQUEST['cep'] ?? null;
        $logadouro = $_REQUEST['logadouro'] ?? null;
        $complemento = $_REQUEST['complemento'] ?? "";
        $numero = $_REQUEST['numero'] ?? null;
        $bairro = $_REQUEST['bairro'] ?? null;
        $cidade = $_REQUEST['cidade'] ?? null;
        $estado = $_REQUEST['estado'] ?? null;
        $valor = (float) $_REQUEST['valor'] ? $_REQUEST['valor'] : 0;
        $recorrente = (int) $_REQUEST['recorrente'] ?? 0;
        $tipo_pagamento = $_REQUEST['tipo_pagamento'] ?? null;
        $card_nome = $_REQUEST['card_nome'] ?? null;
        $card_numero = $_REQUEST['card_numero'] ?? null;
        $card_validade = $_REQUEST['card_validade'] ?? null;
        $card_cvv = $_REQUEST['card_cvv'] ?? null;
        $nascimento = "";

        $client = new Doador();
        $clientAsa = new AsaasCliente();
        $address = new Endereco();
        $fatura = new Fatura();
        $institution = new Instituicao();
        $Pay = new AsaasPay();
        $env = require __DIR__ . "/../config.php";

        $code = null;
        $url = null;
        $debug = null;

        if ($env['sandbox']) {
            $clientAsa->set_api_key($env['api_key']);
        }

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
        $split = [];
        $response = [];

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

        $debug = $response;

        self::printSuccess(
            "Fatura registrada com sucesso",
            [
                "recorrente" => $recorrente ?? null,
                "valor" => $valor ?? null,
                "code" => $code ?? null,
                "url" => $url ?? null,
                "tipo_pagamento" => $tipo_pagamento ?? null,
                "debug" => $debug
            ]
        );
    }
}
