<?php

class Banco
{

    private $host, $db, $user, $pass;
    private $table;
    private $where;

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

    function table(string $table): void
    {
        $this->table = $table;
    }

    function where(array $argument = [])
    {
        $where = [];
        foreach ($argument as $key => $value) {
            $where[] = "{$key}='{$value}'";
        }
        $this->where = implode(' AND ', $where);
    }

    function select(): array
    {
        $where = "";
        if (!empty($this->where)) $where = "WHERE {$this->where}";
        $sql = "SELECT * FROM {$this->table} {$where}";
        return $this->query($sql);
    }

    function insert(array $argument)
    {
        $cols = implode(',', array_keys($argument));
        $values = array_values($argument);
        $values = array_map(function ($v) {
            return "'{$v}'";
        }, $values);
        $values = implode(',', $values);
        $sql =  "INSERT INTO {$this->table} ({$cols}) VALUES ({$values})";
        $this->exec($sql);
    }

    function update(array $argument)
    {
        $sets = [];
        foreach ($argument as $key => $value) {
            $sets[] = "{$key}='{$value}'";
        }
        $sets = implode(', ', $sets);
        $sql = "UPDATE {$this->table} SET {$sets} WHERE {$this->where}";
        $this->exec($sql);
    }

    function delete()
    {
        $this->exec("DELETE FROM {$this->table} WHERE {$this->where}");
    }
}
