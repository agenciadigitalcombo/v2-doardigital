<?php

class PagarMePix extends PagarMe
{
    function __construct()
    {
        parent::__construct();
    }
    function pay(int $amount, array $split = [], string $reference_key): array
    {

        $config = include __DIR__ . "/../config.php";

        $payload = [
            'payment_method' => 'pix',
            'amount' => $amount,
            'pix_expiration_date' => date('Y-m-d', strtotime('+7 days')),
            'reference_key' => $reference_key,
            'pix_additional_fields' => [
                [
                    'name' => 'Doação',
                    'value' => 'R$' . number_format($amount / 100, 2, ',', '.')
                ]
            ],
        ];
        

        if(!empty($split)){
            $payload['split_rules'] = $split;
        }
        $post_back = $config['base'] . "/api/webhook-doacao.php";
       
        return $this->post('/transactions', $payload, $post_back);
    }
    
}
