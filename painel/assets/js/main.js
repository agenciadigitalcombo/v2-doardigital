import Vue from './vendor/vue.js'
import Router from './vendor/vue-router.js'
import store from './domain/store.js'
import {mapState} from './vendor/vuex.js'

Vue.use(Router)
import routes from './domain/list-router.js'
const router = new Router({ routes })


import login from './views/login.js'
Vue.component('c-login', login)

import dash from './views/dash.js'
Vue.component('c-dash', dash )

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