import Vue from './vendor/vue.js'
import Router from './vendor/vue-router.js'
import store from './domain/store.js'
import {mapState} from './vendor/vuex.js'

Vue.use(window.vuelidate.default)
Vue.use(VueMask.VueMaskPlugin);

Vue.use(Router)
import routes from './domain/list-router.js'
const router = new Router({ routes })

import checkout  from './views/checkout .js'
Vue.component('c-checkout', checkout  )

import finalizar from './views/finalizar.js'
Vue.component('c-finalizar', finalizar )

import mensagem from './componentes/c-mensagem.js'
Vue.component('c-mensagem', mensagem )

const app = new Vue({
    store,
    router,
    data: {},
    computed: { },
    methods: { }
}).$mount('#app')