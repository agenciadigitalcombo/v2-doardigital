<?php


class PagarMeCostumer extends Asaas{
    
    function __construct()
    {
        parent::__construct();
    }

    public function create(string $name, 
    string $email,
    string $external_id, 
    string $phone_numbers, 
    string $cpf, 
    string $address,
    string $addressNumber,
    string $complement,
    string $province, 
    string $postalCode): array
    {
        $payload = [
            'name' => $name,
            'email' => $email,
            "phone" => $phone_numbers,
            "mobilePhone" => $phone_numbers,
            "cpfCnpj" => $cpf,
            "postalCode" => $postalCode,
            "address" => $address,
            "addressNumber" => $addressNumber,
            "complement" => $complement,
            "province" => $province,
            "externalReference" => $external_id,
            "notificationDisabled" => true,
            "additionalEmails" => "",
            "municipalInscription" => "",
            "stateInscription" => "",
            "observations" => ""
            
        ];
        
        return $this->post('/customers', $payload, false);
        
    
    }
    
}