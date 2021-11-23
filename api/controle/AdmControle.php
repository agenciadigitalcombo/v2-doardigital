<?php

class AdmControle
{
    static function start()
    {
        echo json_encode([
            "next" => false,
            "message" => "Você não tem permissão"
        ]);
    }
    static function criar_adm()
    {
        //header('Content-Type: text/html; charset=utf-8');
        
        
        $adm = new Adm();
        $nome = $_REQUEST['nome'];
        $email = $_REQUEST['email'];
        $senha = $_REQUEST['senha'];
        $min_num = preg_match('@[0-9]@', $senha);
        $cripto = md5($senha);

        
        $telefone = $_REQUEST['telefone'];
        $caracter = array("(", ")", " ", "-");
        $transform_tel = str_replace($caracter, "", $telefone);
        
        
        if(empty($nome) or empty($email) or empty($telefone)){
            echo json_encode([
                "next" => false,
                "message" => "Preencha todos os campos"
            ]);
            return null;
        }

        if(!$min_num || strlen($senha) < 8) {
            echo json_encode([
                "next" => false,
                "message" => "A senha deve ter no minimo 8 Caracters"
            ]);
            return null;
        }

        if($adm->exist($email)){
            echo json_encode([
                "next" => false,
                "message" => "Email já em uso"
            ]);
            return null;
        } 
        
        $jwt = new Jwt();

        $adm->create($nome, $email, $cripto, $transform_tel);
        $usuario_logado = $adm->get_by_email($email);
        $payload = [
            'secret' => $usuario_logado['secret'],
            'nome' => $usuario_logado['nome'],
            'email' => $usuario_logado['email'],
            'super_adm' => $usuario_logado['super_adm'],
            'step' => $usuario_logado['step']
        ];
        echo json_encode([
            "next" => true,
            "message" => "Usuário criado com sucesso",
            "token" => $jwt->maker($payload)
        ]);
        
        
    }
    static function login()
    {
        $adm = new Adm();
        $email = $_REQUEST['email'];
        $senha = $_REQUEST['senha'];
        $cripto = md5($senha);
        if($adm->login($email, $cripto)){
            echo json_encode([
                "next" => false,
                "message" => "Email ou senha incorreto"
            ]);
            return null;
        }

        $adm->login($email, $cripto);
        $jwt = new Jwt();
        $usuario_logado = $adm->get_by_email($email);
        $payload = [
            'secret' => $usuario_logado['secret'],
            'nome' => $usuario_logado['nome'],
            'email' => $usuario_logado['email'],
            'super_adm' => $usuario_logado['super_adm'],
            'step' => $usuario_logado['step']
        ];
        echo json_encode([
            "next" => true,
            "message" => "Usuário logado com sucesso",
            'token' => $jwt->maker($payload)
        ]);
    }
    static function recuperar_senha()
    {
        

        echo json_encode([
            "next" => true,
            "message" => "Nova senha enviada por email"
        ]);
    }
    static function alterar_senha()
    {

        $adm = new Adm();
        $jwt = new Jwt();
        $senha = $_REQUEST['senha'];
        $token = $_REQUEST['token'];
        $cripto = md5($senha);
        $token_parce = $jwt->ler($token);
        $secret = $token_parce['secret'];
        
        $adm->alterar_senha($secret, $cripto);
            echo json_encode([
                "next" => true,
                "message" => "Senha atualizada"
            ]);
    }
    static function atualizar_adm()
    {
        $adm = new Adm();
        $jwt = new Jwt();
        $nome = $_REQUEST['nome'];
        $token = $_REQUEST['token'];
        $token_parce = $jwt->ler($token);
        $telefone = $_REQUEST['telefone'];
        $caracter = array("(", ")", " ", "-");
        $transform_tel = str_replace($caracter, "", $telefone);
        $token_parce = $jwt->ler($token);
        $secret = $token_parce['secret'];
       
        
                
            $adm->update($nome,  $transform_tel, $secret);
                echo json_encode([
                "next" => true,
                "message" => "Dados atualizados"
            ]);
        
       
            
      
        
    }
    static function gravatar()
    {
        Header('Content-Type: image/png');
        $email = $_GET['email'] ?? 'default@default.com.br';
        $email = md5(strtolower(trim($email)));
        $img = "https://www.gravatar.com/avatar/{$email}";
        echo file_get_contents($img);
    }
}
