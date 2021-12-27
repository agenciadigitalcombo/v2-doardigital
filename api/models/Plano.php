<?php 

class Plano implements IPlano{
    
    public function list_all(): array
    {
        $banco = new Banco();
        $sql = "SELECT * FROM plano";
        $guard = $banco->query($sql);
        return $guard;
        
    }

    public function create(int $instituicao_id, string $nome, int $amount, string $token = null): void
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
        return $guard ?? [];
    }

    public function list_by_id(int $id): array
    {
        $banco = new Banco();
        $sql = "SELECT * FROM plano WHERE id='$id'";
        $guard = $banco->query($sql);
        return $guard[0] ?? [];
    }

    public function get_by_id(int $id): array
    {
        $banco = new Banco();
        $sql = "SELECT * FROM plano WHERE id='$id'";
        $guard = $banco->query($sql);
        return $guard[0] ?? [];
    }

    public function on_off(int $id): void
    {
        $banco = new Banco();

        $guard = $this->get_by_id($id);
        $status = $guard['status'];
        
        if($status == 1){
            $status = 0;
        }else{
            $status = 1;
        }
        $sql = "UPDATE plano SET status='$status' WHERE id=$id";

        $banco->exec($sql);
    }

    
}
?>