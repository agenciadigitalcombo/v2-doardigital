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
        return self::porter( $this->con->select()[0] ?? [] );
    }

    public function get_key(string $institution_fk): string
    {
        $this->con->where([
            "institution_fk" => $institution_fk
        ]);
        return  $this->con->select()[0]["carteira_fk"] ?? "" ;
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
        string $id_fk,
        string $institution_fk,
        string $carteira_fk,
        string $nome,
        string $cpfCnpj,
        string $email,
        string $telefone,
        string $subdomain,
        string $logo,
        string $cor,
        string $account,
        string $accountDigit,
        string $accountName,
        string $agency,
        string $bank,
        string $bankAccountType
    ): void {
        $this->setAdm($institution_fk, $adm_fk);
        $this->con->insert([
            "institution_fk" => $institution_fk,
            "carteira_fk" => $carteira_fk,
            "id_fk" => $id_fk,
            "nome" => $nome,
            "cpfCnpj" => $this->clearNumber($cpfCnpj),
            "email" => $email,
            "telefone" => $this->clearNumber($telefone),
            "registro" => date('Y-m-d'),
            "visible" => 1,
            "subdomain" => $subdomain,
            "logo" => $logo,
            "cor" => $cor,
            "account" => $account,
            "accountDigit" => $accountDigit,
            "accountName" => $accountName,
            "agency" => $agency,
            "bank" => $bank,
            "bankAccountType" => $bankAccountType,
        ]);
    }

    public function update(
        string $institution_fk,
        string $nome,
        string $email,
        string $telefone,
        string $domain,
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
            "email" => $email,
            "telefone" => $this->clearNumber($telefone),
            "domain" => $domain,
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

    static function porter( array $payload ) : array {
        return [
            "institution_fk" => $payload["institution_fk"] ?? null,
            "nome" => $payload["nome"] ?? null,
            "cpfCnpj" => $payload["cpfCnpj"] ?? null,
            "email" => $payload["email"] ?? null,
            "telefone" => $payload["telefone"] ?? null,
            "registro" => $payload["registro"] ?? null,
            "visible" => $payload["visible"] ?? null,
            "domain" => $payload["domain"] ?? null,
            "subdomain" => $payload["subdomain"] ?? null,
            "logo" => $payload["logo"] ?? null,
            "icon" => $payload["icon"] ?? null,
            "cor" => $payload["cor"] ?? null,
            "titulo" => $payload["titulo"] ?? null,
            "tags" => $payload["tags"] ?? null,
            "descricao" => $payload["descricao"] ?? null,
            "account" => $payload["account"] ?? null,
            "accountDigit" => $payload["accountDigit"] ?? null,
            "accountName" => $payload["accountName"] ?? null,
            "agency" => $payload["agency"] ?? null,
            "bank" => $payload["bank"] ?? null,
            "bankAccountType" => $payload["bankAccountType"] ?? null,
        ];
    }
}
