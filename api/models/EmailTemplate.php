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
        $dirs = glob(__DIR__."/../email/*");
        $names = array_map(fn( $dir ) => array_reverse(explode("/",str_replace("\\", "/", $dir)))[0], $dirs);
        return $names;
    }

    static function status() {}

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
        $assunto = $file[0] ?? "Titulo padrão";
        unset($file[0]);
        $content = implode("\r\n", $file);
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
        ];
    }
}
