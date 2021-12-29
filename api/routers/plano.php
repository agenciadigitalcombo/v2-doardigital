<?php

router('/create-plano', 'PlanoControler@create');
router('/list-plano', 'PlanoControler@list_plano');
router('/plano', 'PlanoControler@plano');
router('/list-instituicao-plano', 'PlanoControler@instituicao_plano');
router('/update-plano', 'PlanoControler@update_plano');
router('/on-off-plano', 'PlanoControler@on_off');
