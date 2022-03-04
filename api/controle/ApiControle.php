<?php

class ApiControle
{

    static function start() {
        echo json_encode([
            "next" => true,
            "message" => "Bem vindo a api Doar Digital",
            "links" => [
                [
                    "rel" => "POST",
                    "href" => get_domain() . "/api/login"
                ]
            ]
        ]);
    }
}
