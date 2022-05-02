<?php

class UploadControler extends Controle{

    static function upload()
    {
        $nome_img = upload();
        self::printSuccess(
            "Enviado com sucesso", 
            [
                "nome" => $nome_img
            ]
        );      
    }
}