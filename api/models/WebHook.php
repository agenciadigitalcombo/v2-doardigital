<?php

class WebHook {

    function __construct()
    {
        $payload = $this->getInput();
        $this->subscription =  $payload['payment']['subscription'] ?? "";
        $this->reference_key = $payload['payment']['externalReference'] ?? "";
        $this->dueDate = $payload['payment']['dueDate'] ?? "";
        $this->status = $payload['payment']['status'] ?? "";
        $this->tipo = $payload['payment']['billingType'] ?? "";
        $this->url = $payload['payment']['invoiceUrl'] ?? "";
        $this->ID = $payload['payment']['id'] ?? "";
        $this->sufixo = "";
        $this->value = $payload['payment']['value'];
        $this->event = $payload['event'];       
    }

    function getInput() {
        $getJson = file_get_contents('php://input');
        $getJson = (array) json_decode($getJson, true);
        $request = $_REQUEST;
        $payload = array_merge($getJson, $request);
        return $payload;
    }
    
}