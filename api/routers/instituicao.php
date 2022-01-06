<?php
router('/create-instituicao', 'InstituicaoControler@create_instituicao');
router('/update-instituicao', 'InstituicaoControler@update_instituicao');
router('/update-domain-person', 'InstituicaoControler@update_domain_person');
router('/list-instituicao', 'InstituicaoControler@list_instituicao');
router('/instituicao-id', 'InstituicaoControler@list_instituicao_by_id');
router('/instituicao', 'InstituicaoControler@instituicao');
router('/delete-instituicao', 'InstituicaoControler@detete_instituicao');
router('/on_off', 'InstituicaoControler@on_off');
