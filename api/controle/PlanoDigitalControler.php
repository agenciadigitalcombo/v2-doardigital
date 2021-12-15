<?php

class PlanoDigitalControler {

    static function create()
    {
        $plano = new PlanoDigital();    

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
        $id = $_REQUEST['instituicao_max'] ?? '';

        
        $list_instituicao = $plano->list_all_by_instituicao_max($id);
        
        $payload = [
            'id' => $list_instituicao['id'],
            'nome' => $list_instituicao['nome'],
            'whatsapp' => $list_instituicao['whatsapp'],
            'instituicao_max' => $list_instituicao['instituicao_max'],
            'amount' => $list_instituicao['amount']
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

        $nome = $_REQUEST['nome'] ?? '';
        $whatsapp = $_REQUEST['whatsapp'] ?? '';
        $instituicao_max = $_REQUEST['instituicao_max'] ?? '';


        $campos_obrigatorios = [
            'instituicao_max'
        ];
        $lb = [
            'instituicao_max' => 'Informe o Instituicao Max'
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

        $get_id = $plano->list_all_by_instituicao_max($instituicao_max);
        $id = $get_id['id'];

        $plano->update($id, $whatsapp, $instituicao_max, $nome);
        echo json_encode([
            'next' => true,
            'message' => 'Plano Digital Atualizado'
        ]);

    }

    static function on_off()
    {
        $plano = new PlanoDigital();

        $status_campo = $_REQUEST['status'];
        $status = withdraw_caracter($status_campo);

        $plano->on_off($status);
        echo json_encode([
            'next' => true,
            'message' => 'Status Atualizado'
        ]);

    }
}
