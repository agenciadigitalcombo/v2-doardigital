<?php

class PagarMeCarteira extends PagarMe{

    public function carteira_recebedor(string $insituicao_id): array
    {
        $payload = [];

        return $this->get('/recipients/'.$insituicao_id.'/balance', $payload);
    }

    public function historico(string $insituicao_id): array
    {
        $payload = [];

        return $this->get('/recipients/'.$insituicao_id.'/balance/operations', $payload);
    }

    public function antecipar(string $insituicao_id, string $requested_amount): array
    {
        $payload = [
            "build" => true,
            "payment_date" => strtotime('+10 days'), 
            "requested_amount" => intval($requested_amount), 
            "timeframe" => "start"
        ];

        return $this->post('/recipients/'.$insituicao_id.'/bulk_anticipations', $payload, false);
    }
}