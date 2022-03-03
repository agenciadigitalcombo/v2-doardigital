<?php 

router('/atualiza-email', 'EmailContoler@send_email');
router('/list-email', 'EmailContoler@list_all_email');
router('/email/preview', 'EmailContoler@preview');
