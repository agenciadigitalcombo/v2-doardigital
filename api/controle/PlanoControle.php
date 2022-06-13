<?php

class PlanoControle extends Controle
{

    static function start()
    {
        self::printError(
            "Você não tem permissão",
            []
        );
    }

    static function register()
    {
        self::requireInputs([
            "token" => "informe um token",
            "fk" => "Informe um identificador da instituição",
            "price" => "informe o valor",
        ]);
        self::privateRouter();
        $fk = $_REQUEST['fk'];
        $price = (float) $_REQUEST['price'] ?? 0;
        $coupon = $_REQUEST['coupon'] ?? "";
        $send_message = (int) $_REQUEST['send_message'] ?? 0;
        $institution = (int) $_REQUEST['institution'] ?? 0;
        $trial = (int) $_REQUEST['trial'] ?? 0;
        $subadm = (int) $_REQUEST['subadm'] ?? 0;
        $plan = new Plano();
        $plan->register(
            $fk,
            $price,
            $coupon,
            $send_message,
            $institution,
            $trial,
            $subadm
        );
        self::printSuccess(
            "Registrado com sucesso",
            []
        );
    }

    static function list()
    {
        self::requireInputs([
            "fk" => "Informe um identificador da instituição",
        ]);
        $plan = new Plano();
        $fk = $_REQUEST['fk'] ?? 0;
        self::printSuccess(
            "lista de planos",
            $plan->listAll($fk)
        );
    }

    static function info()
    {
        self::requireInputs([
            "token" => "informe um token",
            "id" => "Informe o identificador",
        ]);
        self::privateRouter();
        $plan = new Plano();
        $id = (int) $_REQUEST['id'] ?? 0;
        self::printSuccess(
            "Informações do plano",
            $plan->info($id)
        );
    }

    static function del()
    {
        self::requireInputs([
            "token" => "informe um token",
            "id" => "Informe o identificador",
        ]);
        self::privateRouter();
        $id = (int) $_REQUEST['id'] ?? 0;
        $plan = new Plano();
        $plan->del($id);
        self::printSuccess(
            "Apagado com sucesso",
            []
        );
    }

    static function update()
    {
        self::requireInputs([
            "token" => "informe um token",
            "id" => "Informe o identificador",
            "price" => "informe o valor",
        ]);
        self::privateRouter();
        $id = (int) $_REQUEST['id'] ?? 0;
        $price = (float) $_REQUEST['price'] ?? 0;
        $coupon = $_REQUEST['coupon'] ?? "";
        $send_message = (int) $_REQUEST['send_message'] ?? 0;
        $institution = (int) $_REQUEST['institution'] ?? 0;
        $trial = (int) $_REQUEST['trial'] ?? 0;
        $subadm = (int) $_REQUEST['subadm'] ?? 0;
        $plan = new Plano();
        $plan->update(
            $id,
            $price,
            $coupon,
            $send_message,
            $institution,
            $trial,
            $subadm
        );
        self::printSuccess(
            "Atualizado com sucesso",
            []
        );
    }
}
