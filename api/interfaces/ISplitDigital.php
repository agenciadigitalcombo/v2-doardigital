<?php

interface ISplitDigital
{
    public function list_all(): array;

    public function create(
        int $recebedor_id,
        int $responsavel_estorno,
        int $porcentagem
    ): void;

    public function update(
        int $id,
        int $recebedor_id,
        int $responsavel_estorno,
        int $porcentagem
    ): void;

    public function del(
        int $id
    ): void;
}
