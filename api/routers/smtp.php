<?php

router('/smtp', 'SmtpControle@start');
router('/smtp/save', 'SmtpControle@save');
router('/smtp/info', 'SmtpControle@info');