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
        $telefone = $_REQUEST['telefone'];
        $caracter = array("(", ")", " ", "-");
        $transform_tel = str_replace($caracter, "", $telefone);
        $min_num    = preg_match('@[0-9]@', $senha);

        if($adm->exist($email)){
            echo json_encode([
                "next" => false,
                "message" => "Email já em uso"
            ]);
            return null;
        }

        if(empty($nome) and empty($email) and empty($telefone)){
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
        

        $adm->create($nome, $email, $senha, $telefone);
        echo json_encode([
            "next" => true,
            "message" => "Usuário logado com sucesso"
        ]);
        
        
    }
    static function login()
    {
        echo json_encode([
            "next" => false,
            "message" => "Email ou senha estão errados"
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
        echo json_encode([
            "next" => false,
            "message" => "Error ao atualizar"
        ]);
    }
    static function atualizar_adm()
    {
        echo json_encode([
            "next" => false,
            "message" => "Error ao atualizar"
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
