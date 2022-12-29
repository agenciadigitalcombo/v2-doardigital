const { createApp, h } = Vue

import obrigado from "./obrigado.js"

const routes = [
    { path: '/', component: obrigado },    
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