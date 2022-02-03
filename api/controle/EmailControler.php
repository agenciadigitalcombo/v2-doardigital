<?php

class EmailContoler{
    
    static function send_email()
    {
        $email = new Email();
        
        $instituicao_id= $_REQUEST['instituicao_id'];
        $assunto= $_REQUEST['assunto'];
        $corpo= $_REQUEST['corpo'];
        $status = $_REQUEST['status'];
        $cron = $_REQUEST['cron'];


        $status_payment = ['processing', 'authorized', 'paid', 'refunded', 'waiting_payment', 'pending_refund', 'refused', 'chargeback'];
        

        if(!in_array($status, $status_payment)){
            echo json_encode([
                'next' => false,
                'message' => 'Status Inválido'
            ]);
            return null;
        }

        

        $email->send($instituicao_id, $status, $assunto, $corpo, $cron);

        echo json_encode([
            'next' => true,
            'message' => 'Email salvo'
        ]);
    }

    static function list_all_email(){
        $email = new Email();

        $instituicao_id= $_REQUEST['instituicao_id'];


        $get_list = $email->list_by_instituicao($instituicao_id);

        $payload = array_map(function($list) {
            return [
                'id' => $list['id'],
                'instituicao_id' => $list['instituicao_id'], 
                'assunto' => $list['assunto'], 
                'corpo' => $list['corpo'], 
                'acao' => $list['acao'], 
                'cron' => $list['cron']
            ];
        }, $get_list);

        echo json_encode([
            'next' => true,
            'message' => 'Email salvo',
            'dados' => $payload,
            'status_pagamento' => Email::status_payment(),
            'cron' => Email::cron(),
            'default' => Email::default(),
        ]);

    }
}