<?php 

class Adm implements IAdm{
    public function exist(string $email): bool
    {
       $banco = new Banco();
       $sql = "SELECT * FROM adm WHERE email='$email'";
       $guard = $banco->query($sql);
       
       return !empty($guard);
         
    }

    public function nova_senha(int $id): string
    {
        $senha = '123';
        $banco = new Banco();
        $sql = "UPDATE adm SET pass='$senha' WHERE id='$id'";
        $banco->exec($sql);
        //return $sql;
    }

    public function get_by_id(int $id): array
    {
        $banco = new Banco();
        $sql = "SELECT * FROM adm WHERE id='$id'";
        $guard = $banco->query($sql);
        return !empty($guard);
    }

    public function set_step(int $id, int $step): void
    {
        $banco = new Banco();
        $sql = "UPDATE adm SET step='$step' WHERE id='$id'";
        $banco->exec($sql);
    }

    public function create(string $nome, string $email, string $senha, string $telefone): void
    {
        $banco = new Banco();
        $sql = "INSERT INTO adm";
        $sql .= "(nome, email, pass, telefone)";
        $sql .= "VALUES";
        $sql .= "('$nome', '$email', '$senha', '$telefone')";
        $banco->exec($sql);
    }
    
    public function update(string $nome, string $telefone): void
    {
        $banco = new Banco();
        $sql = "UPDATE adm SET nome='$nome' AND telefone='$telefone'";
        $banco->exec($sql);
    }

    public function alterar_senha(int $id, string $senha): void
    {
        $banco = new Banco();
        $sql = "UPDATE adm SET pass='$senha' WHERE id='$id'";
        $banco->exec($sql);
    }

    public function list_all(): array
    {
        $banco = new Banco();
        $sql = "SELECT * FROM adm";
        $guard = $banco->query($sql);
        var_dump($guard);
        return $guard;
    }

    public function login(string $email, string $senha): bool
    {
        $banco = new Banco();
        $sql = "SELECT * FROM adm WHERE email='$email' and pass='$senha'";
        $guard = $banco->query($sql);
        return empty($guard);
    }

    static function teste(){
       $instacia = new Adm();
       $instacia->list_all();
    }
}



?>