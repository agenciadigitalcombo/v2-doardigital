<?php

interface IPlano
{
    
    public function list_all(): array;

    public function list_all_by_instituicao(int $id): array;

    public function create(
        int $instituicao_id,
        string $nome,
        int $amount,
        string $token
        ): void;

    public function update(
        int $id,
        string $nome
    ): void;

    public function on_off(int $id): void;

}
