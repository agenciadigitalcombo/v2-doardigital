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

    public function create(int $instituicao_id, int $doador_id, string $token, string $tipo = null, string $status_pagamento, int $plano_id, int $valor, string $codigo = null, string $url = null, string $data = null, string $hora = null): void
    {
        $banco = new Banco();
        $sql = "INSERT INTO doacoes";
        $sql .= "(instituicao_id, doador_id, token, tipo, status_pagamento, plano_id, valor, codigo, url, data, hora)";
        $sql .= "VALUES";
        $sql .= "('$instituicao_id', '$doador_id', '$token', '$tipo', '$status_pagamento', '$plano_id', '$valor', '$codigo', '$url', '$data', '$hora')";
        $banco->exec($sql);
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

    public function valid_type_pagamento(string $valor): bool{
        $lb = ['credit_card', 'boleto', 'pix'];

        return in_array($valor, $lb);
    }
    
}