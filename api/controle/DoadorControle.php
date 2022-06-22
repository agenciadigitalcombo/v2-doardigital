<?php

class DoadorControle extends Controle
{
    static function start()
    {
        self::printError(
            "Você não tem permissão",
            []
        );
    }

    static function list()
    {
        self::requireInputs([
            "token" => "informe um token",
            "instituicao_fk" => "informe uma identificação de instituição",
        ]);
        self::privateRouter();
        $instituicao_fk = $_REQUEST['instituicao_fk'];
        $assinatura = new Banco();
        $assinatura->table("assinatura");
        $assinatura->where(["instituicao_fk" => $instituicao_fk]);
        $todasAssinaturas = $assinatura->select();
        $fkAssinantes = array_map(fn ($d) => $d["doador_fk"], $todasAssinaturas);
        $doador = new Doador();
        $todosDoadores = $doador->listAll($instituicao_fk);
        $todosDoadores = array_map(function ($d) use ($fkAssinantes) {
            if (in_array($d["external_fk"], $fkAssinantes)) {
                $d["recorrente"] = true;
            }
            return $d;
        }, $todosDoadores);
        self::printSuccess(
            "Lista de doadores",
            array_reverse($todosDoadores)
        );
    }

    static function info()
    {
        self::requireInputs([
            "token" => "informe um token",
            "instituicao_fk" => "Informe uma identificação de instituição",
            "cpf" => "Informe o CPF"
        ]);
        self::privateRouter();
        $instituicao_fk = $_REQUEST['instituicao_fk'];
        $cpf = $_REQUEST['cpf'];
        $doador = new Doador();
        self::printSuccess(
            "Informação doador",
            $doador->info($cpf, $instituicao_fk)
        );
    }
}
