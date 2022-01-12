<?php 

class ContaBancControler{
    
    static function create_cont_instituicao(){
        $instituicao = new Instituicao();
        $adm = new Adm();
        $recebedor_pagarme = new PagarmeInstituicao();
        $banck_pagarme = new PagarmeContaBanc();
        $contaBanc = new ContaBanc();

        $token_parce = token();

        $instituicao_id = 27;
        $codigo_banco = "341";
        $agencia = "0932";
        $agencia_digito = "5";
        $conta = "58054";
        $conta_digito = "2";
        $tipo_conta = "conta_poupanca";
        $nome_completo = "Victor Teste";
        $documento_numero = "26268738888";
        
        $recebedor_nome = "Someone";
        $document_number_recebedor = "92545278157";
        $site_url = "digital.tk";
        $email_recebedor = "some@email.com";
        $telefone_recebedor = "11987654321";
        
        $nome_identificacao = "";
        $instituicao_id = $_REQUEST['instituicao_id'];
        $codigo_banco = $_REQUEST['codigo_banco'];
        $agencia = $_REQUEST['agencia'];
        $agencia_digito = $_REQUEST['agencia_digito'];
        $conta = $_REQUEST['conta'];
        $conta_digito = $_REQUEST['conta_digito'];
        $tipo_conta = $_REQUEST['tipo_conta'];
        $nome_completo = $_REQUEST['nome_completo'];
        $documento_numero = $_REQUEST['documento_numero'];

        $recebedor_nome = $_REQUEST['recebedor_nome'];
        $document_number_recebedor = $_REQUEST['document_number_recebedor'];
        $site_url = $_REQUEST['site_url'];
        $email_recebedor = $_REQUEST['email_recebedor'];
        $telefone_recebedor = $_REQUEST['telefone_recebedor'];
        
        $secret = $token_parce['secret'];
        $adm_id = $adm->list_profile($secret);

        if(!$contaBanc->valid_type_conta($tipo_conta)){
            echo json_encode([
                'next' => false,
                'message' => 'Tipo conta invalida'
            ]); 
            return null;
        }
        
        $res_pagarme_conta = $banck_pagarme->create_conta($codigo_banco, $agencia, $conta_digito, $agencia_digito, $conta, $tipo_conta, $documento_numero, $nome_completo); 
        $token_conta = $res_pagarme_conta['id'];
        
        $contaBanc->create($adm_id, $token_conta, $nome_identificacao, $codigo_banco, $agencia, $agencia_digito, $conta, $conta_digito, $tipo_conta, $nome_completo, $documento_numero); 

        $res_pagarme_instituicao = $recebedor_pagarme->create_instituicao($token_conta, $recebedor_nome, $document_number_recebedor, $site_url, $email_recebedor, $telefone_recebedor);
        $id_instituicao_pagarme = $res_pagarme_instituicao['id'];

        
        
        $instituicao->set_token_recebedor($instituicao_id, $id_instituicao_pagarme);
        var_dump($res_pagarme_instituicao);

        echo json_encode([
            'next' => true,
            'message' => 'Conta criada'
        ]);

    }
}