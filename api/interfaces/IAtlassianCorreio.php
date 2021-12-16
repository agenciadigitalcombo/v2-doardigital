<?php

interface IAtlassianCorreio
{
    public function create_update(
        int $instituicao_id,
        string $token,
        string $chave
    ): void;

    public function get_by_instituicao_id(
        int $id
    ): array;
}
