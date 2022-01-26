<?php

class EmailContoler{
    
    static function send_email()
    {
        $email = new Email();
        
        $instituicao_id= $_REQUEST['instituicao_id'];
        $assunto= $_REQUEST['assunto'];
        $corpo= $_REQUEST['corpo'];
        $status = $_REQUEST['status'];

        $email->send($instituicao_id, $status, $assunto, $corpo);

        echo json_encode([
            'next' => true,
            'message' => 'Email salvo'
        ]);

        

    }
}