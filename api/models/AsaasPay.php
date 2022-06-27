<?php

class AsaasPay extends Asaas
{

    function __construct()
    {
        parent::__construct();
    }

    function typeValid($type): bool
    {
        $list = ["BOLETO", "CREDIT_CARD", "PIX"];
        return in_array($type, $list);
    }

    function getBarcodeBoleto(string $fatura_id): array
    {
        $payload = [
            "id" => $fatura_id
        ];
        return $this->get("/payments/{$fatura_id}/identificationField", $payload);
    }

    function getCodePix(string $fatura_id): array
    {
        return $this->get("/payments/{$fatura_id}/pixQrCode", []);
    }


    function listSubs(string $id): array
    {
        return $this->get("/subscriptions/{$id}/payments", []);
    }


    function single(
        string $external_fk,
        string $tipo_pagamento,
        string $customer,
        string $valor,
        string $card_nome,
        string $card_numero,
        string $card_validade,
        string $card_cvv,
        string $nome,
        string $cpf,
        string $telefone,
        string $email,
        string $cep,
        string $numero,
        string $complemento,
        array $split = []
    ) {

        $payload = [
            "customer" => $customer,
            "billingType" => $tipo_pagamento,
            "value" => $valor,
            "dueDate" => date('Y-m-d', strtotime('+7 days')),
            "description" => "Doação Unica",
            "externalReference" => $external_fk,
            "postalService" => false,
        ];
        if ($tipo_pagamento == "BOLETO") {
            $payload["discount"] = [
                "value" => 0,
                "dueDateLimitDays" => 0
            ];
            $payload["interest"] = ["value" => 0];
        }
        if ($tipo_pagamento == "CREDIT_CARD") {
            $payload["creditCard"] = [
                "holderName" => $card_nome,
                "number" => $card_numero,
                "expiryMonth" => substr($this->clearNumber($card_validade), 0, 2),
                "expiryYear" => substr($this->clearNumber($card_validade), 2, 4),
                "ccv" => $this->clearNumber($card_cvv)
            ];
            $payload["creditCardHolderInfo"] = [
                "name" => $nome,
                "email" => $email,
                "cpfCnpj" => $cpf,
                "postalCode" => $cep,
                "addressNumber" => $numero,
                "addressComplement" => $complemento,
                "phone" => $this->clearNumber($telefone),
                "mobilePhone" => $this->clearNumber($telefone)
            ];
            $payload["remoteIp"] = $_SERVER['REMOTE_ADDR'];
        }
        if (!empty($split)) {
            $payload['split_rules'] = $split;
        }
        return $this->post('/payments', $payload);
    }

    function signature(
        string $external_fk,
        string $tipo_pagamento,
        string $customer,
        string $valor,
        string $card_nome,
        string $card_numero,
        string $card_validade,
        string $card_cvv,
        string $nome,
        string $cpf,
        string $telefone,
        string $email,
        string $cep,
        string $numero,
        string $complemento,
        array $split = []
    ) {
        $payload = [
            "customer" => $customer,
            "billingType" => $tipo_pagamento,
            "value" => $valor,
            "description" => "Assinatura",
            "externalReference" => $external_fk,
            "postalService" => false,
            "nextDueDate" => date('Y-m-d', strtotime('+7 days')),
            "cycle" => "MONTHLY",
        ];
        if ($tipo_pagamento == "BOLETO") {
            $payload["discount"] = [
                "value" => 0,
                "dueDateLimitDays" => 0
            ];
            $payload["interest"] = ["value" => 0];
        }
        if ($tipo_pagamento == "CREDIT_CARD") {
            $payload["creditCard"] = [
                "holderName" => $card_nome,
                "number" => $card_numero,
                "expiryMonth" => substr($this->clearNumber($card_validade), 0, 2),
                "expiryYear" => substr($this->clearNumber($card_validade), 2, 4),
                "ccv" => $this->clearNumber($card_cvv)
            ];
            $payload["creditCardHolderInfo"] = [
                "name" => $nome,
                "email" => $email,
                "cpfCnpj" => $cpf,
                "postalCode" => $cep,
                "addressNumber" => $numero,
                "addressComplement" => $complemento,
                "phone" => $this->clearNumber($telefone),
                "mobilePhone" => $this->clearNumber($telefone)
            ];
            $payload["remoteIp"] = $_SERVER['REMOTE_ADDR'];
            $payload["maxPayments"] = 24;
        }
        if (!empty($split)) {
            $payload['split_rules'] = $split;
        }
        return $this->post('/subscriptions', $payload);
    }
}
