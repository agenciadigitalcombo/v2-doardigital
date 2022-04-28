<?php

class PagarMeCartao extends Asaas
{

    public function single(
        int $amount,
        string $type_pagamento,
        string $card_number,
        string $card_cvv,
        string $card_expiration_date,
        string $card_holder_name,
        string $costumer,
        string $nome_costumer,
        string $email_costumer,
        string $cpfCnpj,
        string $phone_numbers,
        string $complement,
        string $street_number,
        string $cep,
        string $external_fk,
        array $split = []
    ): array {
        $payload = [
            "customer" => $costumer,
            "billingType" => $type_pagamento,
            "dueDate" => date('Y-m-d'),
            "value" => $amount,
            "description" => "",
            "externalReference" => $external_fk,
            "creditCard" => [
                "holderName" => $card_holder_name,
                "number" => $card_number,
                "expiryMonth" => substr($card_expiration_date, 0, 2),
                "expiryYear" => substr($card_expiration_date, 2, 4),
                "ccv" => $this->clearNumber($card_cvv)
            ],
            "creditCardHolderInfo" => [
                "name" => $nome_costumer,
                "email" => $email_costumer,
                "cpfCnpj" => $cpfCnpj,
                "postalCode" => $cep,
                "addressNumber" => $street_number,
                "addressComplement" => $complement,
                "phone" => $this->clearNumber($phone_numbers),
                "mobilePhone" => $this->clearNumber($phone_numbers)
            ],
            "remoteIp" => $_SERVER['REMOTE_ADDR']
        ];
        if (!empty($split)) {
            $payload['split_rules'] = $split;
        }
        return $this->post('/payments', $payload);
    }
}
