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
    
        $instituicao_id = min_amount($instituicao_id_campo);
        $janeiro = min_amount($janeiro_campo);
        $fevereiro = min_amount($fevereiro_campo);
        $marco = min_amount($marco_campo);
        $abril = min_amount($abril_campo);
        $maio = min_amount($maio_campo);
        $junho = min_amount($junho_campo);
        $julho = min_amount($julho_campo);
        $agosto = min_amount($agosto_campo);
        $setembro = min_amount($setembro_campo);
        $outubro = min_amount($outubro_campo);
        $novembro = min_amount($novembro_campo);
        $dezembro = min_amount($dezembro_campo);

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
        $instituicao_id = $_REQUEST['inostituicao_id'];
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
















