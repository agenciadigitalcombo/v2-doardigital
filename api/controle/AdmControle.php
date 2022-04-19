<?php

class AdmControle extends Controle
{

    static function start()
    {
        self::printError(
            "Você não tem permissão",
            []
        );
    }

    static function register()
    {
        self::requireInputs([
            "nome" => "Informe seu nome",
            "email" => "Informe seu email",
            "senha" => "Informe sua senha",
            "telefone" => "Informe seu telefone"
        ]);
        $adm = new Adm();
        $jwt = new Jwt();
        $nome = $_REQUEST['nome'];
        $email = $_REQUEST['email'];
        $senha = $_REQUEST['senha'];
        $telefone = $_REQUEST['telefone'];
        if (strlen($senha) < 8) {
            self::printError(
                "A senha deve ter no mínimo 8 caracteres",
                []
            );
        }
        if ($adm->exist($email)) {
            self::printError(
                "Email ja em uso",
                []
            );
        }
        $adm->register($nome, $email, $senha, $telefone);
        $code = $adm->login($email, $senha);
        $jwt = $jwt->maker(["code" => $code]);
        SendGrid::send(
            'cadastro',
            [
                "to" => $email,
                "nome" => $nome
            ]
        );
        self::printSuccess(
            "cadastrado com sucesso",
            ["token" => $jwt]
        );
    }

    static function completar_profile()
    {

        $adm = new Adm();


        campo_obrigatorios([
            'cpf_cnpj' => 'Informe o Campo de Cnpj ou Cpf',
            'data_nascimento' => 'Informe a Data de nascimento',
            'tipo' => 'Informe o Tipo de Adm'
        ]);

        $token_parce = token();

        $cpf_cnpj_campo = $_REQUEST['cpf_cnpj'];
        $cpf_cnpj = valid_cpf_cnpj($cpf_cnpj_campo);

        $data_nascimento_campo = $_REQUEST['data_nascimento'];
        $data_nascimento = data_format($data_nascimento_campo);
        $tipo_adm = $_REQUEST['tipo'];




        $secret = $token_parce['secret'];

        $adm->complet_profile($secret, $data_nascimento, $cpf_cnpj, $tipo_adm);
        echo json_encode([
            "next" => true,
            "message" => "Admin atualizado"
        ]);
    }


    static function login()
    {
        self::requireInputs([
            "email" => "Informe um email",
            "senha" => "Informe uma senha"
        ]);
        $adm = new Adm();
        $jwt = new Jwt();
        $email = $_REQUEST['email'];
        $senha = $_REQUEST['senha'];
        $code = $adm->login($email, $senha);
        if (empty($code)) {
            self::printError(
                "Usuário ou senha errado",
                []
            );
        }
        $jwt = $jwt->maker(["code" => $code]);
        self::printSuccess(
            "Logado com sucesso",
            ["token" => $jwt]
        );
    }

    static function info()
    {
        self::requireInputs([
            "token" => "informe um token",
            "code" => "informe um código"
        ]);
        self::privateRouter();
        $code = $_REQUEST['code'];
        $adm = new Adm();
        $payload = $adm->getByCode($code);
        self::printSuccess(
            "Dados de Usuário",
            $payload
        );
    }

    static function listAll()
    {
        self::requireInputs([
            "token" => "informe um token"
        ]);
        self::privateRouter();
        $adm = new Adm();
        self::printSuccess(
            "Lista de administradores",
            $adm->listAll()
        );
    }    
    
    static function listAllSub()
    {
        self::requireInputs([
            "token" => "informe um token",
            "code" => "Informe um código"
        ]);
        self::privateRouter();
        $adm = new Adm();
        $code = $_REQUEST['code'];
        self::printSuccess(
            "Lista de  sub administradores",
            $adm->listAllSubAdm($code)
        );
    }

    static function recuperar_senha()
    {

        /***
         * perdeu a senha 
         * so tem o email
         * 
         * recebe o email verifica se existe tanto adm sub_adm
         * gerar uma uma senha sanvar no banco
         * enviar um email com a senha recem gerada
         */

        $adm = new Adm();

        campo_obrigatorios([
            'email' => 'Informe o email'
        ]);

        $email = valid_email($_REQUEST['email']);



        if (!$adm->get_by_email($email)) {
            echo json_encode([
                "next" => false,
                "message" => "Este endereço de Email não existe"
            ]);
            return null;
        }

        $nova_senha = uniqid();
        $nova_senha_crip = valid_senha($nova_senha);

        $adm->nova_senha($email, $nova_senha_crip);


        SendGrid::send(
            "Usuário",
            $email,
            "Doar Digital",
            "contato@doardigital.com.br",
            "NOVA SENHA GERADA COM SUCESSO!",
            "",
            "Sua senha temporaria é: {$nova_senha}",
            "",
            "",
            "",
            ''
        );



        echo json_encode([
            "next" => true,
            "message" => "Nova senha enviada por email"
        ]);
    }

    static function alterPass()
    {
        self::requireInputs([
            "token" => "informe um token",
            "code" => "informe o código",
            "senha" => "informe um numero"
        ]);
        self::privateRouter();
        $adm = new Adm();
        $code = $_REQUEST['code'];
        $senha = $_REQUEST['senha'];
        if (strlen($senha) < 8) {
            self::printError(
                "Senha deve ter no mínimo 8 caracteres",
                []
            );
        }
        $adm->alterPass($code, $senha);
        self::printSuccess(
            "Senha alterada com sucesso",
            []
        );
    }

    static function atualizar_adm()
    {
        $adm = new Adm();

        $token_parce = token();

        $nome = $_REQUEST['nome'] ?? null;
        $telefone = $_REQUEST['telefone'] ?? null;
        $cpf = $_REQUEST['cpf'] ?? null;

        $transform_tel = withdraw_caracter($telefone);
        $transform_cpf = withdraw_caracter($cpf);

        $data_nascimento_campo = $_REQUEST['data_nascimento'];
        $data_nascimento = data_format($data_nascimento_campo);



        campo_obrigatorios([
            'nome' => 'Informe um nome',
            'telefone' => 'Digite o telefone',
            'cpf' => 'Digite o cpf',
            'data_nascimento' => 'Informe a Data de Nascimento'
        ]);


        $secret = $token_parce['secret'];

        $adm->update($nome, $transform_tel, $transform_cpf, $secret, $data_nascimento);
        echo json_encode([
            "next" => true,
            "message" => "Dados atualizados"
        ]);
    }

    static function setStep()
    {
        self::requireInputs([
            "token" => "informe um token",
            "code" => "informe o código",
            "number" => "informe um numero"
        ]);
        self::privateRouter();
        $code = $_REQUEST['code'];
        $number = (int) $_REQUEST['number'] ?? 0;
        $adm = new Adm();
        $adm->setStep($code, $number);
        self::printSuccess(
            "Etapa atualizada com sucesso",
            []
        );
    }

    static function logged()
    {
        self::requireInputs([
            "token" => "Informe um token"
        ]);
        $jwt = new Jwt();
        $token = $_REQUEST['token'];
        $isValid = $jwt->valid($token);
        if (!$isValid) {
            self::printError(
                "Token Invalido",
                []
            );
        }
        self::printSuccess(
            "Token valido",
            []
        );
    }
}
