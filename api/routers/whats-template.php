<?php

router('/whats-template', 'TemplateWhatsapp@start');
router('/whats-template/save', 'TemplateWhatsapp@save');
router('/whats-template/info', 'TemplateWhatsapp@info');
router('/whats-template/recover', 'TemplateWhatsapp@recover');
router('/whats-template/list', 'TemplateWhatsapp@list');
router('/whats-template/install', 'TemplateWhatsapp@install');
router('/whats-template/reset', 'TemplateWhatsapp@reset');