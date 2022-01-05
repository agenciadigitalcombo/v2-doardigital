<?php
class TesteControler{
    static function testecreate(){

        $instituicaopagarme = new PagarmeInstituicao();

        $instituicao_id = "22";
        $conta_banc_id = "3";
        $agencia = "2332";
        $dig_cont = "2";
        $conta = "223222";
        $type_conta = "corrente";
        $digit = "22";
        $document_number = "233333332";
        $nome = "victor";

        $res_pagarme_intituicao = $instituicaopagarme->create($instituicao_id, $conta_banc_id, $agencia, $dig_cont, $conta, $type_conta, $digit, $document_number, $nome); 
        
        var_dump($res_pagarme_intituicao);
        die;

    }
}