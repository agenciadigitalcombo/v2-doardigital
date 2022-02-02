<?php

interface IPlanoDigital
{
    
    public function list_all(): array;

    public function create(
        string $nome,
        int $whatsapp,
        int $instituicao_max,
        string $codigo_cupom,
        int $amount,
        int $trial,
        string $token
    ): void;

    public function update(
        int $id,
        int $whatsapp,
        int $instituicao_max,
        string $nome
    ): void;

    public function on_off(int $id): void;

}
