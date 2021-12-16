<?php

class Doacao implements IDoacao{
    
    public function set_token(int $instituicao_id, string $token): void
    {
        $banco = new Banco();
        $sql = "UPDATE doacoes SET token='$token' WHERE instituicao_id='$instituicao_id'";
        $banco->exec($sql);
    }

    public function get_by_id(int $id): array
    {
        $banco = new Banco();
        $sql = "SELECT * FROM doacoes WHERE id='$id'";
        $guard = $banco->query($sql);
        return $guard[0] ?? [];
    }

    public function create(int $instituicao_id, int $doador_id, string $token, string $tipo, string $status_pagamento, int $plano_id, int $valor, string $codigo, string $url, string $data, string $hora): void
    {
        
    }

    public function list_all_by_instituicao(int $instituicao_id): array
    {
        $banco = new Banco();
        $sql = "SELECT * FROM doacoes WHERE instituicao_id='$instituicao_id'";
        $guard = $banco->query($sql);
        return $guard;
    }

    public function set_status(int $instituicao_id, string $status): void
    {
        $banco = new Banco();
        $sql = "UPDATE doacoes SET status='$status' WHERE instituicao_id='$instituicao_id'";
        $banco->exec($sql);
    }

    
}