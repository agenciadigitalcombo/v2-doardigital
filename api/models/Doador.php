<?php

class Doador
{

    private $id;
    private $instituicao_fk;
    private $pagamento_fk;
    private $external_fk;
    private $nome;
    private $cpf;
    private $sexo;
    private $telefone;
    private $email;
    private $senha;
    private $nascimento;
    private $registro;

    private $con;

    function __construct()
    {
        $this->con = new Banco();
        $this->con->table('doador');
    }

    public function exist(string $cpf, string $instituicao_fk): bool
    {
        $this->con->where([
            "cpf" => $this->clearNumber($cpf),
            "instituicao_fk" => $instituicao_fk
        ]);
        return !empty($this->con->select());
    }

    public function info(string $cpf, string $instituicao_fk): array
    {
        $this->con->where([
            "cpf" => $this->clearNumber($cpf),
            "instituicao_fk" => $instituicao_fk
        ]);
        return self::porter($this->con->select()[0] ?? []);
    }

    public function listAll(string $instituicao_fk): array
    {
        $this->con->where(["instituicao_fk" => $instituicao_fk]);
        $this->con->orderByDesc("registro");
        return array_map(["Doador", "porter"], $this->con->select());
    }

    function clearNumber(string $phone): string
    {
        return preg_replace('/\D/', '', $phone);
    }

    static function gravatar(string $email): string
    {
        $email = md5(strtolower(trim($email)));
        return "https://www.gravatar.com/avatar/{$email}";
    }

    public function register(
        string $instituicao_fk,
        string $pagamento_fk,
        string $external_fk,
        string $nome,
        string $cpf,
        string $telefone,
        string $email,
        string $nascimento
    ): void {
        $this->con->insert([
            "instituicao_fk" => $instituicao_fk,
            "pagamento_fk" => $pagamento_fk,
            "external_fk" => $external_fk,
            "nome" => $nome,
            "cpf" => $this->clearNumber($cpf),
            "telefone" => $this->clearNumber($telefone),
            "email" => $email,
            "nascimento" => $nascimento,
            "registro" => date("Y-m-d"),
            "senha" => md5(uniqid()),
        ]);
    }

    public function update(
        string $instituicao_fk,
        string $nome,
        string $cpf,
        string $telefone,
        string $email,
        string $nascimento
    ): void {
        $this->con->where([
            "cpf" => $this->clearNumber($cpf),
            "instituicao_fk" => $instituicao_fk
        ]);
        $this->con->update([
            "nome" => $nome,
            "telefone" => $this->clearNumber($telefone),
            "email" => $email,
            "nascimento" => $nascimento,
        ]);
    }

    public function maker_external_fk(): string
    {
        return "do_" . uniqid();
    }

    static function porter(array $payload): array
    {
        return [
            "instituicao_fk" => $payload["instituicao_fk"] ?? null,
            "pagamento_fk" => $payload["pagamento_fk"] ?? null,
            "external_fk" => $payload["external_fk"] ?? null,
            "nome" => $payload["nome"] ?? null,
            "cpf" => $payload["cpf"] ?? null,
            "telefone" => $payload["telefone"] ?? null,
            "email" => $payload["email"] ?? null,
            "nascimento" => $payload["nascimento"] ?? null,
            "registro" => $payload["registro"] ?? null,
            "sexo" => $payload["sexo"] ?? null,
            "gravatar" => self::gravatar($payload["email"] ?? '123@123.com'),
            "recorrente" => false,
        ];
    }
}
