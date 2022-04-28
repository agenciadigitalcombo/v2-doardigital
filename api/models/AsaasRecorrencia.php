<?php

class AsaasRecorrencia extends Asaas
{
    public function create_recorrencia_cartao(
        string $costumer,
        string $type_payment,
        string $valor,
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
        string $external_fk,
        array $split = []
    ): array {
        $payload = [
            "customer" => $costumer,
            "billingType" => $type_payment,
            "nextDueDate" => date('Y-m-d'),
            "value" => $valor,
            "cycle" => "MONTHLY",
            "description" => "Doação via site",
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
            "externalReference" => $external_fk,
        ];
        if (!empty($split)) {
            $payload['split_rules'] = $split;
        }
        return $this->post('/subscriptions', $payload);
    }
}
