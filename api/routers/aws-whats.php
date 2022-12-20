<?php

router('/aws-whats', 'AwsWhatsControle@start');
router('/aws-whats/create', 'AwsWhatsControle@create');
router('/aws-whats/connect', 'AwsWhatsControle@connect');
router('/aws-whats/status', 'AwsWhatsControle@status');
router('/aws-whats/close', 'AwsWhatsControle@close');
router('/aws-whats/send', 'AwsWhatsControle@sendMessage');