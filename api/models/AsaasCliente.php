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
    }

    public function subsByCustomer($customer_id): array
    {
        return $this->get("/subscriptions", [
            "customer" => $customer_id,
            "limit" => '100',
            "includeDeleted" => 'true',
        ]);
    }

    public function updateCostumer(
        $customer_id,
        $name,
        $email,
        $mobilePhone,
        $cpfCnpj,
        $postalCode,
        $address,
        $addressNumber,
        $complement,
        $cidade,
        $external_fk
    ): array {
        return $this->post("/customers/{$customer_id}", [
            "name" => $name,
            "email" => $email,
            "mobilePhone" => $mobilePhone,
            "cpfCnpj" => $cpfCnpj,
            "postalCode" => $postalCode,
            "address" => $address,
            "addressNumber" => $addressNumber,
            "complement" => $complement,
            "province" => $cidade,
            "externalReference" => $external_fk,
        ]);
    }

    public function cancel($sub_id): array
    {
        $response = $this->post("/subscriptions/{$sub_id}", [
            "endDate" => date('Y-m-d'),
            "cycle" => 'MONTHLY',
            "status" => 'INACTIVE',
        ]); 
        return $response;
    }

    public function updateSubscription(
        $sub_id,
        $billingType,
        $value,
        $nextDueDate
    ): array {
        return $this->post("/subscriptions/{$sub_id}", [
            "cycle" => "MONTHLY",
            "updatePendingPayments" => true,
            "billingType" => $billingType,
            "value" => $value,
            "nextDueDate" => $nextDueDate,
        ]);
    } 
    
    public function updateFatura(
        $fatura_id,
        $billingType,
        $value,
        $dueDate,
        $customer
    ): array {
        return $this->post("/payments/{$fatura_id}", [
            "billingType" => $billingType,
            "value" => $value,
            "dueDate" => $dueDate,
            "customer" => $customer
        ]);
    }
}
