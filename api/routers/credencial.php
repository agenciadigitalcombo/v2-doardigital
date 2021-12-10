<?php
router('/', 'CredencialControler@start');

router('/create-credencial', 'CredencialControler@create_credencial');
router('/update-credencial', 'CredencialControler@update_credencial');
router('/list-credencial', 'CredencialControler@list_credencial');
router('/credencial', 'CredencialControler@credencial');
router('/delete-credencial', 'CredencialControler@detete_credencial');
