import Vue from './vendor/vue.js'
import Router from './vendor/vue-router.js'
import store from './domain/store.js'
import {mapState} from './vendor/vuex.js'




Vue.use(Router)
import routes from './domain/list-router.js'
const router = new Router({ routes })


import header from './componentes/c-header.js'
Vue.component('c-header', header )

import  aside from './componentes/c-aside.js'
Vue.component('c-aside', aside )

import footer from './componentes/c-footer.js'
Vue.component('c-footer', footer )

import login from './views/login.js'
Vue.component('c-login', login)

import dash from './views/dash.js'
Vue.component('c-dash', dash )

import perfil from './views/perfil.js'
Vue.component('c-perfil', perfil )

import perfilEditar from './views/perfil-editar.js'
Vue.component('c-perfil-editar', perfilEditar )

import EditarLocal from './views/editar-local.js'
Vue.component('c-editar-local', EditarLocal )

import EditarSeguranca from './views/editar-securanca.js'
Vue.component('c-editar-securanca', EditarSeguranca )

import credenciais from './views/credenciais.js'
Vue.component('c-credenciais', credenciais )

import credenciaisAdd from './views/credenciaisNova.js'
Vue.component('c-nova-credenciais', credenciaisAdd )

import minhaInstituicao from './views/minhaInstituicao.js'
Vue.component('c-minhaInstituicao', minhaInstituicao )


import addInstituicao from './views/instituicaoAdd.js'
Vue.component('c-addInstituicao', addInstituicao )

import localInstituicao from './views/instituicaoLoca.js'
Vue.component('c-localInstituicao', localInstituicao )

import bancoInstituicao from './views/instituicaoBancario.js'
Vue.component('c-bancoInstituicao', bancoInstituicao )

import dominioInstituicao from './views/instituicaoDominio.js'
Vue.component('c-dominioInstituicao', dominioInstituicao )

import editarInstituicao from './views/instituicaoEditar.js'
Vue.component('c-editarInstituicao', editarInstituicao )

const app = new Vue({

    store,
    router,
    data: {},
    computed: { },
    methods: { },
    mounted() {
        let is_token = localStorage.getItem('token')
		if(is_token) {
			window.location.href = `#/dash`
		}else {
            window.location.href = `#/`
        }

  

        
    }
}).$mount('#app')


