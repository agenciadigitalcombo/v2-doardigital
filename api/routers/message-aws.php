<?php

router('/message-aws', 'TemplateWhatsapp@start');
router('/message-aws/list', 'MessageAwsControle@list');
