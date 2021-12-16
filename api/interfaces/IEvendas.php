<?php

interface IEvendas
{
    public function create_update(
        int $instituicao_id,
        string $canal
    ): void;

    public function get_by_instituicao_id(
        int $id
    ): array;
}
