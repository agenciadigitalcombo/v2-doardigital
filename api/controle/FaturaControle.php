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
        $valor = (float) $_REQUEST['valor'] ?? 0;
        $recorrente = (int) $_REQUEST['recorrente'] ?? 0;
        $tipo_pagamento = $_REQUEST['tipo_pagamento'] ?? null;
        $card_nome = $_REQUEST['card_nome'] ?? null;
        $card_numero = $_REQUEST['card_numero'] ?? null;
        $card_validade = $_REQUEST['card_validade'] ?? null;
        $card_cvv = $_REQUEST['card_cvv'] ?? null;

        $client = new Doador();
        $clientAsa = new AsaasCliente();
        $address = null;
        $fatura = null;
        $institution = null;

        $code = null;
        $url = null;
        
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
            self::printSuccess("asa", $resClienteAsa );
            $pagamento_fk = $resClienteAsa['id'] ?? "cus_error";
            $nascimento = "";
            // $client->register(
            //     $instituicao_fk,
            //     $pagamento_fk,
            //     $external_fk,
            //     $nome,
            //     $cpf,
            //     $telefone,
            //     $email,
            //     $nascimento
            // );
        }
        $clientInfo = $client->info($cpf, $instituicao_fk);
        $costumer = $clientInfo['pagamento_fk'];



        self::printSuccess(
            "Fatura registrada com sucesso",
            [
                "recorrente" => $recorrente ?? null,
                "valor" => $valor ?? null,
                "code" => $code ?? null,
                "url" => $url ?? null,
                "tipo_pagamento" => $tipo_pagamento ?? null
            ]
        );
    }
}