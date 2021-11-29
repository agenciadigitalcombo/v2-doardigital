<?php 

class SubAdm implements ISubAdm{
    
    public function exist(string $email): bool
    {}

    public function nova_senha(int $id): string
    {}

    public function update_status(string $secret, int $status): void
    {}

    public function list_all_by_adm(int $adm_id): array
    {}

    public function get_by_id(int $id): array
    {}

    public function create(int $adm_id, string $nome, string $email, string $senha, string $secret, string $telefone, int $credencial_id): void
    {}

    public function update(string $nome, string $secret, string $telefone, int $credencial_id): void
    {}

    public function alterar_senha(string $secret, string $senha): void
    {}

    public function list_all(): array
    {}

    public function list_all_instituicao_by_sub_adm(int $sub_adm_id): array
    {}

    public function list_all_by_instituicao(int $instituicao_id): array
    {}

    public function set_instituicao(int $instituicao_id, int $sub_adm_id): array
    {}

    
}
?>