<?php

interface IInstituicao
{
    public function create(
        int $adm_id,
        string $nome_fantasia,
        string $razao_social,
        string $sub_domain,
        string $email,
        string $cnpj,
        string $telefone,
        string $cor,
        string $logo
    ): void;

    public function update(
        int $adm_id,
        string $nome_fantasia,
        string $razao_social,
        string $email,
        string $cnpj,
        string $telefone,
        string $cor,
        string $logo
    ): void;

    public function del( 
        int $id 
    ): void;

    public function get_by_id(
        int $id
    ): array;

    public function list_all(): array;

    public function list_all_by_adm_id(): array;

    public function on_off(
        int $id
    ): void;

    public function set_domain_person(
        int $id,
        string $dominio
    ): void;

    public function search_by_name_or_id(
        string $termo
    ): array;

    public function set_token_recebedor(
        int $recebedor_id,
        string $recebedor_token
    ): void;

}


/*


$adm_id
$nome_fantasia
$razao_social
$sub_domain
$email
$cnpj
$telefone
$cor
$logo

$recebedor_id
$recebedor_token
$dominio
$status


*/
