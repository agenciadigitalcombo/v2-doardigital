<?php

router('/aws', 'AwsControle@start');
router('/aws/register-email', 'AwsControle@cadastroEmail');
router('/aws/remove-email', 'AwsControle@removerEmail');
router('/aws/status-email', 'AwsControle@statusEmail');