<?php
class TesteControler{
    static function testecreate(){

        $banco_cont = new ContaBanc();

        $adm_id = 5;
        $token = "BOM DIA";
        $nome_identificacao = "BOM DIA";
        $codigo_banco = "BOM DIA";
        $agencia = "BOM DIA";
        $agencia_digito = "BOM DIA";
        $conta = "BOM DIA";
        $conta_digito = "BOM DIA";
        $tipo_conta = "BOM DIA";
        $nome_completo = "BOM DIA";
        $documento_numero = "BOM DIA";

        $banco_cont->create($adm_id, $token, $nome_identificacao, $codigo_banco, $agencia, $agencia_digito, $conta, $conta_digito, $tipo_conta, $nome_completo, $documento_numero); 
        
        // var_dump($res_pagarme_intituicao);
        // die;

    }
}