<?php

class MessageAwsControle extends Controle
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
            "institution_fk" => "Informe a instituição",
        ]);
        self::privateRouter();

        $institution_fk = $_REQUEST['institution_fk'];
        $db = new Banco();
        $db->table('message_aws');
        $db->where([
            "institution_fk" => $institution_fk,
        ]);

        $select =  $db->select();

        $select = (array) array_map(["MessageAwsControle","porter"], $select);

        self::printSuccess(
            "Instituição Cadastrada com sucesso",
            $select
        );
    }

    static function porter($payload = [])
    {
        return [
            "tipo" => $payload["tipo"] ?? null,
            "status" => $payload["status"] ?? null,
            "data" => $payload["data"] ?? null,
            "doador_fk" => $payload["doador_fk"] ?? null,
            "fatura_fk" => $payload["fatura_fk"] ?? null,
            "ref_fk" => $payload["ref_fk"] ?? null,
            "execution_arn" => $payload["execution_arn"] ?? null,
            "institution_fk" => $payload["institution_fk"] ?? null,
        ];
    }
}
