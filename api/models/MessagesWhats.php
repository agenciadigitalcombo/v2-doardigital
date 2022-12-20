<?php

class MessagesWhats
{
    private $id;
    private $instituicao_fk;
    private $tipo;
    private $status_pagamento;
    private $content;
    private $con;

    public function __construct()
    {
        $this->con = new Banco();
        $this->con->table("template_whats");
    }

    static function tipos(): array
    {
        $dirs = glob(__DIR__ . "/../whatsapp/*");
        $names = array_map(fn ($dir) => array_reverse(explode("/", str_replace("\\", "/", $dir)))[0], $dirs);
        return $names;
    }

    static function default()
    {
        $messages = [];
        $tipos = self::tipos();
        foreach ($tipos as $tipo) {
            $templates = glob(__DIR__ . "/../whatsapp/{$tipo}/*.txt*");
            $templates = array_map(function ($email) {
                $tmp_file = file($email);
                $name = $tmp_file[0];
                unset($tmp_file[0]);
                $body = implode("\n", $tmp_file );
                return [
                    "status" => str_replace(".txt", "", basename($email)),
                    "body" => $body,
                    "name" => $name
                ];
            }, $templates);

            $templates = array_values($templates);
            $messages[] = [
                "tipo" => $tipo,
                "messages" => $templates
            ];
        }
        return $messages;
    }

    static function maker(
        $instituicao_fK
    ) {
        $bc = new Banco();
        $bc->table("template_whats");
        $insertEmails = [];
        $templates = MessagesWhats::default();
        foreach ($templates as $template) {
            $tipo = $template["tipo"];
            foreach ($template["messages"] as $email) {
                $status = $email["status"] ?? null;
                $body = $email["body"] ?? null;
                $name = $email["name"] ?? null;
                $insertEmails[] = "INSERT INTO template_whats (instituicao_fk,tipo,status_pagamento,content, name) VALUES ('$instituicao_fK','$tipo','$status','$body', '$name')";
            }
        }
        $bc->exec(implode(";", $insertEmails));
    }

    static function getDefault(
        $tipo,
        $status
    ) {
        foreach (self::default() as $template) {
            if ($template["tipo"] == $tipo) {
                foreach ($template["messages"] as $email) {
                    if ($email["status"] == $status) {
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
        string $content
    ): void {
        $this->con->where([
            "instituicao_fk" => $instituicao_fk,
            "tipo" => $tipo,
            "status_pagamento" => $status_pagamento,
        ]);
        $this->con->update([
            "content" => $content,
        ]);
    }

    public function list(
        string $instituicao_fk
    ): array {
        $this->con->where([
            "instituicao_fk" => $instituicao_fk
        ]);
        return array_map(["MessagesWhats", "porter"], $this->con->select());
    }

    public function recover(
        string $instituicao_fk,
        string $tipo,
        string $status_pagamento
    ): void {
        $fullPath = __DIR__ . "/../whatsapp/{$tipo}/{$status_pagamento}.txt";
        $content = file_get_contents($fullPath) ?? [];
        $this->con->where([
            "instituicao_fk" => $instituicao_fk,
            "tipo" => $tipo,
            "status_pagamento" => $status_pagamento,
        ]);
        $this->con->update([
            "content" => $content,
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
            "content" => $payload["content"] ?? null,
        ];
    }

    function resetInst( $instituicao_fK ) {
        $bc = new Banco();
        $bc->table("template_whats");
        $bc->where([
            "instituicao_fk" => $instituicao_fK,
        ]);
        $bc->delete();
        $this->maker($instituicao_fK);
    }
}
