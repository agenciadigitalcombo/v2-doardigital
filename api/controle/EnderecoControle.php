<?php

class EnderecoControle
{

    static function start()
    {
        echo json_encode([
            "next" => false,
            "message" => "Você não tem permissão"
        ]);
    }

    static function create_endereco()
    {
        $jwt = new Jwt();
        $adm = new Adm();
        $endereco = new Endereco();

        $token = $_REQUEST['token'];
        $valid_token = $jwt->valid($token);
        $token_parse = $jwt->ler($token);
        $nome_identificacao = $_REQUEST['nome_identificacao'];
        $cep = $_REQUEST['cep'];
        $logradouro = $_REQUEST['logradouro'];
        $numero = $_REQUEST['numero'];
        $complemento = $_REQUEST['complemento'];
        $bairro = $_REQUEST['bairro'];
        $cidade = $_REQUEST['cidade'];
        $estado = $_REQUEST['estado'];

        

        $campos_obrigatorios = [
            'token',
            'cep',
            'logradouro',
            'bairro',
            'cidade',
            'estado',
            'numero'
        ];
        $lb = [
            'token' => 'Informe o Token',
            'cep' => 'Informe um CEP',
            'logadouro' => 'Digite um endereço',
            'bairro' => 'digite o Bairro',
            'cidade' => 'Informe a Cidade',
            'estado' => 'Informe o estado',
            'numero' => 'Digite o numero'
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

        if (! $valid_token) {
            echo json_encode([
                'next' => false,
                'message' => 'Token invalido'
            ]);
            return null;
        }

        $secret = $token_parse['secret'];
        $id_adm = $adm->list_profile($secret);
        $id = $id_adm['id'];

        $transform_cep = preg_replace('/[^0-9]/', '', $cep);
        
        $endereco->create($id, $nome_identificacao, $transform_cep, $logradouro, $numero, $complemento, $bairro, $cidade, $estado);
        echo json_encode([
            'next' => true,
            'message' => 'Endereco criado'
        ]);
    }

    static function update_endereco()
    {
        $jwt = new Jwt();
        $adm = new Adm();
        $endereco = new Endereco();

        $token = $_REQUEST['token'] ?? '';
        $token_parse = $jwt->ler($token);
        $valid_token = $jwt->valid($token);

        $nome_identificacao = $_REQUEST['nome_identificacao'] ?? '';
        $cep = $_REQUEST['cep'] ?? '';
        $logradouro = $_REQUEST['logradouro'] ?? '';
        $numero = $_REQUEST['numero'];
        $complemento = $_REQUEST['complemento'] ?? '';
        $bairro = $_REQUEST['bairro'] ?? '';
        $cidade = $_REQUEST['cidade'] ?? '';
        $estado = $_REQUEST['estado'] ?? '';


        $caracter = array(
            "(",
            ")",
            " ",
            "-",
            ".",
            ","
        );

        $transform_cep = str_replace($caracter, "", $cep);

        $campos_obrigatorios = [
            'token'
        ];
        $lb = [
            'token' => 'Informe o Token'
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


        if (! $valid_token) {
            echo json_encode([
                'next' => false,
                'message' => 'Token invalido'
            ]);
            return null;
        }



        $secret = $token_parse['secret'];
        $id_adm = $adm->list_profile($secret);
        $id = $id_adm['id'];

        $endereco->create($id, $nome_identificacao, $transform_cep, $logradouro, $numero, $complemento, $bairro, $cidade, $estado);
        echo json_encode([
            'next' => true,
            'message' => 'Endereco Atualizado'
        ]);
    }

    static function list_endereco()
    {
        $endereco = new Endereco();
        
        $guard = $endereco->list_all();
        foreach ($guard as $g) {
            $payload[] = [
                'nome_identificacao' => $g['nome_identificacao'],
                'cep' => $g['cep'],
                'logadouro' => $g['logadouro'],
                'numero' => $g['numero'],
                'complemento' => $g['complemento'],
                'bairro' => $g['bairro'],
                'cidade' => $g['cidade'],
                'estado' => $g['estado']
            ];
        }

        echo json_encode([
            'next' => true,
            'message' => 'Enderecos',
            'dados' => $payload
        ]);
    }

    static function endereco()
    {
        $jwt = new Jwt();
        $endereco = new Endereco();
        $adm = new Adm();

        $token = $_REQUEST['token'] ?? '';
        if ($jwt->valid($token) == false) {
            echo json_encode([
                'next' => false,
                'message' => 'Token Inválido'
            ]);
            return null;
        }

        $adm_parse = $jwt->ler($token);
        $adm_secret = $adm_parse['secret'];
        $adm_logged = $adm->list_profile($adm_secret);
        $id = $adm_logged['id'];
        $guard = $endereco->list_all_by_fk($id);
        
        $payload = [
            'nome_identificacao' => $guard['nome_identificacao'],
            'cep' => $guard['cep'],
            'logadouro' => $guard['logadouro'],
            'numero' => $guard['numero'],
            'complemento' => $guard['complemento'],
            'bairro' => $guard['bairro'],
            'cidade' => $guard['cidade'],
            'estado' => $guard['estado']
        ];

        echo json_encode([
            'next' => true,
            'message' => 'Enderecos',
            'dados' => $payload
        ]);
    }

    static function detete_endereco()
    {
        $jwt = new Jwt();
        $adm = new Adm();

        $endereco = new Endereco();
        $token = $_REQUEST['token'] ?? '';
        $valid_token = $jwt->valid($token);

        $adm_parse = $jwt->ler($token);
        $adm_secret = $adm_parse['secret'];
        $adm_logged = $adm->list_profile($adm_secret);
        $id = $adm_logged['id'];
        
        if ($valid_token) {
            $endereco->del($id);
            echo json_encode([
                'next' => true,
                'message' => 'Endereco Excluido'
            ]);
        } else {
            echo json_encode([
                'next' => false,
                'message' => 'Token Inválido'
            ]);
        }
    }
}

?>