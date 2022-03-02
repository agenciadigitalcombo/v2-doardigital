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

import mensagem from './components/c-mensagem.js'
Vue.component('c-mensagem', mensagem)

// IMPORTANDO PÁGINAS
import page_login from './view/admin/home.js'
Vue.component('p-login', page_login)

import page_recuperar_senha from './view/admin/recuperar_senha.js'
Vue.component('p-recuperar_senha', page_recuperar_senha)

import page_home from './view/home/home.js'
Vue.component('p-home', page_home)

import page_contato from './view/contato/home.js'
Vue.component('p-contato', page_contato)

import page_instituicoes from './view/instituicoes/home.js'
Vue.component('p-instituicoes', page_instituicoes)

import page_instituicoes_novo from './view/instituicoes/nova_instituicoes.js'
Vue.component('p-nova_instituicoes', page_instituicoes_novo)

import page_instituicoes_editar from './view/instituicoes/editar_instituicoes.js'
Vue.component('p-editar_instituicoes', page_instituicoes_editar)

import page_local_instituicoes from './view/instituicoes/local_instituicoes.js'
Vue.component('p-local_instituicoes', page_local_instituicoes)

import page_local_editar_instituicoes from './view/instituicoes/local_editar_instituicoes.js'
Vue.component('p-local_editar_instituicoes', page_local_editar_instituicoes)

import page_banco_editar_instituicoes from './view/instituicoes/banco_editar_instituicoes.js'
Vue.component('p-banco_editar_instituicoes', page_banco_editar_instituicoes)

import page_banco_instituicoes from './view/instituicoes/banco_instituicoes.js'
Vue.component('p-banco_instituicoes', page_banco_instituicoes)

import page_usuarios from './view/usuarios/home.js'
Vue.component('p-usuarios', page_usuarios)

import page_usuarios_editar from './view/usuarios/editar.js'
Vue.component('p-usuarios_editar', page_usuarios_editar)

import page_usuarios_novo from './view/usuarios/novo_user.js'
Vue.component('p-usuarios_novo', page_usuarios_novo)

import page_credenciais from './view/credenciais/home.js'
Vue.component('p-credenciais', page_credenciais)
import page_credenciais_nova from './view/credenciais/nova_credencial.js'
Vue.component('p-nova_credencial', page_credenciais_nova)
import page_credenciais_editar from './view/credenciais/editar_credencial.js'
Vue.component('p-editar_credencial', page_credenciais_editar)

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
    { path: '/login', component: { template: '<p-login></p-login>' } },
    { path: '/recuperar_senha', component: { template: '<p-recuperar_senha></p-recuperar_senha>' } },

    { path: '/', component: { template: '<p-home></p-home>' } },
    { path: '/contato', component: { template: '<p-contato></p-contato>' } },
    { path: '/instituicoes', component: { template: '<p-instituicoes></p-instituicoes>' } },
    { path: '/instituicoesNova', component: { template: '<p-nova_instituicoes></p-nova_instituicoes>' } },
    { path: '/editarInstituicoes', component: { template: '<p-editar_instituicoes></p-editar_instituicoes>' } },
    { path: '/enderecoInstituicoes', component: { template: '<p-local_instituicoes></p-local_instituicoes>' } },
    { path: '/enderecoEditar', component: { template: '<p-local_editar_instituicoes></p-local_editar_instituicoes>' } },
    { path: '/bancarioEditar', component: { template: '<p-banco_editar_instituicoes></p-banco_editar_instituicoes>' } },
    { path: '/bancoInstituicoes', component: { template: '<p-banco_instituicoes></p-banco_instituicoes>' } },

    { path: '/usuarios', component: { template: '<p-usuarios></p-usuarios>' } },
    { path: '/usuario-editar', component: { template: '<p-usuarios_editar></p-usuarios_editar>' } },
    { path: '/usuario-novo', component: { template: '<p-usuarios_novo></p-usuarios_novo>' } },
    { path: '/credenciais', component: { template: '<p-credenciais></p-credenciais>' } },
    { path: '/credencias/nova', component: { template: '<p-nova_credencial></p-nova_credencial>' } },
    { path: '/credencias/editar', component: { template: '<p-editar_credencial></p-editar_credencial>' } },

    { path: '/minha_assinatura', component: { template: '<p-minha_assinatura></p-minha_assinatura>' } },
    { path: '/perfil', component: { template: '<p-perfil></p-perfil>' } },
    { path: '/editar-local', component: { template: '<p-endereco></p-endereco>' } },
    { path: '/seguranca', component: { template: '<p-seguranca></p-seguranca>' } },
]

const router = new Router({ routes })

// CONFIGURAÇÃO DO APP
new Vue({
    router,
    data: {},
    computed: {},
    methods: {},
    mounted() {
        let is_token = localStorage.getItem('token')
        if (is_token) {
            if (window.location.hash == `#/login`) {
                window.location.href = `#/`
            }
        } else {
            window.location.href = `#/login`
        }


    },
}).$mount('#app')
    ; (async () => { })()