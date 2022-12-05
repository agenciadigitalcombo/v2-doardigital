const { createApp, h } = Vue

import plano from "./plano.js"
import finalizar from "./finalizar.js"
import obrigado from "./obrigado.js"

const routes = [
    { path: '/', component: plano },
    { path: '/finalizar', component: finalizar },
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
        <div>
            <router-view></router-view>
        </div>    
    `,
    components: {},
    async mounted() {},
    methods: {}
}).use(router).mount('#app')