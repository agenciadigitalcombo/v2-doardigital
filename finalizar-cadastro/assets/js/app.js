import Vue from './vendor/vue.js'
import Router from './vendor/vue-router.js'
import store from './domain/store.js'
import {mapState} from './vendor/vuex.js'

Vue.use(window.vuelidate.default)
Vue.use(VueMask.VueMaskPlugin);

Vue.use(Router)
import routes from './domain/list-router.js'
const router = new Router({ routes })

import loading from './components/c-loading.js'
Vue.component('c-loading', loading )

import checkout  from './view/checkout.js'
Vue.component('c-checkout', checkout  )


import checkout_plano from './view/checkout_plano.js'
Vue.component('c-checkout_plano', checkout_plano  )

import checkout_endereco from './view/checkout_endereco.js'
Vue.component('c-checkout_endereco', checkout_endereco  )


new Vue({
    router,
    data: {}
}).$mount('#app')

;(async () => { })()