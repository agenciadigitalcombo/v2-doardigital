<?php

router('/dashboard', 'DashboardControler@dashboard_sass');
router('/dashboard-instituicao', 'DashboardControler@dashboard_instituition');
router('/dashboard-adm', 'DashboardControler@dashboard_admin');