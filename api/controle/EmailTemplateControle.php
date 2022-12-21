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
        $instituicao_fk = $_REQUEST["instituicao_fk"];
        $tipo = $_REQUEST["tipo"];
        $status_pagamento = $_REQUEST["status_pagamento"];
        $assunto = $_REQUEST["assunto"];
        $content = $_REQUEST["content"];
        $template = new EmailTemplate();
        $template->save(
            $instituicao_fk,
            $tipo,
            $status_pagamento,
            $assunto,
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
        $template = new EmailTemplate();
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
        $template = new EmailTemplate();
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
        $template = new EmailTemplate();
        self::printSuccess(
            "Lista de Email",
            $template->list($instituicao_fk)
        );
    }
    static function reset()
    {
        self::requireInputs([
            "token" => "informe um token",
            "instituicao_fk" => "Informe uma identificação de instituição",
        ]);
        self::privateRouter();
        $instituicao_fk = $_REQUEST['instituicao_fk'];
        $template = new EmailTemplate();
        $template->resetInst($instituicao_fk);
        self::printSuccess(
            "Dados restaurados",
            []
        );
    }
}
