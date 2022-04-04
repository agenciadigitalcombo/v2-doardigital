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

    public function create(int $instituicao_id, int $doador_id, string $token, string $tipo, string $recorrente, string $status_pagamento, int $plano_id, int $valor, string $codigo, string $url, string $reference_key): void
    {
        $banco = new Banco();
        $data_regis = date("Y-m-d");
        $hora_regis = date("H:i:s");
        $sql = "INSERT INTO doacoes";
        $sql .= "(instituicao_id, doador_id, token, tipo, recorrente, status_pagamento, plano_id, valor, codigo, url, data, hora, reference_key)";
        $sql .= "VALUES";
        $sql .= "('$instituicao_id', '$doador_id', '$token', '$tipo', '$recorrente', '$status_pagamento', '$plano_id', '$valor', '$codigo', '$url', '$data_regis', '$hora_regis', '$reference_key')";
        $banco->exec($sql);
    }

    public function agendamento($instituicao_id, $doador_id, $get_token, $type_pagamento, $planos_id, $planos_valor, $proximo_pagamento): void
    {
        $banco = new Banco();
        $data_regis = $proximo_pagamento.' '.date("H:i:s");
        $hora_regis = date("H:i:s");
        $sql = "INSERT INTO doacoes";
        $sql .= "(instituicao_id, doador_id, data, hora, status_pagamento, plano_id, valor, tipo, token)";
        $sql .= "VALUES";
        $sql .= "('$instituicao_id', '$doador_id', '$data_regis', '$hora_regis', 'pending', '$planos_id', '$planos_valor', '$type_pagamento', '$get_token')";
        $banco->exec($sql);
    }

    public function list_all_by_instituicao(int $instituicao_id): array
    {
        $banco = new Banco();
        $sql = "SELECT * FROM doacoes WHERE instituicao_id='$instituicao_id'";
        $guard = $banco->query($sql);
        return $guard;
    }    
    
    public function list_ids(array $ids): array
    {
        $banco = new Banco();
        $plus = [];
        foreach( $ids as $ID ) {
            $plus[] = "instituicao_id={$ID}";
        }
        $plus = implode(' OR ', $plus);
        $where = count($ids) > 0 ? 'WHERE' : '';
        $sql = "SELECT * FROM doacoes {$where} {$plus}";
        $guard = $banco->query($sql);
        return $guard;
    }

    public function list_ids_tipo(array $ids, string $tipo): array
    {
        $banco = new Banco();
        $plus = [];
        foreach( $ids as $ID ) {
            $plus[] = "instituicao_id={$ID}";
        }
        $plus = implode(' OR ', $plus);
        $_AND = count($ids) > 0 ? 'AND' : '';
        $sql = "SELECT * FROM doacoes WHERE tipo='{$tipo}' {$_AND} {$plus}";
        die($sql);
        $guard = $banco->query($sql);
        return $guard;
    }

    public function list_ids_status_pagamento(array $ids, string $status): array
    {
        $banco = new Banco();
        $plus = [];
        foreach( $ids as $ID ) {
            $plus[] = "instituicao_id={$ID}";
        }
        $plus = implode(' OR ', $plus);
        $_AND = count($ids) > 0 ? 'AND' : '';
        $sql = "SELECT * FROM doacoes WHERE status_pagamento='{$status}' {$_AND} {$plus}";
        $guard = $banco->query($sql);
        return $guard;
    }


    public function list_ids_tipo_status(array $ids, string $status, string $tipo): array
    {
        $banco = new Banco();
        $plus = [];
        foreach( $ids as $ID ) {
            $plus[] = "instituicao_id={$ID}";
        }
        $plus = implode(' OR ', $plus);
        $_AND = count($ids) > 0 ? 'AND' : '';
        $sql = "SELECT * FROM doacoes WHERE status_pagamento='{$status}' {$_AND} {$plus} AND tipo='{$tipo}'";
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

    public function get_doacao_by_reference_key(string $reference_key): array
    {
        $banco = new Banco();
        $sql = "SELECT instituicao_id, doador_id FROM doacoes WHERE reference_key='$reference_key'";
        $guard = $banco->query($sql);
        return $guard[0] ?? [];
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
        $sql = "UPDATE doacoes SET status_pagamento='$status' WHERE instituicao_id='$instituicao_id'";
        $banco->exec($sql);
    }

    public function set_status_hook(string $reference_key, string $status): void
    {
        $banco = new Banco();
        $sql = "UPDATE doacoes SET status_pagamento='$status' WHERE reference_key='$reference_key'";
        $banco->exec($sql);
    }

    public function set_status_hook_recorrente(string $reference_key, string $url, string $codigo): void
    {
        $banco = new Banco();
        $sql = "UPDATE doacoes SET url='$url', codigo='$codigo' WHERE reference_key='$reference_key'";
        $banco->exec($sql);
    }


    public function valid_type_pagamento(string $valor): bool{
        $lb = ['CREDIT_CARD', 'BOLETO', 'PIX'];

        return in_array($valor, $lb);
    }
    
}