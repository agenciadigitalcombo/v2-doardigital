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

function get_api(string $path, array $dados, bool $json = true)
{
    $full_path  = "https://doardigital.com.br/api";
    $full_path .= $path;
    $full_path .= '?';
    $full_path .= http_build_query($dados);
    $request = file_get_contents($full_path);
    if ($json) {
        return json_decode($request, true);
    }
    return $request;
}

function get_domain(): string
{
    return $_SERVER['REQUEST_SCHEME'] . "//" . $_SERVER['HTTP_HOST'];
}

function blade(array $payload, string $template)
{
    $html = $template;
    foreach ($payload as $k => $v) {
        $tag = "{" . $k . "}";
        if (!is_array($v)) {
            $html = str_replace($tag, $v, $html);
        }
    }
    $html = trim(str_replace("%20", ' ', $html));
    return $html;
}