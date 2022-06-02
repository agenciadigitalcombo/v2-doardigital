<?php

class Integration
{
    private $instituicao_fk;
    private $tipo;
    private $key_1;
    private $key_2;
    private $key_3;
    private $key_4;
    private $key_5;

    private $con;

    function __construct()
    {
        $this->con = new Banco();
        $this->con->table('integration');
    }

    public function save(
        string $instituicao_fk,
        string $tipo,
        string $key_1,
        string $key_2 = null,
        string $key_3 = null,
        string $key_4 = null,
        string $key_5 = null
    ): void {

        $res = $this->con->where([
            "instituicao_fk" => $instituicao_fk,
            "tipo" => $tipo,
        ]);
        if (empty($res)) {
            $this->register(
                $instituicao_fk,
                $tipo,
                $key_1,
                $key_2,
                $key_3,
                $key_4,
                $key_5
            );
        } else {
            $this->update(
                $instituicao_fk,
                $tipo,
                $key_1,
                $key_2,
                $key_3,
                $key_4,
                $key_5
            );
        }
    }

    public function register(
        string $instituicao_fk,
        string $tipo,
        string $key_1,
        string $key_2 = null,
        string $key_3 = null,
        string $key_4 = null,
        string $key_5 = null
    ): void {
        $this->con->insert([
            "instituicao_fk" => $instituicao_fk,
            "tipo" => $tipo,
            "key_1" => $key_1,
            "key_2" => $key_2,
            "key_3" => $key_3,
            "key_4" => $key_4,
            "key_5" => $key_5,
        ]);
    }

    public function update(
        string $instituicao_fk,
        string $tipo,
        string $key_1,
        string $key_2 = null,
        string $key_3 = null,
        string $key_4 = null,
        string $key_5 = null
    ): void {
        $this->con->where([
            "instituicao_fk" => $instituicao_fk,
            "tipo" => $tipo,
        ]);
        $this->con->update([
            "key_1" => $key_1,
            "key_2" => $key_2,
            "key_3" => $key_3,
            "key_4" => $key_4,
            "key_5" => $key_5,
        ]);
    }

    public function info(string $instituicao_fk, string $tipo): array
    {
        $this->con->where([
            "instituicao_fk" => $instituicao_fk,
            "tipo" => $tipo,
        ]);
        return self::porter($this->con->select()[0] ?? []);
    }

    static function porter(array $payload): array
    {
        return [
            "instituicao_fk" => $payload["instituicao_fk"] ?? null,
            "tipo" => $payload["tipo"] ?? null,
            "key_1" => $payload["key_1"] ?? null,
            "key_2" => $payload["key_2"] ?? null,
            "key_3" => $payload["key_3"] ?? null,
            "key_4" => $payload["key_4"] ?? null,
            "key_5" => $payload["key_5"] ?? null,
        ];
    }
}
