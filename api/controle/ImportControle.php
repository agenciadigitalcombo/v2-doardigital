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
            return $dataFormat;
        }, $linhas);
        $con = new Banco();
        $con->table("doador");
        foreach ($linhas as $payload) {
            $con->insert($payload);
        }
        self::printSuccess(
            "Doadores importado com sucesso",
            []
        );
    }
}
