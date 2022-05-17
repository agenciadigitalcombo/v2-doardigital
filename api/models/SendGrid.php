<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require __DIR__ . "/../vendor/PHPMailer/src/Exception.php";
require __DIR__ . "/../vendor/PHPMailer/src/PHPMailer.php";
require __DIR__ . "/../vendor/PHPMailer/src/SMTP.php";

class SendGrid
{

    static function send(array $payload): bool
    {
        $mail = new PHPMailer(true);
        try {

            $mail->SMTPDebug = SMTP::DEBUG_SERVER;
            $mail->isSMTP();
            $mail->Host       = 'smtp.example.com';
            $mail->SMTPAuth   = true;
            $mail->Username   = 'user@example.com';
            $mail->Password   = 'secret';
            $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;
            $mail->Port       = 465;

            $mail->setFrom('from@example.com', 'Mailer');
            $mail->addAddress('joe@example.net', 'Joe User');

            $mail->isHTML(true);
            $mail->Subject = 'Here is the subject';
            $mail->Body    = 'This is the HTML message body <b>in bold!</b>';
            $mail->AltBody = 'This is the body in plain text for non-HTML mail clients';

            $mail->send();
            return true;
        } catch (Exception $e) {
            return false;
        }
    }

    static function template(array $payload, string $modelo_html)
    {
        $html = @file_get_contents(__DIR__ . "/../template_email/{$modelo_html}.html") ?? '';
        $html = str_replace('@@text@@', $payload['text'], $html);
        foreach ($payload as $k => $v) {
            $html = str_replace("{" . $k . "}", $v, $html);
        }
        $html = trim(str_replace("%20", ' ', $html));
        return $html;
    }
}
