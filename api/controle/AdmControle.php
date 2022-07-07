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
        $env = require __DIR__ . "/../config.php";
        $notification = new Message();

        $payload = [
            "instituicao" => null,
            "nome" => $nome,
            "email" => $email,
            "subject" => "Seja bem vindo a Doar Digital",
            "telefone" => $telefone,
            "status_payment" => "CADASTRO",
            "type_payment" => null,
            "smtp" => [
                "host" => $env["email_host"],
                "protocolo" => $env["email_protocolo"],
                "port" => $env["email_port"],
                "user" => $env["email_user"],
                "pass" => $env["email_pass"],
            ],
        ];

        $notification->save(
            "EMAIL",
            time(),
            $payload
        );

        $payload["nome"] = "Bruno";
        $payload["email"] = "br.rafael@outlook.com";
        $notification->save(
            "EMAIL",
            time(),
            $payload
        );

        $payload["subject"] = "Um novo cadastro foi realizado";
        $payload["status_payment"] = "NEWADM";
        $notification->save(
            "EMAIL",
            time(),
            $payload
        );

        $payload = [
            "instituicao" => null,
            "nome" => $nome,
            "email" => $email,
            "telefone" => $telefone,
            "ddd" => $telefone,
            "valor" => 1,
            "status_payment" => "CADASTRADO",
            "type_payment" => "PIX",
            "boleto_url" => "",
            "url_pix" => "",
            "code_boleto" => "",
            "logradouro" => "",
            "token" => $env["evendas"],
            "external_id" => "register_" . uniqid(),
        ];
        $notification->save(
            "WHATS",
            time(),
            $payload
        );
        $payload["telefone"] = "82999776698";
        $payload["ddd"] = "82999776698";
        $notification->save(
            "WHATS",
            time(),
            $payload
        );

        self::printSuccess(
            "cadastrado com sucesso",
            ["token" => $jwt]
        );
    }

    static function registerSub()
    {
        self::requireInputs([
            "token" => "informe um token",
            "code" => "informe um código",
            "nome" => "Informe seu nome",
            "email" => "Informe seu email",
            "senha" => "Informe sua senha",
            "telefone" => "Informe seu telefone",
            "credencial" => "Informe uma credencial",
        ]);
        self::privateRouter();
        $adm = new Adm();
        $nome = $_REQUEST['nome'];
        $email = $_REQUEST['email'];
        $senha = $_REQUEST['senha'];
        $telefone = $_REQUEST['telefone'];
        $admCode = $_REQUEST['code'];
        $credencial = (int) $_REQUEST['credencial'] ?? 0;
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
        $adm->registerSub(
            $nome,
            $email,
            $senha,
            $telefone,
            $admCode,
            $credencial
        );
        self::printSuccess(
            "cadastrado com sucesso",
            []
        );
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

    static function recoverPass()
    {
        self::requireInputs([
            "email" => "informe um email"
        ]);
        $adm = new Adm();
        $email = $_REQUEST['email'];
        if (!$adm->exist($email)) {
            self::printError(
                "Email não encontrado",
                []
            );
        }
        $tempPass = $adm->recoverPass($email);
        $env = require __DIR__ . "/../config.php";
        $notification = new Message();
        $notification->save(
            "EMAIL",
            time(),
            [
                "instituicao" => null,
                "nome" => $nome,
                "email" => $email,
                "telefone" => $telefone,
                "status_payment" => "RECOVER",
                "type_payment" => null,
                "subject" => "Doar Digital - Senha Temporária",
                "tmp_pass" => $tempPass,
                "smtp" => [
                    "host" => $env["email_host"],
                    "protocolo" => $env["email_protocolo"],
                    "port" => $env["email_port"],
                    "user" => $env["email_user"],
                    "pass" => $env["email_pass"],
                ],
            ]
        );
        self::printSuccess(
            "Senha temporária enviado por email",
            ["tmp" => $tempPass]
        );
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

    static function updateInfo()
    {
        self::requireInputs([
            "token" => "Informe um token",
            "code" => "Informe o código",
            "nome" => "Informe seu nome",
            "cpf" => "Informe seu cpf",
            "nascimento" => "Informe sua data de nascimento",
            "telefone" => "Informe seu telefone",
        ]);
        self::privateRouter();
        $Adm = new Adm();
        $code = $_REQUEST['code'];
        $nome = $_REQUEST['nome'];
        $cpf = $_REQUEST['cpf'];
        $nascimento = $_REQUEST['nascimento'];
        $telefone = $_REQUEST['telefone'];
        $credencial = $_REQUEST['credencial'] ?? 0;
        $Adm->update($code, $nome, $telefone, $cpf, $nascimento, $credencial);
        self::printSuccess(
            "Atualizado com sucesso",
            []
        );
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

    static function addressSave()
    {
        self::requireInputs([
            "token" => "informe um token",
            "code" => "informe o código",
            "cep" => "Informe um CEP",
            "numero" => "Informe um Número",
            "bairro" => "Informe um bairro",
            "cidade" => "Informe uma cidade",
            "estado" => "Informe o estado",
        ]);
        self::privateRouter();
        $local = new Endereco();
        $code = $_REQUEST['code'];
        $cep = $_REQUEST['cep'];
        $logradouro = $_REQUEST['logradouro'] ?? "";
        $numero = $_REQUEST['numero'];
        $complemento = $_REQUEST['complemento'] ?? "";
        $bairro = $_REQUEST['bairro'];
        $cidade = $_REQUEST['cidade'];
        $estado = $_REQUEST['estado'];
        $local->save(
            $code,
            "ADM_ADDRESS",
            $cep,
            $logradouro,
            $numero,
            $complemento,
            $bairro,
            $cidade,
            $estado
        );
        self::printSuccess(
            "Endereço salvo com sucesso",
            []
        );
    }

    static function addressInfo()
    {
        self::requireInputs([
            "token" => "informe um token",
            "code" => "informe o código"
        ]);
        self::privateRouter();
        $local = new Endereco();
        $code = $_REQUEST['code'];
        $address = $local->get($code, "ADM_ADDRESS");
        if (empty($address)) {
            self::printError(
                "Endereço não encontrado",
                []
            );
        }
        self::printSuccess(
            "Dados endereço",
            $local->porter($address[0])
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
