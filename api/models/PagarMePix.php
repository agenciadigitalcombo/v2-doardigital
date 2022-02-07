<?php

class PagarMePix extends PagarMe
{
    function __construct()
    {
        parent::__construct();
    }
    function pay(int $amount, array $split = []): array
    {
        $payload = [
            'payment_method' => 'pix',
            'amount' => $amount,
            'pix_expiration_date' => date('Y-m-d', strtotime('+7 days')),
            'pix_additional_fields' => [
                [
                    'name' => 'Doação',
                    'value' => 'R$' . number_format($amount / 100, 2, ',', '.')
                ]
            ],
            // 'split_rules' => $split
        ];
        

        if(!empty($split)){
            $payload['split_rules'] = $split;
        }

        return $this->post('/transactions', $payload, false);
    }
    
}
