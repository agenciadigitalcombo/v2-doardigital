export default [
 
    { path: '/', component: { template: '<c-dash/>' } }, 
    { path: '/grafico', component: { template: '<c-grafico/>' } }, 
    { path: '/texte', component: { template: '<c-texte/>' } }, 
    { path: '/header', component: { template: '<c-header/>' } }, 
    { path: '/aside', component: { template: '<c-aside/>' } }, 
    { path: '/mensagem', component: { template: '<c-mensagem/>' } }, 
   
    { path: '/modulos', component: { template: '<c-modulos>' } },
    { path: '/modulos/correio', component: { template: '<c-modulosCorreios>' } },
    { path: '/modulos/email', component: { template: '<c-modulosEmail>' } },
    { path: '/modulos/evenda', component: { template: '<c-modulosEvendas>' } },
    { path: '/modulos/mailing', component: { template: '<c-modulosMailing>' } },
    { path: '/modulos/rd-station', component: { template: '<c-modulosStation>' } },
    { path: '/modulos/dominio', component: { template: '<c-dominio>' } },

    { path: '/doadores', component: { template: '<c-doadores>' } },
    { path: '/doacoes', component: { template: '<c-doacoes>' } },
    
    { path: '/doador/detalhe', component: { template: '<c-doadorDetalhe>' } },
    { path: '/doacoes/detalhe', component: { template: '<c-doacoesDetalhe>' } },

    { path: '/doadorHitorico', component: { template: '<c-doadorHitorico>' } },
    { path: '/configuracao', component: { template: '<c-configuracao>' } },
    { path: '/carteira', component: { template: '<c-carteira>' } },
     
    { path: '/user', component: { template: '<c-user>' } },
  
   
    { path: '/planos', component: { template: '<c-planos>' } },
    { path: '/planos/novo', component: { template: '<c-planoNovo>' } },
    { path: '/planos/editar', component: { template: '<c-planoEditar>' } },

    { path: '/qr-code', component: { template: '<c-qr-code>' } },
    
    { path: '/divisao-pagamento', component: { template: '<c-div-pagamento>' } },
    { path: '/add-pagamento', component: { template: '<c-split_novo>' } },
    { path: '/editar-pagamento', component: { template: '<c-div-pagamentoEditar>' } },

  

    { path: '/metas', component: { template: '<c-metas>' } },

    { path: '/modelo-de-emails', component: { template: '<c-modelo-de-emails>' } },
    { path: '/modelo-de-emails/editar', component: { template: '<c-modelo-de-emails-editar>' } },
    { path: '/modelo-de-emails/novo', component: { template: '<c-modelo-de-emails-novo>' } },
]