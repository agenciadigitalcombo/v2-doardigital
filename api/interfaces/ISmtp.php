<?php

interface ISmtp {

    public function create_update(
        int $instituicao_id,
        string $host,
        string $protocolo,
        int $porta,
        string $email,
        string $senha
    ) : void;

    public function get_by_instituicao_id() : array;
}
