import Vue from './vendor/vue.js'
import Router from './vendor/vue-router.js'
import store from './domain/store.js'
import {mapState} from './vendor/vuex.js'

Vue.use(window.vuelidate.default)
Vue.use(VueMask.VueMaskPlugin);

Vue.use(Router)
import routes from './domain/list-router.js'
const router = new Router({ routes })

import loading from './componentes/c-loading.js'
Vue.component('c-loading', loading )

import checkout  from './views/checkout .js'
Vue.component('c-checkout', checkout  )


import checkout_perfil from './views/checkout_perfil.js'
Vue.component('c-checkout_perfil', checkout_perfil  )


import checkout_plano from './views/checkout_plano.js'
Vue.component('c-checkout_plano', checkout_plano  )

import checkout_endereco from './views/checkout_endereco.js'
Vue.component('c-checkout_endereco', checkout_endereco  )


const app = new Vue({
    store,
    router,
    data: {},
    computed: { },
    methods: { }
}).$mount('#app')

