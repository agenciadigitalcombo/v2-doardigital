<?php 
    class Email implements IEmail{

        public static function send(int $instituicao_id, string $status, string $subject, string $content): void
        {
            $banco = new Banco();
            $exist = "SELECT * FROM email_notificao WHERE acao='$status'";
            $get_email = $banco->query($exist);

            $insert = "INSERT INTO email_notificao";
            $insert .= " (instituicao_id, assunto, corpo, acao)";
            $insert .= "VALUES";
            $insert .= "('$instituicao_id', '$subject', '$content', '$status')";
           
            $update = "UPDATE email_notificao SET assunto='$subject', corpo='$content', acao='$status' WHERE instituicao_id=$instituicao_id AND acao='$status'";
            
            
            if(empty($get_email[0])){
                $banco->exec($insert);    
            }else{
                $banco->exec($update);
            }
        }
    
        public static function list_by_instituicao(int $instituicao_id): array
        {
            $banco = new Banco();
            $sql = "SELECT * FROM email_notificao WHERE instituicao_id='$instituicao_id'";
            $get_email = $banco->query($sql);
            return $get_email;
        }   
    }
?>