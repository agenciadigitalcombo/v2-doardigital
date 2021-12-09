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
        $credencial = new CredencialControler();
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
            
        ];
        $lb = [
            'token' => 'Informe o Token',
            'nome' => 'Informe um nome',
            'email' => 'Digite um email',
            'senha' => 'digite a senha',
            'telefone' => 'Informe o telefone',
            
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
    
        $subadm->create($adm_id, $nome, $email, $cripto_senha, $transform_tel);
        $create_token = $subadm->get_by_email($email);
        $payload = [
            
            'adm_id' => $create_token['adm_id'],
            'nome' => $create_token['nome'],
            'email' => $create_token['email'],
            'senha' => $create_token['senha'],
            'telefone' => $create_token['telefone'],
            'secret' => $create_token['secret']
            
        ];
        echo json_encode([
            "next" => true,
            "message" => 'Sub Adm criado',
            "token" => $jwt->maker($payload)
        ]);

    }

    static function update_subadm()
    {
        $subadm = new SubAdm();
        $jwt = new Jwt();

        $token = $_REQUEST['token'] ?? '';
        $valid_token = $jwt->valid($token);
        $token_parce = $jwt->ler($token);

        $nome = $_REQUEST['nome'] ?? '';
        $telefone = $_REQUEST['telefone'] ?? '';
        
        $telefone = $_REQUEST['telefone'] ?? '';
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
            'telefone'
            
        ];
        $lb = [
            'token' => 'Informe o Token',
            'nome' => 'Informe um nome',
            'telefone' => 'Informe o telefone'
            
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
        $subadm->update($nome, $secret, $transform_tel);
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

        if(!$valid_token){
            echo json_encode([
                'next' => false,
                'message' => 'Token Invalido'
            ]);
        }


        
        
        $secret = $token_parce['secret'];
        $listar = $subadm->list_profile($secret);

        
        
        $payload = [
            'nome' => $listar['nome'] ?? '',
            'email' => $listar['email'] ?? '',
            'telefone' => $listar['telefone'] ?? ''
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
        $guard = $subAdm->list_all();
        
        foreach ($guard as $g) {
            $payload [] = [
                'adm_id' => $g['adm_id'],
                'nome' => $g['nome'],
                'email' => $g['email'],
                'telefone' => $g['telefone']
            ];
        }

        echo json_encode([
            'next' => true,
            'message' => 'Todos os SubAdm',
            'dados' => $payload
        ]);
    }



}
