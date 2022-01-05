<?php
class TesteControler{
    static function teste(){
        
        $instituicaopagarme = new PagarmeInstituicao();

        $instituicao_id = "22";
        $conta_banc_id = "22";
        $agencia = "22";
        $dig_cont = "22";
        $conta = "22";
        $type_conta = "corrente";
        $digit = "22";
        $document_number = "22";
        $nome = "victor";

        $res_pagarme_intituicao = $instituicaopagarme->create($instituicao_id, $conta_banc_id, $agencia, $dig_cont, $conta, $type_conta, $digit, $document_number, $nome); 
        
        var_dump($res_pagarme_intituicao);
        die;

    }
}