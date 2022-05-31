<?php

class ImportControle extends Controle
{
    static function doadores()
    {
        self::requireInputs([
            "token" => "informe um token",
            "institution_fk" => "informe uma Instituição"
        ]);
        $institution_fk = $_REQUEST['institution_fk'];
        self::privateRouter();
        if (empty($_FILES['file'])) {
            self::printError(
                "Envie um arquivo",
                []
            );
        }
        $linhas = file($_FILES['file']['tmp_name']);
        $linhas = array_map(fn ($line) => explode(',', str_replace(["\"", "\r", "\n", "'"], '', $line)), $linhas);
        $cols = $linhas[0];
        unset($linhas[0]);
        $linhas = array_values($linhas);
        $linhas = array_map(function ($line) use ($cols, $institution_fk) {
            $dataFormat = [];
            foreach ($cols as $index => $key) {
                @$dataFormat[$key] = $line[$index] ?? null;
            }
            $dataFormat['senha'] = md5(uniqid());
            $dataFormat['registro'] = date('Y-m-d');
            $dataFormat['instituicao_fk'] = $institution_fk;
            $dataFormat['external_fk'] = 'do_' .  md5( $dataFormat['external_fk'] );
            return $dataFormat;
        }, $linhas);
        $con = new Banco();
        $sql = [];
        foreach ($linhas as $payload) {
            $keys = array_keys($payload);
            $keys = implode(',',$keys);
            $values = array_values($payload);
            $values = array_map( fn($v) => "\"{$v}\"", $values );
            $values = implode(',',$values);
            $sql[] = "INSERT INTO doador ({$keys}) VALUES ($values)";
        }
        $con->exec(implode(';', $sql));
        self::printSuccess(
            "Doadores importado com sucesso",
            []
        );
    }
    
    static function doacoes()
    {
        self::requireInputs([
            "token" => "informe um token",
            "institution_fk" => "informe uma Instituição"
        ]);
        $institution_fk = $_REQUEST['institution_fk'];
        self::privateRouter();
        if (empty($_FILES['file'])) {
            self::printError(
                "Envie um arquivo",
                []
            );
        }
        $linhas = file($_FILES['file']['tmp_name']);
        $linhas = array_map(fn ($line) => explode(',', str_replace(["\"", "\r", "\n", "'"], '', $line)), $linhas);
        $cols = $linhas[0];
        unset($linhas[0]);
        $linhas = array_values($linhas);
        $linhas = array_map(function ($line) use ($cols, $institution_fk) {
            $dataFormat = [];
            foreach ($cols as $index => $key) {
                @$dataFormat[$key] = $line[$index] ?? null;
            }
            $dataFormat['instituicao_fk'] = $institution_fk;
            $dataFormat['doador_fk'] = 'do_' .  md5( $dataFormat['doador_fk'] );
            return $dataFormat;
        }, $linhas);
        $con = new Banco();
        $sql = [];
        foreach ($linhas as $payload) {
            $keys = array_keys($payload);
            $keys = implode(',',$keys);
            $values = array_values($payload);
            $values = array_map( fn($v) => "\"{$v}\"", $values );
            $values = implode(',',$values);
            $sql[] = "INSERT INTO fatura ({$keys}) VALUES ($values)";
        }
        $con->exec(implode(';', $sql));
        self::printSuccess(
            "Doadores importado com sucesso",
            []
        );
    }
    
    static function endereco()
    {
        self::requireInputs([
            "token" => "informe um token",
            "institution_fk" => "informe uma Instituição"
        ]);
        $institution_fk = $_REQUEST['institution_fk'];
        self::privateRouter();
        if (empty($_FILES['file'])) {
            self::printError(
                "Envie um arquivo",
                []
            );
        }
        $linhas = file($_FILES['file']['tmp_name']);
        $linhas = array_map(fn ($line) => explode(',', str_replace(["\"", "\r", "\n", "'"], '', $line)), $linhas);
        $cols = $linhas[0];
        unset($linhas[0]);
        $linhas = array_values($linhas);
        $linhas = array_map(function ($line) use ($cols, $institution_fk) {
            $dataFormat = [];
            foreach ($cols as $index => $key) {
                @$dataFormat[$key] = $line[$index] ?? null;
            }
            $dataFormat['fk'] = 'do_' .  md5( $dataFormat['fk'] );
            $dataFormat['tipo'] = 'ADDRESS_COSTUMER';
            return $dataFormat;
        }, $linhas);
        $con = new Banco();
        $sql = [];
        foreach ($linhas as $payload) {
            $keys = array_keys($payload);
            $keys = implode(',',$keys);
            $values = array_values($payload);
            $values = array_map( fn($v) => "\"{$v}\"", $values );
            $values = implode(',',$values);
            $sql[] = "INSERT INTO endereco ({$keys}) VALUES ($values)";
        }
        $con->exec(implode(';', $sql));
        self::printSuccess(
            "Doadores importado com sucesso",
            []
        );
    }
}
