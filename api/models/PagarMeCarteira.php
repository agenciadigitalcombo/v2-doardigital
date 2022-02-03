<?php

class PagarMeCarteira extends PagarMe{

    public function carteira_recebedor(string $insituicao_id): array
    {
        $payload = [];

        return $this->get('/recipients/'.$insituicao_id.'/balance', $payload);
    }
}