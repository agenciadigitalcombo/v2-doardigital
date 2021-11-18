import Vue from './vendor/vue.js'
import Router from './vendor/vue-router.js'
import store from './domain/store.js'
import {mapState} from './vendor/vuex.js'

Vue.use(Router)
import routes from './domain/list-router.js'
const router = new Router({ routes })


const app = new Vue({
    store,
    router,
    data: {},
    computed: { },
    methods: { }
}).$mount('#app')