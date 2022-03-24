<?php
router('/create-instituicao', 'InstituicaoControler@create_instituicao');
router('/update-instituicao', 'InstituicaoControler@update_instituicao');
router('/update-domain-person', 'InstituicaoControler@update_domain_person');
router('/list-instituicao', 'InstituicaoControler@list_instituicao');
router('/instituicao-id', 'InstituicaoControler@list_instituicao_by_id');
router('/instituicao', 'InstituicaoControler@instituicao');
router('/delete-instituicao', 'InstituicaoControler@detete_instituicao');
router('/on-off-instituicao', 'InstituicaoControler@on_off_instituicao');
router('/info-subdomaim', 'InstituicaoControler@list_instituicao_by_subdomaim');
router('/subdominio-disponivel', 'InstituicaoControler@subdominio_disponivel');
router('/list-doacoes', 'InstituicaoControler@list_doacoes');
router('/list-doadores', 'InstituicaoControler@list_doadores');
router('/list-email', 'InstituicaoControler@list_email_by_instituicao');
router('/configuracao-instituicao', 'InstituicaoControler@config_instituicao');
router('/create-chave-pix', 'InstituicaoControler@generate_pix_key');
router('/listar-chave-pix', 'InstituicaoControler@list_pix_key_by_instituicao');
router('/teste-create', 'InstituicaoControler@teste_create');

