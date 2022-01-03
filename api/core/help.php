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
{
    $banco = new Banco();
    $sql = "INSERT INTO taxonomia";
    $sql .= "(from_id, to_id, tipo_relacao)";
    $sql .= "VALUES";
    $sql .= "('$from_id', '$to_id', '$tipo_relacao')";
    $banco->query($sql);
}

function get_taxonomy_by_from(int $from_id): array
{
    $banco = new Banco();
    $sql = "SELECT * FROM taxonomia WHERE from_id='$from_id'";
    $guard = $banco->query($sql);
    return $guard;
}

function get_taxonomy_by_relacao(string $tipo_relacao): array
{
    $banco = new Banco();
    $sql = "SELECT * FROM taxonomia WHERE tipo_relacao='$tipo_relacao'";
    $guard = $banco->query($sql);
    return $guard;
}

function get_taxonomy_by_to(int $to_id): array
{
    $banco = new Banco();
    $sql = "SELECT * FROM taxonomia WHERE to_id='$to_id'";
    $guard = $banco->query($sql);
    return $guard;
}

function get_taxonomy_by_to_relacao($to_id, string $tipo_relacao): array
{
    $banco = new Banco();
    $sql = "SELECT * FROM taxonomia WHERE to_id='$to_id' AND tipo_relacao='$tipo_relacao'";
    $guard = $banco->query($sql);
    return $guard;
}

function get_taxonomy_by_from_relacao(int $from_id, string $tipo_relacao): array
{
    $banco = new Banco();
    $sql = "SELECT * FROM taxonomia WHERE from_id='$from_id' AND tipo_relacao='$tipo_relacao'";
    $guard = $banco->query($sql);
    return $guard;
}

function gravatar(string $email): string
{
    $email = md5(strtolower(trim($email)));
    return "https://www.gravatar.com/avatar/{$email}";
}

function valid_int($valor): int {
    $valor = (int) $valor;
    if( $valor != NAN) {
        return $valor;
    }
    return 0;
}

function withdraw_caracter($valor): int
{
    $transform_valor = preg_replace('/\D/', '', $valor);
    
    return intval($transform_valor);
}

function withdraw_caracter_teste(array $valor): int
{
    $transform_valor = preg_replace('/\D/', '', $valor);
    
    return intval($transform_valor);
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
    if (!$valid_token) {
        echo json_encode([
            'next' => false,
            'message' => 'Token Invalido'
        ]);
        die;
    }
    $token_parce = $jwt->ler($token);
    return $token_parce;
}

function id(): string
{
    $id_campo = $_REQUEST['id'] ?? '';
    $id = withdraw_caracter($id_campo);

    $campos_obrigatorios = [
        'id'
    ];
    $lb = [
        'id' => 'Informe o ID'
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
    return $id;
}

function valid_email($email): string
{


    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        echo json_encode([
            "next" => false,
            "message" => "Email inválido"
        ]);
        die;
    }
    return $email;
}

function valid_senha($valor): string
{
    
    $min_senha = preg_match('@[0-9]@', $valor);
    if (!$min_senha || strlen($valor) < 8) {
        echo json_encode([
            "next" => false,
            "message" => "A senha deve ter no minimo 8 Caracters"
        ]);
        die;
    }

    $cripto_senha = md5($valor);

    return $cripto_senha;
}

    
function cnpj($cnpj_campo): string
{
    $cnpj = withdraw_caracter($cnpj_campo);


    $campos_obrigatorios = [
        'cnpj'
    ];
    $lb = [
        'cnpj' => 'Digite o cnpj'
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

    if (strlen($cnpj) != 14) {
        echo json_encode([
            "next" => false,
            "message" => "O cnpj deve conter 14 Digitos"
        ]);
        die;
    }


    if (
        $cnpj == '00000000000000' ||
        $cnpj == '11111111111111' ||
        $cnpj == '22222222222222' ||
        $cnpj == '33333333333333' ||
        $cnpj == '44444444444444' ||
        $cnpj == '55555555555555' ||
        $cnpj == '66666666666666' ||
        $cnpj == '77777777777777' ||
        $cnpj == '88888888888888' ||
        $cnpj == '99999999999999'
    ) {
        echo json_encode([
            "next" => false,
            "message" => "Cnpj Ínvalido"
        ]);
        die;
    } //else{


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

function cpf($cpf_campo): string
{


    
    $cpf = withdraw_caracter($cpf_campo);

    $campos_obrigatorios = [
        'cpf'
    ];
    $lb = [
        'cpf' => 'digite o cpf'
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

    if (strlen($cpf) != 11) {
        echo json_encode([
            "next" => false,
            "message" => "O cpf deve conter 11 Digitos"
        ]);
        die;
    }


    if (
        $cpf == '00000000000000' ||
        $cpf == '11111111111111' ||
        $cpf == '22222222222222' ||
        $cpf == '33333333333333' ||
        $cpf == '44444444444444' ||
        $cpf == '55555555555555' ||
        $cpf == '66666666666666' ||
        $cpf == '77777777777777' ||
        $cpf == '88888888888888' ||
        $cpf == '99999999999999'
    ) {
        echo json_encode([
            "next" => false,
            "message" => "Cpf Ínvalido"
        ]);
        die;
    }
    return $cpf;
}


function valid_telefone($valor): int
{
    
    $telefone = withdraw_caracter($valor);

    if (preg_match("/^[0-9]{3}-[0-9]{4}-[0-9]{4}$/", $telefone)) {
        echo json_encode([
            "next" => false,
            "message" => "Telefone Ínvalido"
        ]);
        die;
    }
    return $telefone;
}



function min_amount($valor): int
{
    $amount_campo = $valor;
    $amount = withdraw_caracter($amount_campo);

    
    campo_obrigatorios([
        'amount' => 'digite o amount'

    ]);

    if ($amount < 2500) {
        echo json_encode([
            'next' => false,
            'message' => 'Valor minimo é R$25,00'
        ]);
        die;
    }
    return $amount;
}



function campo_obrigatorios(array $payload): void
{
    $campos_obrigatorios = array_keys($payload);
    
    foreach ($campos_obrigatorios as $campo) {
        if (empty($_REQUEST[$campo])) {
            echo json_encode([
                'next' => false,
                'message' => $payload[$campo]
            ]);
            die;
        }
    }
}


function valid_porcentagem( int $procent ) {
    return $procent >= 1 && $procent <= 100;
}


function min_max_porcentagem($porcentagem): int
{

    if ($porcentagem <= 0) {
        echo json_encode([
            'next' => false,
            'message' => 'Valor minimo é 1%'
        ]);
        die;
    }

    if ($porcentagem >= 101) {
        echo json_encode([
            'next' => false,
            'message' => 'Valor maximo é 100%'
        ]);
        die;
    }

    return $porcentagem;
}