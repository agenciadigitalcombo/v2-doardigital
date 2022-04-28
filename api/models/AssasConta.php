<?php

class AssasConta extends Asaas
{
    function clearNumber(string $phone): string
    {
        return preg_replace('/\D/', '', $phone);
    }

    public function register(
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
}
