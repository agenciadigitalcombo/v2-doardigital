<?php

class EvendasControle extends Controle
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
        $payload = $inter->info($instituicao_fk, 'EVENDAS');

        self::printSuccess(
            "Dados",
            [
                "instituicao_fk" => $instituicao_fk,
                "canal" => $payload["key_1"]
            ]
        );
    }

    static function save()
    {
        self::requireInputs([
            "token" => "informe um token",
            'instituicao_fk' => 'Informe uma identificação para instituição',
            'canal' => 'Informe uma canal',
        ]);
        self::privateRouter();
        $instituicao_fk = $_REQUEST["instituicao_fk"];
        $canal = $_REQUEST["canal"];

        $inter =  new Integration();
        $inter->save(
            $instituicao_fk,
            "EVENDAS",
            $canal
        );

        self::printSuccess(
            "Salvo com sucesso",
            []
        );
    }
}
