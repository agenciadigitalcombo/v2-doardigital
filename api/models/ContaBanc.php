<?php 

class ContaBanc implements IContaBanc{
   
    public function get_by_instituicao_id(int $id): array
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

    public function create(int $adm_id, string $token, string $nome_identificacao, string $codigo_banco, string $agencia, string $conta, string $conta_digito, string $tipo_conta, string $nome_completo, string $documento_numero, string $agencia_digito): void
    {
        $banco = new Banco();
        $sql = "INSERT INTO conta_bancaria";
        $sql .= "(adm_id, token, nome_identificacao, codigo_banco, agencia, agencia_digito, conta, conta_digito, tipo_conta, nome_completo, documento_numero)";
        $sql .= "VALUES";
        $sql .= "('$adm_id', '$token', '$nome_identificacao', '$codigo_banco', '$agencia', '$agencia_digito', '$conta', '$conta_digito', '$tipo_conta', '$nome_completo', '$documento_numero')";
        $banco->exec($sql);
    }

    public function valid_type_conta(string $conta): bool
    {
        $lb = [
            'conta_corrente', 'conta_poupanca', 'conta_corrente_conjunta', 'conta_poupanca_conjunta'
        ];
        return in_array($conta, $lb);
    }

    public function update(int $id, string $nome_identificacao): void
    {
        $banco = new Banco();
        $sql = "UPDATE conta_bancaria SET nome_identificacao='$nome_identificacao' WHERE adm_id='$id'";
        $banco->exec($sql);
    }

    public function update_conta(int $instituicao_id, string $token, string $nome_identificacao, string $codigo_banco, string $agencia, string $conta, string $conta_digito, string $tipo_conta, string $nome_completo, string $documento_numero, string $agencia_digito): void
    {
        $banco = new Banco();
        $sql = "UPDATE conta_bancaria SET (token='$token', nome_identificacao='$nome_identificacao', codigo_banco='$codigo_banco', agencia='$agencia', conta='$conta', conta_digito='$conta_digito', tipo_conta='$tipo_conta', nome_completo='$nome_completo', documento_numero='$documento_numero', agencia_digito='$agencia_digito') WHERE instituicao_id=$instituicao_id";
        $banco->exec($sql);
    }

    public function list_by_instituicao_id(int $id): array
    {
        $banco = new Banco();
        $sql = "SELECT * FROM conta_bancaria WHERE instituicao_id='$id'";
        $guard = $banco->query($sql);
        return $guard ?? [];
    }
    
    public function list_all(): array
    {
        $banco = new Banco();
        $sql = "SELECT * FROM conta_bancaria";
        $guard = $banco->query($sql);
        return $guard;
    }
    
    
}
