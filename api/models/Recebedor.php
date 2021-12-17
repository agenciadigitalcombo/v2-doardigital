<?php 

class Recebedor implements IRecebedor

{
    public function create_update(int $adm_id, string $token, string $nome_identificacao, string $conta_bancaria_token, string $email, string $ddd, string $telefone): void
    {
        
        $banco = new Banco();
        $sql = "INSERT INTO recebedor";
        $sql .= "(adm_id, token nome_identificacao, conta_bancaria_token, email, ddd, telefone)";
        $sql .= "VALUES";
        $sql .= "('$adm_id', '$token', '$nome_identificacao', '$conta_bancaria_token', '$email', '$ddd', '$telefone')";
        $banco->exec($sql);
    }

    public function get_by_adm_id(int $adm_id): array
    {
        
    }

    public function list_by_adm_id(int $adm_id): array
    {
        $banco = new Banco();
        $sql = "SELECT * FROM recebedor WHERE adm_id='$adm_id'";
        $guard = $banco->query($sql);
        return $guard[0] ?? [];
    }

    
}