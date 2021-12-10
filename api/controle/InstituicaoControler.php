<?php

class InstituicaoControler{


    static function create_instituicao()
    {
        $instituicao = new Instituicao();
        $adm = new Adm();
        $jwt = new Jwt();

        $token =  "eyJzZWNyZXQiOiIgNjFhNjY2N2E4NGFmYyIsIm5vbWUiOiJyYWZhZWwiLCJlbWFpbCI6InJhZmFlbEBnbWFpbC5jb20iLCJzdXBlcl9hZG0iOiIwIiwic3RlcCI6IjEifQ==.4659492ae33cb9ca6889fdee955a4ee0b57c5330";//$_REQUEST['token'] ?? '';
        $valid_token = $jwt->valid($token);
        $token_parce = $jwt->ler($token);

        $nome_fantasia = "empresa";//$_REQUEST['nome_fantasia'] ?? '';
        $razao_social = "teste";//$_REQUEST['razao_social'] ?? '';
        $sub_domain = "testando 12";//$_REQUEST['sub_domain'] ?? '';
        $email = "victordo@gmail";//$_REQUEST['email'] ?? '';

        $cor = "verde";//$_REQUEST['cor'] ?? '';
        $logo = "digital";//$_REQUEST['logo'] ?? '';
        $cnpj = "324234234";//$_REQUEST['cnpj'] ?? '';
        $telefone = "746541556";//$_REQUEST['telefone'] ?? '';

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
}
