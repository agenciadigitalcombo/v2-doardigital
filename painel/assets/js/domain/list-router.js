export default [
    { path: '/', component: { template: '<c-login/>' } },  
    { path: '/dash', component: { template: '<c-dash/>' } },   
    { path: '/texte', component: { template: '<c-texte/>' } }, 
    { path: '/header', component: { template: '<c-header/>' } }, 
    { path: '/aside', component: { template: '<c-aside/>' } }, 
    { path: '/mensagem', component: { template: '<c-mensagem/>' } }, 
   
    { path: '/perfil', component: { template: '<c-perfil/>' } }, 
    { path: '/perfil-editar', component: { template: '<c-perfil-editar/>' } }, 
    { path: '/editar-local', component: { template: '<c-editar-local/>' } }, 
    { path: '/editar-securanca', component: { template: '<c-editar-securanca/>' } }, 
    { path: '/credencias', component: { template: '<c-credenciais/>' } }, 
    { path: '/credencias/nova', component: { template: '<c-nova-credenciais>' } }, 
    { path: '/credencias/editar', component: { template: '<c-credenciaisAtualizar>' } }, 
    
    { path: '/minha-instituicoes', component: { template: '<c-minhaInstituicao>' } }, 
    { path: '/add-instituicoes', component: { template: '<c-addInstituicao>' } }, 
    { path: '/endereco-instituicoes', component: { template: '<c-localInstituicao>' } }, 
    { path: '/banco-instituicoes', component: { template: '<c-bancoInstituicao>' } },
    { path: '/dominio-instituicoes', component: { template: '<c-dominioInstituicao>' } },
    { path: '/editar-instituicoes', component: { template: '<c-editarInstituicao>' } },

    { path: '/instituicoes', component: { template: '<c-intituicaoMenu>' } },
    

    { path: '/modulos', component: { template: '<c-modulos>' } },
    { path: '/modulos/correio', component: { template: '<c-modulosCorreios>' } },
    { path: '/modulos/email', component: { template: '<c-modulosEmail>' } },
    { path: '/modulos/evenda', component: { template: '<c-modulosEvendas>' } },
    { path: '/modulos/mailing', component: { template: '<c-modulosMailing>' } },
    { path: '/modulos/rd-station', component: { template: '<c-modulosStation>' } },

    { path: '/meu-plano', component: { template: '<c-assinatura>' } },

    { path: '/doadores', component: { template: '<c-doadores>' } },
    { path: '/doacoes', component: { template: '<c-doacoes>' } },
    
    { path: '/doacoesDetalhe', component: { template: '<c-doacoesDetalhe>' } },
    { path: '/doadorHitorico', component: { template: '<c-doadorHitorico>' } },
    { path: '/configuracao', component: { template: '<c-configuracao>' } },
    { path: '/carteira', component: { template: '<c-carteira>' } },
    
    { path: '/usuarios', component: { template: '<c-usuarios>' } },
    { path: '/usuario-novo', component: { template: '<c-usuarioNovo>' } },
    { path: '/usuario-editar', component: { template: '<c-usuarioEditar>' } },
   
    { path: '/planos', component: { template: '<c-planos>' } },
    { path: '/planos/novo', component: { template: '<c-planoNovo>' } },
    { path: '/planos/editar', component: { template: '<c-planoEditar>' } },

    { path: '/qr-code', component: { template: '<c-qr-code>' } },
    
    { path: '/divisao-pagamento', component: { template: '<c-div-pagamento>' } },
    { path: '/add-pagamento', component: { template: '<c-div-pagamentoAdd>' } },
    

    { path: '/plano-digital', component: { template: '<c-planos-digital>' } },
    { path: '/plano-digital/novo', component: { template: '<c-planos-digitalNovo>' } },
]