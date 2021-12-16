<?php 

class ContaBanc implements IContaBanc{
   
    public function get_by_adm_id(int $id): array
    {
        $banco = new Banco();
        $sql = "SELECT * FROM conta_bancaria WHERE adm_id='$id'";
        $guard = $banco->query($sql);
        return $guard[0] ?? [];
    }

    public function set_token(int $id, string $token): void
    {
        $banco = new Banco();
        $sql = "UPDATE conta_bancaria SET token='$token' WHERE adm_id='$id'";
        $banco->exec($sql);
    }

    public function create(int $adm_id, string $token, string $nome_identificacao, string $codigo_banco, string $agencia, string $agencia_digito, string $conta, string $conta_digito, string $tipo_conta, string $nome_completo, string $documento_numero): void
    {
        $banco = new Banco();
        $sql = "INSERT INTO conta_bancaria";
        $sql .= "(adm_id, token, nome_identificacao, codigo_banco, agencia, agencia_digito, conta, conta_digito, tipo_conta, nome_completo, documento_numero)";
        $sql .= "VALUES";
        $sql .= "('$adm_id', '$token', '$nome_identificacao', '$codigo_banco', '$agencia', '$agencia_digito', '$conta', '$conta_digito', '$tipo_conta', '$nome_completo', '$documento_numero')";
        $banco->exec($sql);
    }

    public function update(int $id, string $nome_identificacao): void
    {
        $banco = new Banco();
        $sql = "UPDATE conta_bancaria SET nome_identificacao='$nome_identificacao' WHERE adm_id='$id'";
        $banco->exec($sql);
    }

    public function list_by_adm_id(int $id): array
    {
        $banco = new Banco();
        $sql = "SELECT * FROM conta_bancaria WHERE adm_id='$id'";
        $guard = $banco->query($sql);
        return $guard[0] ?? [];
    }
    
    public function list_all(): array
    {
        $banco = new Banco();
        $sql = "SELECT * FROM conta_bancaria";
        $guard = $banco->query($sql);
        return $guard;
    }
    
    
}
