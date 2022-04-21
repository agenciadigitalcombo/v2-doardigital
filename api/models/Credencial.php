<?php

class Credencial
{

    private $id;
    private $nome_identificacao;
    private $recursos;

    private $con;

    function __construct()
    {
        $this->con = new Banco();
        $this->con->table('credencial');
    }

    static function porter(array $payload): array
    {
        return [
            "id" => $payload['id'] ?? null,
            "nome_identificacao" => $payload['nome_identificacao'] ?? null,
            "recursos" => $payload['recursos'] ?? null,
        ];
    }

    public function register(string $nome_identificacao, string $recursos): void
    {
        $this->con->insert([
            "nome_identificacao" => $nome_identificacao,
            "recursos" => $recursos,
        ]);
    }

    public function update(int $id, string $nome_identificacao, string $recursos): void
    {
        $this->con->where(["id" => $id]);
        $this->con->update([
            "nome_identificacao" => $nome_identificacao,
            "recursos" => $recursos,
        ]);
    }

    public function getById(int $id): array
    {
        $this->con->where(["id" => $id]);
        return self::porter($this->con->select()[0] ?? []);
    }

    public function listAll(): array
    {
        return array_map(['Credencial', 'porter'], $this->con->select());
    }

    public function del(int $id): void
    {
        $this->con->where(["id" => $id]);
        $this->con->delete();
    }
}
