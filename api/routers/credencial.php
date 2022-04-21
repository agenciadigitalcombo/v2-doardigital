<?php
router('/credencial/', 'CredencialControler@start');
router('/credencial/register', 'CredencialControler@register');
router('/credencial/list', 'CredencialControler@list');
router('/credencial/info', 'CredencialControler@info');
router('/credencial/update-info', 'CredencialControler@update');
router('/credencial/del', 'CredencialControler@del');
