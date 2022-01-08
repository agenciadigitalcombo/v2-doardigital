<?php 

class ContaBancControler{
    
    static function create_cont_instituicao(){
        $instituicao = new Instituicao();
        $adm = new Adm();
        $recebedor_pagarme = new PagarmeInstituicao();
        $banck_pagarme = new PagarmeContaBanc();
        $contaBanc = new ContaBanc();

        // $token_parce = token();

        $instituicao_id = 27;
        $nome_identificacao = "";
        $codigo_banco = "341";
        $agencia = "0932";
        $agencia_digito = "5";
        $conta = "58054";
        $conta_digito = "2";
        $tipo_conta = "conta_corrente";
        $nome_completo = "Victor Teste";
        $documento_numero = "26268738888";

        $recebedor_nome = "Someone";
        $document_number_recebedor = "92545278157";
        $site_url = "digital.tk";
        $email_recebedor = "some@email.com";
        $telefone_recebedor = "11987654321";
        
        // $secret = $token_parce['secret'];
        // $guard_adm = $adm->list_profile($secret);
        // $adm_id = $guard_adm['id'];
        $adm_id = 87;


        
        $res_pagarme_conta = $banck_pagarme->create_conta($codigo_banco, $agencia, $conta_digito, $agencia_digito, $conta, $tipo_conta, $documento_numero, $nome_completo); 
        $token_conta = $res_pagarme_conta['id'];
        
        $contaBanc->create($adm_id, $token_conta, $nome_identificacao, $codigo_banco, $agencia, $agencia_digito, $conta, $conta_digito, $tipo_conta, $nome_completo, $documento_numero); 

        $res_pagarme_instituicao = $recebedor_pagarme->create_instituicao($token_conta, $recebedor_nome, $document_number_recebedor, $site_url, $email_recebedor, $telefone_recebedor);
        $id_instituicao_pagarme = $res_pagarme_instituicao['id'];

        var_dump($res_pagarme_instituicao);
        die;


        $instituicao->set_token_recebedor($instituicao_id, $id_instituicao_pagarme);

        echo json_encode([
            'next' => true,
            'message' => 'Conta criada'
        ]);

    }
}