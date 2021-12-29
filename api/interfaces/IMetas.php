<?php

interface IMetas
{
    public function create_update(
        int $instituicao_id,
        string $ano,
        int $janeiro,
        int $fevereiro,
        int $marco,
        int $abril,
        int $maio,
        int $junho,
        int $julho,
        int $agosto,
        int $setembro,
        int $outubro,
        int $novembro,
        int $dezembro
    ): void;

    public function get_by_instituicao_id(
        int $instituicao_id,
        string $ano
    ): array;
}
