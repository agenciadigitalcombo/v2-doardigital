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
        $adm = new Adm();
        $endereco = new Endereco();

        $token_parse = token();

        $nome_identificacao = $_REQUEST['nome_identificacao'] ?? '';
        $logradouro = $_REQUEST['logradouro'] ?? '';
        $complemento = $_REQUEST['complemento'] ?? '';
        $bairro = $_REQUEST['bairro'] ?? '';
        $cidade = $_REQUEST['cidade'] ?? '';
        $estado = $_REQUEST['estado'] ?? '';
        
        $numero = $_REQUEST['numero'] ?? '';
        $cep = $_REQUEST['cep'] ?? '';
        

        $transform_numero = withdraw_caracter($numero);
        $transform_cep = withdraw_caracter($cep);

        $campos_obrigatorios = [
            'cep',
            'logradouro',
            'bairro',
            'cidade',
            'estado',
            'numero'
        ];
        $lb = [
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

        $secret = $token_parse['secret'];
        $id_adm = $adm->list_profile($secret);
        $id = $id_adm['id'];
        
        $endereco->create($id, $nome_identificacao, $transform_cep, $logradouro, $transform_numero, $complemento, $bairro, $cidade, $estado);
        echo json_encode([
            'next' => true,
            'message' => 'Endereco criado'
        ]);
    }

    static function create_endereco_instituicao()
    {
        $instituicao = new Instituicao();
        $endereco = new Endereco();

        $id_campo = $_REQUEST['id'] ?? '';
        $nome_identificacao = $_REQUEST['nome_identificacao'] ?? '';
        $logradouro = $_REQUEST['logradouro'] ?? '';
        $complemento = $_REQUEST['complemento'] ?? '';
        $bairro = $_REQUEST['bairro'] ?? '';
        $cidade = $_REQUEST['cidade'] ?? '';
        $estado = $_REQUEST['estado'] ?? '';
        
        $numero = $_REQUEST['numero'] ?? '';
        $cep = $_REQUEST['cep'] ?? '';
        

        $transform_numero = withdraw_caracter($numero);
        $transform_cep = withdraw_caracter($cep);

        $campos_obrigatorios = [
            'id',
            'cep',
            'logradouro',
            'bairro',
            'cidade',
            'estado',
            'numero'
        ];
        $lb = [
            'id' => 'Informe o ID',
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

        $id_instituicao = $instituicao->get_by_id($id_campo);
        
        $id = $id_instituicao['id'];
        
        $endereco->create($id, $nome_identificacao, $transform_cep, $logradouro, $transform_numero, $complemento, $bairro, $cidade, $estado);
        echo json_encode([
            'next' => true,
            'message' => 'Endereco criado'
        ]);
    }

    static function create_endereco_doador()
    {
        $endereco = new Endereco();
        $doador = new Doador();

        $cpf = $_REQUEST['cpf'] ?? '';
        $nome_identificacao = $_REQUEST['nome_identificacao'] ?? '';
        $logradouro = $_REQUEST['logradouro'] ?? '';
        $complemento = $_REQUEST['complemento'] ?? '';
        $bairro = $_REQUEST['bairro'] ?? '';
        $cidade = $_REQUEST['cidade'] ?? '';
        $estado = $_REQUEST['estado'] ?? '';
        
        $numero = $_REQUEST['numero'] ?? '';
        $cep = $_REQUEST['cep'] ?? '';
        

        $transform_numero = withdraw_caracter($numero);
        $transform_cep = withdraw_caracter($cep);

        $campos_obrigatorios = [
            'cpf',
            'cep',
            'logradouro',
            'bairro',
            'cidade',
            'estado',
            'numero'
        ];
        $lb = [
            'cpf' => 'Informe o Cpf',
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

        $id_doador = $doador->get_by_cpf($cpf);
        
        $id = $id_doador['id'];
        
        $endereco->create($id, $nome_identificacao, $transform_cep, $logradouro, $transform_numero, $complemento, $bairro, $cidade, $estado);
        echo json_encode([
            'next' => true,
            'message' => 'Endereco criado'
        ]);
    }

    static function update_endereco()
    {
        $adm = new Adm();
        $endereco = new Endereco();

        $token_parse = token();

        $nome_identificacao = $_REQUEST['nome_identificacao'];
        $cep = $_REQUEST['cep'];
        $logradouro = $_REQUEST['logradouro'];
        $numero = $_REQUEST['numero'];
        $complemento = $_REQUEST['complemento'];
        $bairro = $_REQUEST['bairro'];
        $cidade = $_REQUEST['cidade'];
        $estado = $_REQUEST['estado'];

        $transform_cep = withdraw_caracter($cep);
        $transform_numero = withdraw_caracter($numero);
        
        $secret = $token_parse['secret'];
        $id_adm = $adm->list_profile($secret);
        $id = $id_adm['id'];

        $endereco->create($id, $nome_identificacao, $transform_cep, $logradouro, $transform_numero, $complemento, $bairro, $cidade, $estado);
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
        $endereco = new Endereco();
        $adm = new Adm();

        $token = token();

        $adm_parse = $token;
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
        $adm = new Adm();

        $endereco = new Endereco();
        $token = token();

        $adm_parse = $token;
        $adm_secret = $adm_parse['secret'];
        $adm_logged = $adm->list_profile($adm_secret);
        $id = $adm_logged['id'];
        
        
        $endereco->del($id);
        echo json_encode([
            'next' => true,
            'message' => 'Endereco Excluido'
        ]);    
        
    }
}
