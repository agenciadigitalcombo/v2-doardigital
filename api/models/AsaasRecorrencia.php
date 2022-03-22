<?php

class AsaasRecorrencia extends Asaas
{

    public function create_recorrencia(): array
    {
        $payload = [
            "customer" => "{CUSTOMER_ID}",
            "billingType" => "BOLETO",
            "nextDueDate" => "2017-05-15",
            "value" => 19.9,
            "cycle" => "MONTHLY",
            "description" => "Assinatura Plano Pró",
            "discount" => [
                "value" => 0,
                "dueDateLimitDays" => 0
            ],
            "fine" => [
                "value" => 0
            ],
            "interest" => [
                "value" => 0
            ]
        ];

        return $this->post('/subscriptions', $payload);

    }
}