<?php

class DashboardControler{

    static function dashboard_admin(){

        $instituicao = new Instituicao();
        $doacoes = new Doacao();
        $metas = new Metas();
        $adm = new Adm();

        $token_parce = token();
        $secret = $token_parce['secret'];
        $get_adm_id = $adm->list_profile($secret);
        $adm_id = $get_adm_id['id'];


        $all_instituicao_adm = $instituicao->list_all_by_adm_id($adm_id);
        $intitutions_ids = array_map(function($inst) { return (int) $inst['id']; }, $all_instituicao_adm);           
        $list_doacoes = $doacoes->list_ids($intitutions_ids);
        $all_metas = $metas->list_ids_metas($intitutions_ids);

        Relatorio::teste($list_doacoes, $all_metas);
    
    }

    static function dashboard_instituition(){

        $doacoes = new Doacao();
        $metas = new Metas();

        token();       

        campo_obrigatorios([
            'instituicao_id' => 'Campo instituicao_id, Obrigatorio',
        ]);

        $intitutions_ids = [ intval($_REQUEST['instituicao_id']) ];

        $list_doacoes = $doacoes->list_ids($intitutions_ids);
        $all_metas = $metas->list_ids_metas($intitutions_ids);

        Relatorio::teste($list_doacoes, $all_metas);
    
    }

    static function dashboard_sass(){

        $doacoes = new Doacao();
        $metas = new Metas();
        $instituicoes = new Instituicao();
        
        token();

        $all = $instituicoes->list_all();

        $intitutions_ids = array_map(function ($data) {
            return intval($data['id']);
        }, $all);

        $list_doacoes = $doacoes->list_ids($intitutions_ids);
        $all_metas = $metas->list_ids_metas($intitutions_ids);

        Relatorio::teste($list_doacoes, $all_metas);
    
    }
}





