<?php

class Banco
{

    private $host, $db, $user, $pass;

    function __construct()
    {
        $env = require __DIR__ . "/../config.php";
        $this->host = $env["host"];
        $this->db = $env["banco"];
        $this->user = $env["user"];
        $this->pass = $env["senha"];
    }

    function query(string $sql): array
    {
        $con = new PDO("mysql:host={$this->host};dbname={$this->db}", $this->user, $this->pass);
        $query = $con->query($sql);
        $result = $query->fetchAll();
        $con = null;
        return $result;
    }

    function exec(string $sql): void
    {
        $con = new PDO("mysql:host={$this->host};dbname={$this->db}", $this->user, $this->pass);
        $query = $con->query($sql);
        $con = null;
    }
}