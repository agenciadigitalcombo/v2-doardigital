<?php

class SendZap
{

    static function send(
        string $sender,
        string $number,
        string $message
    ): void {
        $context = stream_context_create(array(
            'http' => array(
                'method' => 'POST',
                'header' => "Content-Type: application/x-www-form-urlencoded\r\n",
                'content' => http_build_query([
                    'sender' => $sender,
                    'number' => $number,
                    'message' => $message
                ])
            )
        ));


        file_get_contents('https://whatsapi-doar.herokuapp.com/send-message/', FALSE, $context);
        
    }
}
