<?php

class AsaasPix extends Asaas {

    function __construct()
    {
        parent::__construct();
    }

    function getCodePix( string $id) : array  {
        return $this->get( "/payments/{$id}/pixQrCode",[] );            
    }
}