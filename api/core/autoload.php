<?php

$lista = glob(__DIR__ . "/../interfaces/*.php*");
foreach ($lista as $path) {
    require $path;
}

$lista = glob(__DIR__ . "/../models/*.php*");
foreach ($lista as $path) {
    require $path;
}

$lista = glob(__DIR__ . "/../controle/*.php*");
foreach ($lista as $path) {
    require $path;
}

$lista = glob(__DIR__ . "/../routers/*.php*");
foreach ($lista as $path) {
    require $path;
}
