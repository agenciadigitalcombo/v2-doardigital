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
        $this->key = "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";
        $this->path = "https://api.sendinblue.com/v3/smtp/email";
        $this->header = [
            "accept: application/json",
            "api-key: {$this->key}",
            "content-type: application/json",
        ];
    }

    function send($nome, $email, $subject, $content) {
        $payload = [  
            "sender" => [  
               "name" => "Doar Digital",
               "email" => "contato@doardigital.com.br"
            ],
            "to" => [  
               [  
                  "email" => $email,
                  "name" => $nome
               ]
            ],
            "subject" => $subject,
            "htmlContent" => $content
        ];
        return $this->post( $payload );
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
}