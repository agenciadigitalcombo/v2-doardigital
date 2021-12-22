<?php

class PlanoDigitalControler {

    static function create()
    {

        $plano = new PlanoDigital();    
        
        token();
        $nome = $_REQUEST['nome'] ?? '';
        $whatsapp = $_REQUEST['whatsapp'] ?? '';
        $instituicao_max = $_REQUEST['instituicao_max'] ?? '';

        $amount_campo = $_REQUEST['amount'] ?? '';
        $amount = withdraw_caracter($amount_campo);


        $campos_obrigatorios = [
            'nome',
            'whatsapp',
            'instituicao_max',
            'amount'
        ];
        $lb = [
            'nome' => 'Informe o nome',
            'whatsapp' => 'Informe o Whatsapp',
            'instituicao_max' => 'Informe a Instituicao max',
            'amount' => 'Digite o amount'
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

       

        $plano->create($nome, $whatsapp, $instituicao_max, $amount);
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
                'amount' => $g['amount']
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
            'amount' => $list_plano['amount']
        ];
        echo json_encode([
            'next' => true,
            'message' => 'Plano Digital',
            'dados' => $payload
        ]);

    }

    static function update_planodigital()
    {
        $plano = new PlanoDigital();

        token();

        $plano_id = $_REQUEST['plano_id'] ?? '';
        $nome = $_REQUEST['nome'] ?? '';


        $campos_obrigatorios = [
            'plano_id'
        ];
        $lb = [
            'plano_id' => 'Informe o Id do plano'
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

        $status_campo = $_REQUEST['status'];
        $status = withdraw_caracter($status_campo);

        $plano->on_off($status);
        echo json_encode([
            'next' => true,
            'message' => 'Status Atualizado'
        ]);

    }
}
