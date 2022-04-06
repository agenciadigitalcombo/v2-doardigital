<?php

class DoacaoControler{

    static  function list_doacao(){
        
        $doacoes = new Doacao();

        $doacao_id = $_REQUEST['doacao_id'];

        campo_obrigatorios([
            'doacao_id' => 'Informe o campo doacao_id',
        ]);

        $list = $doacoes->get_by_id($doacao_id);

        $payload = [
        'doacao_id' => $list['id'],
        'valor' => $list['valor'],
        'status_pagamento' => $list['status_pagamento'],
        'codigo' => $list['codigo'],
        'url' => $list['url'],
        'data' => $list['data'],
        'hora' => $list['hora'],
        'tipo' => $list['tipo']
        ];



        echo json_encode([
            'next' => true,
            'message' => 'Doacao Pelo Id',
            'dados' => $payload
        ]);
    }

}