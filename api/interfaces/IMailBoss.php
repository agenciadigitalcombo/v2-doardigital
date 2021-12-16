<?php

interface IMailBoss
{
    public function create_update(
        int $instituicao_id,
        string $token,
        string $token_uid
    ): void;

    public function get_by_instituicao_id(
        int $id
    ): array;
}
