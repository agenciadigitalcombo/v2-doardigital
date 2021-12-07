<?php
router('/', 'AdmControle@start');

router('/criar-subadm', 'AdmControle@criar_adm');
router('/login', 'AdmControle@login');
router('/recuperar-senha', 'AdmControle@recuperar_senha');
router('/alterar-senha', 'AdmControle@alterar_senha');
router('/atualizar-adm', 'AdmControle@atualizar_adm');
router('/gravatar', 'AdmControle@gravatar');
router('/validar', 'AdmControle@validar_token');
router('/step-update', 'AdmControle@update_step');
router('/profile', 'AdmControle@profile');
router('/all-profile', 'AdmControle@all_profile');
router('/teste', 'Credencial@teste');