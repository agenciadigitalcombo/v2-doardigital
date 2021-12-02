<?php 

router('/', 'EnderecoControle@start');

router('/create-endereco', 'EnderecoControle@create_endereco');
router('/update-endereco', 'EnderecoControle@update_endereco');
router('/list-endereco', 'EnderecoControle@list_endereco');
router('/delete-endereco', 'EnderecoControle@detete_endereco');