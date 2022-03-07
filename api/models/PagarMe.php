<?php
class PagarMe
{
    public $base = 'https://api.pagar.me/1';
    public $api_key = null;
    public $postback_url = null;

    function __construct()
    {
        $env = include __DIR__ . "/../config.php";
        $this->api_key = $env['api_key'];
        $this->postback_url = $env['postback_url'];
    }

    public function post(string $path, array $payload, string $webhook = ''): array
    {
        try {
            $payload['api_key'] = $this->api_key;
            $full_path =  $this->base . $path;
            if (!!$webhook) {
                $payload['postback_url'] = $webhook;
            }
            
            if(!empty($_REQUEST['debug_pagarme'])){
                echo json_encode($payload);                
            }            

            $context = stream_context_create(array(
                'http' => array(
                    'method' => 'POST',
                    'header' => "Content-Type: application/json; charset=UTF-8\r\n",
                    'content' => json_encode($payload)
                )
            ));


            @$result = file_get_contents($full_path, FALSE, $context);
            return json_decode($result, true);
        } catch (\Throwable $th) {
            
            echo json_encode([
                'next' => false,
                'message' => 'Algum parâmetro obrigatório não foi passado, ou os parâmetros não são corretos.'
            ]);
            die;
            
        }
    }

    public function get(string $path, array $payload): array
    {
        try {
            $payload['api_key'] = $this->api_key;
            $payload['postback_url'] = $this->postback_url;
            $full_path =  $this->base . $path;
            $context = stream_context_create(array(
                'http' => array(
                    'method' => 'GET',
                    'header' => "Content-Type: application/json; charset=UTF-8\r\n",
                    'content' => json_encode($payload)
                )
            ));
            $result = file_get_contents($full_path, FALSE, $context);
            return json_decode($result, true);
        } catch (\Throwable $th) {
            return [
                "error" => "Não foi possivel acessar pagar me"
            ];
        }
    }

    public function put(string $path, array $payload): array
    {
        $payload['api_key'] = $this->api_key;
        $payload['postback_url'] = $this->postback_url;
        $full_path =  $this->base . $path;
        $context = stream_context_create(array(
            'http' => array(
                'method' => 'PUT',
                'header' => "Content-Type: application/json; charset=UTF-8\r\n",
                'content' => json_encode($payload)
            )
        ));
        $result = file_get_contents($full_path, FALSE, $context);
        return json_decode($result, true);
    }
}
