<?php

class Smtp
{
    private $id;
    private $instituicao_fk;
    private $host;
    private $protocolo;
    private $porta;
    private $email;
    private $senha;

    private $con;

    function __construct()
    {
        $this->con = new Banco();
        $this->con->table('email');
    }

    public function save(
        string $instituicao_fk,
        string $host,
        string $protocolo,
        string $porta,
        string $email,
        string $senha
    ): void {

        $res = $this->con->where([
            "instituicao_fk" => $instituicao_fk
        ]);
        if (empty($res)) {
            $this->register(
                $instituicao_fk,
                $host,
                $protocolo,
                $porta,
                $email,
                $senha
            );
        } else {
            $this->update(
                $instituicao_fk,
                $host,
                $protocolo,
                $porta,
                $email,
                $senha
            );
        }
    }

    public function register(
        string $instituicao_fk,
        string $host,
        string $protocolo,
        string $porta,
        string $email,
        string $senha
    ): void {
        $this->con->insert([
            "instituicao_fk" => $instituicao_fk,
            "host" => $host,
            "protocolo" => $protocolo,
            "porta" => $porta,
            "email" => $email,
            "senha" => $senha,
        ]);
    }

    public function update(
        string $instituicao_fk,
        string $host,
        string $protocolo,
        string $porta,
        string $email,
        string $senha
    ): void {
        $this->con->where([
            "instituicao_fk" => $instituicao_fk,
        ]);
        $this->con->update([
            "host" => $host,
            "protocolo" => $protocolo,
            "porta" => $porta,
            "email" => $email,
            "senha" => $senha,
        ]);
    }

    public function info(string $instituicao_fk): array
    {
        $this->con->where([
            "instituicao_fk" => $instituicao_fk,
        ]);
        return self::porter($this->con->select()[0] ?? []);
    }

    static function porter(array $payload): array
    {
        return [
            "instituicao_fk" => $payload["instituicao_fk"] ?? null,
            "host" => $payload["host"] ?? null,
            "protocolo" => $payload["protocolo"] ?? null,
            "porta" => $payload["porta"] ?? null,
            "email" => $payload["email"] ?? null,
            "senha" => $payload["senha"] ?? null,
        ];
    }
}
