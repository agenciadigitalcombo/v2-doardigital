<?php

class EmailContoler
{

    static function send_email()
    {
        $email = new Email();

        $instituicao_id = $_REQUEST['instituicao_id'];
        $assunto = $_REQUEST['assunto'];
        $corpo = $_REQUEST['corpo'];
        $status = $_REQUEST['status'];
        $cron = $_REQUEST['cron'];


        $status_payment = ['processing', 'authorized', 'paid', 'refunded', 'waiting_payment', 'pending_refund', 'refused', 'chargeback'];


        if (!in_array($status, $status_payment)) {
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

    static function list_all_email()
    {
        $email = new Email();

        $instituicao_id = $_REQUEST['instituicao_id'];


        $get_list = $email->list_by_instituicao($instituicao_id);

        $payload = array_map(function ($list) {
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

    static function preview(): void
    {

        campo_obrigatorios([
            'instituicao_id' => 'Informe a Instituição',
            'doador_cpf' => 'Informe o CPF do doador',
            'status' => 'Informe um status de pagamento'
        ]);


        $instituicao = get_api('/instituicao-id', [
            "instituicao_id" => 135
        ])['dados'];

        $doador = new Doador();
        $doador = $doador->get_by_cpf($_REQUEST['doador_cpf']);

        

        $to_name = $doador['nome'];
        $to_email = $doador['email'];
        $from_name = $instituicao['nome_fantasia'];
        $from_email = $instituicao['email'];
        
        $institution_color = $instituicao['cor'];
        $institution_name = $instituicao['nome_fantasia'];
        $institution_logo = $instituicao['logo'];

        $email = new Email();
        $content = $email->exest_acao(
            $_REQUEST['instituicao_id'],
            $_REQUEST['status']
        );

        $assunto = $content['assunto'];
        $title = $content['assunto'];
        $text = $content['text'];

       
        SendGrid::send(
            $to_name,
            $to_email,
            $from_name,
            $from_email,
            $assunto,
            $title,
            $text,
            $institution_color,
            $institution_name,
            $institution_logo,
            'doar-digital',
            true,
            array_merge(
                $instituicao,
                $doador
            )
        );

    }
}
