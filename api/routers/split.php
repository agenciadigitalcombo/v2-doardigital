<?php

router('/split/', 'SplitControle@start');
router('/split/register', 'SplitControle@register');
router('/split/list', 'SplitControle@list');
router('/split/info', 'SplitControle@info');
router('/split/update-info', 'SplitControle@update');
router('/split/del', 'SplitControle@del');