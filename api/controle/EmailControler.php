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
            'status' => 'Informe um status de pagamento',
            'tipo' => 'Informe um tipo de transação'
            // 'codigo' => "Informe um codigo",
            // 'link' => "Informe um link",
        ]);

        $doador = new Doador();


        $instituicao = get_api('/instituicao-id', [
            "instituicao_id" => $_REQUEST['instituicao_id']
        ])['dados'];

        $smtp = get_api('/list-smtp', [
            "instituicao_id" => $_REQUEST['instituicao_id']
        ])['dados'];

        $doador = $doador->get_by_cpf($_REQUEST['doador_cpf']);

        $to_name = $doador['nome'];
        $to_email = $doador['email'];
        $from_name = $instituicao['nome_fantasia'];
        $from_email = !!$smtp['email'] ? $smtp['email'] : $instituicao['email'];

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

        if ($_REQUEST['tipo'] == 'PIX') {
            $text .= "
            <p>
               Copie o código PIX abaixo para efetuar o pagamento.
            </p>
            <p>" . $_REQUEST['codigo'] . "</p>
            ";
        }

        if ($_REQUEST['tipo'] == 'boleto') {
            $text .= "
            <p>
                Você pode copiar o código abaixo ou clique no botão para visualizar seu boleto.
            </p>
            <p>" . $_REQUEST['codigo'] . "</p>
            <a 
                href=\"" . $_REQUEST['link'] . "\" 
                target=\"_blank\"
                style=\"text-decoration: none; font-family:sans-serif; font-size: 18px; color: #ffffff; border-style: solid; border-color: #0681F3; border-width: 15px 30px; border-radius: 8px; background: #0681F3; font-weight: bold; font-style: normal; line-height: 22px; text-align: center;\">
                ABRIR BOLETO
            </a>
            ";
        }

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
