<?php

router('/zap', 'ApiZapControle@init');
router('/zap/generate', 'ApiZapControle@generate');
router('/zap/start', 'ApiZapControle@start');