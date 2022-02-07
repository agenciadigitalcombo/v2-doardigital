<?php

class Domain {

    function post($url, $request, $json = false)
    {
        $client = new Client(['curl' => [
            CURLOPT_SSL_VERIFYPEER => false,
            CURLOPT_POST           => 1,
            CURLOPT_HEADER         => 0,
            CURLOPT_FRESH_CONNECT  => 1,
            CURLOPT_RETURNTRANSFER => 1,
            CURLOPT_FORBID_REUSE   => 1,
            CURLOPT_TIMEOUT        => 12,
            CURLOPT_SSL_VERIFYHOST => 0,
            CURLOPT_USERPWD        => "root:PQgCkFGeO5ZT",
            CURLOPT_HTTPHEADER     => ['Content-Type' => 'application/json; charset=UTF-8', 'accept' => 'application/json'],
        ]]);
        $response = $client->request("POST", $url, [
            'form_params' => $request,
            'http_errors' => false,
        ]);
        if ($response->getStatusCode() != 201) return $response->getBody();
        try {
            return (string) $response->getBody();
        } catch (\Exception $e) {
            return response()->json(['status' => 'error', 'message' => $e->getMessage()]);
        }
    }

    function createSubdomain($subdomain) {
        return json_decode($this->post("https://187.45.181.130:2087/cpsess53I5927Y73ZQPQH31OW85E70JAQLX1FA/json-api/create_subdomain?api.version=1&domain={$subdomain}.doardigital.com.br&document_root=public_html%2f", [], ''));
    }
    function createAlias($intis) {
        return json_decode($this->post("https://187.45.181.130:2087/cpsess53I5927Y73ZQPQH31OW85E70JAQLX1FA/json-api/cpanel?cpanel_jsonapi_user=doardi27&cpanel_jsonapi_apiversion=2&cpanel_jsonapi_module=Park&cpanel_jsonapi_func=park&domain={$intis->dominio}&topdomain={$intis->subdominio}&disallowdot=0", [], ''));
    }
}