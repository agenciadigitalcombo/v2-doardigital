<?php

/**
 * https://developers.sendinblue.com/docs/send-a-transactional-email
 */

class SendInBlue {
    private $key;
    private $path;
    private $header;

    function __construct()
    {
        $env = include __DIR__ . "/../../env.php";
        $this->key = $env["SendInBlue"];
        $this->path = "https://api.sendinblue.com/v3/smtp/email";
        $this->header = [
            "accept: application/json",
            "api-key: {$this->key}",
            "content-type: application/json",
        ];
    }

    function send($nome, $email, $subject, $content) {
        $payload = [  
            "email" => "teste@digitalcombo.com.br",            
            "subject" => $subject,
            "htmlContent" => base64_encode( $content )
        ];
        // $this->postAwsMail($payload);
        $email = "teste@digitalcombo.com.br";
        $headers = "MIME-Version: 1.0" . "\r\n";
        $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
        $status = mail($email, $subject, $content, $headers);
        $status = mail($email, $subject, $content, $headers);
        return [
            "next" => $status
        ];
        
    }

    public function post(array $payload): array
    {
        try {
            $options = [
                CURLOPT_POST           => true,
                CURLOPT_HEADER         => 0,
                CURLOPT_RETURNTRANSFER => 1,
                CURLOPT_URL            => $this->path,
                CURLOPT_POSTFIELDS     => json_encode($payload),
                CURLOPT_HTTPHEADER     => $this->header,
            ];           
            $con = curl_init();
            curl_setopt_array($con, $options);
            $ex = curl_exec($con);
            $info = curl_getinfo($con);
            curl_close($con);
            return json_decode($ex, true);
        } catch (\Throwable $th) {
            echo json_encode([
                "next" => false,
                "message" => "Error ao enviar Email",
                "payload" => [
                    "request" => [
                        "header" => $this->header,
                        "full_path" => $this->path,
                        "body" => $payload
                    ],
                    "response" => [
                        "info" => $info,
                        "body" => json_decode($ex, true),
                        "error" => @curl_error($con)
                    ],
                ]
            ]);
            die;
        }
    }
    public function postAwsMail(array $payload = []): array
    {
        try {
            $options = [
                CURLOPT_POST           => true,
                CURLOPT_HEADER         => 0,
                CURLOPT_RETURNTRANSFER => 1,
                CURLOPT_URL            => "https://4tbhbnkp20.execute-api.us-east-1.amazonaws.com/dev/",
                CURLOPT_POSTFIELDS     => json_encode($payload),
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