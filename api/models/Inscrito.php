<?php 

class Inscrito implements IInscrito{
    public function list_all(): array
    {
        $banco = new Banco();
        $sql = "SELECT * FROM inscrito";
        $guard = $banco->query($sql);
        return $guard;
        
    }

    public function del(int $instituicao_id, string $email, string $telefone): void
    {
        $banco = new Banco();
        $sql = "DELETE FROM inscrito WHERE instituicao_id='$instituicao_id' AND email='$email' OR telefone='$telefone'";
        $banco->exec($sql);
        
        
    }

    public function list_all_by_instituicao(int $instituicao_id): array
    {
        $banco = new Banco();
        $sql = "SELECT * FROM inscrito WHERE instituicao_id='$instituicao_id'";
        $guard = $banco->query($sql);
        return $guard[0] ?? [];
    }

    public function register(int $instituicao_id, string $nome, string $email, string $telefone): void
    {
        $banco = new Banco();
        $select = "SELECT * FROM inscrito WHERE instituicao_id='$instituicao_id' AND email='$email' OR nome='$nome' OR telefone='$telefone'";
        $guard = $banco->query($select);
        
        if($guard){
            $atualiza = "UPDATE inscrito SET nome='$nome', email='$email', telefone='$telefone' WHERE instituicao_id='$instituicao_id' AND email='$email' OR nome='$nome' OR telefone='$telefone'";
            $banco->exec($atualiza);
        }else{
            $insere = "INSERT INTO inscrito (instituicao_id, nome, email, telefone)";
            $insere .= "VALUES ('$instituicao_id', '$nome', '$email', '$telefone')";
            $banco->exec($insere);
        }
        
        
    }

    static function teste(){
        Inscrito::register(2, 'victo', 'victor@gmail', '980098555');
    }
}
?>