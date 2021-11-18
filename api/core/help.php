<?php

function router($path, $action_hook)
{
    $black_list = ['/api','/doardigital'];
    $corruente_uri = $_SERVER['REQUEST_URI'];
    $corruente_path = parse_url($corruente_uri, PHP_URL_PATH);
    $corruente_quary = parse_url($corruente_uri, PHP_URL_QUERY);
    $corruente_path = str_replace( $black_list, '', $corruente_path);
    if ($corruente_path == $path) {
        $explode_method_instace = explode('@', $action_hook);
        call_user_func($explode_method_instace, urldecode($corruente_quary));
        return;
    }
}

function get_curl($url)
{
    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, $url);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);

    curl_setopt($ch, CURLOPT_HEADER         ,false);
    curl_setopt($ch, CURLOPT_FRESH_CONNECT  ,true);
    curl_setopt($ch, CURLOPT_FORBID_REUSE   ,true);
    curl_setopt($ch, CURLOPT_TIMEOUT        ,30);
    curl_setopt($ch, CURLOPT_SSL_VERIFYPEER ,false);
    curl_setopt($ch, CURLOPT_SSL_VERIFYHOST ,false);

    $output = curl_exec($ch);
    curl_close($ch);
    return $output;
}