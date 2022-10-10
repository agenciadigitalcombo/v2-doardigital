<?php

class Adm
{

    private $id;
    private $code;
    private $nome;
    private $cpf;
    private $nascimento;
    private $telefone;
    private $email;
    private $senha;
    private $registro;
    private $etapa;
    private $ativo;
    private $sass;
    private $credencial;
    private $adm;

    private $con;

    function __construct()
    {
        $this->con = new Banco();
    }

    static function porter($payload)
    {
        return [
            "code" => $payload['code'] ?? null,
            "nome" => $payload['nome'] ?? null,
            "cpf" => $payload['cpf'] ?? null,
            "nascimento" => $payload['nascimento'] ?? null,
            "telefone" => $payload['telefone'] ?? null,
            "email" => $payload['email'] ?? null,
            "etapa" => $payload['etapa'] ?? null,
            "ativo" => $payload['ativo'] ?? null,
            "credencial" => $payload['credencial'] ?? null,
            "adm" => $payload['adm'] ?? null,
            "sass" => $payload['sass'] ?? false,
            "gravatar" => self::gravatar($payload['email'] ?? '123@123.com.br'),
        ];
    }

    public function exist(string $email): bool
    {
        return !empty($this->getByEmail($email));
    }

    public function recoverPass(string $email): string
    {
        $tempPass = sha1(uniqid());
        $this->con->table('administrador');
        $this->con->where([
            "email" => $email
        ]);
        $this->con->update([
            "senha" => $this->pass($tempPass)
        ]);
        return $tempPass;
    }

    public function getByEmail(string $email): array
    {
        $this->con->table('administrador');
        $this->con->where([
            "email" => $email
        ]);
        return $this->con->select();
    }

    function pass(string $secret): string
    {
        return md5($secret);
    }

    function code(string $prefix): string
    {
        return $prefix . uniqid();
    }

    function dateNow(): string
    {
        return date("Y-m-d H:i:s");
    }

    function clearPhone(string $phone): string
    {
        return preg_replace('/\D/', '', $phone);
    }

    public function register(string $nome, string $email, string $senha, string $telefone): void
    {
        $this->con->table('administrador');
        $this->con->insert([
            "code" => $this->code('adm_'),
            "nome" => $nome,
            "telefone" => $this->clearPhone($telefone),
            "email" => $email,
            "senha" => $this->pass($senha),
            "registro" => $this->dateNow(),
            "etapa" => 1,
            "ativo" => 1,
            "sass" => 0,
            "adm" => null
        ]);
    }

    public function registerSub(
        string $nome,
        string $email,
        string $senha,
        string $telefone,
        string $adm,
        int $credencial
    ): void {
        $this->con->table('administrador');
        $this->con->insert([
            "code" => $this->code('sub_'),
            "nome" => $nome,
            "telefone" => $this->clearPhone($telefone),
            "email" => $email,
            "senha" => $this->pass($senha),
            "registro" => $this->dateNow(),
            "etapa" => 0,
            "ativo" => 1,
            "sass" => 0,
            "adm" => $adm,
            "credencial" => $credencial
        ]);
    }

    public function createSubAdm(string $code, string $nome, string $email, string $senha, string $telefone): void
    {
        $this->con->table('administrador');
        $this->con->insert([
            "code" => $this->code('sub_'),
            "nome" => $nome,
            "telefone" => $this->clearPhone($telefone),
            "email" => $email,
            "senha" => $this->pass($senha),
            "registro" => $this->dateNow(),
            "etapa" => 0,
            "ativo" => 1,
            "sass" => 0,
            "adm" => $code
        ]);
    }

    public function createAdm(string $nome, string $email, string $senha, string $telefone): void
    {
        $this->con->table('administrador');
        $this->con->insert([
            "code" => $this->code('adm_'),
            "nome" => $nome,
            "telefone" => $this->clearPhone($telefone),
            "email" => $email,
            "senha" => $this->pass($senha),
            "registro" => $this->dateNow(),
            "etapa" => 0,
            "ativo" => 1,
            "sass" => 0,
            "adm" => null
        ]);
    }

    function formatData(string $data): string
    {
        return implode("-", array_reverse(explode("/", $data)));
    }

    public function update(
        string $code,
        string $nome,
        string $telefone,
        string $cpf,
        string $nascimento,
        string $credencial
    ): void {
        $this->con->table('administrador');
        $this->con->where([
            "code" => $code
        ]);
        $this->con->update([
            "nome" => $nome,
            "cpf" => $this->clearPhone($cpf),
            "nascimento" => $this->formatData($nascimento),
            "telefone" => $this->clearPhone($telefone),
            "credencial" => $credencial
        ]);
    }

    public function alterPass(string $code, string $senha): void
    {
        $this->con->table('administrador');
        $this->con->where([
            "code" => $code
        ]);
        $this->con->update([
            "senha" => $this->pass($senha)
        ]);
    }

    public function getByCode(string $code): array
    {
        $this->con->table('administrador');
        $this->con->where([
            "code" => $code
        ]);
        return self::porter($this->con->select()[0] ?? []);
    }

    public function listAll(): array
    {
        $this->con->table('administrador');
        $this->con->where([
            "adm" => ""
        ]);
        return array_map(['Adm', 'porter'], $this->con->select());
    }

    public function listAllSubAdm(string $code): array
    {
        $this->con->table('administrador');
        $this->con->where([
            "adm" => $code
        ]);
        return array_map(['Adm', 'porter'], $this->con->select());
    }

    public function login(string $email, string $senha): string
    {
        $this->con->table('administrador');
        $this->con->where([
            "email" => $email,
            "senha" => $this->pass($senha)
        ]);
        return $this->con->select()[0]['code'] ?? '';
    }

    static function gravatar(string $email): string
    {
        $email = md5(strtolower(trim($email)));
        return "https://www.gravatar.com/avatar/{$email}";
    }

    public function setStep(string $code, int $step): void
    {
        $this->con->table('administrador');
        $this->con->where([
            "code" => $code
        ]);
        $this->con->update([
            "etapa" => $step
        ]);
    }
}
