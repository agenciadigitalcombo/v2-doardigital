export default [
    { path: '/', component: { template: '<c-login/>' } },  
    { path: '/dash', component: { template: '<c-dash/>' } },   
    { path: '/texte', component: { template: '<c-texte/>' } }, 
    { path: '/header', component: { template: '<c-header/>' } }, 
    { path: '/aside', component: { template: '<c-aside/>' } }, 
    { path: '/perfil', component: { template: '<c-perfil/>' } }, 
    { path: '/perfil-editar', component: { template: '<c-perfil-editar/>' } }, 
    { path: '/editar-local', component: { template: '<c-editar-local/>' } }, 
    { path: '/editar-securanca', component: { template: '<c-editar-securanca/>' } }, 
    { path: '/credencias', component: { template: '<c-credenciais/>' } }, 
    { path: '/credencias/nova', component: { template: '<c-nova-credenciais>' } }, 
    { path: '/minha-instituicoes', component: { template: '<c-minhaInstituicao>' } }, 
    { path: '/add-instituicoes', component: { template: '<c-addInstituicao>' } }, 
    { path: '/endereco-instituicoes', component: { template: '<c-localInstituicao>' } }, 
    { path: '/banco-instituicoes', component: { template: '<c-bancoInstituicao>' } },
    { path: '/dominio-instituicoes', component: { template: '<c-dominioInstituicao>' } },
    { path: '/editar-instituicoes', component: { template: '<c-editarInstituicao>' } },

]