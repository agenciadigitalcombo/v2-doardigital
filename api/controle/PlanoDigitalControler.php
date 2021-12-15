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
        $id = $_REQUEST['id'] ?? '';

        $list_instituicao = $plano->list_all_by_id($id);
        $payload = [
            'nome' => $list_instituicao['nome'],
            'whatsapp' => $list_instituicao['whatsapp'],
            'instituicao_max' => $list_instituicao['instituicao_max'],
            'amount' => $list_instituicao['amount']
        ];
        echo json_encode([
            'next' => true,
            'message' => 'Plano',
            'dados' => $payload
        ]);

    }

    static function update_plano()
    {
        $plano = new PlanoDigital();

        $id = $_REQUEST['id'] ?? '';
        $nome = $_REQUEST['nome'] ?? '';
        $whatsapp = $_REQUEST['whatsapp'] ?? '';
        $instituicao_max = $_REQUEST['instituicao_max'] ?? '';


        $campos_obrigatorios = [
            'id'
        ];
        $lb = [
            'id' => 'Informe o Id'
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

        $plano->update($id, $whatsapp, $instituicao_max, $nome);
        echo json_encode([
            'next' => true,
            'message' => 'Plano Atualizado'
        ]);

    }

    static function on_off()
    {
        $plano = new Plano();

        $status_campo = $_REQUEST['status'];
        $status = withdraw_caracter($status_campo);

        $plano->on_off($status);
        echo json_encode([
            'next' => true,
            'message' => 'Status Atualizado'
        ]);

    }
}
