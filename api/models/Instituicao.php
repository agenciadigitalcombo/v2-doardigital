<?php

class Instituicao
{
    private $id;
    private $institution_fk;
    private $carteira_fk;
    private $nome;
    private $cpfCnpj;
    private $email;
    private $telefone;
    private $registro;
    private $visible;
    private $domain;
    private $subdomain;
    private $logo;
    private $icon;
    private $cor;
    private $titulo;
    private $tags;
    private $descricao;

    private $con;


    function __construct()
    {
        $this->con = new Banco();
        $this->con->table("institution");
    }

    public function info(array $institution_fk): array
    {
        $this->con->where([
            "institution_fk" => $institution_fk
        ]);        
        return $this->con->select() ?? [];
    }

    public function getByHostName(string $hostName): array
    {
        $sql = "SELECT * FROM institution WHERE subdomain='{$hostName}' OR domain='{$hostName}'";
        $this->con->query($sql);
        return $this->con->query($sql)[0] ?? [];
    }

    public function existSubdomain(string $subdomain): bool
    {
        $this->con->where([
            "subdomain" => $subdomain
        ]);        
        return !empty($this->con->select());
    }

    public function setDomain(string $institution_fk, string $domain): void
    {
        $this->con->where([
            "institution_fk" => $institution_fk
        ]);
        $this->con->update([
            "domain" => $domain
        ]);
    }

    public function register(int $adm_id, string $nome_fantasia, string $razao_social, string $sub_domain, string $email, string $cnpj, string $telefone, string $wallet_id, string $api_key, string $cor, string $logo): void
    {
        $status = 1;
        $data_registro = date('Y-m-d');
        $banco = new Banco();
        $sql = "INSERT INTO instituicao";
        $sql .= "(adm_id, nome_fantasia, razao_social, subdomaim, email, cnpj, telefone, wallet_id, api_key, cor, logo, status, data_registro)";
        $sql .= "VALUES";
        $sql .= "('$adm_id', '$nome_fantasia', '$razao_social', '$sub_domain', '$email', '$cnpj', '$telefone', '$wallet_id', '$api_key,', '$cor', '$logo', $status, '$data_registro')";
        $banco->exec($sql);
    }

    

    public function update(int $instituicao_id, string $nome_fantasia, string $razao_social, string $email, string $cnpj, string $telefone, string $cor, string $logo): void
    {
        $banco = new Banco();
        $sql = "UPDATE instituicao SET";
        $sql .= " nome_fantasia='$nome_fantasia', razao_social='$razao_social', email='$email', cnpj='$cnpj', telefone='$telefone', cor='$cor', logo='$logo'";
        $sql .= " WHERE id=$instituicao_id";
        $banco->exec($sql);
    }

    public function config_instituicao(int $instituicao_id, string $cor, string $logo, string $titulo_site, string $tags, string $descricao_site, string $icon): void
    {
        $banco = new Banco();
        $sql = "UPDATE instituicao SET";
        $sql .= " cor='$cor', logo='$logo', titulo_site='$titulo_site', tags='$tags', descricao_site='$descricao_site', icon='$icon'";
        $sql .= " WHERE id=$instituicao_id";

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

        if ($status == 1) {
            $status = 0;
        } else {
            $status = 1;
        }
        $sql = "UPDATE instituicao SET status='$status' WHERE id=$id";

        $banco->exec($sql);
    }


    public function by_ids(array $ids): array
    {
        if (!empty($ids)) {
            $banco = new Banco();
            $ids = implode(', ', $ids);
            $sql = "SELECT * FROM instituicao WHERE id IN ($ids)";
            $guard = $banco->query($sql);
            return $guard;
        }
        return [];
    }

    public function list_all_by_adm_id($adm_id): array
    {

        $banco = new Banco();
        $sql = "SELECT * FROM instituicao WHERE adm_id=$adm_id";
        $guard = $banco->query($sql);
        return $guard;
    }
}
