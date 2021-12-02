<?php
class Endereco implements IEndereco
{
    public function get_by_id(int $id): array
    {
        $banco = new Banco();
        $sql = "SELECT * FROM endereco WHERE id='$id'";
        $guard = $banco->query($sql);
        return $guard[0] ?? [];
    }

    public function list_all(): array
    {
        $banco = new Banco();
        $sql = "SELECT * FROM endereco";
        $guard = $banco->query($sql);
        return $guard;
    }

    public function create(int $fk_id, string $nome_identificacao, string $cep, string $logradouro, string $numero, string $complemento, string $bairro, string $cidade, string $estado): void
    {
        $banco = new Banco();
        $sql = "INSERT INTO endereco";
        $sql .= "(fk_id, nome_identificacao, cep, logadouro, numero, complemento, bairro, cidade, estado)";
        $sql .= "VALUES";
        $sql .= "('$fk_id', '$nome_identificacao', '$cep', '$logradouro', '$numero', '$complemento', '$bairro', '$cidade', '$estado')";
        $banco->exec($sql);
    }

    public function update(int $id, string $nome_identificacao, string $cep, string $logradouro, string $numero, string $complemento, string $bairro, string $cidade, string $estado): void
    {
        $banco = new Banco();
        $sql = "UPDATE endereco SET nome_identificacao='$nome_identificacao', cep='$cep', logadouro='$logradouro', numero='$numero', complemento='$complemento', bairro='$bairro', cidade='$cidade', estado='$estado'";
        $sql .= "WHERE id='$id'";
        $banco->exec($sql);
    }

    public function del(int $id): void
    {
        $banco = new Banco();
        $sql = "DELETE FROM endereco WHERE id='$id'";
        $banco->exec($sql);
    }

    public function list_all_by_fk(int $fk_id): array
    {
        $banco = new Banco();
        $sql = "SELECT * FROM endereco WHERE fk_id='$fk_id'";
        $guard = $banco->query($sql);
    }


}
?>