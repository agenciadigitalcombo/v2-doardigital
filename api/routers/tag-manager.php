<?php

router('/tag-manager', 'TagManagerControle@start');
router('/tag-manager/save', 'TagManagerControle@save');
router('/tag-manager/info', 'TagManagerControle@info');