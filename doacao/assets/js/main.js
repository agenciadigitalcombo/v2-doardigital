import Vue from './vendor/vue.js'
import Router from './vendor/vue-router.js'
import store from './domain/store.js'
import {mapState} from './vendor/vuex.js'

Vue.use(window.vuelidate.default)
Vue.use(VueMask.VueMaskPlugin);

Vue.use(Router)
import routes from './domain/list-router.js'
const router = new Router({ routes })

import checkout  from './views/checkout.js'
Vue.component('c-checkout', checkout  )

import finalizar from './views/finalizar.js'
Vue.component('c-finalizar', finalizar )

import obrigado from './views/obrigado.js'
Vue.component('c-obrigado', obrigado )

import mensagem from './componentes/c-mensagem.js'
Vue.component('c-mensagem', mensagem )

import erro_500 from './componentes/c-erro_500.js'
Vue.component('c-erro_500', erro_500 )

import loading from './componentes/c-loading.js'
Vue.component('c-loading', loading )

const app = new Vue({
    store,
    router,
    data: {},
    computed: { },
    methods: { }
}).$mount('#app')