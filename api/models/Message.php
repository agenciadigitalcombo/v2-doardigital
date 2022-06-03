<?php

class Message
{
    private $id;
    private $tipo;
    private $data;
    private $payload;
    private $con;

    public function __construct()
    {
        $this->con = new Banco();
        $this->con->table("message");
    }

    public function save(
        string $tipo,
        string $data,
        array $payload
    ): void {
        $this->con->insert([
            "tipo" => $tipo,
            "data" => $data,
            "payload" => json_encode($payload)
        ]);
    }
}
