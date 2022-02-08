<?php

$domain = $_SERVER['HTTP_HOST'];
$path_template =  "{$domain}.html";
$path_template_default = "index.html";

if (file_exists($path_template)) {
    echo file_get_contents($path_template);
} else {
    echo file_get_contents($path_template_default);
}
