<?php 

class Inscrito implements IInscrito{
    public function list_all(): array
    {
        $banco = new Banco();
        $sql = "SELECT * FROM Inscrito";
        $guard = $banco->query($sql);
        
    }

    public function del(int $instituicao_id, string $email, string $telefone): void
    {
        $banco = new Banco();
        $sql = "DELETE FROM inscrito WHERE instituicao_id='$instituicao_id' AND email='$email' OR telefone='$telefone'";
        $banco->exec($sql);
        var_dump($guard);
    }

    public function list_all_by_instituicao(int $instituicao_id): array
    {
        $banco = new Banco();
        $sql = "SELECT * FROM inscrito WHERE instituicao_id='$instituicao_id'";
        $banco->query($sql);
    }

    public function register(int $instituicao_id, string $nome, string $email, string $telefone): void
    {
        
        
    }

    static function teste()
    {
        Credencial::exist(1, "Victor Fernando", "recurso5");
    }
}
?>