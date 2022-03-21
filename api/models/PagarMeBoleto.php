<?php

class PagarMeBoleto extends Asaas
{

    function pay(int $amount, string $typePayment, string $costumer_id): array
    {

        $config = include __DIR__ . "/../config.php";

        $payload = [
            "customer" => $costumer_id,
            "billingType" => $typePayment,
            "dueDate" => date('Y-m-d', strtotime('+7 days', strtotime(date('Y-m-d')))),
            "value" => $amount,
            "description" => "",
            "externalReference" => "",
            "discount" => [
              "value" => 0,
              "dueDateLimitDays" => 0
            ],
            "fine" => [
              "value" => 1
            ],
            "interest" => [
              "value" => 0
            ],
            "postalService" => false,
            // "split" => [
            //     [
            //          "walletId" => "88f3926c-c94e-4a0a-a0b5-ad936dd3423f",
            //          "percentualValue" => 98
            //     ]
            //  ]
        ];
       
        return $this->post('/payments', $payload);
    }

    public function create_recorrencia_boleto(string $plano_id, string $bairro, string $logradouro, string $street_number, string $cep, string $document_costumer, string $email_costumer, string $nome_costumer, 
    string $phone_numbers, string $phone_ddd, string $type_pagamento, array $split = []): array
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
       
        if(!empty($split)){
            $payload['split_rules'] = $split;
        }

        return $this->post('/subscriptions', $payload, false);
    }


    function codig_boleto(string $transaction_id): array
    {

        $payload = [
            "id" => $transaction_id
        ];
       
        return $this->get('/payments/' . $transaction_id . '/identificationField', $payload);
    }

}
