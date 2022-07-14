<?php
router('/instituicao', 'InstituicaoControle@start');
router('/instituicao/register', 'InstituicaoControle@register');
router('/instituicao/info', 'InstituicaoControle@info');
router('/instituicao/update-info', 'InstituicaoControle@update');
router('/instituicao/set-domain', 'InstituicaoControle@setDomain');
router('/instituicao/list', 'InstituicaoControle@list');
router('/instituicao/donation', 'InstituicaoControle@donation');
router('/instituicao/balance', 'InstituicaoControle@balance');
router('/instituicao/set-adm', 'InstituicaoControle@setAdm');