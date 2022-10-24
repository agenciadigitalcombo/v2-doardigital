<?php

class RelatorioControle extends Controle
{
    static function start()
    {
        self::requireInputs([
            // "token" => "informe um token",
            "institution_fk" => "informe o identificador da instituição",
        ]);

        // self::privateRouter();

        $fk = $_REQUEST["institution_fk"];

        $relatorio = new Relatorio();

        $inst = self::inst($fk);
        $donations = self::allDonation($fk);
        $metas = self::allMetas($fk);

        $donations = array_map([ 'Fatura', 'porter' ], $donations);
        $metas = array_map(['Metas','porter'], $metas);
        $inst = Instituicao::porter($inst);

        $render = $relatorio->teste($donations, $metas);
        

        self::printSuccess(
            "Relatório",
            $render
        );
    }

    static function inst($fk)
    {
        $db_inst = new Banco();
        $db_inst->table('institution');
        $db_inst->where([
            "institution_fk" => $fk
        ]);
        return $db_inst->select()[0] ?? [];
    }
    static function allDonation($fk)
    {
        $db_inst = new Banco();
        $db_inst->table('fatura');
        $db_inst->where([
            "instituicao_fk" => $fk
        ]);
        return $db_inst->select();
    }
    static function allMetas($fk)
    {
        $db_inst = new Banco();
        $db_inst->table('meta');
        $db_inst->where([
            "instituicao_fk" => $fk,
            "ano" => "2022"
        ]);
        return $db_inst->select();
    }
}
