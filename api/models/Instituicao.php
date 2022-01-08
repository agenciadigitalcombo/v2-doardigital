<?php

class Instituicao implements IInstituicao
{

    public function set_token_recebedor(int $recebedor_id, string $recebedor_token): void
    {
        $banco = new Banco();
        $sql = "UPDATE instituicao SET recebedor_token='$recebedor_token', recebedor_id=$recebedor_id WHERE id=$recebedor_id";
        $banco->exec($sql);
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
        $status = 1;

        $banco = new Banco();
        $sql = "INSERT INTO instituicao";
        $sql .= "(adm_id, nome_fantasia, razao_social, subdomaim, email, cnpj, telefone, cor, logo, status)";
        $sql .= "VALUES";
        $sql .= "('$adm_id', '$nome_fantasia', '$razao_social', '$sub_domain', '$email', '$cnpj', '$telefone', '$cor', '$logo', $status)";
        $banco->exec($sql);
    }

    public function update(int $adm_id, string $nome_fantasia, string $razao_social, string $email, string $cnpj, string $telefone, string $cor, string $logo): void
    {
        $banco = new Banco();
        $sql = "UPDATE instituicao SET";
        $sql .= "nome_fantasia='$nome_fantasia', razao_social='$razao_social', email='$email', cnpj='$cnpj', telefone='$telefone', cor='$cor', logo='$logo'";
        $sql .= "WHERE adm_id='$adm_id'";
        $banco->exec($sql);
    }

    public function list_all(): array
    {
        $banco = new Banco();
        $sql = "SELECT * FROM instituicao";
        $guard = $banco->query($sql);
        return $guard;
    }

    public function del(int $id): void
    {
        $banco = new Banco();
        $sql = "DELETE FROM instituicao WHERE id='$id'";
        $banco->exec($sql);
    }

    public function on_off(int $id): void
    {
        $banco = new Banco();

        $guard = $this->get_by_id($id);
        $status = $guard['status'];
        
        if($status == 1){
            $status = 0;
        }else{
            $status = 1;
        }
        $sql = "UPDATE instituicao SET status='$status' WHERE id=$id";

        $banco->exec($sql);
    }

    public function search_by_name_or_id(string $termo): array
    {return [];}

    public function list_all_by_adm_id($adm_id): array
    {

        $banco = new Banco();
        $sql = "SELECT * FROM instituicao WHERE adm_id='$adm_id'";
        $guard = $banco->query($sql);
        return $guard[0] ?? [];
    }
}
