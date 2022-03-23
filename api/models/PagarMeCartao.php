<?php

class PagarMeCartao extends Asaas
{

    public function create(int $amount, string $type_pagamento, string $card_number, string $card_cvv, string $card_expiration_date, string $card_holder_name, 
    string $costumer_id, string $nome_costumer, string $email_costumer, string $cpfCnpj, string $phone_numbers, string $complement,
    string $street_number, string $cep): array
    {
        $payload = [

            
            "customer" => $costumer_id,
            "billingType" => $type_pagamento,
            "dueDate" => date('Y-m-d'),
            "value" => $amount,
            "description" => "",
            "externalReference" => "",
            // "split" => [
            //     [
            //          "walletId" => "88f3926c-c94e-4a0a-a0b5-ad936dd3423f",
            //          "percentualValue" => 98
            //     ]
            // ],
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
            "remoteIp" => $_SERVER['REMOTE_ADDR']
        ];


        // if(!empty($split)){
        //     $payload['split_rules'] = $split;
        // }

        return $this->post('/payments', $payload, false);
    }


    // public function create_cartao(string $card_number, string $card_cvv, string $card_expiration_date, string $card_holder_name): array
    // {
    //     $payload = [

    //         "card_expiration_date" => $card_expiration_date, 
    //         "card_number" => $card_number,
    //         "card_cvv" => $card_cvv, 
    //         "card_holder_name" => $card_holder_name
    //     ];

    //     return $this->post('/cards', $payload, false);
    // }



    // public function create_recorrencia(string $plano_id, string $card_id, string $bairro, string $logradouro, string $street_number, string $cep, string $document_costumer, string $email_costumer, string $nome_costumer, 
    // string $phone_numbers, string $phone_ddd, string $type_pagamento, array $split = []): array
    // {
    //     $payload = [
    //         "card_id" => $card_id, 
    //         "customer" => [
    //             "address" => [
    //                 "neighborhood" => $bairro,
    //                 "street" => $logradouro,
    //                 "street_number" => $street_number,
    //                 "zipcode" => $cep
    //                 ], 
    //                 "document_number" => $document_costumer, 
    //                 "email" => $email_costumer, 
    //                 "name" => $nome_costumer, 
    //                 "phone" => [
    //                     "ddd" => $phone_ddd, 
    //                     "number" => $phone_numbers
    //                 ]
    //         ], 
    //         "payment_method" => $type_pagamento, 
    //         "plan_id" =>  $plano_id
    //     ];
       
    //     if(!empty($split)){
    //         $payload['split_rules'] = $split;
    //     }

    //     return $this->post('/subscriptions', $payload, false);
    // }

    

}