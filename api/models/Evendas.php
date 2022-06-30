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
            "NUMERO" => $external_id,
            "NUMEROID" => $external_id,
            "TRANSACAO" => intval( (time() / 50) + rand(1, 99) ),
            "COMPRADOREMAIL" => $email,
            "COMPRADORNOME" => ( $nome ),
            "COMPRADORDDD" => $ddd,
            "COMPRADORTELEFONE" => $telefone,
            "COMPRADORENDERECO" => ($logradouro),
            "STATUSPEDIDO" => $status_payment,
            "TIPOPAGAMENTO" => $type_payment,
            "DATAPEDIDO" => date('Y-m-d'),
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
        return self::curl($payload, $token);
    }
}
