<?php

class PagarMeCartao extends PagarMe
{

    public function create(int $amount, string $type_pagamento, string $card_number, string $card_cvv, string $card_expiration_date, string $card_holder_name, string $costumer_id, string $nome_costumer, string $email_costumer, string $document_costumer, array $phone_numbers, string $data_nascimento,
    string $estado, string $city, string $bairro, string $logradouro, string $street_number, string $cep,
        string $plano_id, string $title_plano, array $split = [], int $quantidade = 1, string $country = "br", string $type_document = "cpf"): array
    {
        $payload = [

            "amount" => $amount,
            "payment_method" => $type_pagamento,
            "card_number" => $card_number,
            "card_cvv" => $card_cvv,
            "card_expiration_date" =>  $card_expiration_date,
            "card_holder_name" =>  $card_holder_name,
            "customer" => [
                "external_id" => $costumer_id,
                "name" => $nome_costumer,
                "type" => "individual",
                "country" => $country,
                "email" => $email_costumer,
                "documents" => [
                    [
                    "type" => $type_document,
                    "number" => $document_costumer
                    ]
                ],
                "phone_numbers" => $phone_numbers,
                "birthday" => $data_nascimento
            ],
            "billing" => [
                "name" => $nome_costumer,
                "address" => [
                    "country" => $country,
                    "state" => $estado,
                    "city" => $city,
                    "neighborhood" => $bairro,
                    "street" => $logradouro,
                    "street_number" => $street_number,
                    "zipcode" => $cep
                ]
            ],
            "items" => [
                [
                    "id" => $plano_id,
                    "title" => $title_plano,
                    "unit_price" => $amount,
                    "quantity" => $quantidade,
                    "tangible" => true
                ]
            ]
        ];


        if(!empty($split)){
            $payload['split_rules'] = $split;
        }
        return $this->post('/transactions', $payload, false);
    }


    public function create_cartao(string $card_number, string $card_cvv, string $card_expiration_date, string $card_holder_name): array
    {
        $payload = [

            "card_expiration_date" => $card_expiration_date, 
            "card_number" => $card_number,
            "card_cvv" => $card_cvv, 
            "card_holder_name" => $card_holder_name
        ];

        return $this->post('/cards', $payload, false);
    }



    public function create_recorrencia(string $plano_id, string $card_id, string $bairro, string $logradouro, string $street_number, string $cep, string $document_costumer, string $email_costumer, string $nome_costumer, 
    string $phone_numbers, string $phone_ddd, string $type_pagamento, array $split = []): array
    {
        $payload = [
            "card_id" => $card_id, 
            "customer" => [
                "address" => [
                    "neighborhood" => $bairro,
                    "street" => $logradouro,
                    "street_number" => $street_number,
                    "zipcode" => $cep
                    ], 
                    "document_number" => $document_costumer, 
                    "email" => $email_costumer, 
                    "name" => $nome_costumer, 
                    "phone" => [
                        "ddd" => $phone_ddd, 
                        "number" => $phone_numbers
                    ]
            ], 
            "payment_method" => $type_pagamento, 
            "plan_id" =>  $plano_id
        ];
       
        if(!empty($split)){
            $payload['split_rules'] = $split;
        }

        return $this->post('/subscriptions', $payload, false);
    }

    

}