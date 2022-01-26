<?php 
    class Email{
        public static function send(int $instituicao_id, string $status, string $subject = "DOACAO", string $content): void
        {
            $banco = new Banco();
            $sql = "UPDATE email_notificao SET assunto='$subject', corpo='$content', acao='$status', WHERE instituicao_id=$instituicao_id AND acao='$status'";
            $banco->exec($sql);
        }
    
        
    }
