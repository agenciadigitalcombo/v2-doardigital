<?php

class AsaasRecorrencia extends Asaas
{
    // public function create_recorrencia(
    //     $costumer_id,
    //     $type_payment,
    //     $amaount,
    //     $card_holder_name,
    //     $card_number,
    //     $card_expiration_date,
    //     $card_cvv,
    //     $nome_costumer,
    //     $email_costumer,
    //     $cpfCnpj,
    //     $cep,
    //     $street_number,
    //     $complement,
    //     $phone_numbers): array
    // {
    //     $payload = [
    //         "customer" => $costumer_id,
    //         "billingType" => $type_payment,
    //         "nextDueDate" => date('Y-m-d', strtotime('+30 days', strtotime(date('Y-m-d')))),
    //         "value" => $amaount,
    //         "cycle" => "CREDIT_CARD",
    //         "description" => "Doação",
    //         "creditCard" => [
    //             "holderName" => $card_holder_name,
    //             "number" => $card_number,
    //             "expiryMonth" => substr($card_expiration_date, 0, 2),
    //             "expiryYear" => substr($card_expiration_date, 2, 4),
    //             "ccv" => $card_cvv
    //         ],
    //         "creditCardHolderInfo" => [
    //             "name" => $nome_costumer,
    //             "email" => $email_costumer,
    //             "cpfCnpj" => $cpfCnpj,
    //             "postalCode" => $cep,
    //             "addressNumber" => $street_number,
    //             "addressComplement" => $complement,
    //             "phone" => $phone_numbers,
    //             "mobilePhone" => $phone_numbers
    //         ],
    //         "creditCardToken" => "a75a1d98-c52d-4a6b-a413-71e00b193c99"
    //     ];

    //     return $this->post('/subscriptions', $payload);

    // }

    public function create_recorrencia_cartao(
        string $costumer_id,
        string $type_payment,
        string $amaount,
        string $card_holder_name,
        string $card_number,
        string $card_expiration_date,
        string $card_cvv,
        string $nome_costumer,
        string $email_costumer,
        string $cpfCnpj,
        string $cep,
        string $street_number,
        string $complement,
        string $phone_numbers,
        string $reference_key): array
    {
        $payload = [
            "customer" => $costumer_id,
            "billingType" => $type_payment,
            "nextDueDate" => date('Y-m-d'),
            "value" => $amaount,
            "cycle" => "MONTHLY",
            "description" => "Doação",
            "creditCard" => [
                "holderName" => $card_holder_name,
                "number" => $card_number,
                "expiryMonth" => substr($card_expiration_date, 0, 2),
                "expiryYear" => substr($card_expiration_date, 2, 4),
                "ccv" => $card_cvv
            ],
            "creditCardHolderInfo" => [
                "name" => $nome_costumer,
                "email" => $email_costumer,
                "cpfCnpj" => $cpfCnpj,
                "postalCode" => $cep,
                "addressNumber" => $street_number,
                "addressComplement" => $complement,
                "phone" => $phone_numbers,
                "mobilePhone" => $phone_numbers
            ],
            "maxPayments" => "24",
            "remoteIp" => $_SERVER['REMOTE_ADDR'],
            "externalReference" => $reference_key,
            "split" => [
                [
                     "walletId" => "628c021e-0220-403a-8e67-34716ee5ecf6",
                     "percentualValue" => 2
                ]
            ]
        ];

        return $this->post('/subscriptions', $payload);

    }
}