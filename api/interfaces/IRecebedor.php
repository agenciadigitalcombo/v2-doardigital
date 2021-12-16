<?php

interface IRecebedor
{
    public function create_update(
        int $adm_id,
        string $token,
        string $nome_identificacao,
        string $conta_bancaria_token,
        string $email,
        string $ddd,
        string $telefone
    ): void;

    public function get_by_adm_id(
        int $adm_id
    ): array;

    public function list_by_adm_id(
        int $adm_id
    ): array;
}
