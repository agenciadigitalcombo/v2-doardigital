<?php

class Assinatura
{
    private $id;
    private $instituicao_fk;
    private $external_fk;
    private $doador_fk;
    private $subscription_fk;
    private $tipo_pagamento;
    private $status_pagamento;
    private $valor;
    private $con;

    public function __construct()
    {
        $this->con = new Banco;
        $this->con->table("assinatura");
    }

    public function register(
        $instituicao_fk,
        $external_fk,
        $doador_fk,
        $subscription_fk,
        $tipo_pagamento,
        $status_pagamento,
        $valor
    ): void {
        $this->con->insert([
            "instituicao_fk" => $instituicao_fk,
            "external_fk" => $external_fk,
            "doador_fk" => $doador_fk,
            "subscription_fk" => $subscription_fk,
            "tipo_pagamento" => $tipo_pagamento,
            "status_pagamento" => $status_pagamento,
            "valor" => $valor,
        ]);
    }
    
    public function update(
        $external_fk,
        $status_pagamento
    ): void {
        $this->con->where([
            "external_fk" => $external_fk,
        ]);

        $this->con->update([
            "status_pagamento" => $status_pagamento,
        ]);
    }

    public function listAll(): array
    {
        return array_map(["Assinatura", "porter"],  $this->con->select() ?? []);
    }

    static function porter($payload)
    {
        return [
            "instituicao_fk" => $payload["instituicao_fk"],
            "external_fk" => $payload["external_fk"],
            "doador_fk" => $payload["doador_fk"],
            "subscription_fk" => $payload["subscription_fk"],
            "tipo_pagamento" => $payload["tipo_pagamento"],
            "status_pagamento" => $payload["status_pagamento"],
            "valor" => $payload["valor"],
        ];
    }
}
