<?php 
class EnderecoControle{
    
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
        $endereco = new Endereco();
        $token = $_REQUEST['token'];
        $valid_token = $jwt->valid($token);
        $fk_id = $_REQUEST['fk_id'];
        $nome_identificacao = $_REQUEST['nome_identificacao'];
        $cep = $_REQUEST['cep'];
        $logradouro = $_REQUEST['logradouro'];
        $numero = $_REQUEST['numero'];
        $complemento = $_REQUEST['complemento'];
        $bairro = $_REQUEST['bairro'];
        $cidade = $_REQUEST['cidade'];
        $estado = $_REQUEST['estado'];
        $caracter = array(
            "(",
            ")",
            " ",
            "-",
            ".",
            ","
        );
        $transform_cep = str_replace($caracter, "", $cep);
        if($valid_token){
            $endereco->create($fk_id, $nome_identificacao, $transform_cep, $logradouro, $numero, $complemento, $bairro, $cidade, $estado);
            echo json_encode([
            'next' => true,
            'message' => 'Endereco criado'
        ]);
        }else{
            echo json_encode([
                'next' => false,
                'message' => 'Token Inválido'
            ]);
        }
       
    }
        
    static function update_endereco()
    {
        $jwt = new Jwt();
        $endereco = new Endereco();
        $token = $_REQUEST['token'];
        $token_parce = $jwt->valid($token);
        $fk_id = $_REQUEST['fk_id'];
        $nome_identificacao = $_REQUEST['nome_identificacao'];
        $cep = $_REQUEST['cep'];
        $logradouro = $_REQUEST['logradouro'];
        $numero = $_REQUEST['numero'];
        $complemento = $_REQUEST['complemento'];
        $bairro = $_REQUEST['bairro'];
        $cidade = $_REQUEST['cidade'];
        $estado = $_REQUEST['estado'];   
        $caracter = array(
            "(",
            ")",
            " ",
            "-",
            ".",
            ","
        );
        $transform_cep = str_replace($caracter, "", $cep);
        if($token_parce){
            $endereco->update($fk_id, $nome_identificacao, $transform_cep, $logradouro, $numero, $complemento, $bairro, $cidade, $estado);
            echo json_encode([
                'next' => true,
                'message' => 'Endereco atualizado'
            ]);

        }else{
            echo json_encode([
                'next' => false,
                'message' => 'Token Inválido'
            ]);
        }

        
    }
    static function list_endereco()
    {
        $endereco = new Endereco();
        $guard = $endereco->list_all();
        foreach($guard as $g){
            $payload [] = [
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
    static function detete_endereco()
    {
        $jwt = new Jwt();
        $endereco = new Endereco();
        $token = $_REQUEST['token'];
        $valid_token = $jwt->valid($token);
        $id = $_REQUEST['id'];
        if($valid_token){
            $endereco->del($id);
            echo json_encode([
                'next' => true,
                'message' => 'Endereco Excluido'
            ]);
        }else{
            echo json_encode([
                'next' => false,
                'message' => 'Token Inválido'
            ]);
        }
    }
}

?>