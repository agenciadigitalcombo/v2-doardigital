<?php

class Credencial implements ICredencial
{

    public function create(string $nome_identificacao, string $recursos): void
    {
        $banco = new Banco();
        $sql = "INSERT INTO credencial (nome_identificacao, recursos) VALUES ('$nome_identificacao', '$recursos')";
        $banco->exec($sql);
    }

    public function update(int $id, string $nome_identificacao, string $recursos): void
    {
        $banco = new Banco();
        $sql = "UPDATE credencial SET nome_identificacao='$nome_identificacao', recursos='$recursos' WHERE id='$id'";
        $banco->exec($sql);
    }

    public function list_by_id(int $id): array
    {
        $banco = new Banco();
        $sql = "SELECT * FROM credencial WHERE id='$id'";
        $guard = $banco->query($sql);
        return $guard[0] ?? [];
    }

    public function list_all(): array
    {
        $banco = new Banco();
        $sql = "SELECT * FROM credencial";
        $guard = $banco->query($sql);
        return $guard;
    }

    public function del(int $id): void
    {
        $banco = new Banco();
        $sql = "DELETE FROM credencial WHERE id='$id'";
        $banco->exec($sql);
    }
}

?>