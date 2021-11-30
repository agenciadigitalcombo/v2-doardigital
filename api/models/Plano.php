<?php 

class Plano implements IPlano{
    
    public function list_all(): array
    {
        $banco = new Banco();
        $sql = "SELECT * FROM plano";
        $guard = $banco->exec($sql);
        
    }

    public function create(int $instituicao_id, string $token, string $nome, int $amount): void
    {
        $banco = new Banco();
        $sql = "INSERT INTO plano (instituicao_id, token, nome, amount)";
        $sql .= "VALUES";
        $sql .= "('$instituicao_id','$token','$nome','$amount')";
        $banco->exec($sql);
    }

    public function update(int $id, string $nome): void
    {
        $banco = new Banco();
        $sql = "UPDATE plano SET nome='$nome' WHERE id='$id'";
        $banco->exec($sql);
    }

    public function list_all_by_instituicao(int $id): array
    {
        $banco = new Banco();
        $sql = "SELECT * FROM plano WHERE instituicao_id='$id'";
        $guard = $banco->query($sql);
    }

    public function on_off(int $id): void
    {
        
    }

    
}
?>