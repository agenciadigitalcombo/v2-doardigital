import Vue from './vendor/vue.js'
import Router from './vendor/vue-router.js'
import store from './domain/store.js'
import {mapState} from './vendor/vuex.js'


// import * as bundle  from './front-js/scripts.bundle.js'

Vue.use(Router)
// Vue.use(bundle)
import routes from './domain/list-router.js'
const router = new Router({ routes })


import login from './views/login.js'
Vue.component('c-login', login)

import dash from './views/dash.js'
Vue.component('c-dash', dash )

import texte from './views/texte.js'
Vue.component('c-texte', texte )


import header from './componentes/c-header.js'
Vue.component('c-header', header )

import  aside from './componentes/c-aside.js'
Vue.component('c-aside', aside )

import footer from './componentes/c-footer.js'
Vue.component('c-footer', footer )


const app = new Vue({

    store,
    router,
    data: {},
    computed: { },
    methods: { },
    mounted() {
        let is_token = localStorage.getItem('token')
		if(is_token) {
			window.location.href = `#/dash`
		}else {
            window.location.href = `#/`
        }

  

        
    }
}).$mount('#app')


