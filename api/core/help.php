<?php

function router($path, $action_hook)
{
    $black_list = [
        '/api',
        '/doardigital',
        '/v2-doardigital'
    ];
    $corruente_uri = $_SERVER['REQUEST_URI'];
    $corruente_path = parse_url($corruente_uri, PHP_URL_PATH);
    $corruente_quary = parse_url($corruente_uri, PHP_URL_QUERY);
    $corruente_path = str_replace($black_list, '', $corruente_path);
    if ($corruente_path == $path) {
        $explode_method_instace = explode('@', $action_hook);
        call_user_func($explode_method_instace, urldecode($corruente_quary));
        die();
        return;
    }
}

function get_curl($url)
{
    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, $url);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);

    curl_setopt($ch, CURLOPT_HEADER, false);
    curl_setopt($ch, CURLOPT_FRESH_CONNECT, true);
    curl_setopt($ch, CURLOPT_FORBID_REUSE, true);
    curl_setopt($ch, CURLOPT_TIMEOUT, 30);
    curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
    curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, false);

    $output = curl_exec($ch);
    curl_close($ch);
    return $output;
}

function upload($name)
{
    $white_list = [
        "jpg",
        "jpeg",
        "png"
    ];
    $extensao = pathinfo($_FILES[$name]["name"], PATHINFO_EXTENSION);
    if (in_array($extensao, $white_list)) {
        $name = uniqid() . time() . ".png";
        $file = __DIR__ . "/../uploads/{$name}";
        $tmp = $_FILES[$name]['tmp_name'];
        if (move_uploaded_file($tmp, $file)) {
            return $name;
        }
        return null;
    }
    return null;
}

function set_taxonomy(int $from_id, int $to_id, string $tipo_relacao): void
{}

function get_taxonomy_by_from(int $from_id): array
{
    return [];
}

function get_taxonomy_by_relacao(string $tipo_relacao): array
{
    return [];
}

function get_taxonomy_by_to(int $to_id): array
{
    return [];
}

function get_taxonomy_by_to_relacao($to_id, string $tipo_relacao): array
{
    return [];
}

function get_taxonomy_by_from_relacao(int $from_id, string $tipo_relacao): array
{
    return [];
}

function gravatar(string $email): string
{
    $email = md5(strtolower(trim($email)));
    return "https://www.gravatar.com/avatar/{$email}";
}

function token(): array
{
    $jwt = new Jwt();
    $token = $_REQUEST['token'] ?? '';
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
            die;
        }
    }

    $valid_token = $jwt->valid($token);
    if (! $valid_token) {
        echo json_encode([
            'next' => false,
            'message' => 'Token Invalido'
        ]);
        die;
    }
    $token_parce = $jwt->ler($token);
    return $token_parce; 
    
}

function withdraw_caracter(string $campo): string
{
    return preg_replace('/\D/', '', $campo);
    
}

function email(): string
{
    $email = $_REQUEST['email'] ?? '';
    
    if(!filter_var($email, FILTER_VALIDATE_EMAIL)){
        echo json_encode([
            "next" => false,
            "message" => "Email inválido"
        ]);
        die;
    }
    return $email;

}

function senha(): string
{
    $senha = $_REQUEST['senha'] ?? '';
    
    $campos_obrigatorios = [
        'senha'
    ];
    $lb = [
        'senha' => 'digite a senha'
    ];
    foreach ($campos_obrigatorios as $campo) {
        if (empty($_REQUEST[$campo])) {
            echo json_encode([
                'next' => false,
                'message' => $lb[$campo]
            ]);
            die;
        }
    }

    $min_senha = preg_match('@[0-9]@', $senha);
    if (! $min_senha || strlen($senha) < 8) {
        echo json_encode([
            "next" => false,
            "message" => "A senha deve ter no minimo 8 Caracters"
        ]);
        die;
    }

    $cripto_senha = md5($senha);

    return $cripto_senha;
}

function cnpj(): string
{
    $cnpj_campo = $_REQUEST['cnpj'];
    $cnpj = withdraw_caracter($cnpj_campo);
    
	if (strlen($cnpj) != 14) {
		echo json_encode([
            "next" => false,
            "message" => "O cnpj deve conter 14 Digitos"
        ]);
        die;
	}
	
	
	if ($cnpj == '00000000000000' || 
		$cnpj == '11111111111111' || 
		$cnpj == '22222222222222' || 
		$cnpj == '33333333333333' || 
		$cnpj == '44444444444444' || 
		$cnpj == '55555555555555' || 
		$cnpj == '66666666666666' || 
		$cnpj == '77777777777777' || 
		$cnpj == '88888888888888' || 
		$cnpj == '99999999999999') {
        echo json_encode([
            "next" => false,
            "message" => "Cnpj Ínvalido"
        ]);
        die;
		
	 
     }//else{

        
    //     $numeros = str_split($cnpj);
    //     $tamanho = strlen($cnpj);
    //     var_dump($tamanho);
    //     foreach($numeros as $indice => $num){
            
    //         $num1 = $num * 5;

    //         var_dump($num1);

    //     }

    //     die;
        
    // }


    return $cnpj;
}