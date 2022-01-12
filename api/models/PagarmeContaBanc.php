<?php 

class PagarmeContaBanc extends PagarMe{

    public function create_conta(string $banc_cod,
    string $agencia,
    string $dig_cont,
    string $conta,
    string $tipo_conta,
    string $document_number,
    string $bank_nome): array{

        $payload = [
            "agencia" => $agencia, 
            "bank_code" => $banc_cod, 
            "conta" => $conta, 
            "conta_dv" => $dig_cont, 
            "type" =>  $tipo_conta,
            "document_number" => $document_number, 
            "legal_name" => $bank_nome
        ];
        
        $res_pagarme = $this->post('/bank_accounts', $payload);

        return $res_pagarme;
    }

}