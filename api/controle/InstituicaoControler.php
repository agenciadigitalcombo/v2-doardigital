<?php

class InstituicaoControler{


    static function create_instituicao()
    {
        $instituicao = new Instituicao();
        $adm = new Adm();
        $jwt = new Jwt();

        $token =  $_REQUEST['token'] ?? '';
        $valid_token = $jwt->valid($token);
        $token_parce = $jwt->ler($token);

        $nome_fantasia = $_REQUEST['nome_fantasia'] ?? '';
        $razao_social = $_REQUEST['razao_social'] ?? '';
        $sub_domain = $_REQUEST['sub_domain'] ?? '';
        $email = $_REQUEST['email'] ?? '';

        $cor = $_REQUEST['cor'] ?? '';
        $logo = $_REQUEST['logo'] ?? '';
        $cnpj = $_REQUEST['cnpj'] ?? '';
        $telefone = $_REQUEST['telefone'] ?? '';

        $caracter = array(
            "(",
            ")",
            " ",
            "-",
            ".",
            ","
        );
        $transform_tel = str_replace($caracter, "", $telefone);
        $transform_cnpj = str_replace($caracter, "", $cnpj);

        $campos_obrigatorios = [
            'token',
            'nome_fantasia',
            'razao_social',
            'sub_domain',
            'email',
            'cor',
            'telefone',
            'cnpj'
        ];
        $lb = [
            'token' => 'Informe o Token',
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

        if(!$valid_token){
            echo json_encode([
                'next' => false,
                'message' => 'Token invalido'
            ]);
            return null;
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
        $jwt = new Jwt();

        $token =  $_REQUEST['token'] ?? '';
        $valid_token = $jwt->valid($token);
        $token_parce = $jwt->ler($token);

        $nome_fantasia = $_REQUEST['nome_fantasia'];
        $razao_social = $_REQUEST['razao_social'];
        $email = $_REQUEST['email'];

        $cor = $_REQUEST['cor'];
        $logo = $_REQUEST['logo'];

        $cnpj = $_REQUEST['cnpj'];
        $telefone = $_REQUEST['telefone'];

        $caracter = array(
            "(",
            ")",
            " ",
            "-",
            ".",
            ","
        );
        $transform_tel = str_replace($caracter, "", $telefone);
        $transform_cnpj = str_replace($caracter, "", $cnpj);

        $campos_obrigatorios = [
            'token',
            'nome_fantasia',
            'razao_social',
            'email',
            'cor',
            'telefone',
            'logo',
            'cnpj'
        ];
        $lb = [
            'token' => 'Informe o Token',
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

        if(!$valid_token){
            echo json_encode([
                'next' => false,
                'message' => 'Token invalido'
            ]);
            return null;
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
                'nome_fantasia' => $g['nome_fantasia'],
                'razao_social' => $g['razao_social'],
                'email' => $g['email'],
                'telefone' => $g['telefone'],
                'cor' => $g['cor'],
                'cnpj' => $g['cnpj'],
                'logo' => $g['logo'],
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
        
    }
}
