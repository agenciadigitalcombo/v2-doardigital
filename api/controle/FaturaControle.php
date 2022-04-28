<?php

class FaturaControle extends Controle
{
    static function start()
    {
        self::printError(
            "Você não tem permissão",
            []
        );
        // self::privateRouter();
    }

    static function transaction() {
        self::requireInputs([
            "token" => "informe um token"
        ]);
        
    }
}
