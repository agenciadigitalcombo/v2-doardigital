<?php

class SubAdm implements ISubAdm
{

    public function exist(string $email): bool
    {
        $banco = new Banco();
        $sql = "SELECT * FROM sub_adm WHERE email='$email'";
        $guard = $banco->query($sql);
        return !empty($guard);
    }

    public function nova_senha(int $id): string
    {
        $senha = '12345';
        $banco = new Banco();
        $sql = "UPDATE sub_adm SET senha='$senha' WHERE id='$id'";
        $banco->exec($sql);
        return $senha;
    }

    public function update_status(string $secret, int $status): void
    {
        $banco = new Banco();
        $sql = "UPDATE sub_adm SET status='$status' WHERE scret='$secret'";
        $banco->exec($sql);
    }

    public function list_profile(string $secret): array
    {
        $banco = new Banco();
        $sql = "SELECT * FROM sub_adm WHERE secret='$secret'";
        $guard = $banco->query($sql);
        return $guard [0] ?? [];
    }

    public function list_all_by_adm(int $adm_id): array
    {
        $banco = new Banco();
        $sql = "SELECT * FROM sub_adm WHERE adm_id='$adm_id'";
        $guard = $banco->query($sql);
        return $guard ?? [];
    }

    public function get_by_id(int $id): array
    {
        $banco = new Banco();
        $sql = "SELECT * FROM sub_adm WHERE id='$id'";
        $guard = $banco->query($sql);
        return $guard[0] ?? [];
    }

    public function get_by_email(string $email): array
    {
        $banco = new Banco();
        $sql = "SELECT * FROM sub_adm WHERE email='$email'";
        $guard = $banco->query($sql);
        return $guard[0] ?? [];
    }

    public function create(int $adm_id, string $nome, string $email, string $senha, string $telefone, int $credencial_id, int $status = 1): void
    {
        $secret = uniqid();
        $banco = new Banco();
        $sql = "INSERT INTO sub_adm";
        $sql .= "(adm_id, nome, email, senha, secret, telefone, credencial_id, status)";
        $sql .= "VALUES";
        $sql .= "('$adm_id','$nome','$email','$senha','$secret','$telefone','$credencial_id', '$status')";
        $banco->exec($sql);
    }

    public function update(string $nome, string $secret, string $telefone, int $credencial_id): void
    {
        $banco = new Banco();
        $sql = "UPDATE sub_adm SET nome='$nome', telefone='$telefone', credencial_id='$credencial_id' WHERE secret='$secret'";
        $banco->exec($sql);
    }

    public function alterar_senha(string $secret, string $senha): void
    {
        $banco = new Banco();
        $sql = "UPDATE sub_adm SET senha='$senha' WHERE secret='$secret'";
        $banco->exec($sql);
    }

    public function list_all(): array
    {
        $banco = new Banco();
        $sql = "SELECT * FROM sub_adm";
        $guard = $banco->query($sql);
        return $guard;
    }
    
    public function list_all_instituicao_by_sub_adm(int $sub_adm_id): array
    {
        $banco = new Banco();
        $sql = "SELECT * FROM sub_adm WHERE id='$sub_adm_id'";
        $guard = $banco->query($sql);
        return $guard[0] ?? [];
    }

    public function list_all_by_instituicao(int $instituicao_id): array
    {
        $banco = new Banco();
        $sql = "SELECT * FROM adm_id='$instituicao_id'";
        $guard = $banco->query($sql);
        return $guard[0] ?? [];
    }

    public function set_instituicao(int $instituicao_id, int $sub_adm_id): array
    {
        $banco = new Banco();
        $sql = "SELECT * FROM sub_adm WHERE id='$sub_adm_id' AND adm_id='$instituicao_id'";
        $guard = $banco->query($sql);
        return $guard;
    }
}
?>