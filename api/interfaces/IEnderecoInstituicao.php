<?php

interface IEnderecoInstituicao
{
    public function get_by_id(
        int $fk_id
    ): array;

    public function register(
        int $fk_id,
        string $cep,
        string $logradouro,
        string $numero,
        string $complemento,
        string $bairro,
        string $cidade,
        string $estado
    ): void;
}
