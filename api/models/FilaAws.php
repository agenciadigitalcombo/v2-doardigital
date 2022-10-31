<?php

class FilaAws
{

    function __construct()
    {
        $this->header = [
            "content-type: application/json",
        ];
    }
    
    public function send(array $payload = [], $tipo = "EMAIL"): array
    {
        $payload['tipoMensagem'] = $tipo;

        try {
            $options = [
                CURLOPT_POST           => true,
                CURLOPT_HEADER         => 0,
                CURLOPT_RETURNTRANSFER => 1,
                CURLOPT_URL            => "https://y52otd8l4l.execute-api.us-east-1.amazonaws.com/dev/send/",
                CURLOPT_POSTFIELDS     => json_encode($payload, JSON_UNESCAPED_UNICODE),
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
