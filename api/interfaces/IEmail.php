<?php

interface IEmail {
    static  function send( int $instituicao_id, string $email_to, string $subject, string $content ) : void;
}