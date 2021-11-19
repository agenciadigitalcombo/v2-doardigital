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
        echo json_encode([
            "next" => false,
            "message" => "Email já em uso"
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
