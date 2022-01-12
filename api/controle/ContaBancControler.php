<?php 

class ContaBancControler{
    
    static function create_cont_instituicao(){
        $instituicao = new Instituicao();
        $adm = new Adm();
        $recebedor_pagarme = new PagarmeInstituicao();
        $banck_pagarme = new PagarmeContaBanc();
        $contaBanc = new ContaBanc();

        $token_parce = token();


        $nome_identificacao = "";
        $instituicao_id = $_REQUEST['instituicao_id'];
        $codigo_banco = $_REQUEST['codigo_banco'];
        $agencia = $_REQUEST['agencia'];
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
        
        $res_pagarme_conta = $banck_pagarme->create_conta($codigo_banco, $agencia, $conta_digito, $conta, $tipo_conta, $documento_numero, $nome_completo); 
        $token_conta = $res_pagarme_conta['id'];
        
        $contaBanc->create($adm_id, $token_conta, $nome_identificacao, $codigo_banco, $agencia, "", $conta, $conta_digito, $tipo_conta, $nome_completo, $documento_numero); 

        $res_pagarme_instituicao = $recebedor_pagarme->create_instituicao($token_conta, $recebedor_nome, $document_number_recebedor, $site_url, $email_recebedor, $telefone_recebedor);
        $id_instituicao_pagarme = $res_pagarme_instituicao['id'];

        
        
        $instituicao->set_token_recebedor($instituicao_id, $id_instituicao_pagarme);
        

        echo json_encode([
            'next' => true,
            'message' => 'Conta criada'
        ]);

    }
}