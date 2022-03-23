<?php

@mail("br.rafael@outlook.com", "teste - " . date("d/m/Y H:i"), json_encode($_REQUEST));
@mail("victorfernandomagalhaes@gmail.com", "teste - " . date("d/m/Y H:i"), json_encode($_REQUEST));
@mail("john@digitalcombo.com.br", "teste - " . date("d/m/Y H:i"), json_encode($_REQUEST));

echo json_encode([
    "next" => true,
    "message" => "Seja bem vindo a Doar Digital"
]);