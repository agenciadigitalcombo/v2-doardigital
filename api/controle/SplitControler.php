<?php

class SplitControler
{

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





        campo_obrigatorios([
            'instituicao_id' => 'Informe a Instituicao',
            'recebedor_id' => 'Informe o Recebedor',
            'porcentagem' => 'Informe a Porcentagem'
        ]);


        if ($responsavel_estorno == '') {
            echo json_encode([
                'next' => false,
                'message' => 'Informe o Responsavel pelo estorno'
            ]);
            return null;
        }



        if (!valid_porcentagem($porcentagem)) {
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


        campo_obrigatorios([
            'id' => 'Informe o ID',
            'instituicao_id' => 'Informe a Instituicao',
            'recebedor_id' => 'Informe o Recebedor',
            'porcentagem' => 'Informe a Porcentagem'
        ]);


        if ($responsavel_estorno == '') {
            echo json_encode([
                'next' => false,
                'message' => 'Informe o Responsavel pelo estorno'
            ]);
            return null;
        }


        if (!valid_porcentagem($porcentagem)) {
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

    static function total_responsaveis( array $payload ) : int {        
        return array_reduce($payload, function( $total, $pessoa ) {            
            return intval( $pessoa['responsavel_estorno'] ) + $total;
        }, 0 );
    }
    
    static function total_porcentagem( array $payload ) : int {        
        return array_reduce($payload, function( $total, $pessoa ) {            
            return intval( $pessoa['porcentagem'] ) + $total;
        }, 0 );
    }


    static function list_all()
    {
        $split = new Split();

        $instituicao_id = $_REQUEST['instituicao_id'] ?? null;


        campo_obrigatorios([
            'instituicao_id' => 'Informe o Id da instituicao_id'
        ]);

        $list = $split->list_all_by_instituicao($instituicao_id);



        $payload = array_map(function ($guard) {
            return [
                'id' => $guard['id'],
                'instituicao_id' => $guard['instituicao_id'],
                'recebedor_id' => $guard['recebedor_id'],
                'responsavel_estorno' => $guard['responsavel_estorno'],
                'porcentagem' => $guard['porcentagem']
            ];
        }, $list);


        $total_pessoal = count($payload);
        if( $total_pessoal != 0 && $total_pessoal < 2 ) {
            echo json_encode([
                'next' => false,
                'message' => 'A divisão de pagamento precisa de no minimo 2 pessoas',
                'dados' => $payload
            ]);
            return null;
        }
        

        if( self::total_responsaveis($payload) > 1 ) {
            echo json_encode([
                'next' => false,
                'message' => 'So pode haver 1 responsavel',
                'dados' => $payload
            ]);
            return null;
        }

        if( self::total_porcentagem($payload) != 100 ) {
            echo json_encode([
                'next' => false,
                'message' => 'A soma total de porcentagem entre os participantes tem que dar 100%',
                'dados' => $payload
            ]);
            return null;
        }

        echo json_encode([
            'next' => true,
            'message' => 'Lista Split',
            'dados' => $payload
        ]);
    }
}
