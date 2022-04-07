<?php

class AsaasConta extends Asaas {

    function __construct()
    {
        parent::__construct();
    }

    function balance()  {
        $response = $this->get( "/finance/balance",[] ); 
        return $response['balance'] ?? 1;            
    }

    function statistic() {
        return $this->get( "/finance/payment/statistics?customer=&billingType=&status=&anticipated=&dateCreated%5Bge%5D=&dateCreated%5Ble%5D=&dueDate%5Bge%5D=&dueDate%5Ble%5D=",[] );
    }

}