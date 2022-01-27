<?php

class EmailContoler{
    
    static function send_email()
    {
        $email = new Email();
        
        $instituicao_id= $_REQUEST['instituicao_id'];
        $assunto= $_REQUEST['assunto'];
        $corpo= $_REQUEST['corpo'];
        $status = $_REQUEST['status'];


        $type_status = ['processing', 'authorized', 'paid', 'refunded', 'waiting_payment', 'pending_refund', 'refused', 'chargeback'];
        
        if(!in_array($status, $type_status)){
            echo json_encode([
                'next' => false,
                'message' => 'Status Inválido'
            ]);
            return null;
        }

        $email->send($instituicao_id, $status, $assunto, $corpo);

        echo json_encode([
            'next' => true,
            'message' => 'Email salvo'
        ]);

    }
}