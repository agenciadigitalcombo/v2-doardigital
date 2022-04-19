<?php 
class PlanoDigital {

    public function list_all(): array
    {
        $banco = new Banco();
        $sql = "SELECT * FROM plano_digital ORDER BY amount";
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
        $sql = "SELECT * FROM plano_digital WHERE id='$id'";
        $guard = $banco->query($sql);
        return $guard[0] ?? [];
    }


    public function get_by_id(int $id): array
    {
        $banco = new Banco();
        $sql = "SELECT * FROM plano_digital WHERE id='$id'";
        $guard = $banco->query($sql);
        return $guard[0] ?? [];
    }

    public function create(string $nome, int $whatsapp, int $instituicao_max, string $codigo_cupom, string $quant_disparos, int $amount, int $trial, string $token = null): void
    {
        $banco = new Banco();
        $status = 1;
        $sql = "INSERT INTO plano_digital";
        $sql .= "(token, nome, whatsapp, instituicao_max, codigo_cupom, quant_disparos, amount, trial, status)";
        $sql .= "VALUES";
        $sql .= "('$token', '$nome', $whatsapp, $instituicao_max, '$codigo_cupom', '$quant_disparos', $amount, $trial, '$status')";
        $banco->exec($sql);
    }

    public function update(int $id, int $whatsapp, int $instituicao_max, string $nome): void
    {
        $banco = new Banco();
        $sql = "UPDATE plano_digital SET nome='$nome', whatsapp=$whatsapp, instituicao_max=$instituicao_max WHERE id=$id AND instituicao_max=$instituicao_max";
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

        $guard = $this->get_by_id($id);
        $status = $guard['status'];
        
        if($status == 1){
            $status = 0;
        }else{
            $status = 1;
        }
        $sql = "UPDATE plano_digital SET status='$status' WHERE id=$id";

        $banco->exec($sql);
    }
   
}