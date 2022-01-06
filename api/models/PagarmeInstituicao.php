<?php

class PagarmeInstituicao extends PagarMe
{
    public function create(
    string $banc_id, string $agencia, string $dig_cont, string $dig_agenc, string $conta, string $type_conta,
    string $document_number, string $bank_nome, string $recebedor_nome, string $document_number_recebedor,
    string $site_url, string $email_recebedor, string $telefone_recebedor): array
    {

        $payload = [
            "agencia" => $agencia, 
            "agencia_dv" => $dig_agenc, 
            "bank_code" => $banc_id, 
            "conta" => $conta, 
            "conta_dv" => $dig_cont, 
            "document_number" => $document_number, 
            "legal_name" => $bank_nome
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
            "bank_account_id" => $conta_id, 
            "transfer_day" => null, 
            "transfer_enabled" => false, 
            "transfer_interval" => null,
            "postback_url" => "https://requestb.in/tl0092tl",
            "register_information" => [
                    "type" => "individual",
                    "document_number" => $document_number_recebedor,
                    "name" => $recebedor_nome,
                    "site_url" => $site_url,
                    "email" => $email_recebedor,
                    "phone_numbers" => [[
                        "ddd" => null,
                        "number" => $telefone_recebedor,
                        "type" => null
                    ]]
            ]
        ];

        $recebedor = $this->post('/recipients', $payload_recebedor);

        var_dump($conta_id);
        
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