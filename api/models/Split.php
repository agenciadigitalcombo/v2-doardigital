<?php

class Split
{
    private $id;
    private $fk;
    private $code;
    private $porcentagem;

    private $con;

    function __construct()
    {
        $this->con = new Banco();
        $this->con->table('split');
    }

    public function listAll(string $fk): array
    {
        $this->con->where(["fk" => $fk]);
        return array_map(["Split", "porter"], $this->con->select());
    }

    public function register(string $fk, string $code, int $porcentagem): void
    {
        $this->con->insert([
            "fk" => $fk,
            "code" => $code,
            "porcentagem" => $porcentagem,
        ]);
    }

    public function update(int $id, string $fk, string $code, int $porcentagem): void
    {
        $this->con->where(["id" => $id]);
        $this->con->update([
            "fk" => $fk,
            "code" => $code,
            "porcentagem" => $porcentagem,
        ]);
    }

    public function del(int $id): void
    {
        $this->con->where(["id" => $id]);
        $this->con->delete();
    }

    public function info(int $id): array
    {
        $this->con->where(["id" => $id]);
        return self::porter($this->con->select()[0] ?? []);
    }

    static function porter(array $payload): array
    {
        return [
            "id" => $payload['id'] ?? 0,
            "fk" => $payload['fk'] ?? null,
            "code" => $payload['code'] ?? null,
            "porcentagem" => $payload['porcentagem'] ?? 0,
        ];
    }
}
