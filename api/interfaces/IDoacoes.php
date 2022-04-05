<?php

interface IDoacao
{
    public function create(
        int $instituicao_id,
        int $doador_id,
        string $token,
        string $tipo,
        string $recorrente,
        string $status_pagamento,
        int $plano_id,
        int $valor,
        string $codigo,
        string $url,
        string $reference_key
    ): void;

    public function set_status(
        int $instituicao_id,
        string $status
    ): void;

    public function set_token(
        int $instituicao_id,
        string $token
    ): void;

    public function list_all_by_instituicao(
        int $instituicao_id
    ): array;

    public function get_by_id(
        int $id
    ): array;
}
