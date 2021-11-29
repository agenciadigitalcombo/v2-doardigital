<?php 

class Split implements ISplit{
    public function list_all(): array
    {
        $banco = new Banco();
        $sql = "SELECT * FROM split";
        $banco->exec($sql);
    }

    public function create(int $instituicao_id, int $recebedor_id, int $responsavel_estorno, int $porcentagem): void
    {
        $banco = new Banco();
        $sql = "INSERT INTO split";
        $sql .= "(instituicao_id, recebedor_id, responsavel_estorno, porcentagem)";
        $sql .= "VALUES";
        $sql .= "('$instituicao_id', '$recebedor_id', '$responsavel_estorno', '$porcentagem')";
        $banco->exec($sql);
    }

    public function update(int $id, int $instituicao_id, int $recebedor_id, int $responsavel_estorno, int $porcentagem): void
    {
        $banco = new Banco();
        
    }

    public function del(int $id): void
    {}

    public function list_all_by_instituicao(int $id): array
    {}

    
}
?>