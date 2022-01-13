<?php

class PagarmeInstituicao extends PagarMe
{
    public function create_instituicao(
    string $conta_id): array
    {

        
        $payload_recebedor = [
            "bank_account_id" => $conta_id, 
            "transfer_day" => null, 
            "transfer_enabled" => false, 
            "transfer_interval" => null,
            "postback_url" => "https://requestb.in/tl0092tl",
            // "register_information" => [
            //     "type" => "individual",
            //     "document_number" => $document_number_recebedor,
            //     "name" => $recebedor_nome,
            //     "site_url" => $site_url,
            //     "email" => $email_recebedor,
            //     "phone_numbers" => [[
            //         "number" => $telefone_recebedor,
            //     ]]
            // ]
            // "register_information" => [
            //     "type" => "individual",
            //     "document_number" => "92545278157",
            //     "name" => "Someone",
            //     "site_url" =>"http://www.site.com",
            //     "email" => "some@email.com",
            //     "phone_numbers" => [[
            //         "ddd" => "11",
            //         "number" => "987654321",
            //         "type" => "mobile"
            //     ]]
            // ]
        ];

        
        $res_pagarme = $this->post('/recipients', $payload_recebedor);

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