<?php

class SplitControler{

    static function create()
    {
        $split = new Split();

        token();
        $instituicao_id = $_REQUEST['instituicao_id'] ?? null;
        $recebedor_id = $_REQUEST['recebedor_id'] ?? null;
        $responsavel_estorno = $_REQUEST['responsavel_estorno'] ?? null;
        $porcentagem = $_REQUEST['porcentagem'] ?? null;

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
        $porcentagem = $_REQUEST['porcentagem'] ?? null;

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


        $list = $split->list_all_by_instituicao($id);
        $payload = [
            'id' => $list['id'],
            'instituicao_id' => $list['instituicao_id'],
            'recebedor_id' => $list['recebedor_id'],
            'responsavel_estorno' => $list['responsavel_estorno'],
            'porcentagem' => $list['porcentagem']
        ];

        echo json_encode([
            'next' => true,
            'message' => 'Lista Split',
            'dados' => $payload
        ]);


    }
}