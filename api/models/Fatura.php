<?php

class Fatura
{

    private $id;
    private $instituicao_fk;
    private $fatura_id;
    private $tipo_pagamento;
    private $recorrente;
    private $external_fk;
    private $status_pagamento;
    private $valor;
    private $codigo;
    private $url;
    private $data;
    private $hora;
    private $doador_fk;
    private $doador_nome;
    private $doador_email;

    private $con;

    function __construct()
    {
        $this->con = new Banco();
        $this->con->table('fatura');
    }

    function maker_fk(): string
    {
        return "ref_" . uniqid();
    }

    public function listAll(string $instituicao_fk): array
    {
        $sql = "select *, concat(data, hora) as data_hora from fatura where instituicao_fk='{$instituicao_fk}' order by data_hora DESC";
        return array_map(["Fatura", "porter"], $this->con->query($sql));
    }

    public function listAllByDoador(string $instituicao_fk, string $doador_fk): array
    {
        $this->con->where([
            "instituicao_fk" => $instituicao_fk,
            "doador_fk" =>  $doador_fk
        ]);
        return array_map(["Fatura", "porter"], $this->con->select());
    }

    public function info(string $external_fk): array
    {
        $this->con->where(["external_fk" => $external_fk]);
        return array_map(["Fatura", "porter"], $this->con->select());
    }

    public function create(
        string $instituicao_fk,
        string $fatura_id,
        string $tipo_pagamento,
        string $recorrente,
        string $external_fk,
        string $status_pagamento,
        float $valor,
        string $codigo,
        string $url,
        string $doador_fk,
        string $doador_nome,
        string $doador_email,
        string $data = null
    ): void {
        $this->con->insert([
            "instituicao_fk" => $instituicao_fk,
            "fatura_id" => $fatura_id,
            "tipo_pagamento" => $tipo_pagamento,
            "recorrente" => $recorrente,
            "external_fk" => $external_fk,
            "status_pagamento" => $status_pagamento,
            "valor" => $valor,
            "codigo" => $codigo,
            "url" => $url,
            "data" => $data ?? date("Y-m-d"),
            "hora" => date("H:i:s"),
            "doador_fk" => $doador_fk,
            "doador_nome" => $doador_nome,
            "doador_email" => $doador_email,
        ]);
    }

    public function update(
        string $fatura_id,
        string $status_pagamento,
        string $codigo,
        string $url,
        string $data = null
    ): void {
        $this->con->where(["fatura_id" => $fatura_id]);
        $this->con->update([
            "status_pagamento" => $status_pagamento,
            "codigo" => $codigo,
            "url" => $url,
            "data" => $data ?? date("Y-m-d"),
        ]);
    }

    static function gravatar(string $email): string
    {
        $email = md5(strtolower(trim($email)));
        return "https://www.gravatar.com/avatar/{$email}";
    }

    static function porter(array $payload): array
    {
        return [
            "instituicao_fk" => $payload["instituicao_fk"] ?? null,
            "fatura_id" => $payload["fatura_id"] ?? null,
            "tipo_pagamento" => $payload["tipo_pagamento"] ?? null,
            "recorrente" => $payload["recorrente"] ?? 0,
            "external_fk" => $payload["external_fk"] ?? null,
            "status_pagamento" => $payload["status_pagamento"] ?? null,
            "valor" => $payload["valor"] ?? 0,
            "codigo" => $payload["codigo"] ?? null,
            "url" => $payload["url"] ?? null,
            "data" => $payload["data"] ??  date("Y-m-d"),
            "hora" => $payload["hora"] ?? date("H:i:s"),
            "doador_fk" => $payload["doador_fk"] ?? null,
            "doador_nome" => $payload["doador_nome"] ?? null,
            "doador_email" => $payload["doador_email"] ?? null,
            "doador_gravatar" => self::gravatar($payload["doador_nome"] ?? '123@123.com')
        ];
    }
}
