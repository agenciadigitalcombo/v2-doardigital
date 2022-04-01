<?php

class PagarMeTransaction extends Asaas
{

    function pay(int $amount, string $typePayment, string $costumer_id, string $reference_key): array
    {

        $config = include __DIR__ . "/../config.php";

        $payload = [
            "customer" => $costumer_id,
            "billingType" => $typePayment,
            "dueDate" => date('Y-m-d'),
            "value" => $amount,
            "description" => "",
            "externalReference" => $reference_key,
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
        

        if(!empty($split)){
            $payload['split_rules'] = $split;
        }
        $post_back = $config['base'] . "/api/webhook-doacao.php";
       
        return $this->post('/payments', $payload, $post_back);
    }

    function codig_pix(string $transaction_id): array
    {

        $payload = [
            "id" => $transaction_id
        ];
       
        return $this->get('/payments/' . $transaction_id . '/pixQrCode', $payload);
    }

    

}