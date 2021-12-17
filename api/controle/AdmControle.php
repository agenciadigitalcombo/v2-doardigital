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
        $adm = new Adm();
        $jwt = new Jwt();
        
        
        $nome = $_REQUEST['nome'] ?? '';
        $email = email();
        $senha = senha();
        $telefone = $_REQUEST['telefone'] ?? '';
        

        $transform_tel = withdraw_caracter($telefone);

        if (empty($nome) or empty($email) or empty($telefone)) {
            echo json_encode([
                "next" => false,
                "message" => "Preencha todos os campos"
            ]);
            return null;
        }


        $adm->create($nome, $email, $senha, $transform_tel);
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
        $jwt = new Jwt();

        $email = email();
        $senha = senha();
        
        if ($adm->login($email, $senha)) {
            echo json_encode([
                "next" => false,
                "message" => "Email ou senha incorreto"
            ]);
            return null;
        }

        $adm->login($email, $senha);
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

    static function profile()
    {
        $adm = new Adm();

        $token_parce = token();
        
       
        $secret = $token_parce['secret'];
        $guard = $adm->list_profile($secret);
       
        $payload = [
            'secret' => $guard['secret'],
            'nome' => $guard['nome'],
            'cpf' => $guard['cpf'],
            'email' => $guard['email'],
            'telefone' => $guard['telefone'],
            'step' => $guard['step']
        ];
        echo json_encode([
            'next' => true,
            'message' => 'Dados do Usuario',
            'dados' => $payload
        ]);
    }

    static function all_profile()
    {
        $adm = new Adm();
        $dados = $adm->list_all();

        foreach($dados as $g){
            $payload [] = [
                'secret' => $g['secret'],
                'nome' => $g['nome'],
                'cpf' => $g['cpf'],
                'email' => $g['email'],
                'telefone' => $g['telefone'],
                'step' => $g['step']
            ];
            
        }   
        echo json_encode([
            'next' => true,
            'message' => 'Dados do Usuario',
            'dados' => $payload
        ]);

       
           
       
       
    }
    
    static function recuperar_senha()
    {
        $email = new Email();
        $id_instituicao = $_REQUEST['id'] ?? '';

        $endereco = $_REQUEST['endereco'] ?? '';
        $assunto = $_REQUEST['assunto'] ?? '';
        $content = "";

        $email->send($id_instituicao, $endereco, $assunto, $content);
        echo json_encode([
            "next" => true,
            "message" => "Nova senha enviada por email"
        ]);
    }

    static function alterar_senha()
    {
        $adm = new Adm();
        
        $token_parce = token();
        $senha = senha();
        
        $secret = $token_parce['secret'];

        $adm->alterar_senha($secret, $senha);
        echo json_encode([
            "next" => true,
            "message" => "Senha atualizada"
        ]);
    }

    static function atualizar_adm()
    {
        $adm = new Adm();

        $token_parce = token();
        
        $nome = $_REQUEST['nome'];
        $telefone = $_REQUEST['telefone'];
        $cpf = $_REQUEST['cpf'];

        $transform_tel = withdraw_caracter($telefone);
        $transform_cpf = withdraw_caracter($cpf);
        

        $campos_obrigatorios = [
            'nome',
            'telefone',
            'cpf'
        ];
        $lb = [
            'nome' => 'Informe um nome',
            'telefone' => 'Digite o telefone',
            'cpf' => 'Digite o cpf'
            
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

        $adm->update($nome, $transform_tel, $transform_cpf, $secret);
        echo json_encode([
            "next" => true,
            "message" => "Dados atualizados"
        ]); 
        
    }

    static function update_step()
    {
        $adm = new Adm();
        
        $token_parce = token();

        $step = $_REQUEST['step'];

        $secret = $token_parce['secret'];

        $adm->update_step($secret, $step);

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

    static function validar_token()
    {
        $jwt = new Jwt();

        $token = $_REQUEST['token'] ?? '';
        
        $status = $jwt->valid($token);
        $token_parse = $jwt->ler($token);
        echo json_encode([
            "next" => $status,
            "message" => null,
            "token_parse" => $token_parse
        ]);
    }
}
