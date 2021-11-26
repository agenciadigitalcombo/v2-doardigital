<?php

interface IInscrito
{

    public function list_all(): array;

    public function list_all_by_instituicao(
        int $instituicao_id
    ): array;

    public function register(
        int $instituicao_id,
        string $nome,
        string $email,
        string $telefone
    ): void;

    public function del(
        int $instituicao_id,
        string $email,
        string $telefone
    ): void;

}
