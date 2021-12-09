<?php 
class Instituicao implements IInstituicao{
    public function set_token_recebedor(int $recebedor_id, string $recebedor_token): void
    {
        
    }

    public function get_by_id(int $id): array
    {
        $banco = new Banco();
        $sql = "SELECT * FROM instituicao WHERE id='$id'";
        $guard = $banco->query($sql);
        return $guard[0] ?? []; 
    }

    public function set_domain_person(int $id, string $dominio): void
    {
        $banco = new Banco();
        $sql = "UPDATE instituicao SET dominio='$dominio' WHERE id='$id'";
        $banco->exec($sql);
    }

    public function create(int $adm_id, string $nome_fantasia, string $razao_social, string $sub_domain, string $email, string $cnpj, string $telefone, string $cor, string $logo): void
    {
        $banco = new Banco();
        $sql = "INSERT INTO instituicao";
        $sql .= "(adm_id, nome_fantasia, razao_social, subdomaim, dominio, email, cnpj, telefone, recebedor_id, cor, logo, data_registro, status)";
        $sql .= "VALUES";
        $sql .= "('$adm_id', '$nome_fantasia', '$razao_social', '$sub_domain', '$email', '$cnpj', '$telefone', '$cor', '$logo')";
        $banco->exec($sql);
    }

    public function update(int $adm_id, string $nome_fantasia, string $razao_social, string $email, string $cnpj, string $telefone, string $cor, string $logo): void
    {}

    public function list_all(): void
    {}

    public function del(int $id): void
    {}

    public function on_off(int $id): void
    {}

    public function search_by_name_or_id(string $termo): array
    {}

    public function list_all_by_adm_id(): void
    {}

    
}
?>    