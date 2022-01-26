import Vue from './vendor/vue.js'
import Router from './vendor/vue-router.js'

import get_template from './components/get_template.js'

import header from './components/c-header.js'
Vue.component('c-header', header)

import aside from './components/c-aside.js'
Vue.component('c-aside', aside)



import page_home from './view/home/home.js'
Vue.component('p-home', page_home)

import page_contato from './view/contato/home.js'
Vue.component('p-contato', page_contato)

 

Vue.use(Router)

const routes = [
    { path: '/', component: { template: '<p-home></p-home>' } },
    { path: '/contato', component: { template: '<p-contato></p-contato>' } }

]

const router = new Router({ routes })

new Vue({
    router,
    data: {}
}).$mount('#app')

;(async () => { })()