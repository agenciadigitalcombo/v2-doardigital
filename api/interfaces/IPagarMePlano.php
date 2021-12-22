<?php

interface IPagarMePlano
{
    public function create(
        string $name,
        int $amount,
        int $trial_days = 0,
        int $days = 30,
        array $payment_methods = [
            "boleto",
            "credit_card"
        ]
    ): array;

    public function update(
        int $plan_id,
        string $name
    ): void;
}
