import Vue from './vendor/vue.js'
import Router from './vendor/vue-router.js'
import store from './domain/store.js'
import {mapState} from './vendor/vuex.js'
import get_template from './components/get_template.js'

Vue.use(window.vuelidate.default)
Vue.use(VueMask.VueMaskPlugin);
Vue.use(Router)


import loading from './components/c-loading.js'
Vue.component('c-loading', loading )
  
import cadastrar from './view/home.js'
Vue.component('c-cadastro', cadastrar )

import termos from './view/termos.js'
Vue.component('c-termos', termos )

import routes from './domain/list-router.js'
const router = new Router({ routes })

new Vue({
    router,
    data: {}
}).$mount('#app')

;(async () => { })()