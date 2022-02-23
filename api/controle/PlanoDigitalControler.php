<?php

class PlanoDigitalControler {

    static function create()
    {
        $pagarme = new PagarmePlano();
        $plano = new PlanoDigital();    
        $adm = new Adm();
        $email_notificacao = new Email();
        
        
        $token_parse = token();
        $nome = $_REQUEST['nome'];
        $whatsapp = $_REQUEST['whatsapp'] ?? 0;
        $instituicao_max = $_REQUEST['instituicao_max'];
        $codigo_cupom = $_REQUEST['codigo_cupom'];
        $trial = (int)$_REQUEST['trial'] ?? 0;
        $quant_disparos = $_REQUEST['quant_disparos'] ?? 0;
        $amount_campo = $_REQUEST['amount'];
        $amount = min_amount($amount_campo);
        
        campo_obrigatorios([
            'nome' => 'Informe o nome',
            'instituicao_max' => 'Informe a Instituicao max'
        ]);
        
        $whatsapp_msg_campo = "Informe o Whatsapp";
        if($whatsapp == ''){
            echo json_encode([
                'next' => false,
                'message' => $whatsapp_msg_campo
            ]);
            return null;
        }
        
        
        $res_pagarme = $pagarme->create($nome, $amount, $trial);
        $token_pagarme = $res_pagarme['id'];
        


        $plano->create($nome, $whatsapp, $instituicao_max, $codigo_cupom, $quant_disparos, $amount, $trial, $token_pagarme);
        

        $adm->set_plano($token_parse['secret'], $token_pagarme);



        echo json_encode([
            'next' => true,
            'message' => 'Plano Digital criado'
        ]);
        

    }


    static function list_planodigital()
    {
        $plano = new PlanoDigital();
        
        $list = $plano->list_all();

        foreach($list as $g){
            $payload [] = [
                'id' => $g['id'],
                'nome' => $g['nome'],
                'whatsapp' => $g['whatsapp'],
                'instituicao_max' => $g['instituicao_max'],
                'amount' => $g['amount'],
                'codigo_cupom' => $g['codigo_cupom'],
                'trial' => $g['trial'],
                'quant_disparos' => $g['quant_disparos'],
                'status' => $g['status'],
                'token' => $g['token']
            ];
        }
        echo json_encode([
            'next' => true,
            'message' => 'Lista de Planos Digitais',
            'dados' => $payload
        ]);
    }

    static function planodigital()
    {
        $plano = new PlanoDigital();
    

        $plano_id = $_REQUEST['plano_id'] ?? '';
        
        $list_plano = $plano->list_by_id($plano_id);
        
        $payload = [
            'id' => $list_plano['id'],
            'nome' => $list_plano['nome'],
            'whatsapp' => $list_plano['whatsapp'],
            'instituicao_max' => $list_plano['instituicao_max'],
            'amount' => $list_plano['amount'],
            'status' => $list_plano['status']
        ];
        echo json_encode([
            'next' => true,
            'message' => 'Plano Digital',
            'dados' => $payload
        ]);

    }

    static function update_planodigital()
    {
        $pagarme = new PagarmePlano();
        $plano = new PlanoDigital();
        
        token();
        
        
        $plano_id = $_REQUEST['plano_id'];
        $nome = $_REQUEST['nome'];
        
        $campos_obrigatorios = [
            'plano_id',
            'nome'
        ];
        $lb = [
            'plano_id' => 'Informe o Id do plano',
            'nome' => 'Informe o Nome do plano'
        ];
        foreach ($campos_obrigatorios as $campo) {
            if (empty($_REQUEST[$campo])) {
                echo json_encode([
                    'next' => false,
                    'message' => $lb[$campo]
                ]);
                return null;
            }
        }
        
        $meu_plano = $plano->get_by_id($plano_id);
        $token_pagarme = $meu_plano['token'];
        
        if(empty($token_pagarme)){
            echo json_encode([
                'next' => false,
                'message' => 'Informe o token PagarMe'
            ]);
            return null;
        }

        $pagarme->update($token_pagarme, $nome);
        

        
        $plano->update_nome($plano_id, $nome);
        echo json_encode([
            'next' => true,
            'message' => 'Plano Digital Atualizado'
        ]);

    }

    static function on_off()
    {
        $plano = new PlanoDigital();

        token();

        $plano_id = $_REQUEST['plano_id'];
        

        $plano->on_off($plano_id);
        echo json_encode([
            'next' => true,
            'message' => 'Status Atualizado'
        ]);

    }
}
