<?php

class Adm implements IAdm
{

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
        return $senha;
    }

    public function complet_profile(string $secret, string $data_nascimento, string $cpf_cnpj): void
    {
        $banco = new Banco();
        $sql = "UPDATE adm SET cpf='$cpf_cnpj', data_nascimento='$data_nascimento' WHERE secret='$secret'";
        $banco->exec($sql);
    }

    public function get_by_id(int $id): array
    {
        $banco = new Banco();
        $sql = "SELECT * FROM adm WHERE id='$id'";
        $guard = $banco->query($sql);
        return $guard;
    }

    public function get_by_email(string $email): array
    {
        $banco = new Banco();
        $sql = "SELECT * FROM adm WHERE email='$email'";
        $guard = $banco->query($sql);
        return $guard[0] ?? [];
    }

    public function set_step(int $id, int $step): void
    {
        $banco = new Banco();
        $sql = "UPDATE adm SET step='$step' WHERE id='$id'";
        $banco->exec($sql);
    }

    public function create(string $nome, string $email, string $senha, string $telefone): void
    {
        $secret = uniqid();

        $data_regis = date("Y-m-d H:i:s");
        $banco = new Banco();
        $sql = "INSERT INTO adm";
        $sql .= "(nome, email, pass, telefone, secret, step, status, super_adm, data_registro)";
        $sql .= "VALUES";
        $sql .= "('$nome', '$email', '$senha', '$telefone', '$secret', 1, 1, 0, '$data_regis')";
        $banco->exec($sql);
    }

    public function update(string $nome, string $telefone, string $cpf, string $secret, string $data_nascimento): void
    {
        $banco = new Banco();
        $sql = "UPDATE adm SET nome='$nome', telefone='$telefone', cpf='$cpf', data_nascimento='$data_nascimento' WHERE secret='$secret'";
        $banco->exec($sql);
    }

    public function alterar_senha(string $secret, string $senha): void
    {
        $banco = new Banco();
        $sql = "UPDATE adm SET pass='$senha' WHERE secret='$secret'";
        $banco->exec($sql);
    }

    public function list_profile($secret)
    {
        $banco = new Banco();
        $sql = "SELECT * FROM adm WHERE secret='$secret'";
        $guard = $banco->query($sql);
        return $guard[0] ?? [];
    }

    public function list_all(): array
    {
        $banco = new Banco();
        $sql = "SELECT * FROM adm";
        $guard = $banco->query($sql);
        return $guard;
    }

    public function login(string $email, string $senha): bool
    {
        $banco = new Banco();
        $sql = "SELECT * FROM adm WHERE email='$email' and pass='$senha'";
        $guard = $banco->query($sql);
        return empty($guard);
    }

    public function update_step(string $token, int $step): void
    {
        $banco = new Banco();
        $sql = "UPDATE adm SET step='$step' WHERE secret='$token'";
        $banco->exec($sql);
    }

    static function teste()
    {
        $instacia = new Adm();
        $instacia->list_all();
    }
}

?>