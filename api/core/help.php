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