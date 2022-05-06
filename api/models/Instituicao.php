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
    private $cons;

    function __construct()
    {
        $this->con = new Banco();
        $this->con->table("institution");

        $this->con2 = new Banco();
        $this->con2->table("institution_adm");
    }

    function clearNumber(string $phone): string
    {
        return preg_replace('/\D/', '', $phone);
    }

    public function info(string $institution_fk): array
    {
        $this->con->where([
            "institution_fk" => $institution_fk
        ]);
        return $this->con->select()[0] ?? [];
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

    function maker_fk()
    {
        return "inst_" . uniqid();
    }

    public function register(
        string $adm_fk,
        string $institution_fk,
        string $carteira_fk,
        string $nome,
        string $cpfCnpj,
        string $email,
        string $telefone,
        string $subdomain,
        string $logo,
        string $cor
    ): void {
        $this->setAdm($institution_fk, $adm_fk);
        $this->con->insert([
            "institution_fk" => $institution_fk,
            "carteira_fk" => $carteira_fk,
            "nome" => $nome,
            "cpfCnpj" => $this->clearNumber($cpfCnpj),
            "email" => $email,
            "telefone" => $this->clearNumber($telefone),
            "registro" => date('Y-m-d'),
            "visible" => 1,
            "subdomain" => $subdomain,
            "logo" => $logo,
            "cor" => $cor,
        ]);
    }

    public function update(
        string $institution_fk,
        string $nome,
        string $cpfCnpj,
        string $email,
        string $telefone,
        string $domain,
        string $subdomain,
        string $logo,
        string $icon,
        string $cor,
        string $titulo,
        string $tags,
        string $descricao
    ): void {
        $this->con->where([
            "institution_fk" => $institution_fk
        ]);
        $this->con->update([
            "nome" => $nome,
            "cpfCnpj" => $this->clearNumber($cpfCnpj),
            "email" => $email,
            "telefone" => $this->clearNumber($telefone),
            "domain" => $domain,
            "subdomain" => $subdomain,
            "logo" => $logo,
            "icon" => $icon,
            "cor" => $cor,
            "titulo" => $titulo,
            "tags" => $tags,
            "descricao" => $descricao,
        ]);
    }

    public function list(string $adm_fk): array
    {

        $this->con2->where(["adm_fk" => $adm_fk]);
        $all = $this->con2->select();
        return array_map(function ($inst) {
            return $this->info($inst["instituition_fk"]);
        }, $all);
    }

    function setAdm(string $instituition_fk, string $adm_fk)
    {
        $this->delAdm($instituition_fk, $adm_fk);
        $this->con2->insert([
            "adm_fk" => $adm_fk,
            "instituition_fk" => $instituition_fk,
        ]);
    }

    function delAdm(string $instituition_fk, string $adm_fk)
    {
        $this->con2->where([
            "adm_fk" => $adm_fk,
            "instituition_fk" => $instituition_fk,
        ]);
        $this->con2->delete();
    }

    public function onOff(string $institution_fk, int $visible): void
    {
        $this->con->where([
            "institution_fk" => $institution_fk
        ]);
        $this->con->update([
            "visible" => $visible
        ]);
    }
}
