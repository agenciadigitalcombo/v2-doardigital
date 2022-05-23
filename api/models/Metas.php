<?php
class Metas
{

    private $id;
    private $instituicao_fk;
    private $ano;
    private $janeiro;
    private $fevereiro;
    private $marco;
    private $abril;
    private $maio;
    private $junho;
    private $julho;
    private $agosto;
    private $setembro;
    private $outubro;
    private $novembro;
    private $dezembro;

    private $con;

    function __construct()
    {
        $this->con = new Banco();
        $this->con->table("meta");
    }

    public function save(
        $instituicao_fk,
        $ano,
        $janeiro,
        $fevereiro,
        $marco,
        $abril,
        $maio,
        $junho,
        $julho,
        $agosto,
        $setembro,
        $outubro,
        $novembro,
        $dezembro
    ): void {
        if ($this->exist($instituicao_fk, $ano)) {
            $this->update(
                $instituicao_fk,
                $ano,
                $janeiro,
                $fevereiro,
                $marco,
                $abril,
                $maio,
                $junho,
                $julho,
                $agosto,
                $setembro,
                $outubro,
                $novembro,
                $dezembro
            );
        } else {
            $this->register(
                $instituicao_fk,
                $ano,
                $janeiro,
                $fevereiro,
                $marco,
                $abril,
                $maio,
                $junho,
                $julho,
                $agosto,
                $setembro,
                $outubro,
                $novembro,
                $dezembro
            );
        }
    }

    public function register(
        $instituicao_fk,
        $ano,
        $janeiro,
        $fevereiro,
        $marco,
        $abril,
        $maio,
        $junho,
        $julho,
        $agosto,
        $setembro,
        $outubro,
        $novembro,
        $dezembro
    ): void {
        $this->con->insert([
            "instituicao_fk" => $instituicao_fk,
            "ano" => $ano,
            "janeiro" => floatval($janeiro),
            "fevereiro" => floatval($fevereiro),
            "marco" => floatval($marco),
            "abril" => floatval($abril),
            "maio" => floatval($maio),
            "junho" => floatval($junho),
            "julho" => floatval($julho),
            "agosto" => floatval($agosto),
            "setembro" => floatval($setembro),
            "outubro" => floatval($outubro),
            "novembro" => floatval($novembro),
            "dezembro" => floatval($dezembro),
        ]);
    }

    public function update(
        string $instituicao_fk,
        string $ano,
        string $janeiro,
        string $fevereiro,
        string $marco,
        string $abril,
        string $maio,
        string $junho,
        string $julho,
        string $agosto,
        string $setembro,
        string $outubro,
        string $novembro,
        string $dezembro
    ): void {
        $this->con->where([
            "instituicao_fk" => $instituicao_fk,
            "ano" => $ano,
        ]);
        $this->con->update([
            "instituicao_fk" => $instituicao_fk,
            "ano" => $ano,
            "janeiro" => floatval($janeiro),
            "fevereiro" => floatval($fevereiro),
            "marco" => floatval($marco),
            "abril" => floatval($abril),
            "maio" => floatval($maio),
            "junho" => floatval($junho),
            "julho" => floatval($julho),
            "agosto" => floatval($agosto),
            "setembro" => floatval($setembro),
            "outubro" => floatval($outubro),
            "novembro" => floatval($novembro),
            "dezembro" => floatval($dezembro),
        ]);
    }

    public function info(
        string $instituicao_fk,
        string $ano
    ): array {
        $this->con->where([
            "instituicao_fk" => $instituicao_fk,
            "ano" => $ano,
        ]);
        return self::porter($this->con->select()[0] ?? []);
    }

    public function exist(
        string $instituicao_fk,
        string $ano
    ): bool {
        $this->con->where([
            "instituicao_fk" => $instituicao_fk,
            "ano" => $ano,
        ]);
        return !empty($this->con->select()[0] ?? []);
    }

    static function porter(
        array $payload
    ): array {
        return [
            "ano" => @$payload['ano'] ?? 0,
            "janeiro" => @(float) $payload['janeiro'] ?? 0,
            "fevereiro" => @(float) $payload['fevereiro'] ?? 0,
            "marco" => @(float) $payload['marco'] ?? 0,
            "abril" => @(float) $payload['abril'] ?? 0,
            "maio" => @(float) $payload['maio'] ?? 0,
            "junho" => @(float) $payload['junho'] ?? 0,
            "julho" => @(float) $payload['julho'] ?? 0,
            "agosto" => @(float) $payload['agosto'] ?? 0,
            "setembro" => @(float) $payload['setembro'] ?? 0,
            "outubro" => @(float) $payload['outubro'] ?? 0,
            "novembro" => @(float) $payload['novembro'] ?? 0,
            "dezembro" => @(float) $payload['dezembro'] ?? 0,
        ];
    }
}
