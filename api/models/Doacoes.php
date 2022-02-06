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

    public function create(int $instituicao_id, int $doador_id, string $token, string $tipo, string $recorrente, string $status_pagamento, int $plano_id, int $valor, string $codigo, string $url): void
    {
        $banco = new Banco();
        $data_regis = date("Y-m-d H:i:s");
        $hora_regis = date("H:i:s");
        $sql = "INSERT INTO doacoes";
        $sql .= "(instituicao_id, doador_id, token, tipo, recorrente, status_pagamento, plano_id, valor, codigo, url, data, hora)";
        $sql .= "VALUES";
        $sql .= "('$instituicao_id', '$doador_id', '$token', '$tipo', '$recorrente', '$status_pagamento', '$plano_id', '$valor', '$codigo', '$url', '$data_regis', '$hora_regis')";
        $banco->exec($sql);
    }

    public function list_all_by_instituicao(int $instituicao_id): array
    {
        $banco = new Banco();
        $sql = "SELECT * FROM doacoes WHERE instituicao_id='$instituicao_id'";
        $guard = $banco->query($sql);
        return $guard;
    }

    public function list_all_by_instituicao_tipo(int $instituicao_id, string $tipo): array
    {
        $banco = new Banco();
        $sql = "SELECT * FROM doacoes WHERE instituicao_id=$instituicao_id AND tipo='$tipo'";
        $guard = $banco->query($sql);
        return $guard;
    }

    public function list_all_by_instituicao_status_pagamento(int $instituicao_id, string $status_pagamento): array
    {
        $banco = new Banco();
        $sql = "SELECT * FROM doacoes WHERE instituicao_id=$instituicao_id AND status_pagamento='$status_pagamento'";
        $guard = $banco->query($sql);
        return $guard;
    }

    public function list_all_by_instituicao_status_tipo_pagamento(int $instituicao_id, string $tipo, string $status_pagamento): array
    {
        $banco = new Banco();
        $sql = "SELECT * FROM doacoes WHERE instituicao_id=$instituicao_id AND status_pagamento='$status_pagamento' AND tipo='$tipo'";
        $guard = $banco->query($sql);
        return $guard;
    }

    public function list_all_by_instituicao_recorrencia(int $instituicao_id, int $recorrente): array
    {
        $banco = new Banco();
        $sql = "SELECT * FROM doacoes WHERE instituicao_id=$instituicao_id AND recorrente='$recorrente'";
        $guard = $banco->query($sql);
        return $guard;
    }

    public function list_all_by_doador(int $doador_id): array
    {
        $banco = new Banco();
        $sql = "SELECT * FROM doacoes WHERE doador_id='$doador_id'";
        $guard = $banco->query($sql);
        return $guard;
    }

    public function get_doador(int $doador_id): array
    {
        $banco = new Banco();
        $sql = "SELECT * FROM doacoes WHERE doador_id='$doador_id'";
        $guard = $banco->query($sql);
        return $guard[0] ?? [];
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