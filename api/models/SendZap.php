<?php

class SendZap
{

    static function send(
        string $sender,
        string $number,
        string $message
    ): array {
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


        @$result = file_get_contents('https://whatsapi-doar.herokuapp.com/send-message/', FALSE, $context);
        return json_decode($result, true);
        
    }
}
