<?php

class PagarmeInstituicao extends PagarMe
{
    public function create(int $instituicao_id, string $data_register, string $data_create): array
    {
        $payload = [
            "id" => null,
            "transfer_enabled" => false,
            "last_transfer" => null,
            "transfer_interval" => false,
            "transfer_day" => false,
            "date_created" => null,
            "status" => null,
            "postback_url" => null,
            "bank_account" => 
            [
              "id" => null,
              "bank_code" => null,
              "agencia" => null,
              "agencia_dv" => null,
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
        return $this->post('/recebedor', $payload);
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