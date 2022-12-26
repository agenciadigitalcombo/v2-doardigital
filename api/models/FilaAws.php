<?php

class FilaAws
{

    function __construct()
    {
        $this->header = [
            "content-type: application/json",
        ];
    }

    public function send(array $payload = [], $state_machine)
    {
        $payload['tipoMensagem'] = 'EMAIL/WHATS';
        $content = json_encode([
            "input" => json_encode($payload, JSON_UNESCAPED_UNICODE),
            "stateMachineArn" => $state_machine
        ], JSON_UNESCAPED_UNICODE);

        try {
            $options = [
                CURLOPT_POST           => true,
                CURLOPT_HEADER         => 0,
                CURLOPT_RETURNTRANSFER => 1,
                CURLOPT_URL            => "https://qwfj89diwa.execute-api.us-east-1.amazonaws.com/dev/postdatatostep/",
                CURLOPT_POSTFIELDS     => $content,
                CURLOPT_HTTPHEADER     => $this->header,
            ];
            $con = curl_init();
            curl_setopt_array($con, $options);
            $ex = curl_exec($con);
            curl_close($con);
            return json_decode($ex, true);
        } catch (\Throwable $th) {
        }
    }

    public function email($email, $subject, $html)
    {

        $content = json_encode([
            "email" => $email,
            "sender" => "contato@doacoesbethania.com.br",
            "subject" => $subject,
            "htmlContent" => base64_encode($html),
        ], JSON_UNESCAPED_UNICODE);

        try {
            $options = [
                CURLOPT_POST           => true,
                CURLOPT_HEADER         => 0,
                CURLOPT_RETURNTRANSFER => 1,
                CURLOPT_URL            => "https://ieki54uced.execute-api.us-east-1.amazonaws.com/default/ApiEmail",
                CURLOPT_POSTFIELDS     => $content,
                CURLOPT_HTTPHEADER     => $this->header,
            ];
            $con = curl_init();
            curl_setopt_array($con, $options);
            $ex = curl_exec($con);
            curl_close($con);
            return json_decode($ex, true);
        } catch (\Throwable $th) {
        }
    }
}
