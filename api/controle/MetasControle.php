<?php

class MetasControle extends Controle
{

    static function start()
    {
        self::printError(
            "Você não tem permissão",
            []
        );
    }

    static function save()
    {
        self::requireInputs([
            'instituicao_fk' => 'Informe a instituição',
            'ano' => 'Informe o ano',
            'janeiro' => 'Informe o mês de janeiro',
            'fevereiro' => 'Informe o mês de fevereiro',
            'marco' => 'Informe o mês de marco',
            'abril' => 'Informe o mês de abril',
            'maio' => 'Informe o mês de maio',
            'junho' => 'Informe o mês de junho',
            'julho' => 'Informe o mês de julho',
            'agosto' => 'Informe o mês de agosto',
            'setembro' => 'Informe o mês de setembro',
            'outubro' => 'Informe o mês de outubro',
            'novembro' => 'Informe o mês de novembro',
            'dezembro' => 'Informe o mês de dezembro',
        ]);

        // self::privateRouter();

        $meta = new Metas();
        $instituicao_fk = $_REQUEST['instituicao_fk'];
        $ano = $_REQUEST['ano'];
        $janeiro = $_REQUEST['janeiro'];
        $fevereiro = $_REQUEST['fevereiro'];
        $marco = $_REQUEST['marco'];
        $abril = $_REQUEST['abril'];
        $maio = $_REQUEST['maio'];
        $junho = $_REQUEST['junho'];
        $julho = $_REQUEST['julho'];
        $agosto = $_REQUEST['agosto'];
        $setembro = $_REQUEST['setembro'];
        $outubro = $_REQUEST['outubro'];
        $novembro = $_REQUEST['novembro'];
        $dezembro = $_REQUEST['dezembro'];
        $meta->save(
            $instituicao_fk,
            $ano,
            $janeiro,
            $fevereiro,
            $marco,
            $abril,
            $maio,
            $junho,
            $julho,
            $agosto,
            $setembro,
            $outubro,
            $novembro,
            $dezembro
        );
        self::printSuccess(
            "Salvo com sucesso",
            []
        );
    }

    static function info()
    {
        self::requireInputs([
            'instituicao_fk' => 'Informe a instituição',
            'ano' => 'Informe o ano',
        ]);
        $meta = new Metas();
        $instituicao_fk = $_REQUEST['instituicao_fk'];
        $ano = $_REQUEST['ano'];
        self::printSuccess(
            "Metas do ano " . $ano,
            $meta->info($instituicao_fk, $ano)
        );
    }
}
