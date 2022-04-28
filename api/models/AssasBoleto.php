<?php

class AssasBoleto extends Asaas
{

    function single(
        int $amount,
        string $typePayment,
        string $costumer_id,
        string $external_fk,
        array $split = []
    ): array {

        $payload = [
            "customer" => $costumer_id,
            "billingType" => $typePayment,
            "dueDate" => date('Y-m-d', strtotime('+7 days', strtotime(date('Y-m-d')))),
            "value" => $amount,
            "description" => "",
            "externalReference" => $external_fk,
            "discount" => [
                "value" => 0,
                "dueDateLimitDays" => 0
            ],
            "interest" => [
                "value" => 0
            ],
            "postalService" => false,
        ];
        if (!empty($split)) {
            $payload['split_rules'] = $split;
        }
        return $this->post('/payments', $payload);
    }

    public function signature(
        string $external_fk,
        string $plano_id,
        string $bairro,
        string $logradouro,
        string $street_number,
        string $cep,
        string $document_costumer,
        string $email_costumer,
        string $nome_costumer,
        string $telefone,
        string $type_pagamento,
        array $split = []
    ): array {
        $payload = [
            "customer" => [
                "address" => [
                    "neighborhood" => $bairro,
                    "street" => $logradouro,
                    "street_number" => $street_number,
                    "zipcode" => $cep
                ],
                "document_number" => $this->clearNumber($document_costumer),
                "email" => $email_costumer,
                "name" => $nome_costumer,
                "phone" => [
                    "ddd" => $this->getDDD($telefone),
                    "number" => $this->excludeDDD($telefone)
                ]
            ],
            "externalReference" => $external_fk,
            "payment_method" => $type_pagamento,
            "plan_id" =>  $plano_id
        ];
        if (!empty($split)) {
            $payload['split_rules'] = $split;
        }
        return $this->post('/subscriptions', $payload, false);
    }

    function getBarcodeBoleto(string $transaction_id): array
    {
        $payload = [
            "id" => $transaction_id
        ];
        return $this->get("/payments/{$transaction_id}/identificationField", $payload);
    }
}
