<?php
router('/', 'SubAdmControle@start');


router('/vinclular-sub-adm', 'SubAdmControler@vincular_sub_adm');
router('/criate-subadm', 'SubAdmControler@criar_subadm');
router('/atualizar-subadm', 'SubAdmControler@update_subadm');
router('/subadm', 'SubAdmControler@subadm');
router('/list-subadm', 'SubAdmControler@list_all');
