<?php

class AsaasPix extends Asaas {

    function getCodePix( string $id) : array  {
        return $this->get( "/payments/{$id}/pixQrCode",[] );            
    }
}