<?php

interface ICep {
    public function get_cep( string $cep ) : array;
}