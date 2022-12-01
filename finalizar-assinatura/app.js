const { createApp, h } = Vue

import finalizar from "./finalizar.js"
import obrigado from "./obrigado.js"

const routes = [
    { path: '/', component: finalizar },    
    { path: '/obrigado', component: obrigado },    
]

const router = VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    routes,
})

createApp({
    data() {
        return {}
    },
    template: `                                             
        <router-view></router-view>     
    `,
    components: {},
    async mounted() {},
    methods: {}
}).use(router).mount('#app')