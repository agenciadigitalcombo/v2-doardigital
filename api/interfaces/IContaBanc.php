<?php

interface IContaBanc
{
    public function create(
        int $instituicao_id,
        string $token,
        string $nome_identificacao,
        string $codigo_banco,
        string $agencia,
        string $agencia_digito,
        string $conta,
        string $conta_digito,
        string $tipo_conta,
        string $nome_completo,
        string $documento_numero

    ): void;

    public function get_by_instituicao_id(
        int $id
    ): array;

    public function list_by_instituicao_id(
        int $id
    ): array;

    public function update(
        int $id,
        string $nome_identificacao
    ): void;

    public function set_token(
        int $id,
        string $token
    ): void;
}
