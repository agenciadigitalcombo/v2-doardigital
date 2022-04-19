<?php

router('/adm', 'AdmControle@start');
router('/adm/login', 'AdmControle@login');
router('/adm/register', 'AdmControle@register');
router('/adm/logged', 'AdmControle@logged');
router('/adm/info', 'AdmControle@info');
router('/adm/step', 'AdmControle@setStep');
router('/adm/alter-pass', 'AdmControle@alterPass');
router('/adm/list', 'AdmControle@listAll');
router('/adm/list/sub', 'AdmControle@listAllSub');

// router('/adm/address', 'AdmControle@');
// router('/adm/profile', 'AdmControle@');
// router('/adm/recover-pass', 'AdmControle@');




// router('/criar-adm', 'AdmControle@criar_adm');
// router('/recuperar-senha', 'AdmControle@recuperar_senha');
// router('/alterar-senha', 'AdmControle@alterar_senha');
// router('/atualizar-adm', 'AdmControle@atualizar_adm');
// router('/gravatar', 'AdmControle@gravatar');
// router('/validar', 'AdmControle@validar_token');
// router('/step-update', 'AdmControle@update_step');
// router('/profile', 'AdmControle@profile');
// router('/completar-profile', 'AdmControle@completar_profile');
// router('/all-profile', 'AdmControle@all_profile');
// router('/teste', 'Credencial@teste');
