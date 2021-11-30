<?php

interface IPlanoDigital
{
    
    public function list_all(): array;

    public function create(
        string $token,
        string $nome,
        int $whatsapp,
        int $instituicao_max,
        int $amount
    ): void;

    public function update(
        int $id,
        int $whatsapp,
        int $instituicao_max,
        string $nome
    ): void;

    public function on_off(int $id): void;

}
