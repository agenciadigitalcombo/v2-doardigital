<?php 
class PlanoDigital implements IPlanoDigital{

    public function list_all(): array
    {
        $banco = new Banco();
        $sql = "SELECT * FROM plano_digital";
        $guard = $banco->query($sql);
        return $guard;
    }

    public function list_all_by_instituicao_max(int $id): array
    {
        $banco = new Banco();
        $sql = "SELECT * FROM plano_digital WHERE instituicao_max='$id'";
        $guard = $banco->query($sql);
        return $guard;
    }

    public function list_by_id(int $id): array
    {
        $banco = new Banco();
        $sql = "SELECT * FROM plano_digital WHERE instituicao_max='$id'";
        $guard = $banco->query($sql);
        return $guard[0] ?? [];
    }

    public function create( string $nome, int $whatsapp, int $instituicao_max, int $amount, string $token = null): void
    {
        $banco = new Banco();
        $sql = "INSERT INTO plano_digital";
        $sql .= "( token, nome, whatsapp, instituicao_max, amount)";
        $sql .= "VALUES";
        $sql .= "('$token', '$nome', '$whatsapp', '$instituicao_max', '$amount')";
        $banco->exec($sql);
    }

    public function update(int $id, int $whatsapp, int $instituicao_max, string $nome): void
    {
        $banco = new Banco();
        $sql = "UPDATE plano_digital SET nome='$nome', whatsapp='$whatsapp', instituicao_max='$instituicao_max' WHERE id='$id' AND instituicao_max='$instituicao_max'";
        $banco->exec($sql);
    }

    public function update_nome(int $id, string $nome): void
    {
        $banco = new Banco();
        $sql = "UPDATE plano_digital SET nome='$nome' WHERE id='$id'";
        $banco->exec($sql);
    }

    public function on_off(int $id): void
    {
        $banco = new Banco();
        $sql = "UPDATE plano_digital SET status='$id'";
        $banco->exec($sql);
    }
   
}