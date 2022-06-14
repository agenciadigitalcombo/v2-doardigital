<?php

class EmailTemplateControle  extends Controle
{
    static function start()
    {
        self::printError(
            "Você não tem acesso",
            []
        );
    }

    static function save()
    {
        self::requireInputs([
            "token" => "informe um token",
            "instituicao_fk" => "Informe uma identificação de instituição",
            "tipo" => "Informe um tipo",
            "status_pagamento" => "Informe um status de pagamento",
            "assunto" => "Informe um assunto",
            "content" => "Informe um conteúdo",
        ]);
        self::privateRouter();
        self::printSuccess(
            "Salvo com sucesso",
            []
        );
    }

    static function info()
    {
        self::requireInputs([
            "token" => "informe um token",
            "instituicao_fk" => "Informe uma identificação de instituição",
            "tipo" => "Informe um tipo",
            "status_pagamento" => "Informe um status de pagamento",
        ]);
        self::privateRouter();
        self::printSuccess(
            "Dados",
            []
        );
    }

    static function recover()
    {
        self::requireInputs([
            "token" => "informe um token",
            "instituicao_fk" => "Informe uma identificação de instituição",
            "tipo" => "Informe um tipo",
            "status_pagamento" => "Informe um status de pagamento",
        ]);
        self::privateRouter();
        self::printSuccess(
            "Atualizado com sucesso",
            []
        );
    }

    static function list()
    {
        self::requireInputs([
            "token" => "informe um token",
            "instituicao_fk" => "Informe uma identificação de instituição",
        ]);
        self::privateRouter();
        self::printSuccess(
            "Lista de Email",
            []
        );
    }
}
