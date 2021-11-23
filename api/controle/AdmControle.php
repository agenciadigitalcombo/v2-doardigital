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
        

        $adm->create($nome, $email, $cripto, $transform_tel);
        echo json_encode([
            "next" => true,
            "message" => "Usuário criado com sucesso"
        ]);
        
        
    }
    static function login()
    {
        $adm = new Adm();
        $email = $_REQUEST['email'];
        $senha = $_REQUEST['senha'];
        $cripto = md5($senha);
        if($adm->login($email, $senha)){
            echo json_encode([
                "next" => false,
                "message" => "Email ou senha incorreto"
            ]);
            return null;
        }

        $adm->login($email, $senha);
        echo json_encode([
            "next" => true,
            "message" => "Usuário logado com sucesso"
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
        $senha = $_REQUEST['senha'];
        $cripto = md5($senha);
        $id = $_REQUEST['id'];
        $transform_id = intval($id);
        if($adm->get_by_id($transform_id)){
            $adm->alterar_senha($transform_id, $cripto);
            echo json_encode([
                "next" => true,
                "message" => "Senha atualizada"
            ]);
        }else{
            echo json_encode([
                "next" => false,
                "message" => "Error ao atualizar"
            ]);
        }
    }
    static function atualizar_adm()
    {
        $adm = new Adm();
        $nome = $_REQUEST['nome'];
        $id = $_REQUEST['id'];
        $transform_id = intval($id);
        $telefone = $_REQUEST['telefone'];
        $caracter = array("(", ")", " ", "-");
        $transform_tel = str_replace($caracter, "", $telefone);
        var_dump($_REQUEST);
        
        if($adm->get_by_id($transform_id)){
                
                $adm->update($nome,  $transform_tel);
                    echo json_encode([
                    "next" => true,
                    "message" => "Dados atualizados"
                ]);
        }else{
            echo json_encode([
                "next" => false,
                "message" => "Error ao atualizar"
            ]);
        }
       
            
      
        
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
