<?php 

class MailBossControler{

    static function set_mailBoss($instituicao_id, $token, $token_uid): void{

        $boss = new MailBoss();

        $boss->create_update($instituicao_id, $token, $token_uid);

        echo json_encode([
            'next' => true,
            'message' => 'MailBoss salvo'
        ]);
    }
    
    static function get_by_instituicao_mailBoss($instituicao_id): void{
        $boss = new MailBoss();
    
        $get_dados = $boss->get_by_instituicao_id($instituicao_id);
        $payload = [
            'id' => $get_dados['id'],
            'instituicao_id' => $get_dados['instituicao_id'],
            'token' => $get_dados['token'],
            'token_uid' => $get_dados['token_uid']
        ];

        echo json_encode([
            'next' => true,
            'message' => 'MailBoss',
            'dados' => $payload
        ]);
        
    }

    static function campos_requiridos_save(): void{
        campo_obrigatorios([
            'instituicao_id' => 'Campo instituicao_id, Obrigatorio',
            'token' => 'Campo token, Obrigatorio',
            'token_uid' => 'Campo token_uid, Obrigatorio'
        ]);
    }

    static function campos_requiridos_list(): void{
        campo_obrigatorios([
            'instituicao_id' => 'Campo instituicao_id, Obrigatorio'
        ]);
    }

    static function save_mailBoss(){
        
        self::campos_requiridos_save();

        $instituicao_id = $_REQUEST['instituicao_id'];
        $token = $_REQUEST['token'];
        $token_uid = $_REQUEST['token_uid'];
        
        self::set_mailBoss($instituicao_id, $token, $token_uid);
    }

    static function list_mailBoss_by_instituicao(){

        self::campos_requiridos_list();

        $instituicao_id = $_REQUEST['instituicao_id'];

        self::get_by_instituicao_mailBoss($instituicao_id);
    }
}