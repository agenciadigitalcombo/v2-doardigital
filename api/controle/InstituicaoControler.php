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

        $email = $_REQUEST['email'];

        $cor = $_REQUEST['cor'] ?? '';
        $logo = $_REQUEST['logo'] ?? '';

        $cnpj = $_REQUEST['cnpj'] ?? '';
        $transform_cnpj = withdraw_caracter($cnpj);

        $telefone = $_REQUEST['telefone'] ?? '';
        $transform_tel = withdraw_caracter($telefone);

        
        campo_obrigatorios(['nome_fantasia' => 'Informe um Nome Fantasia',
        'razao_social' => 'Qual a RazaoSocial',
        'sub_domain' => 'Informe o Sub Domain',
        'email' => 'Qual o Email',
        'telefone' => 'Digite o numero de Telefone',
        'cnpj' => 'Informe o Cnpj']);

        




        $secret = $token_parce['secret'];
        $guard_adm = $adm->list_profile($secret);
        $adm_id = $guard_adm['id'];

        // $get_instituicao = $instituicao->list_all_by_adm_id($adm_id);
        // $instituicao_id = $get_instituicao['id'];



        // $get_banc_id = $banco_cont->get_by_adm_id($adm_id);
        // $banc_id = $get_banc_id['id'];

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
}
