<?php

router('/doador/', 'DoadorControle@start');
router('/doador/list', 'DoadorControle@list');
router('/doador/info', 'DoadorControle@info');
router('/doador/detalhe', 'DoadorControle@detalhe');