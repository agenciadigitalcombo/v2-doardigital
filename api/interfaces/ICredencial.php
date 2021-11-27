<?php

interface ICredencial
{

    public function create(
        string $nome_identificacao,
        string $recursos
    ): void;

    public function update(
        int $id,
        string $nome_identificacao,
        string $recursos
    ): void;

    public function list_all(): array;

    public function del(int $id): void;
    
}
