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
        $to_name,
        $to_email,
        $from_name,
        $from_email,
        $assunto,
        $title,
        $text,
        $institution_color = '#C00',
        $institution_name = 'Instituição',
        $institution_logo = 'default.png',
        $modelo_html,
        $print = false,
        $payload = []
    ) {

        $headers = self::header(
            $to_name,
            $to_email,
            $from_name,
            $from_email
        );

        $data = [
            'logo' => $institution_logo,
            'cor' => $institution_color,
            'title' => $institution_name,
            'categoria' => $title,
            'text' => $text,
            'from_email' => $from_email,
            'from_nome' => $from_name
        ];

        $message = self::template( array_merge(
            $data,
            $payload
        ) , $modelo_html);

        $is_send = @mail($to_email, $assunto, $message, $headers);
        var_dump( $is_send, $to_email, $assunto, $message, $headers );

        if ($print) {
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
