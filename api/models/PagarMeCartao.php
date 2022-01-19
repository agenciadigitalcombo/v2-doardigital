<?php

class PagarMeCartao extends PagarMe
{
    
    function create(string $cart_numero, string $cart_cvv, string $cart_validade, string $cart_nome): array
    {
        $payload = [
            "card_expiration_date" => $cart_validade, 
            "card_number" => $cart_numero,
            "card_cvv" => $cart_cvv, 
            "card_holder_name" => $cart_nome
        ];
        

        return $this->post('/cards', $payload);
    }
    
}