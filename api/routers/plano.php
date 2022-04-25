<?php

router('/plano/', 'PlanoControle@start');
router('/plano/register', 'PlanoControle@register');
router('/plano/list', 'PlanoControle@list');
router('/plano/info', 'PlanoControle@info');
router('/plano/update-info', 'PlanoControle@update');
router('/plano/del', 'PlanoControle@del');
