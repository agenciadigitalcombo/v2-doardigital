<?php

class UploadControler{

    static function upload()
    {
        
        $nome_img = upload();
        
        echo json_encode([
            'next' => true,
            'message' => 'Enviado com sucesso',
            'nome_image' => $nome_img
        ]);
    }
}