<?php

class EvendasNotificacao implements IEvendas{
    public function create_update( int $instituicao_id, string $canal ): void{
        $banco = new Banco();
        
        $exist_id = "SELECT * FROM evendas WHERE instituicao_id=$instituicao_id";
        $res_exist = $banco->query($exist_id);
        
        $set_smtp = "INSERT INTO evendas";
        $set_smtp .= "(instituicao_id, canal)";
        $set_smtp .= "VALUES";
        $set_smtp .= "($instituicao_id, '$canal')";
        
        $save_smtp = "UPDATE evendas SET canal=$canal";
        $save_smtp .= " WHERE instituicao_id=$instituicao_id";
        
        
        if(empty($res_exist)) {
            $banco->exec($set_smtp);
        }else {
            $banco->exec($save_smtp);
        }
    }

    public function get_by_instituicao_id( int $id ): array{
        $banco = new Banco();
        
        $sql = "SELECT * FROM evendas WHERE instituicao_id=$id";
        $guard = $banco->query($sql);
        return $guard[0] ?? [];
    }
}