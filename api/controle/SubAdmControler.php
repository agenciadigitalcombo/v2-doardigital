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

        $email = email();

        $telefone_campo = $_REQUEST['telefone'] ?? '';
        $credencial_id_campo = $_REQUEST['credencial_id'] ?? '';
        


        $credencial_id = withdraw_caracter($credencial_id_campo);

        $telefone = withdraw_caracter($telefone_campo);

        $senha = senha();

        

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
        
        $campos_obrigatorios = [
            'secret'
        ];
        $lb = [
            'secret' => 'Informe o Secret'
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

        $secret = $_REQUEST['secret'];
        $listar = $subadm->list_profile($secret);

        $payload = [
            'nome' => $listar['nome'],
            'email' => $listar['email'],
            'telefone' => $listar['telefone'],
            'credencial_id' => $listar['credencial_id']
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
}
