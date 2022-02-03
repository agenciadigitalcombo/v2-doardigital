<?php

class MailBoss{
    public function create_update( int $instituicao_id, string $token, string $token_uid) : void
    {
        $banco = new Banco();
        
        $exist_id = "SELECT * FROM conta_email_smtp WHERE instituicao_id=$instituicao_id";
        $res_exist = $banco->query($exist_id);
        
        $set_smtp = "INSERT INTO conta_email_smtp";
        $set_smtp .= "(instituicao_id, token, token_uid)";
        $set_smtp .= "VALUES";
        $set_smtp .= "($instituicao_id, '$token', '$token_uid')";
        
        $save_smtp = "UPDATE conta_email_smtp SET token='$token', token_uid='$token_uid'";
        
        if(empty($res_exist)) {
            $banco->exec($set_smtp);
        }else {
            $banco->exec($save_smtp);
        }
    }

    public function get_by_instituicao_id( int $id ): array
    {
        $banco = new Banco();
        
        $sql = "SELECT * FROM conta_email_smtp WHERE instituicao_id=$id";
        $guard = $banco->query($sql);
        return $guard[0] ?? [];
    }
}