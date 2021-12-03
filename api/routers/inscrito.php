<?php
router('/', 'InscritoControler@start');

router('/create-inscrito', 'InscritoControler@create_inscrito');;
router('/list-inscrito', 'InscritoControler@list_inscrito');
router('/inscrito', 'InscritoControler@inscrito');
router('/delete-inscrito', 'InscritoControler@detete_inscrito');
router('/teste', 'Inscrito@teste');