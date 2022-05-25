<?php
router('/instituicao', 'InstituicaoControle@start');
router('/instituicao/register', 'InstituicaoControle@register');
router('/instituicao/info', 'InstituicaoControle@info');
router('/instituicao/update', 'InstituicaoControle@update');
router('/instituicao/set-domain', 'InstituicaoControle@setDomain');
router('/instituicao/list', 'InstituicaoControle@list');