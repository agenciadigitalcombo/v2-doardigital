<?php

interface ISplit
{
    
    public function list_all(): array;
    
    public function list_all_by_instituicao( int $id ): array;

    public function create(
        int $instituicao_id,
        int $recebedor_id,
        int $responsavel_estorno,
        int $porcentagem
    ): void;

    public function update(
        int $id,
        int $instituicao_id,
        int $recebedor_id,
        int $responsavel_estorno,
        int $porcentagem
    ): void;

    public function del(int $id): void;

}