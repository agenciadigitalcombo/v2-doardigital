import Vue from './vendor/vue.js'
import Router from './vendor/vue-router.js'
import store from './domain/store.js'
import {mapState} from './vendor/vuex.js'

Vue.use(Router)
import routes from './domain/list-router.js'
const router = new Router({ routes })

import loading from './componentes/c-loading.js'
Vue.component('c-loading', loading )

import cadastrar from './views/cadastro.js'
Vue.component('c-cadastro', cadastrar )

import termos from './views/termos.js'
Vue.component('c-termos', termos )



const app = new Vue({
    store,
    router,
    data: {},
    computed: { },
    methods: { }
}).$mount('#app')