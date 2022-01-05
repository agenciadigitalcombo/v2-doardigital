<?php

class PagarmeInstituicao extends PagarMe
{
    public function create(int $instituicao_id,
    string $conta_banc_id, string $agencia, string $dig_cont, string $conta, string $type_conta,
    string $type_document = "cpf", string $document_number, string $nome, int $status = 1): array
    {

        $payload = [
            "agencia" => "0932", 
            "agencia_dv" => "5", 
            "bank_code" => "341", 
            "conta" => "58054", 
            "conta_dv" => "1", 
            "document_number" => "26268738888", 
            "legal_name" => "API BANK ACCOUNT"
        ];

        // $payload = [
        //     "external_id" => $instituicao_id,
        //     "transfer_enabled" => false,
        //     "transfer_interval" => false,
        //     "transfer_day" => false,
        //     "postback_url" => "doardigital.tk",
        //     "status" => $status,
        //     "bank_account" => 
        //     [
        //       "bank_code" => $conta_banc_id,
        //       "agencia" => $agencia,
        //       "conta" => $conta,
        //       "conta_dv" => $type_conta,
        //       "type" => $type_conta,
        //       "document_type" => $type_document,
        //       "conta_dv" => $dig_cont,
        //       "document_number" => $document_number,
        //       "legal_name" => $nome
        //     ]
        // ];
        // echo "ttaaffaareeeelllll";
        $conta = $this->post('/bank_accounts', $payload);
        $conta_id = $conta['id'];

        $payload_recebedor = [
            "anticipatable_volume_percentage" => "85", 
            "automatic_anticipation_enabled" => "true", 
            "bank_account_id" => $conta_id, 
            "transfer_day" => "5", 
            "transfer_enabled" => "true", 
            "transfer_interval" => "weekly",
            "postback_url" => "https://requestb.in/tl0092tl",
            "register_information" => [
                    "type" => "individual",
                    "document_number" => "92545278157",
                    "name" => "Someone",
                    "site_url" =>"http://www.site.com",
                    "email" => "some@email.com",
                    "phone_numbers" => [[
                        "ddd" => "11",
                        "number" => "987654321",
                        "type" => "mobile"
                    ]]
            ]
        ];

        $recebedor = $this->post('/recipients', $payload);

        var_dump($recebedor);
        
        return $recebedor;

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