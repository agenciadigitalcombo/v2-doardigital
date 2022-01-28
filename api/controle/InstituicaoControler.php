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
        $sub_domain = $_REQUEST['subdomaim'] ?? '';

        $email = $_REQUEST['email'];

        $cor = $_REQUEST['cor'] ?? '';
        $logo = $_REQUEST['logo'] ?? '';

        $cnpj = $_REQUEST['cnpj'] ?? '';
        $transform_cnpj = withdraw_caracter($cnpj);

        $telefone = $_REQUEST['telefone'] ?? '';
        $transform_tel = withdraw_caracter($telefone);

        
        campo_obrigatorios([
        'nome_fantasia' => 'Informe um Nome Fantasia',
        'razao_social' => 'Qual a RazaoSocial',
        'subdomaim' => 'Informe o Sub Domain',
        'email' => 'Qual o Email',
        'telefone' => 'Digite o numero de Telefone',
        'cnpj' => 'Informe o Cnpj']);

    
        valid_subdomain($sub_domain);
        

        $secret = $token_parce['secret'];
        $guard_adm = $adm->list_profile($secret);
        $adm_id = $guard_adm['id'];

        // $get_instituicao = $instituicao->list_all_by_adm_id($adm_id);
        // $instituicao_id = $get_instituicao['id'];



        // $get_banc_id = $banco_cont->get_by_adm_id($adm_id);
        // $banc_id = $get_banc_id['id'];


        if ($instituicao->exist_subdomain($sub_domain)) {
            echo json_encode([
                "next" => false,
                "message" => "Subdomínio já em uso"
            ]);
            return null;
        }


        $instituicao->create($adm_id, $nome_fantasia, $razao_social, $sub_domain, $email, $transform_cnpj, $transform_tel, "#FFF", "");

        echo json_encode([
            'next' => true,
            'message' => 'Instituicao criada'
        ]);
    }



    static function update_instituicao()
    {
        $instituicao = new Instituicao();


        token();

        $instituicao_id = $_REQUEST['instituicao_id'];


        
        $nome_fantasia = $_REQUEST['nome_fantasia'];
        $razao_social = $_REQUEST['razao_social'];

        $email = $_REQUEST['email'];

        $cnpj = $_REQUEST['cnpj'];
        $telefone = $_REQUEST['telefone'];

        $transform_cnpj = withdraw_caracter($cnpj);
        $transform_tel = withdraw_caracter($telefone);


        campo_obrigatorios([
            'instituicao_id' => 'Informe o ID',
            'nome_fantasia' => 'Informe um Nome Fantasia',
            'razao_social' => 'Qual a RazaoSocial',
            'email' => 'Qual o Email',
            'telefone' => 'Digite o numero de Telefone',
            'cnpj' => 'Informe o Cnpj'
        ]);

        $instituicao->update($instituicao_id, $nome_fantasia, $razao_social, $email, $transform_cnpj, $transform_tel, "#FFF", "");
        echo json_encode([
            'next' => true,
            'message' => 'Instituicao atualizada'
        ]);
    }

    static function config_instituicao()
    {
        $instituicao = new Instituicao();


        token();

        $instituicao_id = $_REQUEST['instituicao_id'];


        
        $nome_fantasia = $_REQUEST['nome_fantasia'];
        $razao_social = $_REQUEST['razao_social'];

        $email = $_REQUEST['email'];

        $cnpj = $_REQUEST['cnpj'];
        $telefone = $_REQUEST['telefone'];

        $transform_cnpj = withdraw_caracter($cnpj);
        $transform_tel = withdraw_caracter($telefone);


        campo_obrigatorios([
            'instituicao_id' => 'Informe o ID',
            'nome_fantasia' => 'Informe um Nome Fantasia',
            'razao_social' => 'Qual a RazaoSocial',
            'email' => 'Qual o Email',
            'telefone' => 'Digite o numero de Telefone',
            'cnpj' => 'Informe o Cnpj'
        ]);

        $instituicao->update($instituicao_id, $nome_fantasia, $razao_social, $email, $transform_cnpj, $transform_tel, "#FFF", "");
        echo json_encode([
            'next' => true,
            'message' => 'Instituicao atualizada'
        ]);
    }



    static function update_domain_person()
    {
        $instituicao = new Instituicao();

        token();
        $instituicao_id = $_REQUEST['instituicao_id'];


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
            $payload[] = [
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
        
        $sanitize_secret = trim($get_secret_adm);

        $secret = $adm->list_profile($sanitize_secret);
        $id = $secret['id'];
        
        
        
        $get_instituicao = $instituicao->list_all_by_adm_id($id);

        

        $payload  = array_map(function($lis_dados){
            return [
                'id' => $lis_dados['id'],
                'adm_id' => $lis_dados['adm_id'],
                'nome_fantasia' => $lis_dados['nome_fantasia'],
                'subdomaim' => $lis_dados['subdomaim'],
                'status' => $lis_dados['status']
            ];
        },$get_instituicao); 

        echo json_encode([
            'next' => true,
            'message' => 'Instituicao',
            'dados' => $payload
        ]);
    }


    static function list_instituicao_by_id()
    {
        $instituicao = new Instituicao();

        $instituicao_id = $_REQUEST['instituicao_id'];

        campo_obrigatorios([
            'instituicao_id' => 'Indoforme o ID da Instituicao',
        ]);

        $get_instituicao = $instituicao->get_by_id($instituicao_id);



        $payload = [
            'id' => $get_instituicao['id'],
            'adm_id' => $get_instituicao['adm_id'],
            'nome_fantasia' => $get_instituicao['nome_fantasia'],
            'subdomaim' => $get_instituicao['subdomaim'],
            'status' => $get_instituicao['status']
        ];

        echo json_encode([
            'next' => true,
            'message' => 'Instituicao Pelo Id',
            'dados' => $payload
        ]);
    }

    static function list_instituicao_by_subdomaim()
    {
        $instituicao = new Instituicao();
        $plano = new Plano();
        $endereco = new Endereco();

        $subdomaim = $_REQUEST['subdomaim'];

        $logo = 'https://doardigital.tk/uploads/0/logo.svg';
        $icon = 'https://doardigital.tk/uploads/0/icon.png';

        campo_obrigatorios([
            'subdomaim' => 'Indoforme o Sub-domaim',
        ]);


        $get_instituicao = $instituicao->get_by_subdomaim($subdomaim);

        

        $get_instituicao_id = $get_instituicao['id'];


        $get_plano = $plano->list_all_by_instituicao($get_instituicao_id);

        $get_endereco = $endereco->list_all_by_fk($get_instituicao_id);

        $payload_endereco = [
            'cep' => $get_endereco['cep'],
            'logadouro' => $get_endereco['logadouro'],
            'numero' => $get_endereco['numero'],
            'complemento' => $get_endereco['complemento'],
            'bairro' => $get_endereco['bairro'],
            'cidade' => $get_endereco['cidade'],
            'estado' => $get_endereco['estado']
        ];

        $payload_plano = array_map(function($plano) {
            return [
                'id' => $plano['id'],
                'nome' => $plano['nome'],
                'amount' => $plano['amount'],
                'status' => $plano['status']
            ];
        },$get_plano );

        $payload_instituicao = [
            'logo' => $get_instituicao['logo'],
            'icon' => $icon,
            'cor' => $get_instituicao['cor'],
            'id' => $get_instituicao['id'],
            'adm_id' => $get_instituicao['adm_id'],
            'nome_fantasia' => $get_instituicao['nome_fantasia'],
            'subdomaim' => $get_instituicao['subdomaim'],
            'status' => $get_instituicao['status'],
            'telefone' => $get_instituicao['telefone'],
            'email' => $get_instituicao['email'],
            'cnpj' => $get_instituicao['cnpj'],
            'plano' => $payload_plano,
            'endereco' => $payload_endereco
        ];


        echo json_encode([
            'next' => true,
            'message' => 'Instituicao Pelo Subdomaim',
            'dados_instituicao' => $payload_instituicao
        ]);
    }

    static function detete_instituicao()
    {
        $instituicao = new Instituicao();

        token();

        $id = $_REQUEST['id'];
        $instituicao->del($id);
        echo json_encode([
            'next' => true,
            'message' => 'Instituicao Excluida'
        ]);
    }

    static function on_off_instituicao()
    {
        $instituicao = new Instituicao();


        token();

        $instituicao_id = $_REQUEST['instituicao_id'];


        $instituicao->on_off($instituicao_id);
        echo json_encode([
            'next' => true,
            'message' => 'Status Atualizado'
        ]);
    }

    static function subdominio_disponivel()
    {

        $instituicao = new Instituicao();
        
        $sub_domain = $_REQUEST['subdomaim'];


        campo_obrigatorios([
            "subdomaim" => "informe um subdomínio"
        ]);


        

        if ($instituicao->exist_subdomain($sub_domain)) {
            echo json_encode([
                "next" => false,
                "message" => "Subdomínio já em uso"
            ]);
            return null;
        }

        echo json_encode([
            "next" => true,
            "message" => "Subdomínio disponível para uso"
        ]);
    }

    static function list_doacoes()
    {
        $doacoes = new Doacao();
        
        $instituicao_id = $_REQUEST['instituicao_id'];
        
        campo_obrigatorios([
            'instituicao_id' => 'Indoforme o ID da Instituicao',
        ]);
        
        $get_doacoes = $doacoes->list_all_by_instituicao($instituicao_id);
        
        
        
        
        $payload = array_map(function ($list) {
            $doador = new Doador();
            $dados_doador = $doador->get_by_id($list['doador_id']);
            return[
                'id' => $dados_doador['id'],
                'nome' => $dados_doador['nome'],
                'email' => $dados_doador['email'],
                'cpf' => $dados_doador['cpf'],
                'valor' => $list['valor'],
                'status_pagamento' => $list['status_pagamento'],
                'data' => $list['data'],
                'hora' => $list['hora'],
                'tipo' => $list['tipo']
            ];
        },$get_doacoes);
        
        

        echo json_encode([
            'next' => true,
            'message' => 'Instituicao Pelo Id',
            'dados' => $payload
        ]);
    }

    static function list_doadores()
    {
        $doacoes = new Doacao();

        $instituicao_id = $_REQUEST['instituicao_id'];

        campo_obrigatorios([
            'instituicao_id' => 'Indoforme o ID da Instituicao',
        ]);

        $get_doadores = $doacoes->list_all_by_doador($instituicao_id);

        $doadores_id = array_map(function ($list) {
            return[
                'doador_id' => $list['doador_id']
            ];
        },$get_doadores);
        
        $payload = array_unique($doadores_id, SORT_REGULAR);        

        $doador = new Doador();

        $payload = array_map(function ($list) use($doador){
            
            $dados = $doador->get_by_id($list['doador_id'])[0];
            return[
                'id' => $dados['id'],
                'nome' => $dados['nome'],
                'cpf' => $dados['cpf'],
                'email' => $dados['email'],
                'tipo' => 'unico',
                'gravatar' => gravatar($dados['email']),
                'data_registro' => $dados['data_registro']
            ];

        }, $payload);


        echo json_encode([
            'next' => true,
            'message' => 'Lista de doadores',
            'dados' => array_values($payload)
        ]);
    }

    static function list_email_by_instituicao()
    {
        $email = new Email();

        $instituicao_id = $_REQUEST['instituicao_id'];

        campo_obrigatorios([
            'instituicao_id' => 'Indoforme o ID da Instituicao',
        ]);

        $get_email = $email->list_by_instituicao($instituicao_id);

        $payload = array_map(function ($list) {
            return[
                'id' => $list['id'],
                'assunto' => $list['assunto'],
                'corpo' => $list['corpo'],
                'acao' => $list['acao'],
                'cron' => $list['cron']
            ];
        },$get_email);
        

        echo json_encode([
            'next' => true,
            'message' => 'Lista de doadores',
            'dados' => array_values($payload)
        ]);
    }

   
}
