<?php

class PagarMeBoleto extends PagarMe
{

    public function create(int $amount, string $type_pagamento, string $costumer_id, string $nome_costumer, string $email_costumer, string $document_costumer, array $phone_numbers, string $data_nascimento,
    string $estado, string $city, string $bairro, string $logradouro, string $street_number, string $cep,
        string $plano_id, string $title_plano, int $quantidade = 1, string $country = "br", string $type_document = "cpf"): array
    {
        $payload = [

            "amount" => $amount,
            "payment_method" => $type_pagamento,
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

        return $this->post('/transactions', $payload, false);
    }

    public function create_recorrencia_boleto(string $plano_id, string $bairro, string $logradouro, string $street_number, string $cep, string $document_costumer, string $email_costumer, string $nome_costumer, 
    string $phone_numbers, string $phone_ddd, string $type_pagamento): array
    {
        $payload = [
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
       

        return $this->post('/subscriptions', $payload, false);
    }

}
