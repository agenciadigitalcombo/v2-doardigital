<?php 

class ContaSmtp implements ISmtp{

    public function create_update( int $instituicao_id, string $host, string $protocolo, int $porta, string $email, string $senha) : void
    {
        $banco = new Banco();
        
        $exist_id = "SELECT * FROM conta_email_smtp WHERE instituicao_id=$instituicao_id";
        $res_exist = $banco->query($exist_id);
        
        $set_smtp = "INSERT INTO conta_email_smtp";
        $set_smtp .= "(instituicao_id, host, protocolo, porta, email, senha)";
        $set_smtp .= "VALUES";
        $set_smtp .= "($instituicao_id, '$host', '$protocolo', $porta, '$email', '$senha')";
        
        $save_smtp = "UPDATE conta_email_smtp SET host=$host, protocolo=$protocolo, porta=$porta, email=$email, senha=$senha";
        $save_smtp .= " WHERE instituicao_id=$instituicao_id";
        
        
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