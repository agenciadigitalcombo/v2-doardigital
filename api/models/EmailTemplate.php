<?php

class EmailTemplate
{
    private $id;
    private $instituicao_fk;
    private $tipo;
    private $status_pagamento;
    private $assunto;
    private $content;
    private $con;

    public function __construct()
    {
        $this->con = new Banco();
        $this->con->table("template_email");
    }

    static function tipos(): array
    {
        $dirs = glob(__DIR__ . "/../email/*");
        $names = array_map(fn ($dir) => array_reverse(explode("/", str_replace("\\", "/", $dir)))[0], $dirs);
        return $names;
    }

    static function default()
    {
        $emails = [];
        $tipos = self::tipos();
        foreach ($tipos as $tipo) {
            $templates = glob(__DIR__ . "/../email/{$tipo}/*.txt*");
            $templates = array_map(function ($email) {
                $body = file($email);
                $name = $body[0] ?? null;
                $subject = $body[1] ?? null;
                unset($body[0]);
                unset($body[1]);
                return [
                    "status" => str_replace(".txt", "", basename($email)),
                    "subject" => $subject,
                    "body" => implode("\n", $body),
                    "name" => $name,
                ];
            }, $templates);
            $templates = array_filter($templates, fn ($email) => $email["subject"]);
            $templates = array_values($templates);
            $emails[] = [
                "tipo" => $tipo,
                "email" => $templates
            ];
        }
        return $emails;
    }

    static function maker(
        $instituicao_fK
    ) {
        $bc = new Banco();
        $bc->table("template_email");
        $insertEmails = [];
        $templates = EmailTemplate::default();
        foreach ($templates as $template) {
            $tipo = $template["tipo"];
            foreach ($template["email"] as $email) {
                $status = $email["status"] ?? null;
                $subject = $email["subject"] ?? null;
                $body = $email["body"] ?? null;
                $name = $email["name"] ?? null;
                $insertEmails[] = "INSERT INTO template_email (instituicao_fk,tipo,status_pagamento,assunto,content, name) VALUES ('$instituicao_fK','$tipo','$status','$subject','$body', '$name')";
            }
        }
        $bc->exec(implode(";", $insertEmails));
    }

    static function getDefault(
        $tipo,
        $status
    ) {
        foreach( self::default() as $template ) {
            if( $template["tipo"] == $tipo) {
                foreach( $template["email"] as $email ) {
                    if( $email["status"] == $status) {
                        return $email;
                    }
                }
            }
        }        
    }

    public function save(
        string $instituicao_fk,
        string $tipo,
        string $status_pagamento,
        string $assunto,
        string $content
    ): void {
        $this->con->where([
            "instituicao_fk" => $instituicao_fk,
            "tipo" => $tipo,
            "status_pagamento" => $status_pagamento,
        ]);
        $this->con->update([
            "assunto" => $assunto,
            "content" => $content,
        ]);
    }

    public function list(
        string $instituicao_fk
    ): array {
        $this->con->where([
            "instituicao_fk" => $instituicao_fk
        ]);
        return array_map(["EmailTemplate", "porter"], $this->con->select());
    }

    public function recover(
        string $instituicao_fk,
        string $tipo,
        string $status_pagamento
    ): void {
        $fullPath = __DIR__ . "/../email/{$tipo}/{$status_pagamento}.txt";
        $file = file($fullPath) ?? [];
        $name = $file[0] ?? "Titulo padrão";
        $assunto = $file[1] ?? "Titulo padrão";
        unset($file[0]);
        unset($file[1]);
        $content = implode("\n", $file);
        $this->con->where([
            "instituicao_fk" => $instituicao_fk,
            "tipo" => $tipo,
            "status_pagamento" => $status_pagamento,
        ]);
        $this->con->update([
            "assunto" => $assunto,
            "content" => $content,
            "name" => $name,
        ]);
    }

    public function info(
        string $instituicao_fk,
        string $tipo,
        string $status_pagamento
    ): array {
        $this->con->where([
            "instituicao_fk" => $instituicao_fk,
            "tipo" => $tipo,
            "status_pagamento" => $status_pagamento,
        ]);
        return self::porter($this->con->select()[0] ?? []);
    }

    static function porter(
        array $payload
    ): array {
        return [
            "instituicao_fk" => $payload["instituicao_fk"] ?? null,
            "tipo" => $payload["tipo"] ?? null,
            "status_pagamento" => $payload["status_pagamento"] ?? null,
            "assunto" => $payload["assunto"] ?? null,
            "content" => $payload["content"] ?? null,
            "name" => $payload["name"] ?? null,
        ];
    }

    function resetInst( $instituicao_fK ) {
        $bc = new Banco();
        $bc->table("template_email");
        $bc->where([
            "instituicao_fk" => $instituicao_fK,
        ]);
        $bc->delete();
        $this->maker($instituicao_fK);
    }
}
