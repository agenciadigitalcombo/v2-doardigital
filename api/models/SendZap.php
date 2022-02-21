<?php

class SendZap
{

    private $pasth = null;

    function __construct()
    {
        $this->path = 'http://149.28.111.241:8000/send-message/';
    }

    function send(
        string $sender,
        string $number,
        string $message
    ): void {
    }
}
