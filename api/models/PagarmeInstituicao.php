<?php

class PagarmeInstituicao extends PagarMe
{
    public function create(int $instituicao_id, string $data_register, string $data_create, int $status): array
    {
        $payload = [
            "id" => $instituicao_id,
            "transfer_enabled" => false,
            "last_transfer" => $data_register,
            "transfer_interval" => false,
            "transfer_day" => false,
            "date_created" => $data_create,
            "status" => $status
            // "bank_account" => 
            // [
            //   "id" => null,
            //   "bank_code" => null,
            //   "agencia" => null,
            //   "agencia_dv" => null,
            //   "conta" => null,
            //   "conta_dv" => null,
            //   "type" => null,
            //   "document_type" => null,
            //   "document_number" => null,
            //   "legal_name" => null,
            //   "charge_transfer_fees" => true,
            //   "date_created" => null
            // ]
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