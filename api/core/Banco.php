<?php

class Banco
{

    private $host, $db, $user, $pass;
    private $table;
    private $where;
    private $order;
    private $pdo;

    function __construct()
    {
        $env = require __DIR__ . "/../config.php";
        $this->host = $env["host"];
        $this->db = $env["banco"];
        $this->user = $env["user"];
        $this->pass = $env["senha"];
        try {
            $this->pdo = new PDO("mysql:host={$this->host};dbname={$this->db}", $this->user, $this->pass);
        } catch (\Throwable $th) {
            $this->error();
        }

    }

    function error() {
        echo json_encode([
            "next" => false,
            "message" => "Perda de comunicação com o banco",
            "payload" => []
        ]);
        die;
    }

    function query(string $sql): array
    {
        try {
            $query = $this->pdo->query($sql);
            $result = $query->fetchAll();            
            return $result;
        } catch (\Throwable $th) {
           $this->error();
        }
    }

    function exec(string $sql): void
    {
        try {
            $this->pdo->query($sql);            
        } catch (\Throwable $th) {
           $this->error();
        }
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

    function orderByAsc( string $col ) {
       $this->order =  "ORDER BY {$col} ASC";
    }
    
    function orderByDesc( string $col ) {
       $this->order =  "ORDER BY {$col} DEC";
    }

    function select(): array
    {
        $where = "";
        $order = "";
        if (!empty($this->where)) $where = "WHERE {$this->where}";        
        if (!empty($this->order)) $order = $this->order;
        $sql = "SELECT * FROM {$this->table} {$where} {$order}";
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
