<?php


class PagarMeCostumer extends PagarMe{
    
    function __construct()
    {
        parent::__construct();
    }

    public function create(string $name, string $email, string $external_id, array $phone_numbers, string $cpf): array
    {
        $payload = [
            'name' => $name,
            'email' => $email,
            'external_id' => $external_id,
            'type' => 'individual',
            'country' => 'br',
            'phone_numbers' => $phone_numbers,
            'documents' => [[
                'type' => 'cpf',
                'number' => $cpf
            ]]
            
        ];
        
        return $this->post('/customers', $payload, false);
        
    
    }
    
}