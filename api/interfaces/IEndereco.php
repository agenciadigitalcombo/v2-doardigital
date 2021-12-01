<?php

interface IEndereco
{

    public function list_all(): array;

    public function list_all_by_fk(
        int $fk_id
    ): array;

    public function get_by_id(
        int $id
    ): array;

    public function create(
        int $fk_id,
        string $nome_identificacao,
        string $cep,
        string $logradouro,
        string $numero,
        string $complemento,
        string $bairro,
        string $cidade,
        string $estado
    ): void;

    public function update(
        int $fk_id,
        string $nome_identificacao,
        string $cep,
        string $logadouro,
        string $numero,
        string $complemento,
        string $bairro,
        string $cidade,
        string $estado
    ): void;

    public function del(
        int $id
    ): void;

}
