<?php

class MetasControler{

    static function save_meta(){
        
        $metas = new Metas();
        
        token();
        $instituicao_id_campo = $_REQUEST['instituicao_id'];
        $janeiro_campo = $_REQUEST['janeiro'];
        $fevereiro_campo = $_REQUEST['fevereiro'];
        $marco_campo = $_REQUEST['marco'];
        $abril_campo = $_REQUEST['abril'];
        $maio_campo = $_REQUEST['maio'];
        $junho_campo = $_REQUEST['junho'];
        $julho_campo = $_REQUEST['julho'];
        $agosto_campo = $_REQUEST['agosto'];
        $setembro_campo = $_REQUEST['setembro'];
        $outubro_campo = $_REQUEST['outubro'];
        $novembro_campo = $_REQUEST['novembro'];
        $dezembro_campo = $_REQUEST['dezembro'];
        $ano = $_REQUEST['ano'];
    
        $instituicao_id = withdraw_caracter($instituicao_id_campo);
        $janeiro = withdraw_caracter($janeiro_campo);
        $fevereiro = withdraw_caracter($fevereiro_campo);
        $marco = withdraw_caracter($marco_campo);
        $abril = withdraw_caracter($abril_campo);
        $maio = withdraw_caracter($maio_campo);
        $junho = withdraw_caracter($junho_campo);
        $julho = withdraw_caracter($julho_campo);
        $agosto = withdraw_caracter($agosto_campo);
        $setembro = withdraw_caracter($setembro_campo);
        $outubro = withdraw_caracter($outubro_campo);
        $novembro = withdraw_caracter($novembro_campo);
        $dezembro = withdraw_caracter($dezembro_campo);

        campo_obrigatorios([
            'instituicao_id' => 'Informe a instituicao',
            'janeiro' => 'Informe o mês de janeiro',
            'fevereiro' => 'Informe o mês de fevereiro',
            'marco' => 'Informe o mês de marco',
            'abril' => 'Informe o mês de abril',
            'maio' => 'Informe o mês de maio',
            'junho' => 'Informe o mês de junho',
            'julho' => 'Informe o mês de julho',
            'agosto' => 'Informe o mês de agosto',
            'setembro' => 'Informe o mês de setembro',
            'outubro' => 'Informe o mês de outubro',
            'novembro' => 'Informe o mês de novembro',
            'dezembro' => 'Informe o mês de dezembro',
            'ano' => 'Informe o ano'
        ]);
        
        $metas->create_update($instituicao_id, $ano, $janeiro, $fevereiro, $marco, $abril, $maio, $junho, $julho, $agosto, $setembro, $outubro, $novembro, $dezembro);
        echo json_encode([
            'next' => true,
            'message' => 'Metas salvas'
        ]);
    }

    static function list_metas(){
        
        $metas = new Metas();

        token();
        $instituicao_id = $_REQUEST['instituicao_id'];
        $ano = $_REQUEST['ano'];
        
        campo_obrigatorios([
            'instituicao_id' => 'Informe a instituicao',
            'ano' => 'Informe o ano'
        ]);


        $list_metas = $metas->get_by_instituicao_id($instituicao_id, $ano);

        $payload = array_map(function($list){
            return[
            'instituicao_id' => $list['instituicao_id'],
            'janeiro' => $list['janeiro'],
            'fevereiro' => $list['fevereiro'],
            'marco' => $list['marco'],
            'abril' => $list['abril'],
            'maio' => $list['maio'],
            'junho' => $list['junho'],
            'julho' => $list['julho'],
            'agosto' => $list['agosto'],
            'setembro' => $list['setembro'],
            'outubro' => $list['outubro'],
            'novembro' => $list['novembro'],
            'dezembro' => $list['dezembro'],
            'ano' => $list['ano']
            ];
        },$list_metas);
        echo json_encode([
            'next' => true,
            'message' => 'Metas salvas',
            'dados' => $payload
        ]);
    }


}
















