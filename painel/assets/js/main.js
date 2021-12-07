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

import modulos from './views/modulos.js'
Vue.component('c-modulos', modulos )

import modulosCorreios from './views/modulosCorreios.js'
Vue.component('c-modulosCorreios', modulosCorreios )

import modulosEmail from './views/modulosEmail.js'
Vue.component('c-modulosEmail', modulosEmail )

import modulosEvendas from './views/modulosEvendas.js'
Vue.component('c-modulosEvendas', modulosEvendas )

import modulosMailing from './views/modulosMailing.js'
Vue.component('c-modulosMailing', modulosMailing )

import modulosStation from './views/modulosStation.js'
Vue.component('c-modulosStation', modulosStation )

import assinatura from './views/assinatura.js'
Vue.component('c-assinatura', assinatura )

import doadores from './views/doadores.js'
Vue.component('c-doadores', doadores )

import doacoes from './views/doacoes.js'
Vue.component('c-doacoes', doacoes )

import doacoesDetalhe from './views/doacoes-detalhe.js'
Vue.component('c-doacoesDetalhe', doacoesDetalhe )

import doadorHitorico from './views/doador-hitorico.js'
Vue.component('c-doadorHitorico', doadorHitorico )

import configuracao from './views/configuracao.js'
Vue.component('c-configuracao', configuracao )



const app = new Vue({

    store,
    router,
    data: {},
    computed: { },
    methods: { },
    mounted() {
        let is_token = localStorage.getItem('token')
		if(is_token) {
        if(window.location.hash == `#/` ){
            window.location.href = `#/dash`
            }
		}else {
            window.location.href = `#/`
        }
        

    }
}).$mount('#app')


