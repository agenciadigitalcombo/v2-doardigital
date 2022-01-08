import Vue from './vendor/vue.js'
import Router from './vendor/vue-router.js'
import store from './domain/store.js'
import {mapState} from './vendor/vuex.js'

Vue.use(Router)
import routes from './domain/list-router.js'
const router = new Router({ routes })

import checkout  from './views/checkout .js'
Vue.component('c-checkout', checkout  )



// import minhaInstituicao from './views/minhaInstituicao.js'
// Vue.component('c-minhaInstituicao', minhaInstituicao )


// import addInstituicao from './views/instituicaoAdd.js'
// Vue.component('c-addInstituicao', addInstituicao )

const app = new Vue({
    store,
    router,
    data: {},
    computed: { },
    methods: { }
}).$mount('#app')

