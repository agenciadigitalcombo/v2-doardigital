<?php

class DoacaoDigital{
    
    public function set_token(int $instituicao_id, string $token): void
    {
        $banco = new Banco();
        $sql = "UPDATE doacoes_digital SET token='$token' WHERE instituicao_id='$instituicao_id'";
        $banco->exec($sql);
    }

    public function get_by_id(int $id): array
    {
        $banco = new Banco();
        $sql = "SELECT * FROM doacoes_digital WHERE id='$id'";
        $guard = $banco->query($sql);
        return $guard[0] ?? [];
    }

    public function create(int $admin_id, string $token, string $status_pagamento, int $plano_id, int $valor): void
    {
        $banco = new Banco();
        $data = date('Y-m-d');
        $hora = date('h:s');
        $sql = "INSERT INTO doacoes_digital";
        $sql .= "(admin_id, token_transacao, status_pagamento, plano_token, valor, data, hora)";
        $sql .= "VALUES";
        $sql .= "('$admin_id', '$token', '$status_pagamento', '$plano_id', '$valor', '$data', '$hora')";
        $banco->exec($sql);
    }

    public function list_all_by_instituicao(int $instituicao_id): array
    {
        $banco = new Banco();
        $sql = "SELECT * FROM doacoes_digital WHERE instituicao_id='$instituicao_id'";
        $guard = $banco->query($sql);
        return $guard;
    }

    public function list_all_by_doador(int $doador_id): array
    {
        $banco = new Banco();
        $sql = "SELECT * FROM doacoes_digital WHERE doador_id='$doador_id'";
        $guard = $banco->query($sql);
        return $guard;
    }

    public function get_doador(int $doador_id): array
    {
        $banco = new Banco();
        $sql = "SELECT * FROM doacoes_digital WHERE doador_id='$doador_id'";
        $guard = $banco->query($sql);
        return $guard[0] ?? [];
    }

    public function set_status(int $instituicao_id, string $status): void
    {
        $banco = new Banco();
        $sql = "UPDATE doacoes_digital SET status='$status' WHERE instituicao_id='$instituicao_id'";
        $banco->exec($sql);
    }

    public function valid_type_pagamento(string $valor): bool{
        $lb = ['credit_card', 'boleto', 'PIX'];

        return in_array($valor, $lb);
    }
    
}