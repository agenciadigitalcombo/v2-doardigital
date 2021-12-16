<?php

class Doador implements IDoador
{

    public function exist(string $cpf): bool
    {
        $banco = new Banco();
        $sql = "SELECT * FROM doador WHERE cpf='$cpf'";
        $guard = $banco->query($sql);
        return $guard;
    }

    public function get_by_costumer_id(int $id): array
    {
        $banco = new Banco();
        $sql = "SELECT * FROM doador WHERE id='$id'";
        $guard = $banco->query($sql);
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
        return $guard;
    }

    public function get_by_email(string $email): array
    {
        $banco = new Banco();
        $sql = "SELECT * FROM doador WHERE email='$email'";
        $guard = $banco->query($sql);
        return $guard[0] ?? [];
    }

    public function create(string $name, string $email, string $phone_numbers, string $cpf, string $senha = '', string $genero = '', int $costumer_id = 0, int $instituicao_id = 1, array $options): void
    {
        $banco = new Banco();
        
    }

    public function get_by_cpf(string $cpf): array
    {
        $banco = new Banco();
        $sql = "SELECT * FROM doador WHERE cpf='$cpf'";  
        $guard = $banco->query($sql);
        return $guard[0] ?? [];
    }

    
}
