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
        static function type_payment() : array {
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
        static function default() {
            return [
                [
                    "cron" => "+1 minute",
                    "acao" => "processing",
                    "assunto" => "Doar Digital - Doação Processada (Aguardando)",
                    "text" => "Sua Doação está sendo processada. Estamos felizes por sua colaboração, e no aguardo de sua conclusão. Agradecemos imensamente por sua doação.",
                ],
                [
                    "cron" => "+1 minute",
                    "acao" => "paid",
                    "assunto" => "Doar Digital - Doação Concluída",
                    "text" => "Sua Doação foi concluída com sucesso.  Somos imensamente gratos por sua doação. Ela ajuda a manter todo projeto vivo e com pleno funcionamento.",
                ],
                [
                    "cron" => "+1 minute",
                    "acao" => "refunded",
                    "assunto" => "Doar Digital - Doação Falhada",
                    "text" => "Sua Doação não foi concluída.  Houve alguma falha no processamento de sua doação. Pedimos a gentileza de verificar se houve algum dado digitado trocado ou faltando algum número. Ou se preferir pode nos chamar no suporte para que nossa equipe possa te auxiliar em sua doação.",
                ],
                [
                    "cron" => "+15 minute",
                    "acao" => "waiting_payment",
                    "assunto" => "Doar Digital - Obrigado por ser providência para @@institution_name@@",
                    "text" => "Olá @@to_nome@@, Obrigada por visitar nossa página! Somos uma instituição que vive exclusivamente das doações recebidas, para manter a obra funcionando. Os recursos são escassos e a providência divina tem tocado muitos corações desejosos de fazer essa experiência da doação, para que tudo se mantenha ativo e que mais vidas sejam salvas para Jesus! Por vezes queremos fazer muito mais, entretanto temos que aguardar que as promessas de Deus se cumpram, no tempo dele e não no nosso. Mas Ele nos surpreende e cuida de nós com muito carinho, quando você chega até nós e se mostra interessado em ajudar. Apenas por você ter nos visitado aqui, já somos gratos. Esperamos que a providência divina também se faça presente na sua vida e que você consiga finalizar a intenção de fazer parte dos doadores. Já rezamos muito nas necessidades de cada um, pois acreditamos que juntos podemos fazer maravilhas pelos que precisam. Nós não existiríamos sem vocês e todo nosso trabalho ficaria sem sentido se não tivéssemos a ajuda de irmãos tão comprometidos! Estamos falando de um exército de doadores, fortalecidos pelo poder da oração, sustentando filhos necessitados de amor e atenção, gerando mais e mais almas restauradas para o reino de Deus. Obrigada por estar conosco! Um abraço fraterno",
                ],
                [
                    "cron" => "+2 days",
                    "acao" => "waiting_payment",
                    "assunto" => "Doar Digital - Você já faz parte desta missão!",
                    "text" => "Olá Amigo da  instituição. Hoje temos um recadinho de nosso fundador para você. Em tempos tão difíceis, sua doação é para nós sinal de Deus como providência divina. Um amor que motiva todos nós a continuar firme. Pois através de sua doação, conseguimos restaurar vidas no país todo. Quando você faz sua doação, você está fazendo parte da restauração de vidas, sendo na evangelização ou nos cuidados com o próximo que chega até nós. Contamos muito com você, Deus te abençoe poderosamente.",
                ],
                [
                    "cron" => "+4 days",
                    "acao" => "waiting_payment",
                    "assunto" => "Doar Digital - Você é Pedra Viva para a missão",
                    "text" => "Olá {{first_name}}. Seja parte viva desta missão tão linda que pertencemos. Hoje você pode ser parte integrante e muito fundamental para nós. Ninguém pode mudar sonhos, mas podemos ajudar a concretizá-los com forte e vitalidade. Venha e seja mais uma pessoa feliz junto a nós. Contamos muito com você, Deus te abençoe poderosamente. Clique e finalize sua doação.",
                ],
                [
                    "cron" => "+2 days",
                    "acao" => "waiting_payment",
                    "assunto" => "Doar Digital - Você tem a chave?",
                    "text" => "Você tem uma chave poderosa que pode nos abrir muito caminhos entre as dificuldades da vida. Sua doação transforma vidas, leva Amor, Caridade, Esperança. Sentimentos que só você pode ajudar a construir nessa fase difícil em que vivemos. Obrigado por sua Doação, ela move montanhas.",
                ],
                [
                    "cron" => "+4 days",
                    "acao" => "waiting_payment",
                    "assunto" => "Doar Digital - Estamos te chamando, você viu?",
                    "text" => "Seu coração bateu mais forte para estar unido conosco nesta missão. Ouça sua voz e seja força viva junto a nossa missão. Você já faz parte de uma grande exército de pessoas do bem que ajudam a transformar o mundo com pequenos gestos de Amor e Gratidão. Venha, continue caminhando conosco.",
                ],
                [
                    "cron" => "+6 days",
                    "acao" => "waiting_payment",
                    "assunto" => "Doar Digital - Sua promessa já chegou?",
                    "text" => "Todos nós temos uma promessa Bíblica que logo chegará, cedo ou tarde. Porém os que souberem o momento certo de olhar e mergulhar nela viverão algo extraordinário do Céu. Você já percebeu? Quando ajudamos mais, notamos em nossa vida o quanto somos mais gratos, mais pacientes, mais amados. A gratidão provém de exercícios do nosso ser junto aos irmãos, missões e trabalhos unidos ao coração de Deus. Seja um provedor em nossa missão e viva também uma grande transformação pessoal de gratidão.",
                ],
                [
                    "cron" => "+8 days",
                    "acao" => "waiting_payment",
                    "assunto" => "Doar Digital - Estamos esperando sua presença, você vem?",
                    "text" => "Olá @@to_name@@ Estamos ansiosos e contando os minutos para que você esteja conosco nessa missão maravilhosa que vivemos. Amar é nosso lema e servir nossa missão. Seja você também parte integrante dessa grande missão, contribua com nossa obra e veja os frutos que ela gera. Contamos com você! Seu boleto",
                ],
                [
                    "cron" => "+9 days",
                    "acao" => "waiting_payment",
                    "assunto" => "Doar Digital - Bençãos para você",
                    "text" => "Olá @@to_name@@. Ainda não conseguimos identificar o seu pagamento. Podemos ajudar de alguma forma?  Estamos orando por você para que muitas bençãos sejam derramadas sobre você. Pois você merece muitas e muitas bençãos. Seu boleto",
                ],
                [
                    "cron" => "+10 days",
                    "acao" => "waiting_payment",
                    "assunto" => "Doar Digital - Precisamos de você",
                    "text" => "Oi @@to_name@@. Nossa @@institution_name@@ precisa muito de sua ajuda e por isso queremos te convidar a estar presente conosco em cada momento para viver também as graças que recebemos. Mesmo não estando fisicamente, você já está espiritualmente. Por isso toda ajuda para mantermos a obra é bem vinda. Contamos com você, Deus te abençoe poderosamente. Graça e paz! Seu boleto",
                ]
            ];
        }
    }
?>