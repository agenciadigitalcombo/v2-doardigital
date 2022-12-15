<?php

class TemplateWhatsapp  extends Controle
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
            "content" => "Informe um conteúdo",
        ]);
        self::privateRouter();
        $instituicao_fk = $_REQUEST["instituicao_fk"];
        $tipo = $_REQUEST["tipo"];
        $status_pagamento = $_REQUEST["status_pagamento"];
        $content = $_REQUEST["content"];
        $template = new MessagesWhats();
        $template->save(
            $instituicao_fk,
            $tipo,
            $status_pagamento,
            $content
        );
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
        $instituicao_fk = $_REQUEST["instituicao_fk"];
        $tipo = $_REQUEST["tipo"];
        $status_pagamento = $_REQUEST["status_pagamento"];
        $template = new MessagesWhats();
        self::printSuccess(
            "Dados",
            $template->info($instituicao_fk, $tipo, $status_pagamento)
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
        $instituicao_fk = $_REQUEST["instituicao_fk"];
        $tipo = $_REQUEST["tipo"];
        $status_pagamento = $_REQUEST["status_pagamento"];
        $template = new MessagesWhats();
        $template->recover($instituicao_fk, $tipo, $status_pagamento);
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
        $instituicao_fk = $_REQUEST['instituicao_fk'];
        $template = new MessagesWhats();
        self::printSuccess(
            "Lista de messages",
            $template->list($instituicao_fk)
        );
    }

    static function install()
    {
        self::requireInputs([
            "token" => "informe um token",
            "instituicao_fk" => "Informe uma identificação de instituição",
        ]);
        self::privateRouter();
        $instituicao_fk = $_REQUEST['instituicao_fk'];
        $template = new MessagesWhats();
        $template->maker($instituicao_fk);
        self::printSuccess(
            "Instalação feita com sucesso",
            []
        );
    }
}
