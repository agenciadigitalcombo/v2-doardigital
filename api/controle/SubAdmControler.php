<?php

class SubAdmControler
{

    static function start()
    {
        echo json_encode([
            "next" => false,
            "message" => "Você não tem permissão"
        ]);
    }

    static function criar_subadm()
    {
        $adm = new Adm();
        $subadm = new SubAdm();
        

        // $cnpj = cnpj();
        // var_dump($cnpj);
        // die;

        $token_parce = token();

        $nome = $_REQUEST['nome'] ?? '';

        $campo_email = $_REQUEST['email'];
        $email = valid_email($campo_email);

        $telefone_campo = $_REQUEST['telefone'] ?? '';
        $credencial_id_campo = $_REQUEST['credencial_id'] ?? '';
        


        $credencial_id = withdraw_caracter($credencial_id_campo);

        $telefone = withdraw_caracter($telefone_campo);

        $campo_senha = $_REQUEST['senha'];
        $senha = valid_senha($campo_senha);

        
        

        if($subadm->exist($email)){
            echo json_encode([
                "next" => false,
                "message" => "Email já cadastrado"
            ]);
            return null;
        }

        // $adm_email = $token_parce['email'];
        // $guard_adm_logado = $adm->get_by_email($adm_email);
        // if(empty($guard_adm_logado)){
        // echo json_encode([
        // "next" => false,
        // "message" => "Usuario nao logado"
        // ]);
        // return null;
        // }

        $adm_secret = $token_parce['secret'];
        $busca_id = $adm->list_profile($adm_secret);
        

        $adm_id = $busca_id['id'];

        $subadm->create($adm_id, $nome, $email, $senha, $telefone, $credencial_id);

        echo json_encode([
            "next" => true,
            "message" => 'Sub Adm criado'
        ]);
    }

    static function update_subadm()
    {
        $subadm = new SubAdm();

        token();
        
        $secret = $_REQUEST['secret'];

        $nome = $_REQUEST['nome'];
        $credencial_id = $_REQUEST['credencial_id'];

        $telefone_campo = $_REQUEST['telefone'];
        
        $telefone = withdraw_caracter($telefone_campo);
        
        
        campo_obrigatorios([
            'secret' => 'Informe o Secret'
        ]);
        
        $subadm->update($nome, $secret, $telefone, $credencial_id);
        echo json_encode([
            'next' => true,
            'message' => 'Dados atualizados'
        ]);
    }

    static function subadm()
    {
        $subadm = new SubAdm();

        token();

        $secret = $_REQUEST['secret'] ?? null;
        $listar = $subadm->list_profile($secret);
        $lista_taxonomia = get_taxonomy_by_to($listar['id']);
        
        $get_dados_taxonomia = array_map(function($list){
            return[
                'from_id' => $list['from_id'], 
            ];
        }, $lista_taxonomia);


        $payload = [
            'nome' => $listar['nome'],
            'email' => $listar['email'],
            'telefone' => $listar['telefone'],
            'credencial_id' => $listar['credencial_id'],
            'intituicoes_ids' => $get_dados_taxonomia
        ];
        echo json_encode([
            'next' => true,
            'message' => 'Lista do Sub Adm',
            'dados' => $payload
        ]);
    }

    static function list_all()
    {
        $subAdm = new SubAdm();
        $adm = new Adm();

        $token_parce = token();

        $secret = $token_parce['secret'];
        $get_adm_id = $adm->list_profile($secret);
        $adm_id = $get_adm_id['id'];

        $guard = $subAdm->list_all_by_adm($adm_id);

        foreach ($guard as $g) {
            $payload[] = [
                'secret' => $g['secret'],
                'nome' => $g['nome'],
                'email' => $g['email'],
                'foto' => gravatar($g['email']),
                'telefone' => $g['telefone'],
                'credencial_id' => $g['credencial_id'],
                'status' => $g['status']
            ];
        }

        echo json_encode([
            'next' => true,
            'message' => 'Todos os SubAdm',
            'dados' => $payload
        ]);
    }

    static function vincular_sub_adm()
    {
        token();

        campo_obrigatorios([
            'intituicao_id' => 'Informe o id de uma instituição',
            'sub_adm_id' => 'Informe o id de subadm',
        ]);

        $subAdm = new SubAdm();
        $subAdm->vincular( $_REQUEST['intituicao_id'], $_REQUEST['sub_adm_id'] );

        echo json_encode([
            'next' => true,
            'message' => 'Atualizado com Sucesso'
        ]);
        
    }
}
