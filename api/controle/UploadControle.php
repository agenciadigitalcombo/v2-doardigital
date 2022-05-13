<?php

class UploadControle extends Controle
{
    static function saveImage(): string
    {
        $WHITE_LIST = [
            "jpg",
            "jpeg",
            "png"
        ];
        $type_file = pathinfo($_FILES['file']["name"], PATHINFO_EXTENSION);
        if (in_array($type_file, $WHITE_LIST)) {
            $name = uniqid() . time() . ".png";
            $file = __DIR__ . "/../upload/{$name}";
            $tmp = $_FILES['file']['tmp_name'];
            if (move_uploaded_file($tmp, $file)) {
                return $name;
            }
            return "";
        }
        return "";
    }
    static function upload()
    {
        $_REQUEST['file'] = $_FILES['file'] ?? null;
        self::requireInputs([
            "token" => "informe um token",
            "file" => "envie um arquivo"
        ]);
        self::privateRouter();
        $nome = self::saveImage();
        self::printSuccess(
            "Enviado com sucesso",
            [
                "nome" => $nome
            ]
        );
    }
}
