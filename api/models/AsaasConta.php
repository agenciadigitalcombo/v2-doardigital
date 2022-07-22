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
        return $this->get("/finance/payment/statistics", [
            "customer" => null,
            "billingType" => "CREDIT_CARD",
            "status" => "CONFIRMED",
            "anticipated" => null,
            "dateCreated[ge]" => null,
            "dateCreated[le]" => null,
            "dueDate[ge]" => null,
            "dueDate[le]" => null,
            "estimatedCreditDate[ge]" => null,
            "estimatedCreditDate[le]" => null,
            "externalReference" => null,
        ]);
    }

    function extrato()
    {
        return $this->get("/transfers", [
            "limit" => 100
        ]);
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
        $env = require __DIR__ . "/../config.php";
        $prefix = "https://doardigital.com.br";
        if ($env['sandbox']) {
            $prefix = "https://hostdoar.tk";
        }
        $payload = [
            "url" => "{$prefix}/api/webhook.php",
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
        string $postalCode,

        string $account,
        string $accountDigit,
        string $accountName,
        string $agency,
        string $bank,
        string $bankAccountType
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
            "postalCode" => $postalCode,
            "bankAccount" => [
                "account" => $this->clearNumber($account),
                "accountDigit" => $this->clearNumber($accountDigit),
                "accountName" => $accountName,
                "agency" => $this->clearNumber($agency),
                "bank" => $this->clearNumber($bank),
                "bankAccountType" => $bankAccountType,
                "cpfCnpj" => $this->clearNumber($cpfCnpj),
                "name" => $name,
            ]
        ];
        if ($bankAccountType == "MEI") {
            $payload["bankAccount"]["thirdPartyAccount"] = true;
        }
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

    function saque(
        $accountName,
        $thirdPartyAccount,
        $bank,
        $agency,
        $account,
        $accountDigit,
        $bankAccountType,
        $name,
        $cpfCnpj,
        $responsiblePhone,
        $responsibleEmail
    ) {
        return $this->post("/bankAccounts/mainAccount", [
            "accountName" => $accountName,
            "thirdPartyAccount" => $thirdPartyAccount,
            "bank" => $bank,
            "agency" => $agency,
            "account" => $account,
            "accountDigit" => $accountDigit,
            "bankAccountType" => $bankAccountType,
            "name" => $name,
            "cpfCnpj" => $cpfCnpj,
            "responsiblePhone" => $responsiblePhone,
            "responsibleEmail" => $responsibleEmail,
        ]);
    }

    function transferir(
        $value,
        $walletId
    ) {
        return $this->post("/transfers", [
            "value" => $value,
            "walletId" => $walletId,
        ]);
    }
}
