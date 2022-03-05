<?php

class Doador implements IDoador
{

    public function exist(string $cpf): bool
    {
        $banco = new Banco();
        $sql = "SELECT * FROM doador WHERE cpf='$cpf'";
        $guard = $banco->query($sql);
        return !empty($guard);
    }

    public function get_by_costumer_id(int $id): array
    {
        $banco = new Banco();
        $sql = "SELECT * FROM doador WHERE id='$id'";
        $guard = $banco->query($sql);
        return $guard[0] ?? [];
    }

    public function add_costumer_id(int $id, int $costumer_id_pagar_me): void
    {
        $banco = new Banco();
        $sql = "SELECT * FROM doador WHERE codigo_pagarme='$id'";
        $guard = $banco->query($sql);
    }

    public function get_by_id(int $id): array
    {
        $banco = new Banco();
        $sql = "SELECT * FROM doador WHERE id='$id'";
        $guard = $banco->query($sql);
        return $guard [0] ?? [];
    }

    public function get_all_by_id(int $id): array
    {
        $banco = new Banco();
        $sql = "SELECT * FROM doador WHERE id='$id'";
        $guard = $banco->query($sql);
        return $guard;
    }

    public function list_all_data_registro(string $data_registro): array
    {
        $banco = new Banco();
        $sql = "SELECT * FROM doador WHERE data_registro='$data_registro'";
        $guard = $banco->query($sql);
        return $guard;
    }


    public function get_by_email(string $email): array
    {
        $banco = new Banco();
        $sql = "SELECT * FROM doador WHERE email='$email'";
        $guard = $banco->query($sql);
        return $guard[0] ?? [];
    }

    public function create(string $name, string $email, string $phone_numbers, string $cpf, string $senha): void
    {
        $banco = new Banco();
        $sql = "INSERT INTO doador";
        $sql .= "(nome, email, senha, telefone, cpf)";
        $sql .= "VALUES";
        $sql .= "('$name', '$email', '$senha', '$phone_numbers', '$cpf')";
        
        $banco->exec($sql);
    }

    public function atualiza(string $name, string $email, string $phone_numbers, string $cpf, string $senha): void
    {

        $banco = new Banco();
        
        $pesquisa = $this->exist($cpf);

        if($pesquisa){
            $sql = "UPDATE doador SET nome='$name', email='$email', senha='$senha', telefone='$phone_numbers', senha='$senha' WHERE cpf='$cpf'";
            $banco->exec($sql);

        }
        $sql = "INSERT INTO doador";
        $sql .= "(nome, email, senha, telefone, cpf)";
        $sql .= "VALUES";
        $sql .= "('$name', '$email', '$senha', '$phone_numbers', '$cpf')";
        
        $banco->exec($sql);





    }

    public function get_by_cpf(string $cpf): array
    {
        $banco = new Banco();
        $sql = "SELECT * FROM doador WHERE cpf='$cpf'";  
        $guard = $banco->query($sql);
        return $guard[0] ?? [];
    }

    public function list_all(): array
    {
        $banco = new Banco();
        $sql = "SELECT * FROM doador";  
        $guard = $banco->query($sql);
        return $guard;
    }
    

    public function set_token(int $id, string $token): void
    {
        $banco = new Banco();
        $sql = "UPDATE doador SET token='$token' WHERE id=$id";
        $banco->exec($sql);
    }
}
