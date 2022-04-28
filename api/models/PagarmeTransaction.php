<?php

class PagarMeTransaction extends Asaas
{

  function pay(
    int $amount,
    string $typePayment,
    string $costumer_id,
    string $reference_key
  ): array {


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
      "split" => [
        [
          "walletId" => "628c021e-0220-403a-8e67-34716ee5ecf6",
          "percentualValue" => 2
        ]
      ]
    ];


    if (!empty($split)) {
      $payload['split_rules'] = $split;
    }

    return $this->post('/payments', $payload);
  }

  function codig_pix(string $transaction_id): array
  {

    $payload = [
      "id" => $transaction_id
    ];

    return $this->get('/payments/' . $transaction_id . '/pixQrCode', $payload);
  }
}
