<?php

class PagarmeInstituicao extends Asaas
{
    public function create_instituicao(
    string $name,
    string $email,
    string $cpfCnpj,
    string $companyType,
    string $phone,
    string $mobilePhone,
    string $address,
    string $addressNumber,
    string $complement,
    string $province,
    string $postalCode): array
    {

        
        $payload_recebedor = [
            "name" => $name,
            "email" => $email,
            "cpfCnpj" => $cpfCnpj,
            "companyType" => $companyType,
            "phone" => $phone,
            "mobilePhone" => $mobilePhone,
            "address" => $address,
            "addressNumber" => $addressNumber,
            "complement" => $complement,
            "province" => $province,
            "postalCode" => $postalCode
        ];

        
        $res_pagarme = $this->post('/accounts', $payload_recebedor);

        return $res_pagarme;

    }

    public function update(): void
    {
        $payload = [
            "id" => null,
            "date_updated" => null,
            "postback_url" => null,
            "bank_account" => [
                "id" => null,
                "bank_code" => null,
                "agencia" => null,
                "conta" => null,
                "conta_dv" => null,
                "type" => null,
                "document_type" => null,
                "document_number" => null,
                "legal_name" => null,
                "charge_transfer_fees" => true,
                "date_created" => null
            ]    
        ];  
        
    }
}