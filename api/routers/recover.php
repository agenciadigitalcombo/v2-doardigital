<?php

router('/recover/', 'RecoverInvoiceControle@start');
router('/recover/save', 'RecoverInvoiceControle@save');
router('/recover/finalizar', 'RecoverInvoiceControle@finalizar');
router('/recover/info', 'RecoverInvoiceControle@info');