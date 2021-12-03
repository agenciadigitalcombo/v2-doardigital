<?php

class Inscrito implements IInscrito
{
    public function list_all(): array
    {
        $banco = new Banco();
        $sql = "SELECT * FROM inscrito";
        $guard = $banco->query($sql);
        return $guard;
    }

    public function del(int $instituicao_id, string $email, string $telefone): void
    {
        $banco = new Banco();
        $sql = "DELETE FROM inscrito WHERE instituicao_id='$instituicao_id' AND email='$email' OR telefone='$telefone'";
        $banco->exec($sql);
    }

    public function list_all_by_instituicao(int $instituicao_id): array
    {
        $banco = new Banco();
        $sql = "SELECT * FROM inscrito WHERE instituicao_id='$instituicao_id'";
        $guard = $banco->query($sql);
        return $guard[0] ?? [];
    }

    public function register(int $instituicao_id, string $nome, string $email, string $telefone): void
    {

        $banco = new Banco();
        $sql_exist = "SELECT * FROM inscrito WHERE instituicao_id='$instituicao_id' AND email='$email' OR nome='$nome' OR telefone='$telefone'";
        $consulta_se_existe = $banco->query($sql_exist);

        if( !empty($consulta_se_existe[0]) ) {
            $registro = $consulta_se_existe[0];
            $id =  $registro['id'];
            $sql_update = "UPDATE inscrito SET nome='$nome', email='$email', telefone='$telefone' WHERE id='$id'";
            $banco->exec($sql_update);
        } else {
            $sql_insert = "INSERT INTO inscrito (instituicao_id, nome, email, telefone) 
            VALUES ('$instituicao_id', '$nome', '$email', '$telefone')";           
            $banco->exec($sql_insert);
        }

    }
}
