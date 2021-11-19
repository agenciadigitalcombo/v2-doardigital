<?php

interface IAdm
{
    public function exist(
        string $email
    ): bool;

    public function get_by_id(
        int $id
    ): array;

    public function create(
        string $nome,
        string $email,
        string $senha,
        string $telefone
    ): void;

    public function update(
        string $nome,
        string $telefone
    ): void;

    public function nova_senha(
        int $id
    ): string;

    public function alterar_senha(
        int $id,
        string $senha
    ): void;

    public function set_step(
        int $id,
        int $step
    ): void;


    public function login(
        string $email,
        string $senha
    ): bool;

    public function list_all(): array;
}
