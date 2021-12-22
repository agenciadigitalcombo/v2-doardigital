<?php 

class PagarmePlano extends PagarMe implements IPagarMePlano
{
    
    public function create(string $name, int $amount, int $trial_days = 0, int $days = 30, array $payment_methods = ["boleto", "credit_card"]):array
    {

        $payload = [
            "amount" => $amount,
            "days" => $days,
            "name" => $name,
            "trial_days" => $trial_days,
            "payment_methods" => $payment_methods
        ];

        return $this->post('/1/plans', $payload);
    }

    public function update(int $plan_id, string $name): void
    {
        $payload = [
            'id' => $plan_id,
            'name' => $name
        ];

        $this->put("/1/plans/plan_id", $payload);
    }

        
}