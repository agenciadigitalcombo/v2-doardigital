<?php

class CredencialControler
{

    static function start()
    {
        echo json_encode([
            "next" => false,
            "message" => "Você não tem permissão"
        ]);
    }

    static function create_credencial()
    {
        $credencial = new Credencial();
        $nome_identificacao = $_REQUEST['nome_identificacao'] ?? '';
        $recursos = $_REQUEST['recursos'] ?? '';

        $campos_obrigatorios = [
            'nome_identificacao',
            'recursos'
        ];
        $lb = [
            'nome_identificacao' => 'Informe um nome',
            'recursos' => 'Informe o recurso'
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
        $credencial->create($nome_identificacao, $recursos);

        echo json_encode([
            'next' => true,
            'message' => 'Credencial criada'
        ]);
    }

    static function update_credencial()
    {
        $credencial = new Credencial();
        $id = $_REQUEST['id'] ?? '';

        $nome_identificacao = $_REQUEST['nome_identificacao'];
        $recursos = $_REQUEST['recursos'];
        
        $credencial->update($id, $nome_identificacao, $recursos);
        echo json_encode([
            'next' => true,
            'message' => 'Credencial atualizada'
        ]);
    }

    static function list_credencial()
    {
        $credencial = new Credencial();
        $lista_todos = $credencial->list_all();

        foreach ($lista_todos as $g) {
            $payload[] = [
                'id' => $g['id'],
                'nome_identificacao' => $g['nome_identificacao'],
                'recursos' => $g['recursos']
            ];
        }
        echo json_encode([
            'next' => true,
            'message' => 'Credenciais',
            'dados' => $payload
        ]);
    }

    static function credencial()
    {
        $credencial = new Credencial();
        $id = $_REQUEST['id'] ?? '';

        $get_credencial = $credencial->list_by_id($id);
        $payload = [
            'nome_identificacao' => $get_credencial['nome_identificacao'],
            'recursos' => $get_credencial['recursos']
        ];

        echo json_encode([
            'next' => true,
            'message' => 'Credenciais',
            'dados' => $payload
        ]);
    }

    static function detete_credencial()
    {
        $credencial = new Credencial();
        $id = $_REQUEST['id'] ?? '';

        $credencial->del($id);

        echo json_encode([
            'next' => true,
            'message' => 'Credenciais Excluidas'
        ]);
    }
}
