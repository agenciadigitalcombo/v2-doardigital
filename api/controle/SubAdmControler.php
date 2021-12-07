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
        
        $adm_email = $token_parce['email'];
        $guard_adm_logado = $adm->get_by_email($adm_email);
        if(empty($guard_adm_logado)){
            echo json_encode([
                "next" => false,
                "message" => "Usuario nao logado"
            ]);
            return null;
        }

        $adm_secret = $token_parce['secret'];
        $busca_id = $adm->list_profile($adm_secret);
        $adm_id = $busca_id['id'];
        
        $subadm->create($adm_id, $nome, $email, $cripto_senha, $adm_secret, $transform_tel);
        

        $payload = [
            'adm_id' => $guard_adm_logado['adm_id'],
            'nome' => $guard_adm_logado['nome'],
            'email' => $guard_adm_logado['email'],
            'senha' => $guard_adm_logado['senha'],
            'secret' => $guard_adm_logado['secret'],
            'telefone' => $guard_adm_logado['telefone']
            
            
        ];
        echo json_encode([
            "next" => true,
            "message" => 'Sub Adm criado',
            "token" => $jwt->maker($payload)
        ]);

    }



}
