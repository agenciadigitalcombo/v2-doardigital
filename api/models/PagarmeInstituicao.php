<?php

class PagarmeInstituicao extends PagarMe
{
    public function create(int $instituicao_id,
    string $conta_banc_id, string $agencia, string $dig_cont, string $conta, string $type_conta,
    string $type_document = "cpf", string $document_number, string $nome, int $status = 1): array
    {
        $payload = [
            "external_id" => $instituicao_id,
            "transfer_enabled" => false,
            "transfer_interval" => false,
            "transfer_day" => false,
            "postback_url" => "doardigital.tk",
            "status" => $status,
            "bank_account" => 
            [
              "bank_code" => $conta_banc_id,
              "agencia" => $agencia,
              "conta" => $conta,
              "conta_dv" => $type_conta,
              "type" => $type_conta,
              "document_type" => $type_document,
              "conta_dv" => $dig_cont,
              "document_number" => $document_number,
              "legal_name" => $nome,
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