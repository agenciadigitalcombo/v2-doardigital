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

}