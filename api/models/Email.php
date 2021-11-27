<?php 
    class Email implements IEmail{
        public static function send(int $instituicao_id, string $email_to, string $subject, string $content): void
        {
            $banco = new Banco();
            $sql = "INSERT INTO email_notificao";
            $sql .= "instituicao_id, assunto, corpo,acao, cron";
            $sql .= "VALUES";
            $sql .= "('$instituicao_id', '$email_to', '$subject', '$content')";
            $banco->exec($sql);
        }
    
        
    }
?>