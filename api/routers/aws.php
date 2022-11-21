<?php

router('/aws', 'AwsControle@start');
router('/aws/register-email', 'AwsControle@cadastroEmail');
router('/aws/remove-email', 'AwsControle@removerEmail');