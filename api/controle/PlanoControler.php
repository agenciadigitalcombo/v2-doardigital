<?php

class PlanoControler {

    static function create()
    {
        $plano = new Plano();    
        $pagarme = new PagarmePlano();

        token();

        $instituicao_id = id();
        $nome = $_REQUEST['nome'] ?? '';
        
        $amount_campo = $_REQUEST['amount'] ?? '';
        $amount = withdraw_caracter($amount_campo);

        $campos_obrigatorios = [
            'instituicao_id',
            'nome',
            'amount'
        ];
        $lb = [
            'instituicao_id' => 'Informe a Instituicao',
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


        $res_plano = $pagarme->create($nome, $amount);
        $plano_token = $res_plano['id'];

        $plano->create($instituicao_id, $nome, $amount, $plano_token);
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
                'id' => $g['id'],
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
        $instituicao_id = $_REQUEST['instituicao_id'];

        $list_instituicao = $plano->list_all_by_instituicao($instituicao_id);
        $payload = [
            'id' => $list_instituicao['id'],
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


    static function instituicao_plano()
    {
        $plano = new Plano();
        $id = $_REQUEST['id'];

        $list_instituicao = $plano->list_by_id($id);
        $payload = [
            'id' => $list_instituicao['id'],
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
        token(); 

        $plano = new Plano();

        $instituicao_id = id();
        $nome = $_REQUEST['nome'] ?? '';

        $campos_obrigatorios = [
            'nome'
        ];
        $lb = [
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

        $plano->update($instituicao_id, $nome);
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
