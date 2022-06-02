<?php

class SmtpControle extends Controle
{
    static function start()
    {
        self::printError(
            "Você não tem permissão",
            []
        );
    }

    static function info()
    {
        self::requireInputs([
            "token" => "informe um token",
            'instituicao_fk' => 'Informe uma identificação para instituição',
        ]);
        self::privateRouter();
        $instituicao_fk = $_REQUEST["instituicao_fk"];
        $smtp =  new Smtp();

        self::printSuccess(
            "Dados",
            $smtp->info($instituicao_fk)
        );
    }

    static function save()
    {
        self::requireInputs([
            "token" => "informe um token",
            'instituicao_fk' => 'Informe uma identificação para instituição',
            'host' => 'Informe Host',
            'protocolo' => 'Informe o Protocolo',
            'porta' => 'Informe porta',
            'email' => 'Informe um email',
            'senha' => 'Informe uma senha'
        ]);
        self::privateRouter();
        $instituicao_fk = $_REQUEST["instituicao_fk"];
        $host = $_REQUEST["host"];
        $protocolo = $_REQUEST["protocolo"];
        $porta = $_REQUEST["porta"];
        $email = $_REQUEST["email"];
        $senha = $_REQUEST["senha"];

        $smtp =  new Smtp();
        $smtp->save(
            $instituicao_fk,
            $host,
            $protocolo,
            $porta,
            $email,
            $senha
        );

        self::printSuccess(
            "Salvo com sucesso",
            []
        );
    }
}
