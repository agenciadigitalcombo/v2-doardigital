<?php

router('/email-template', 'EmailTemplateControle@start');
router('/email-template/save', 'EmailTemplateControle@save');
router('/email-template/info', 'EmailTemplateControle@info');
router('/email-template/recover', 'EmailTemplateControle@recover');
router('/email-template/list', 'EmailTemplateControle@list');
router('/email-template/reset', 'EmailTemplateControle@reset');