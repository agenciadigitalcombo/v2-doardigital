<?php

class InstituicaoControler
{

    static function create_instituicao()
    {
        $instituicao = new Instituicao();
        $adm = new Adm();

        $token_parce = token();

        $nome_fantasia = $_REQUEST['nome_fantasia'] ?? '';
        $razao_social = $_REQUEST['razao_social'] ?? '';
        $sub_domain = $_REQUEST['sub_domain'] ?? '';
        $email = email();

        $cor = $_REQUEST['cor'] ?? '';
        $logo = $_REQUEST['logo'] ?? '';
        
        $cnpj = $_REQUEST['cnpj'] ?? '';
        $transform_cnpj = withdraw_caracter($cnpj);

        $telefone = $_REQUEST['telefone'] ?? '';
        $transform_tel = withdraw_caracter($telefone);

        
        $campos_obrigatorios = [
            'nome_fantasia',
            'razao_social',
            'sub_domain',
            'email',
            'cor',
            'telefone',
            'cnpj'
        ];
        $lb = [
            'nome_fantasia' => 'Informe um Nome Fantasia',
            'razao_social' => 'Qual a RazaoSocial',
            'sub_domain' => 'Informe o Sub Domain',
            'email' => 'Qual o Email',
            'cor' => 'Informe a Cor',
            'telefone' => 'Digite o numero de Telefone',
            'cnpj' => 'Informe o Cnpj'
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

        $instituicao->create($adm_id, $nome_fantasia, $razao_social, $sub_domain, $email, $transform_cnpj, $transform_tel, $cor, $logo);
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

        $email = email();

        $cor = $_REQUEST['cor'];
        $logo = $_REQUEST['logo'];

        $cnpj = $_REQUEST['cnpj'];
        $telefone = $_REQUEST['telefone'];

        $transform_cnpj = withdraw_caracter($cnpj);
        $transform_tel = withdraw_caracter($telefone);


        $campos_obrigatorios = [
            'nome_fantasia',
            'razao_social',
            'email',
            'cor',
            'telefone',
            'logo',
            'cnpj'
        ];
        $lb = [
            'nome_fantasia' => 'Informe um Nome Fantasia',
            'razao_social' => 'Qual a RazaoSocial',
            'email' => 'Qual o Email',
            'cor' => 'Informe a Cor',
            'telefone' => 'Digite o numero de Telefone',
            'logo' => 'Qual a logo',
            'cnpj' => 'Informe o Cnpj'
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

        $instituicao->update($adm_id, $nome_fantasia, $razao_social, $email, $transform_cnpj, $transform_tel, $cor, $logo);
        echo json_encode([
            'next' => true,
            'message' => 'Instituicao atualizada'
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
            'message' => 'Todos os SubAdm',
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
            'message' => 'Todas Instituicoes',
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
}
