<?php 

router('/', 'EnderecoControle@start');

router('/create-endereco', 'EnderecoControle@create_endereco');
router('/endereco-doador', 'EnderecoControle@create_endereco_doador');
router('/endereco-instituicao', 'EnderecoControle@create_endereco_instituicao');
router('/update-endereco', 'EnderecoControle@update_endereco');
router('/list-endereco', 'EnderecoControle@list_endereco');
router('/endereco-instituicao', 'EnderecoControle@endereco_instituicao');
router('/endereco', 'EnderecoControle@endereco');
router('/delete-endereco', 'EnderecoControle@detete_endereco');