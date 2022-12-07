<?php
class Controle
{

    static function printError(string $message, array $payload)
    {
        echo json_encode([
            "next" => false,
            "message" => $message,
            "payload" => $payload
        ]);
        die;
    }

    static function printSuccess(string $message, array $payload)
    {
        echo json_encode([
            "next" => true,
            "message" => $message,
            "payload" => $payload
        ]);
        die;
    }

    static function requireInputs(array $payload): void
    {
        $requireInputsKeys = array_keys($payload);
        foreach ($requireInputsKeys as $inputName) {
            if (isset($_REQUEST[$inputName])) {
                self::printError(
                    $payload[$inputName],
                    []
                );
            }
        }
    }

    static function privateRouter() {
        $jwt = new Jwt();
        $token = $_REQUEST['token'] ?? '';
        $isValidJwt = $jwt->valid($token);
        if(!$isValidJwt ) {
            self::printError(
                "Token Invalido",
                []
            );
        }

    }
}
