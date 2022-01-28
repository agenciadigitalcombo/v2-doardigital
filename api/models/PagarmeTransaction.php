<?php

class PagarMeTransaction extends PagarMe
{

    public function create(string $transacao_id): array
    {
        $payload = [
            'transaction_id' => $transacao_id
        ];

        return $this->post('/transactions/transaction_id', $payload, false);
    }

}