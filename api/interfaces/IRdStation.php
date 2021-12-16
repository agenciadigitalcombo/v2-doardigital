<?php

interface IRdStation
{
    public function create_update(
        int $instituicao_id,
        string $token
    ): void;

    public function get_by_instituicao_id(
        int $id
    ): array;
}
