<?php

class CarteiraControle{


    static function get_carteira_recebedor(){
        
        $instituicao = new Instituicao();
        $recebedor_pagarme = new PagarMeCarteira();

        token();

        $instituicao_id = $_REQUEST['instituicao_id'];

        $get_instituicao_token = $instituicao->get_by_id($instituicao_id);

        $recebedor_token = $get_instituicao_token['recebedor_token'];

        $res_pagarme_recebedor = $recebedor_pagarme->carteira_recebedor($recebedor_token);

        $res_historico_pagarme = $recebedor_pagarme->historico($recebedor_token);



        echo json_encode([
            'next' => true,
            'message' => 'Carteira Recebedor',
            'payload' => $res_pagarme_recebedor,
            'historico' => $res_historico_pagarme
        ]);

    }

    static function get_antecipacao(){
        
        $instituicao = new Instituicao();
        $recebedor_pagarme = new PagarMeCarteira();

        token();

        $instituicao_id = $_REQUEST['instituicao_id'];

        $amount = $_REQUEST['amount']; 

        $get_instituicao_token = $instituicao->get_by_id($instituicao_id);

        $recebedor_token = $get_instituicao_token['recebedor_token'];

        $recebedor_pagarme->antecipar($recebedor_token, $amount);

        echo json_encode([
            'next' => true,
            'message' => 'Solicitado com sucesso'
        ]);

    }

}