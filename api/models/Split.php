<?php 

class Split implements ISplit{
    public function list_all(): array
    {
        $banco = new Banco();
        $sql = "SELECT * FROM split";
        $guard = $banco->query($sql);
        return $guard;
    }

    public function create(int $instituicao_id, string $recebedor_id, int $responsavel_estorno, int $porcentagem): void
    {
        $banco = new Banco();
        $sql = "INSERT INTO split";
        $sql .= "(instituicao_id, recebedor_id, responsavel_estorno, porcentagem)";
        $sql .= "VALUES";
        $sql .= "('$instituicao_id', '$recebedor_id', '$responsavel_estorno', '$porcentagem')";
        $banco->exec($sql);
    }

    public function update(int $id, int $instituicao_id, string $recebedor_id, int $responsavel_estorno, int $porcentagem): void
    {
        $banco = new Banco();
        $sql = "UPDATE split SET instituicao_id=$instituicao_id, recebedor_id='$recebedor_id', responsavel_estorno=$responsavel_estorno, porcentagem=$porcentagem WHERE id=$id";
        $banco->exec($sql);
    }

    public function del(int $id): void
    {
        $banco = new Banco();
        $sql = "DELETE FROM split WHERE id='$id'";
        $banco->exec($sql);
    }

    public function list_all_by_instituicao(int $id): array
    {
        $banco = new Banco();
        $sql = "SELECT * FROM split WHERE instituicao_id='$id'";
        $guard = $banco->query($sql);
        return $guard ?? [];
    }

    
}
