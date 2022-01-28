import Vue from './vendor/vue.js'
import Router from './vendor/vue-router.js'

import get_template from './components/get_template.js'


import page_home from './view/home/home.js'
Vue.component('p-home', page_home)

import page_contato from './view/contato/home.js'
Vue.component('p-contato', page_contato)

import page_endereco from './view/endereco/home.js'
Vue.component('p-endereco', page_endereco)

import page_assinatura from './view/assinatura/home.js'
Vue.component('p-assinatura', page_assinatura)

import page_suporte from './view/suporte/home.js'
Vue.component('p-suporte', page_suporte)


Vue.use(Router)

const routes = [
    { path: '/', component: { template: '<p-home></p-home>' } },
    { path: '/contato', component: { template: '<p-contato></p-contato>' } },
    { path: '/endereco', component: { template: '<p-endereco></p-endereco>' } },
    { path: '/assinatura', component: { template: '<p-assinatura></p-assinatura>' } },
    { path: '/suporte', component: { template: '<p-suporte></p-suporte>' } }
]

const router = new Router({ routes })

new Vue({
    router,
    data: {}
}).$mount('#app')

;(async () => { })()