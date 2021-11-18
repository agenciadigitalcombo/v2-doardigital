<?php


interface IPagarMeCostumer
{
    public function create(
        string $name,
        string $email,
        string $external_id,
        array $phone_numbers,
        string $cpf
    ): int;

    public function get_by_id(
        int $customer_id
    ): array;

    public function update(
        int $customer_id,
        string $name,
        string $email
    ): void;
}
