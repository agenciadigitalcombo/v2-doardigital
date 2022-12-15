<?php

router('/whats-template', 'EmailTemplateWhatsapp@start');
router('/whats-template/save', 'EmailTemplateWhatsapp@save');
router('/whats-template/info', 'EmailTemplateWhatsapp@info');
router('/whats-template/recover', 'EmailTemplateWhatsapp@recover');
router('/whats-template/list', 'EmailTemplateWhatsapp@list');