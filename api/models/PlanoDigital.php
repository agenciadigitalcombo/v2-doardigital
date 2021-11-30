<?php 
class PlanoDigital implements IPlanoDigital{
    public function list_all(): array
    {
        $banco = new Banco();
        $sql = "SELECT * FROM plano_digital";
        $guard = $banco->query($sql);
    }

    public function create(int $instituicao_id, string $token, string $nome, int $whatsapp, int $instituicao_max, int $amount): void
    {
        $banco = new Banco();
        $sql = "INSERT INTO plano_digital";
        $sql .= "(id, token, nome, whatsapp, instituicao_max, amount)";
        $sql .= "VALUES";
        $sql .= "'$instituicao_id', '$token', '$nome', '$whatsapp', '$instituicao_max', '$amount'";
        $banco->exec($sql);
    }

    public function update(int $id, int $whatsapp, int $instituicao_max, string $nome): void
    {
        $banco = new Banco();
        $sql = "UPDATE plano_digital whatsapp='$whatsapp', instituicao_max='$instituicao_max' SET WHERE id='$id' AND instituicao_max='$instituicao_max'";
        $banco->exec($sql);
    }

    public function on_off(int $id): void
    {
        $banco = new Banco();
        $sql = "UPDATE plano_digital SET id='$id'";
        $banco->exec($sql);
    }

    
}
?>