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
        $print = false
    ) {

        $headers = self::header(
            $to_name,
            $to_email,
            $from_name,
            $from_email
        );

        $message = self::template( [
            'institution_logo' => $institution_logo,
            'institution_color' => $institution_color,
            'institution_nome' => $institution_name,
            'categoria' => $title,
            'text' => $text,
            'from_email' => $from_email,
            'from_nome' => $from_name
        ], $modelo_html);

        @mail($to_email, $assunto, $message, $headers);

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
