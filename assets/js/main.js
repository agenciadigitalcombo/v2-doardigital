import Vue from './vendor/vue.js'
import Router from './vendor/vue-router.js'
import store from './domain/store.js'
import {mapState} from './vendor/vuex.js'

Vue.use(Router)
import routes from './domain/list-router.js'
const router = new Router({ routes })

<<<<<<< HEAD
=======
import login from './views/login.js'
Vue.component('c-login', login )
>>>>>>> 8f279130b3845e9390b6ebb81caa42f0e93490e1

const app = new Vue({
    store,
    router,
    data: {},
    computed: { },
    methods: { }
}).$mount('#app')