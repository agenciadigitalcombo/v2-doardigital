<?php

class PagarMeTransaction extends Asaas
{

    function pay(int $amount, string $typePayment, string $costumer_id): array
    {

        $config = include __DIR__ . "/../config.php";

        $payload = [
            "customer" => $costumer_id,
            "billingType" => $typePayment,
            "dueDate" => "2017-06-10",
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
            "split" => [
                [
                     "walletId" => "88f3926c-c94e-4a0a-a0b5-ad936dd3423f",
                     "fixedValue" => 98
                ]
             ]
        ];
        

        if(!empty($split)){
            $payload['split_rules'] = $split;
        }
        $post_back = $config['base'] . "/api/webhook-doacao.php";
       
        return $this->post('/payments', $payload, $post_back);
    }

}