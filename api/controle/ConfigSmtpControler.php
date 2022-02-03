<?php 

class ConfigSmtpControler{

    static function set_smtp($instituicao_id, $host, $protocolo, $porta, $email, $senha): void{

        $smtp = new ContaSmtp();

        $smtp->create_update($instituicao_id, $host, $protocolo, $porta, $email, $senha);

        echo json_encode([
            'next' => true,
            'message' => 'Smtp salvo'
        ]);
    }
    
    static function get_by_instituicao_smtp($instituicao_id): void{
        $smtp = new ContaSmtp();
    
        $get_dados = $smtp->get_by_instituicao_id($instituicao_id);
        $payload = [
            'id' => $get_dados['id'],
            'instituicao_id' => $get_dados['instituicao_id'],
            'host' => $get_dados['host'],
            'protocolo' => $get_dados['protocolo'],
            'porta' => $get_dados['porta'],
            'email' => $get_dados['email'],
            'senha' => $get_dados['senha']
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
            'host' => 'Campo host, Obrigatorio',
            'protocolo' => 'Campo protocolo, Obrigatorio',
            'porta' => 'Campo porta, Obrigatorio',
            'email' => 'Campo email, Obrigatorio',
            'senha' => 'Campo senha, Obrigatorio'
        ]);
    }

    static function campos_requiridos_list(): void{
        campo_obrigatorios([
            'instituicao_id' => 'Campo instituicao_id, Obrigatorio'
        ]);
    }

    static function save_smpt(){
        
        self::campos_requiridos_save();

        $instituicao_id = $_REQUEST['instituicao_id'];
        $host = $_REQUEST['host'];
        $protocolo = $_REQUEST['protocolo'];
        $porta = $_REQUEST['porta'];
        $email = valid_email($_REQUEST['email']);
        $senha = $_REQUEST['senha'];
        
        self::set_smtp($instituicao_id, $host, $protocolo, $porta, $email, $senha);
    }

    static function list_smtp_by_instituicao(){

        self::campos_requiridos_list();

        $instituicao_id = $_REQUEST['instituicao_id'];

        self::get_by_instituicao_smtp($instituicao_id);
    }
}