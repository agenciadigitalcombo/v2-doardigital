<?php

router('/', 'AdmControle@start');

router('/criar-adm', 'AdmControle@criar_adm');
router('/login', 'AdmControle@login');
router('/recuperar-senha', 'AdmControle@recuperar_senha');
router('/alterar-senha', 'AdmControle@alterar_senha');
router('/atualizar-adm', 'AdmControle@atualizar_adm');
router('/gravatar', 'AdmControle@gravatar');
router('/teste', 'Adm@teste');
