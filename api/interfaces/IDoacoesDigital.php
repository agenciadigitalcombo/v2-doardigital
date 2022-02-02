<?php

interface IDoacaoDigital
{
    public function create(
        int $admin_id,
        string $token,
        string $tipo,
        string $status_pagamento,
        int $plano_id,
        int $valor,
        string $codigo,
        string $url,
        string $data,
        string $hora
    ): void;

    public function set_status(
        int $instituicao_id,
        string $status
    ): void;

    public function set_token(
        int $instituicao_id,
        string $token
    ): void;

    public function list_all(): array;

    public function get_by_id(
        int $id
    ): array;
}
