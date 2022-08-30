<?php


class AsaasCliente extends Asaas
{

    function __construct()
    {
        parent::__construct();
    }

    function clearNumber(string $number): string
    {
        return preg_replace('/\D/', '', $number);
    }

    public function create(
        string $external_fk,
        string $name,
        string $email,
        string $phone_numbers,
        string $cpf,
        string $postalCode,
        string $address,
        string $addressNumber,
        string $complement,
        string $province
    ): array {
        $payload = [
            'name' => $name,
            'email' => $email,
            "phone" => $this->clearNumber($phone_numbers),
            "mobilePhone" => $this->clearNumber($phone_numbers),
            "cpfCnpj" => $this->clearNumber($cpf),
            "postalCode" => $postalCode,
            "address" => $address,
            "addressNumber" => $addressNumber,
            "complement" => $complement,
            "province" => $province,
            "externalReference" => $external_fk,
            "notificationDisabled" => true,
            "additionalEmails" => "",
            "municipalInscription" => "",
            "stateInscription" => "",
            "observations" => ""
        ];
        return $this->post('/customers', $payload, false);
    }

    function getCliente(string $cpfCnpj): array
    {
        return $this->get("/customers", [
            "cpfCnpj" => $cpfCnpj
        ]);
        // return $this->get("/customers/{$ID}", []);
    }
}
