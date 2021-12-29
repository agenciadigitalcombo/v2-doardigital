<?php

class SplitControler{

    static function create()
    {
        $split = new Split();

        token();
       
        $instituicao_id = $_REQUEST['instituicao_id'] ?? null;
        $recebedor_id = $_REQUEST['recebedor_id'] ?? null;
        $responsavel_estorno = $_REQUEST['responsavel_estorno'] ?? null;
        $porcentagem_campo = $_REQUEST['porcentagem'] ?? null;

        $porcentagem_valid_int = valid_int($porcentagem_campo);
        $porcentagem = min_max_porcentagem($porcentagem_valid_int);


        
        
        $campos_obrigatorios = [
            'instituicao_id',
            'recebedor_id',
            'responsavel_estorno',
            'porcentagem'
        ];
        $lb = [
            'instituicao_id' => 'Informe a Instituicao',
            'recebedor_id' => 'Informe o Recebedor',
            'responsavel_estorno' => 'Informe o Responsavel',
            'porcentagem' => 'Informe a Porcentagem'
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
        
        if (!valid_porcentagem($porcentagem) ) {
            echo json_encode([
                'next' => false,
                'message' => 'Valor minimo é 1% e o maximo é 100%'
            ]);
            return null;
        }
        
        $split->create($instituicao_id, $recebedor_id, $responsavel_estorno, $porcentagem);
        echo json_encode([
            'next' => true,
            'message' => 'Split criado'
        ]);


    }

    static function update()
    {
        $split = new Split();

        token();
        
        $id = $_REQUEST['id'] ?? null;
        $instituicao_id = $_REQUEST['instituicao_id'] ?? null;
        $recebedor_id = $_REQUEST['recebedor_id'] ?? null;
        $responsavel_estorno = $_REQUEST['responsavel_estorno'] ?? null;
        $porcentagem_campo = $_REQUEST['porcentagem'] ?? null;
        
        $porcentagem_valid_int = valid_int($porcentagem_campo);
        $porcentagem = min_max_porcentagem($porcentagem_valid_int);


        $campos_obrigatorios = [
            'id',
            'instituicao_id',
            'recebedor_id',
            'responsavel_estorno',
            'porcentagem'
        ];
        $lb = [
            'id' => 'Informe o Id',
            'instituicao_id' => 'Informe a Instituicao',
            'recebedor_id' => 'Informe o Recebedor',
            'responsavel_estorno' => 'Informe o Responsavel',
            'porcentagem' => 'Informe a Porcentagem'
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

        if (!valid_porcentagem($porcentagem) ) {
            echo json_encode([
                'next' => false,
                'message' => 'Valor minimo é 1% e o maximo é 100%'
            ]);
            return null;
        }

        $split->update($id, $instituicao_id, $recebedor_id, $responsavel_estorno, $porcentagem);
        echo json_encode([
            'next' => true,
            'message' => 'Split Atualizado'
        ]);


    
    }

    static function delete()
    {
        $split = new Split();

        token();

        $id = $_REQUEST['id'] ?? null;
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

        $split->del($id);
        echo json_encode([
            'next' => true,
            'message' => 'Split Deletado'
        ]);

    }

    static function list_all()
    {
        $split = new Split();

        $instituicao_id = $_REQUEST['instituicao_id'] ?? null;
    
        
        campo_obrigatorios([
            'instituicao_id' => 'Informe o Id da instituicao_id'
        ]);

        $list = $split->list_all_by_instituicao($instituicao_id);



        $payload = array_map(function($guard){
            return [
                'id' => $guard['id'],
                'instituicao_id' => $guard['instituicao_id'],
                'recebedor_id' => $guard['recebedor_id'],
                'responsavel_estorno' => $guard['responsavel_estorno'],
                'porcentagem' => $guard['porcentagem']
            ];
        }, $list) ; 

        echo json_encode([
            'next' => true,
            'message' => 'Lista Split',
            'dados' => $payload
        ]);


    }
}