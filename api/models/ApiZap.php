<?php

class ApiZap
{

    function __construct()
    {
        $this->header = [
            "content-type: application/json",
        ];
    }

    public function post(string $path, array $payload = [])
    {
        $content = json_encode($payload, JSON_UNESCAPED_UNICODE);
        try {
            $options = [
                CURLOPT_POST           => true,
                CURLOPT_HEADER         => 0,
                CURLOPT_RETURNTRANSFER => 1,
                CURLOPT_URL            => $path,
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

    public function generate($session_name)
    {
        $secret = "THISISMYSECURETOKEN";
        $full_path = "https://zap.digitalcombo.com.br/api/{$session_name}/{$secret}/generate-token";
        return $this->post($full_path);
    }

    public function setToken($token)
    {
        $this->header[] = "Authorization: Bearer $token";
    }

    public function start($session_name)
    {
        $full_path = "https://zap.digitalcombo.com.br/api/{$session_name}/start-session";
        return $this->post($full_path);
    }

    public function qrCode($session_name)
    {
        $full_path = "https://zap.digitalcombo.com.br/api/{$session_name}/check-connection-session";
        return $this->post($full_path);
    }


    public function close($session_name)
    {
        $full_path = "https://zap.digitalcombo.com.br/api/{$session_name}/close-session";
        return $this->post($full_path);
    }

    public function send($session_name, $payload = [])
    {
        $full_path = "https://zap.digitalcombo.com.br/api/{$session_name}/send-message";
        return $this->post($full_path, $payload);
    }
}
