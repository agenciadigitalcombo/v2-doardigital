<?php
class SendGrid
{

    static function header(
        $to_name,
        $to_email,
        $from_name,
        $from_email
    ): string {
        $headers = "MIME-Version: 1.0 \r\n";
        $headers .= "Content-type: text/html; charset=utf-8 \r\n";
        $headers .= "To: {$to_name} <{$to_email}> \r\n";
        $headers .= "From: {$from_name} <{$from_email}> \r\n";
        return $headers;
    }

    static function send(
        string $template,
        array $payload
    ) {
        $headers = self::header(
            $payload['nome'] ?? 'Usuário',
            $payload['to'],
            $payload['fromName'] ?? "Doar Digital",
            $payload['fromEmail'] ?? "contato@doardigital.com.br"
        );
        $payload['text'] = $payload['text'] ?? '';
        $message = self::template( $payload, $template);
        $subject = $payload['subject'] ?? "Doar Digital";
        $isSend = @mail($payload['to'], $subject, $message, $headers);
        if ( !empty($payload['print'])) {
            echo $message;
        }
    }

    static function template(array $payload, string $modelo_html)
    {
        $html = @file_get_contents(__DIR__ . "/../template_email/{$modelo_html}.html") ?? '';
        $html = str_replace('@@text@@', $payload['text'], $html);
        foreach ($payload as $k => $v) {
            $html = str_replace("@@" . $k . "@@", $v, $html);
        }
        $html = trim( str_replace("%20", ' ', $html) );
        return $html;
    }
}
