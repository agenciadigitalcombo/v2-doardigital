<?php
class SubAdmControler
{
    static function start()
    {
        echo json_encode([
            "next" => false,
            "message" => "Você não tem permissão"
        ]);
    }

    static function criar_subadm()
    {
        $adm = new Adm();
        $subadm = new SubAdm();
        $jwt = new Jwt();
        
        $token = $_REQUEST['token'] ?? '';
        $token_parce = $jwt->ler($token);
        $valid_token = $jwt->valid($token);
        
        $nome = $_REQUEST['nome'] ?? '';
        $email = $_REQUEST['email'] ?? '';

        $senha = $_REQUEST['senha'] ?? '';
        $min_senha = preg_match('@[0-9]@', $senha);
        $cripto_senha = md5($senha);
        
        $telefone = $_REQUEST['telefone'] ?? '';
        $credencial_id = $_REQUEST['credencial_id'] ?? '';

        $caracter = array(
            "(",
            ")",
            " ",
            "-"
        );
        $transform_tel = str_replace($caracter, "", $telefone);
        
       
       
        $campos_obrigatorios = [
            'token',
            'nome',
            'email',
            'senha',
            'telefone',
            'credencial_id'
        ];
        $lb = [
            'token' => 'Informe o Token',
            'nome' => 'Informe um nome',
            'email' => 'Digite um email',
            'senha' => 'digite a senha',
            'telefone' => 'Informe o telefone',
            'credencial_id' => 'Informe uma credencial'
            
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
                'message' => 'Token Invalido'
            ]);
        }

        if (! $min_senha || strlen($senha) < 8) {
            echo json_encode([
                "next" => false,
                "message" => "A senha deve ter no minimo 8 Caracters"
            ]);
            return null;

        }

        if($subadm->exist($email)){
            echo json_encode([
                "next" => false,
                "message" => "Email já em uso"
            ]);
            return null;
        }
        
        // $adm_email = $token_parce['email'];
        // $guard_adm_logado = $adm->get_by_email($adm_email);
        // if(empty($guard_adm_logado)){
        //     echo json_encode([
        //         "next" => false,
        //         "message" => "Usuario nao logado"
        //     ]);
        //     return null;
        // }
        $adm_secret = $token_parce['secret'];
        $busca_id = $adm->list_profile($adm_secret);
        $adm_id = $busca_id['id'];
    
        $subadm->create($adm_id, $nome, $email, $cripto_senha, $transform_tel, $credencial_id);
        
        
        echo json_encode([
            "next" => true,
            "message" => 'Sub Adm criado'
        ]);

    }

    static function update_subadm()
    {
        $subadm = new SubAdm();
        $jwt = new Jwt();

        $token = $_REQUEST['token'] ?? '';
        $valid_token = $jwt->valid($token);
        $token_parce = $jwt->ler($token);

        $nome = $_REQUEST['nome'];
        $credencial_id = $_REQUEST['credencial_id'];

        $telefone = $_REQUEST['telefone'];
        $caracter = array(
            "(",
            ")",
            " ",
            "-"
        );
        $transform_tel = str_replace($caracter, "", $telefone);
        
       
       
        $campos_obrigatorios = [
            'token',
        ];
        $lb = [
            'token' => 'Informe o Token',
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

        if (! $valid_token) {
            echo json_encode([
                'next' => false,
                'message' => 'Token invalido'
            ]);
            return null;
        }
        
        
        $secret = $token_parce['secret'];
        $subadm->update($nome, $secret, $transform_tel, $credencial_id);
        echo json_encode([
            'next' => true,
            'message' => 'Dados atualizados'
        ]);
        

    }

    static function subadm()
    {
        $subadm = new SubAdm();
        $jwt = new Jwt();

        $token = $_REQUEST['token'] ?? '';
        $valid_token = $jwt->valid($token);
        $token_parce = $jwt->ler($token);


        $campos_obrigatorios = [
            'token',
        ];
        $lb = [
            'token' => 'Informe o Token',
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
                'message' => 'Token Invalido'
            ]);
        }

        
        
        $secret = $token_parce['secret'];
        $listar = $subadm->list_profile($secret);

        
        
        $payload = [
            'nome' => $listar['nome'],
            'email' => $listar['email'],
            'telefone' => $listar['telefone'],
            'credencial_id' => $listar['credencial_id']
        ];
        echo json_encode([
            'next' => true,
            'message' => 'Lista do Sub Adm',
            'dados' => $payload
        ]);

    }

    static function list_all()
    {
        

        $subAdm = new SubAdm();
        $jwt = new Jwt();
        $adm = new Adm();

        $token = $_REQUEST['token'] ?? '';
        $valid_token = $jwt->valid($token);
        $token_parce = $jwt->ler($token);


        if(!$valid_token){
            echo json_encode([
                'next' => false,
                'message' => 'Token Invalido'
            ]);
        }


        $campos_obrigatorios = [
            'token',
        ];
        $lb = [
            'token' => 'Informe o Token',
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
        $get_adm_id = $adm->list_profile($secret);
        $adm_id = $get_adm_id['id'];

        $guard = $subAdm->list_all_by_adm($adm_id);
        
        foreach ($guard as $g) {
            $payload [] = [
                'nome' => $g['nome'],
                'email' => $g['email'],
                'foto' => gravatar($g['email']),
                'telefone' => $g['telefone'],
                'credencial_id' => $g['credencial_id'],
                'status' => $g['status']
            ];
            
        }

        echo json_encode([
            'next' => true,
            'message' => 'Todos os SubAdm',
            'dados' => $payload
        ]);
    }



}
