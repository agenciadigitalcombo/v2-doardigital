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
router('/adm/update-info', 'AdmControle@updateInfo');
router('/adm/recover-pass', 'AdmControle@recoverPass');
router('/adm/sub/register', 'AdmControle@registerSub');
router('/adm/address', 'AdmControle@addressSave');
router('/adm/address-info', 'AdmControle@addressInfo');
