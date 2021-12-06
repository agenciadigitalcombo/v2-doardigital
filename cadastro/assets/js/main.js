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


import cadastrar from './views/cadastro.js'
Vue.component('c-cadastro', cadastrar )


import EditarLocal from './views/editar-local.js'
Vue.component('c-editar-local', EditarLocal )


const app = new Vue({
    store,
    router,
    data: {},
    computed: { },
    methods: { }
}).$mount('#app')