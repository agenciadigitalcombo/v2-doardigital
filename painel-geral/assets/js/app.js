// IMPORTANDO VUE E VUE ROUTER
import Vue from './vendor/vue.js'
import Router from './vendor/vue-router.js'

import get_template from './components/get_template.js'
Vue.use(window.vuelidate.default)
Vue.use(VueMask.VueMaskPlugin);

// IMPORTANDO COMPONENTES
import header from './components/c-header.js'
Vue.component('c-header', header)

import aside from './components/c-aside.js'
Vue.component('c-aside', aside)

import detalhe from './components/c-detalhe.js'
Vue.component('c-detalhe', detalhe)

// IMPORTANDO PÁGINAS
import page_home from './view/home/home.js'
Vue.component('p-home', page_home)

import page_contato from './view/contato/home.js'
Vue.component('p-contato', page_contato)

import page_instituicoes from './view/instituicoes/home.js'
Vue.component('p-instituicoes', page_instituicoes)

import page_usuarios from './view/usuarios/home.js'
Vue.component('p-usuarios', page_usuarios)

import page_usuarios_editar from './view/usuarios/editar.js'
Vue.component('p-usuarios_editar', page_usuarios_editar)

import page_credenciais from './view/credenciais/home.js'
Vue.component('p-credenciais', page_credenciais)

import page_minha_assinatura from './view/minha_assinatura/home.js'
Vue.component('p-minha_assinatura', page_minha_assinatura)

import page_perfil from './view/perfil/home.js'
Vue.component('p-perfil', page_perfil)

import endereco from './view/perfil/endereco.js'
Vue.component('p-endereco', endereco)

import seguranca from './view/perfil/seguranca.js'
Vue.component('p-seguranca', seguranca)

// CONFIGURAÇÃO DAS ROTAS
Vue.use(Router)

const routes = [
    { path: '/', component: { template: '<p-home></p-home>' } },
    { path: '/contato', component: { template: '<p-contato></p-contato>' } },
    { path: '/instituicoes', component: { template: '<p-instituicoes></p-instituicoes>' } },
    { path: '/usuarios', component: { template: '<p-usuarios></p-usuarios>' } },
    { path: '/usuario-editar', component: { template: '<p-usuarios_editar></p-usuarios_editar>' } },
    { path: '/credenciais', component: { template: '<p-credenciais></p-credenciais>' } },
    { path: '/minha_assinatura', component: { template: '<p-minha_assinatura></p-minha_assinatura>' } },
    { path: '/perfil', component: { template: '<p-perfil></p-perfil>' } },
    { path: '/editar-local', component: { template: '<p-endereco></p-endereco>' } },
    { path: '/seguranca', component: { template: '<p-seguranca></p-seguranca>' } },
]
                                                   
const router = new Router({ routes })

// CONFIGURAÇÃO DO APP
new Vue({
    router,
    data: {}
}).$mount('#app')

;(async () => { })()