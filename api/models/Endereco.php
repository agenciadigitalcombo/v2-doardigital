<?php
class Endereco
{

    private $id;
    private $fk;
    private $tipo;
    private $nome;
    private $cep;
    private $logadouro;
    private $numero;
    private $complemento;
    private $bairro;
    private $cidade;
    private $estado;
    private $con;

    function __construct()
    {
        $this->con = new Banco();
    }

    public function get(
        string $fk,
        string $tipo
    ): array {
        $this->con->table('endereco');
        $this->con->where([
            "fk" => $fk,
            "tipo" => $tipo,
        ]);
        return  $this->con->select();
    }

    function clearZipCode(string $zipCode): string
    {
        return preg_replace('/\D/', '', $zipCode);
    }

    static function porter(array $payload): array
    {
        return [
            "tipo" => $payload['tipo'] ?? null,
            "nome" => $payload['nome'] ?? null,
            "cep" => $payload['cep'] ?? null,
            "logadouro" => $payload['logadouro'] ?? null,
            "numero" => $payload['numero'] ?? null,
            "complemento" => $payload['complemento'] ?? null,
            "bairro" => $payload['bairro'] ?? null,
            "cidade" => $payload['cidade'] ?? null,
            "estado" => $payload['estado'] ?? null
        ];
    }

    function save(
        string $fk,
        string $tipo,
        string $cep,
        string $logadouro,
        string $numero,
        string $complemento,
        string $bairro,
        string $cidade,
        string $estado
    ) {
        $this->con->table('endereco');
        $payload = [
            "fk" => $fk,
            "tipo" => $tipo,
            "cep" => $this->clearZipCode($cep),
            "logadouro" => $logadouro,
            "numero" => $numero,
            "complemento" => $complemento,
            "bairro" => $bairro,
            "cidade" => $cidade,
            "estado" => $estado,
        ];
        if (empty($this->get($fk, $tipo))) {
            $this->con->insert($payload);
        } else {
            $this->con->where([
                "fk" => $fk,
                "tipo" => $tipo,
            ]);
            $this->con->update($payload);
        }
    }
}
