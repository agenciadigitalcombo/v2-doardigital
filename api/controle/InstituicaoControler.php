<?php

class InstituicaoControler
{

    static function create_instituicao()
    {
        $instituicao = new Instituicao();
        $instituicaopagarme = new PagarmeInstituicao();
        $banco_cont = new ContaBanc();
        $adm = new Adm();

        $token_parce = token();

        $nome_fantasia = $_REQUEST['nome_fantasia'] ?? '';
        $razao_social = $_REQUEST['razao_social'] ?? '';
        $sub_domain = $_REQUEST['sub_domain'] ?? '';
        
        $campo_email = $_REQUEST['email'];
        $email = valid_email($campo_email);

        $cor = $_REQUEST['cor'] ?? '';
        $logo = $_REQUEST['logo'] ?? '';
        
        $cnpj = $_REQUEST['cnpj'] ?? '';
        $transform_cnpj = withdraw_caracter($cnpj);

        $telefone = $_REQUEST['telefone'] ?? '';
        $transform_tel = withdraw_caracter($telefone);

        // $token = "";
        // $nome_identificacao = "";
        // $codigo_banco = $_REQUEST['codigo_banco'];
        // $agencia = $_REQUEST['agencia'];
        // $agencia_digito = $_REQUEST['agencia_digito'];
        // $conta = $_REQUEST['conta'];
        // $conta_digito = $_REQUEST['conta_digito'];
        // $tipo_conta = $_REQUEST['tipo_conta'];
        // $nome_completo = $_REQUEST['nome_completo'];
        // $documento_numero = $_REQUEST['documento_numero'];

        $campos_obrigatorios = [
            'nome_fantasia',
            'razao_social',
            'sub_domain',
            'email',
            'cor',
            'telefone',
            'cnpj',
            //'nome_identificacao',
            // 'codigo_banco',
            // 'agencia',
            // 'agencia_digito',
            // 'conta',
            // 'conta_digito',
            // 'tipo_conta',
            // 'nome_completo',
            // 'documento_numero'
        ];
        $lb = [
            'nome_fantasia' => 'Informe um Nome Fantasia',
            'razao_social' => 'Qual a RazaoSocial',
            'sub_domain' => 'Informe o Sub Domain',
            'email' => 'Qual o Email',
            'cor' => 'Informe a Cor',
            'telefone' => 'Digite o numero de Telefone',
            'cnpj' => 'Informe o Cnpj'
            //'nome_identificacao' => 'Informe o Nome para Identificacao',
            // 'codigo_banco' => 'Informe o Codigo do banco',
            // 'agencia' => 'Informe o Agencia',
            // 'agencia_digito' => 'Informe o Digito da Agencia',
            // 'conta' => 'Informe a Conta',
            // 'conta_digito' => 'Informe o Digito da Conta',
            // 'tipo_conta' => 'Informe o Tipo da conta',
            // 'nome_completo' => 'Informe o Nome completo',
            // 'documento_numero' => 'Informe o Numero do Documento'
        ];
        foreach ($campos_obrigatorios as $campo) {
            if (empty($_REQUEST[$campo])) {
                echo json_encode([
                    'next' => false,
                    'message' => $lb[$campo]
                ]);
                return null;
            }
        }

        $secret = $token_parce['secret'];
        $guard_adm = $adm->list_profile($secret);
        $adm_id = $guard_adm['id'];

        // $get_instituicao = $instituicao->list_all_by_adm_id($adm_id);
        // $instituicao_id = $get_instituicao['id'];

        // $banco_cont->create($adm_id, $token, $nome_identificacao, $codigo_banco, $agencia, $agencia_digito, $conta, $conta_digito, $tipo_conta, $nome_completo, $documento_numero); 

        // $get_banc_id = $banco_cont->get_by_adm_id($adm_id);
        // $banc_id = $get_banc_id['id'];

        $instituicao->create($adm_id, $nome_fantasia, $razao_social, $sub_domain, $email, $transform_cnpj, $transform_tel, $cor, $logo);
        //$res_pagarme = $instituicaopagarme->create($instituicao_id, $banc_id, $agencia, $conta_digito, $agencia_digito, $conta, $tipo_conta, $documento_numero, $nome_completo, $nome_fantasia, $cnpj, $sub_domain, $email, $transform_tel); 
        
        


        
        echo json_encode([
            'next' => true,
            'message' => 'Instituicao criada'
        ]);
    }

    

    static function update_instituicao()
    {
        $instituicao = new Instituicao();
        $adm = new Adm();

        
        $token_parce = token();

        $nome_fantasia = $_REQUEST['nome_fantasia'];
        $razao_social = $_REQUEST['razao_social'];

        $campo_email = $_REQUEST['email'];
        $email = valid_email($campo_email);

        $cor = $_REQUEST['cor'];
        $logo = $_REQUEST['logo'];

        $cnpj = $_REQUEST['cnpj'];
        $telefone = $_REQUEST['telefone'];

        $transform_cnpj = withdraw_caracter($cnpj);
        $transform_tel = withdraw_caracter($telefone);

        
        campo_obrigatorios([
            'nome_fantasia' => 'Informe um Nome Fantasia',
            'razao_social' => 'Qual a RazaoSocial',
            'email' => 'Qual o Email',
            'cor' => 'Informe a Cor',
            'telefone' => 'Digite o numero de Telefone',
            'logo' => 'Qual a logo',
            'cnpj' => 'Informe o Cnpj'
        ]);
        
        $secret = $token_parce['secret'];
        $guard_adm = $adm->list_profile($secret);
        $adm_id = $guard_adm['id'];

        $instituicao->update($adm_id, $nome_fantasia, $razao_social, $email, $transform_cnpj, $transform_tel, $cor, $logo);
        echo json_encode([
            'next' => true,
            'message' => 'Instituicao atualizada'
        ]);
    }


    static function update_domain_person()
    {
        $instituicao = new Instituicao();

        $instituicao_id = $_REQUEST['instituicao_id'];

        token();

        $dominio = $_REQUEST['dominio'];
        

        
        campo_obrigatorios([
            'dominio' => 'Informe o Dominio',
            'id' => 'Indoforme o ID da Instituicao'
        ]);

        $instituicao->set_domain_person($instituicao_id, $dominio);
        echo json_encode([
            'next' => true,
            'message' => 'Dominio atualizado'
        ]);
    }

    static function list_instituicao()
    {
        $instituicao = new Instituicao();

        $guard = $instituicao->list_all();

        foreach ($guard as $g) {
            $payload [] = [
                'id' => $g['id'],
                'nome_fantasia' => $g['nome_fantasia'],
                'razao_social' => $g['razao_social'],
                'email' => $g['email'],
                'telefone' => $g['telefone'],
                'cor' => $g['cor'],
                'cnpj' => $g['cnpj'],
                'logo' => $g['logo'],
                'subdomaim' => $g['subdomaim'],
                'status' => $g['status']
            ];
        }

        echo json_encode([
            'next' => true,
            'message' => 'Todas instituicoes',
            'dados' => $payload
        ]);
    }

    static function instituicao()
    {
        $instituicao = new Instituicao();
        $adm = new Adm();

        $token_parce = token();
        
        $get_secret_adm = $token_parce['secret'];
        $secret = $adm->list_profile($get_secret_adm);
        $id = $secret['id']; 



        $get_instituicao = $instituicao->list_all_by_adm_id($id);
        


        $payload = [
            'id' => $get_instituicao['id'],
            'adm_id' => $get_instituicao['adm_id'],
            'nome_fantasia' => $get_instituicao['nome_fantasia'],
            'subdomaim' => $get_instituicao['subdomaim'],
            'status' => $get_instituicao['status']
        ];

        echo json_encode([
            'next' => true,
            'message' => 'Instituicao',
            'dados' => $payload
        ]);
    }

    static function detete_instituicao()
    {
        $instituicao = new Instituicao();
       
        $id = $_REQUEST['id'];
        $instituicao->del($id);
        echo json_encode([
            'next' => true,
            'message' => 'Instituicao Excluida'
        ]);
    }

    static function on_off()
    {
        $plano = new PlanoDigital();

        token();

        $instituicao_id = $_REQUEST['instituicao_id'];
        
        $plano->on_off($instituicao_id);
        echo json_encode([
            'next' => true,
            'message' => 'Status Atualizado'
        ]);

    }
}
