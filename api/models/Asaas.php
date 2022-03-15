<?php

class Asaas
{
    const PATH = 'https://www.asaas.com/api/v3';
    const PATH_SANDBOX = 'https://sandbox.asaas.com/api/v3';
    const TYPE_PAYMENT = [
        "BOLETO", "CREDIT_CARD", "DEBIT_CARD",
        "UNDEFINED", "TRANSFER", "DEPOSIT", "PIX"
    ];
    public $token = NULL;
    const STATUS_PAYMENT = [
        "PAYMENT_CREATED", "PAYMENT_UPDATED", "PAYMENT_CONFIRMED",
        "PAYMENT_RECEIVED", "PAYMENT_OVERDUE", "PAYMENT_DELETED",
        "PAYMENT_RESTORED", "PAYMENT_REFUNDED", "PAYMENT_RECEIVED_IN_CASH_UNDONE",
        "PAYMENT_CHARGEBACK_REQUESTED", "PAYMENT_CHARGEBACK_DISPUTE",
        "PAYMENT_AWAITING_CHARGEBACK_REVERSAL", "PAYMENT_DUNNING_RECEIVED",
        "PAYMENT_DUNNING_REQUESTED", "PAYMENT_BANK_SLIP_VIEWED", "PAYMENT_CHECKOUT_VIEWED"
    ];

    function __construct()
    {
        $env = include __DIR__ . "/../config.php";
        $this->token = $env['access_token'];
        $this->sandbox = $env['sandbox'];
    }

    public function get_path(string $path): string
    {
        if ($this->sandbox) {
            return self::PATH_SANDBOX . $path;
        }
        return self::PATH . $path;
    }

    function get_head()
    {
        $head = "Content-Type: application/json; charset=UTF-8\r\n";
        $head .= "access_token: {$this->token}\r\n";
        return $head;
    }

    function get_head_get()
    {
        $head = "access_token: {$this->token}\r\n";
        return $head;
    }

    function is_error()
    {
        echo json_encode([
            'next' => false,
            'message' => 'Algum parâmetro obrigatório não foi passado, ou os parâmetros não são corretos.'
        ]);
        die;
    }

    function is_debug($payload)
    {
        if (!empty($_REQUEST['debug_pay'])) {
            echo json_encode($payload);
        }
    }

    public function post(string $path, array $payload, string $method = 'POST'): array
    {
        $this->is_debug($payload);
        $full_path = $this->get_path($path);
        try {
            $context = stream_context_create(array(
                'http' => array(
                    'method' => $method,
                    'header' => $this->get_head(),
                    'content' => empty($payload) ? '' : json_encode($payload)
                )
            ));
            @$result = file_get_contents($full_path, FALSE, $context);
            return json_decode($result, true);
        } catch (\Throwable $th) {
            $this->is_error();
        }
    }

    public function get(string $path, array $payload): array
    {
        $this->is_debug($payload);
        $param = http_build_query($payload);
        $full_path = $this->get_path("{$path}?{$param}");
        try {
            $context = stream_context_create(array(
                'http' => array(
                    'method' => 'GET',
                    'header' => $this->get_head_get(),
                )
            ));
            @$result = file_get_contents($full_path, FALSE, $context);
            return json_decode($result, true);
        } catch (\Throwable $th) {
            $this->is_error();
        }
    }

    public function put(string $path, array $payload): array
    {
        return $this->post( $path, $payload, 'PUT' );
    }

    public function del(string $path, array $payload): array
    {
        return $this->post( $path, $payload, 'DELETE' );
    }
}
