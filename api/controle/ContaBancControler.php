<?php 

class ContaBancControler{
    
    static function create_cont_instituicao(){
        $instituicao = new Instituicao();
        $adm = new Adm();
        $recebedor_pagarme = new PagarmeInstituicao();
        $banck_pagarme = new PagarmeContaBanc();
        $contaBanc = new ContaBanc();
        
        
        campos_numericos([
            'instituicao_id' => 'Campo inválido, Apenas Numeros em Instituicao ID',
            'codigo_banco' => 'Campo inválido, Apenas Numeros em Codigo banco',
            'agencia' => 'Campo inválido, Apenas Numeros na Agencia',
            'conta' => 'Campo inválido, Apenas Numeros em Conta',
            'conta_digito' => 'Campo inválido, Apenas Numeros na Conta digito',
            'documento_numero' =>'Campo inválido, Apenas Numeros no Numero do documento'
        ]);
        
        campos_string([
            'nome_completo' => 'Campo inválido, nao aceita caracters especiais',
        ]);        
        
        $token_parce = token();
        
        $nome_identificacao = "";
        $instituicao_id_campo = $_REQUEST['instituicao_id'];
        $codigo_banco_campo = $_REQUEST['codigo_banco'];
        $agencia_campo = $_REQUEST['agencia'];
        $conta_campo = $_REQUEST['conta'];
        $conta_digito_campo = $_REQUEST['conta_digito'];
        $tipo_conta = $_REQUEST['tipo_conta'];
        $documento_numero_campo = $_REQUEST['documento_numero'];
        $nome_completo = $_REQUEST['nome_completo'];

        $documento_numero = cnpj($documento_numero_campo);
        $instituicao_id = withdraw_caracter($instituicao_id_campo);
        $codigo_banco = withdraw_caracter($codigo_banco_campo);
        $agencia = withdraw_caracter($agencia_campo);
        $conta = withdraw_caracter($conta_campo);
        $conta_digito = withdraw_caracter($conta_digito_campo);


        // var_dump($document_number_recebedor);
        // die;
        // $recebedor_nome = $_REQUEST['recebedor_nome'];
        // $document_number_recebedor_campo = $_REQUEST['document_number_recebedor'];
        // $site_url = "doardigital.tk";
        // $email_recebedor_campo = $_REQUEST['email_recebedor'];
        // $email_recebedor = valid_email($email_recebedor_campo);
        
        

        // $telefone_recebedor_campo = $_REQUEST['telefone_recebedor'];
        // $telefone_recebedor = valid_telefone($telefone_recebedor_campo);




        // $secret_campo = $token_parce['secret'];
        // $secret = space_sanitize($secret_campo);
        // $get_id = $adm->list_profile($secret);
        // $adm_id = $get_id['id'];

        
        
        
        

        if(!$contaBanc->valid_type_conta($tipo_conta)){
            echo json_encode([
                'next' => false,
                'message' => 'Tipo conta invalida'
            ]); 
            return null;
        }
        
        

        $res_pagarme_conta = $banck_pagarme->create_conta($codigo_banco, $agencia, $conta_digito, $conta, $tipo_conta, $documento_numero, $nome_completo); 
        $token_conta = $res_pagarme_conta['id'];
        
        $contaBanc->create($instituicao_id, $token_conta, $nome_identificacao, $codigo_banco, $agencia, $conta, $conta_digito, $tipo_conta, $nome_completo, $documento_numero, ""); 

        $res_pagarme_instituicao = $recebedor_pagarme->create_instituicao($token_conta);
        $id_instituicao_pagarme = $res_pagarme_instituicao['id'];

        
        
        $instituicao->set_token_recebedor($instituicao_id, $id_instituicao_pagarme);
        

        echo json_encode([
            'next' => true,
            'message' => 'Conta criada'
        ]);

    }

    static function update_cont_instituicao(){
        $instituicao = new Instituicao();
        $adm = new Adm();
        $recebedor_pagarme = new PagarmeInstituicao();
        $banck_pagarme = new PagarmeContaBanc();
        $contaBanc = new ContaBanc();
        
        campos_numericos([
            'instituicao_id' => 'Campo inválido, Apenas Numeros em Instituicao ID',
            'codigo_banco' => 'Campo inválido, Apenas Numeros em Codigo banco',
            'agencia' => 'Campo inválido, Apenas Numeros na Agencia',
            'conta' => 'Campo inválido, Apenas Numeros em Conta',
            'conta_digito' => 'Campo inválido, Apenas Numeros na Conta digito',
            'documento_numero' =>'Campo inválido, Apenas Numeros no Numero do documento'
        ]);
        
        campos_string([
            'nome_completo' => 'Campo inválido, nao aceita caracters especiais',
        ]);        
        
        $token_parce = token();
        
        
        $nome_identificacao = "";
        $instituicao_id_campo = $_REQUEST['instituicao_id'];
        $codigo_banco_campo = $_REQUEST['codigo_banco'];
        $agencia_campo = $_REQUEST['agencia'];
        $conta_campo = $_REQUEST['conta'];
        $conta_digito_campo = $_REQUEST['conta_digito'];
        $tipo_conta = $_REQUEST['tipo_conta'];
        $documento_numero_campo = $_REQUEST['documento_numero'];
        $nome_completo = $_REQUEST['nome_completo'];

        $documento_numero = cnpj($documento_numero_campo);
        $instituicao_id = withdraw_caracter($instituicao_id_campo);
        $codigo_banco = withdraw_caracter($codigo_banco_campo);
        $agencia = withdraw_caracter($agencia_campo);
        $conta = withdraw_caracter($conta_campo);
        $conta_digito = withdraw_caracter($conta_digito_campo);


        // var_dump($document_number_recebedor);
        // die;
        // $recebedor_nome = $_REQUEST['recebedor_nome'];
        // $document_number_recebedor_campo = $_REQUEST['document_number_recebedor'];
        // $site_url = "doardigital.tk";
        // $email_recebedor_campo = $_REQUEST['email_recebedor'];
        // $email_recebedor = valid_email($email_recebedor_campo);
        
        

        // $telefone_recebedor_campo = $_REQUEST['telefone_recebedor'];
        // $telefone_recebedor = valid_telefone($telefone_recebedor_campo);




        $secret_campo = $token_parce['secret'];
        $secret = space_sanitize($secret_campo);
        $get_id = $adm->list_profile($secret);
        $adm_id = $get_id['id'];

        
        
        

        if(!$contaBanc->valid_type_conta($tipo_conta)){
            echo json_encode([
                'next' => false,
                'message' => 'Tipo conta invalida'
            ]); 
            return null;
        }
        
        

        $res_pagarme_conta = $banck_pagarme->create_conta($codigo_banco, $agencia, $conta_digito, $conta, $tipo_conta, $documento_numero, $nome_completo); 
        $token_conta = $res_pagarme_conta['id'];
        
        $contaBanc->update_conta($instituicao_id, $token_conta, $nome_identificacao, $codigo_banco, $agencia, $conta, $conta_digito, $tipo_conta, $nome_completo, $documento_numero, ""); 

        $res_pagarme_instituicao = $recebedor_pagarme->create_instituicao($token_conta);
        $id_instituicao_pagarme = $res_pagarme_instituicao['id'];

        
        $instituicao->set_token_recebedor($instituicao_id, $id_instituicao_pagarme);
        

        echo json_encode([
            'next' => true,
            'message' => 'Conta Atualizada'
        ]);

    }

    static function list_conta()
    {
        $conta = new ContaBanc();


        $instituicao_id = $_REQUEST['instituicao_id'];

        campo_obrigatorios(['instituicao_id' => 'Campo instituicao_id obrigatorio']);

        $list_dados = $conta->list_by_instituicao_id($instituicao_id);

        $payload=[
            'instituicao_id' => $list_dados['instituicao_id'],
            'token' => $list_dados['token'],
            'nome_identificacao' => $list_dados['nome_identificacao'],
            'codigo_banco' => $list_dados['codigo_banco'],
            'agencia' => $list_dados['agencia'],
            'conta' => $list_dados['conta'],
            'conta_digito' => $list_dados['conta_digito'],
            'tipo_conta' => $list_dados['tipo_conta'],
            'nome_completo' => $list_dados['nome_completo'],
            'documento_numero' => $list_dados['documento_numero']
        ];

        echo json_encode([
            'next' => true,
            'message' => 'Conta da instituicao',
            'dados' => $payload
        ]);


    }

}