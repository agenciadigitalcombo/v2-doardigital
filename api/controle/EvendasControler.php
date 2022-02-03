<?php 

class EvendasControler{

    static function set_evendas($instituicao_id, $canal): void{

        $evendas = new EvendasNotificacao();

        $evendas->create_update($instituicao_id, $canal);

        echo json_encode([
            'next' => true,
            'message' => 'Smtp salvo'
        ]);
    }
    
    static function get_by_instituicao_smtp($instituicao_id): void{
        $evendas = new EvendasNotificacao();
    
        $get_dados = $evendas->get_by_instituicao_id($instituicao_id);
        $payload = [
            'id' => $get_dados['id'],
            'instituicao_id' => $get_dados['instituicao_id'],
            'canal' => $get_dados['canal']
        ];

        echo json_encode([
            'next' => true,
            'message' => 'Smtp salvo',
            'dados' => $payload
        ]);
        
    }

    static function campos_requiridos_save(): void{
        campo_obrigatorios([
            'instituicao_id' => 'Campo instituicao_id, Obrigatorio',
            'canal' => 'Campo canal, Obrigatorio'
        ]);
    }

    static function campos_requiridos_list(): void{
        campo_obrigatorios([
            'instituicao_id' => 'Campo instituicao_id, Obrigatorio'
        ]);
    }

    static function save_evendas(){
        
        self::campos_requiridos_save();

        $instituicao_id = $_REQUEST['instituicao_id'];
        $canal = $_REQUEST['canal'];
        
        
        self::set_evendas($instituicao_id, $canal);
    }

    static function list_evendas_by_instituicao(){

        self::campos_requiridos_list();

        $instituicao_id = $_REQUEST['instituicao_id'];

        self::get_by_instituicao_smtp($instituicao_id);
    }
}