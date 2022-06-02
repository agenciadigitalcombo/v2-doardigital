<?php

class TagManagerControle extends Controle
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
        $inter =  new Integration();
        $payload = $inter->info($instituicao_fk, 'TAG_MANAGER');

        self::printSuccess(
            "Dados",
            [
                "instituicao_fk" => $instituicao_fk,
                "key" => $payload["key_1"]
            ]
        );
    }

    static function save()
    {
        self::requireInputs([
            "token" => "informe um token",
            'instituicao_fk' => 'Informe uma identificação para instituição',
            'key' => 'Informe uma chave',
        ]);
        self::privateRouter();
        $instituicao_fk = $_REQUEST["instituicao_fk"];
        $key = $_REQUEST["key"];

        $inter =  new Integration();
        $inter->save(
            $instituicao_fk,
            "TAG_MANAGER",
            $key
        );

        self::printSuccess(
            "Salvo com sucesso",
            []
        );
    }
}
