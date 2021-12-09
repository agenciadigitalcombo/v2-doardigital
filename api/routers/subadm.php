<?php
router('/', 'SubAdmControle@start');

router('/criate-subadm', 'SubAdmControler@criar_subadm');
router('/atualizar-subadm', 'SubAdmControler@update_subadm');
router('/subadm', 'SubAdmControler@subadm');
router('/list-subadm', 'SubAdmControler@list_all');
