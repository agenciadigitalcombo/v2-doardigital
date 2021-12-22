<?php

router('/plano-digital-new', 'PlanoDigitalControler@create');
router('/plano-digital-list', 'PlanoDigitalControler@list_planodigital');
router('/plano-digital-me', 'PlanoDigitalControler@planodigital');
router('/plano-digital-update', 'PlanoDigitalControler@update_planodigital');
router('/plano-digital-on-off', 'PlanoDigitalControler@on_off');