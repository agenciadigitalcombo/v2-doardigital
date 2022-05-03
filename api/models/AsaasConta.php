<?php

class AsaasConta extends Asaas
{

    function __construct()
    {
        parent::__construct();
    }

    function balance()
    {
        $response = $this->get("/finance/balance", []);
        return $response['balance'] ?? 1;
    }

    function statistic()
    {
        return $this->get("/finance/payment/statistics?customer=&billingType=&status=&anticipated=&dateCreated%5Bge%5D=&dateCreated%5Ble%5D=&dueDate%5Bge%5D=&dueDate%5Ble%5D=", []);
    }

    function chavePix()
    {
        $payload = [
            "type" => "EVP"
        ];
        return $this->post("/pix/addressKeys", $payload);
    }

    function registerWebHook()
    {
        $env = require __DIR__ . "../config.php";
        $prefix = ".com.br";
        if ($env['sandbox']) {
            $prefix = ".tk";
        }
        $payload = [
            "url" => "https://doardigital{$prefix}/api/webhook.php",
            "email" => "john@digitalcombo.com.br",
            "enabled" => true,
            "interrupted" => false,
            "apiVersion" => 3,
            "authToken" => null
        ];
        return $this->post("/webhook", $payload);
    }

    function clearNumber(string $phone): string
    {
        return preg_replace('/\D/', '', $phone);
    }

    public function registerCarteira(
        string $name,
        string $email,
        string $cpfCnpj,
        string $companyType,
        string $phone,
        string $mobilePhone,
        string $address,
        string $addressNumber,
        string $complement,
        string $province,
        string $postalCode
    ): array {
        $payload = [
            "name" => $name,
            "email" => $email,
            "cpfCnpj" => $this->clearNumber($cpfCnpj),
            "companyType" => $companyType,
            "phone" => $this->clearNumber($phone),
            "mobilePhone" => $this->clearNumber($mobilePhone),
            "address" => $address,
            "addressNumber" => $addressNumber,
            "complement" => $complement,
            "province" => $province,
            "postalCode" => $postalCode
        ];
        return $this->post('/accounts', $payload);
    }

    function registerBank(
        string $bankCode,
        string $agency,
        string $account,
        string $accountDigit,
        string $bankAccountType,
        string $name,
        string $cpfCnpj,
        string $responsiblePhone,
        string $responsibleEmail
    ): array {
        $payload = [
            "accountName" => "Conta Bancária",
            "thirdPartyAccount" => true,
            "bankCode" => $this->clearNumber($bankCode),
            "agency" => $this->clearNumber($agency),
            "account" => $this->clearNumber($account),
            "accountDigit" => $this->clearNumber($accountDigit),
            "bankAccountType" => $bankAccountType,
            "name" => $name,
            "cpfCnpj" => $this->clearNumber($cpfCnpj),
            "responsiblePhone" => $this->clearNumber($responsiblePhone),
            "responsibleEmail" => $responsibleEmail,
            "mainAccount" => true
        ];
        return $this->post('/bankAccounts', $payload);
    }

    function infoBank(
        $cpfCnpj,
        $agency,
        $bankCode
    ): array {
        $payload = [
            "cpfCnpj" => $this->clearNumber($cpfCnpj),
            "agency" => $this->clearNumber($agency),
            "bankCode" => $this->clearNumber($bankCode),
        ];
        return $this->get("/bankAccounts/", $payload);
    }

    function infoDocument(
        $cpfCnpj,
        $agency,
        $bankCode
    ): array {
        return $this->get("/myAccount/documents", []);
    }
    
    function sendDocument(
        $id
    ): array {
        // anexar file send request
        return $this->post("/myAccount/documents/{$id}", []);
    }
}