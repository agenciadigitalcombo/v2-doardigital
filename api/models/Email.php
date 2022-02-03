<?php 
    class Email{

        public static function send(int $instituicao_id, string $status, string $subject, string $content, string $cron): void
        {
            $banco = new Banco();
            $exist = "SELECT * FROM email_notificao WHERE instituicao_id='$instituicao_id' AND acao='$status'";
            $get_email = $banco->query($exist);

            $insert = "INSERT INTO email_notificao";
            $insert .= " (instituicao_id, assunto, corpo, acao, cron)";
            $insert .= "VALUES";
            $insert .= "('$instituicao_id', '$subject', '$content', '$status', '$cron')";
           
            $update = "UPDATE email_notificao SET assunto='$subject', corpo='$content', acao='$status', cron='$cron' WHERE instituicao_id=$instituicao_id AND acao='$status'";
        

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
        static function status_payment() : array {
            return [
                "processing", 
                "authorized", 
                "paid", 
                "refunded", 
                "waiting_payment", 
                "pending_refund", 
                "refused", 
                "chargedback"
            ];
        }
        static function cron() : array {
            return [
                "+1 minute",
                "+15 minute",
                "+1 days",
                "+2 days",
                "+3 days",
                "+4 days",
                "+5 days",
                "+6 days",
                "+7 days",
                "+8 days",
                "+9 days",
                "+10 days",
            ];
        }
        static function tags() : array {
            return [
                "@@nome_doador@@",
                "@@nome_doador_completo@@",
                "@@nome_instituicao@@",
                "@@link_boleto@@",
                "@@botao_com_boleto@@",
                "@@link_recuperar_doacao@@",
                "@@botao_recuperar_doacao@@",
                "@@codigo_barras_boleto@@",
                "@@link_recuperacao_senha@@",
                "@@botao_recuperacao_senha@@",
                "@@telefone_doador@@",
                "@@telefone_instituicao@@",
            ];
        }
    }
?>