<?php

class ApiControle
{

    static function start() {
        var_dump($_SERVER);
        echo json_encode([
            "next" => true,
            "message" => "Bem vindo a api Doar Digital",
            "links" => [
                [
                    "rel" => "POST",
                    "href" => "/login"
                ]
            ]
        ]);
    }
}
