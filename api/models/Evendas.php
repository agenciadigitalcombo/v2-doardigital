<?php
class Evendas
{

    static function curl($payload, $token)
    {
        $defaults = [
            CURLOPT_POST           => true,
            CURLOPT_HEADER         => 0,
            CURLOPT_RETURNTRANSFER => 1,
            CURLOPT_URL            => "https://api.e-vendas.net.br/api/pedidos",
            CURLOPT_POSTFIELDS     => json_encode($payload, JSON_UNESCAPED_UNICODE),
            CURLOPT_HTTPHEADER     => [
                'Content-Type:application/json',
                'token:' . $token
            ]
        ];
        $con = curl_init();
        curl_setopt_array($con, $defaults);
        $ex = curl_exec($con);
        curl_close($con);
        return $ex;
    }
    static function send(
        string $nome,
        string $email,
        string $telefone,
        string $ddd,
        string $valor,
        string $status_payment,
        string $type_payment,
        string $boleto_url,
        string $url_pix,
        string $code_boleto,
        string $logradouro,
        string $token,
        $external_id = 1
    ) {
        $payload = [
            "TOKEN" => $token,
            "NUMERO" => $external_id,
            "NUMEROID" => $external_id,
            "TRANSACAO" => intval((time() / 50) + rand(1, 99)),
            "COMPRADOREMAIL" => $email,
            "COMPRADORNOME" => ($nome),
            "COMPRADORDDD" => $ddd,
            "COMPRADORTELEFONE" => $telefone,
            "COMPRADORENDERECO" => ($logradouro),
            "STATUSPEDIDO" => $status_payment,
            "TIPOPAGAMENTO" => $type_payment,
            "DATAPEDIDO" => date('Y-m-d H:i:s'),
            "BOLETOCODIGOBARRA" => $code_boleto,
            "VALORPEDIDO" => $valor,
            "URLCHECKOUT" => "",
            "CODIGORASTREIO" => "",
            "URLRASTREIO" => "",
            "BoletoUrl" => $boleto_url,
            "URLPIX" => $url_pix,
            "IDPLATAFORMA" => 17,
            "PedidosProdutos" => [
                [
                    "Produtos" => [
                        "CODIGO" => time(),
                        "DESCRICAO" => "Doação R$" . $valor
                    ]
                ]
            ]
        ];

        return self::postAwsWhats($payload, $token);
    }
    static function postAwsWhats(array $payload = []): array
    {
        $header = [
            "accept: application/json",
            "content-type: application/json",
        ];
        try {
            $options = [
                CURLOPT_POST           => true,
                CURLOPT_HEADER         => 0,
                CURLOPT_RETURNTRANSFER => 1,
                CURLOPT_URL            => "https://btr9rmxyg2.execute-api.us-east-1.amazonaws.com/prod/send",
                CURLOPT_POSTFIELDS     => json_encode($payload),
                CURLOPT_HTTPHEADER     => $header,
            ];
            $con = curl_init();
            curl_setopt_array($con, $options);
            $ex = curl_exec($con);
            curl_close($con);
            return json_decode($ex, true);
        } catch (\Throwable $th) {
        }
    }
}
