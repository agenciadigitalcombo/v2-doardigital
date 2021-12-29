<?php

class PlanoControler {

    static function create()
    {
        $plano = new Plano();    
        $pagarme = new PagarmePlano();

        token();

        $instituicao_id = $_REQUEST['instituicao_id'];
        $nome = $_REQUEST['nome'] ?? '';        
        
        $amount = min_amount();
        
        campo_obrigatorios([
            'instituicao_id' => 'Informe a Instituicao',
            'nome' => 'Informe o nome'
        ]);
        
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
        $instituicao_id = $_REQUEST['instituicao_id'] ?? null;

        campo_obrigatorios([
            'instituicao_id' => 'Informe o ID de intituicao'
        ]);
    
        $list_instituicao = $plano->list_all_by_instituicao($instituicao_id);

        $payload = array_map(function($inst) {
            return [
                'id' => $inst['id'],
                'instituicao' => $inst['instituicao_id'],
                'nome' => $inst['nome'],
                'amount' => $inst['amount']
            ];
        },$list_instituicao );

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

        $instituicao_id = $_REQUEST['instituicao_id'];
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

        token();

        $plano_id = $_REQUEST['plano_id'] ?? null;

        $plano->on_off($plano_id);
        echo json_encode([
            'next' => true,
            'message' => 'Status Atualizado'
        ]);

    }
}
