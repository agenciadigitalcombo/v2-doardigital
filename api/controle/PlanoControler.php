<?php

class PlanoControler {

    static function create()
    {
        $plano = new Plano();    

        $instituicao = $_REQUEST['instituicao'] ?? '';
        $nome = $_REQUEST['nome'] ?? '';
        
        $amount_campo = $_REQUEST['amount'] ?? '';
        $amount = withdraw_caracter($amount_campo);

        $campos_obrigatorios = [
            'instituicao',
            'nome',
            'amount'
        ];
        $lb = [
            'instituicao' => 'Informe a Instituicao',
            'nome' => 'Informe o nome',
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

        $plano->create($instituicao, $nome, $amount);
        echo json_encode([
            'next' => true,
            'message' => 'Plano criado'
        ]);
        
    }


    static function list_plano()
    {
        $plano = new Plano();
        
        $list = $plano->list_all();

        foreach($list as $g){
            $payload [] = [
                'instituicao' => $g['instituicao_id'],
                'nome' => $g['nome'],
                'amount' => $g['amount']
            ];
        }
        echo json_encode([
            'next' => true,
            'message' => 'Lista de Planos',
            'dados' => $payload
        ]);



    }

    static function plano()
    {
        $plano = new Plano();
        $instituicao_id = $_REQUEST['instituicao_id'] ?? '';

        $list_instituicao = $plano->list_all_by_instituicao($instituicao_id);
        $payload = [
            'instituicao' => $list_instituicao['instituicao_id'],
            'nome' => $list_instituicao['nome'],
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
        $plano = new Plano();

        $id = $_REQUEST['id'] ?? '';
        $nome = $_REQUEST['nome'] ?? '';

        $campos_obrigatorios = [
            'id',
            'nome'
        ];
        $lb = [
            'id' => 'Informe o Id',
            'nome' => 'Informe o nome',
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
    }

    static function on_off()
    {

    }
}
