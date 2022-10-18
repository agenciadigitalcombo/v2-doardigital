const { createApp, h } = Vue

import Inicio from "./inicio.js"
import Recuperar from "./recuperar.js"

const routes = [
    { path: '/', component: Inicio },
    { path: '/recuperar', component: Recuperar },
]

const router = VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    routes,
})

createApp({
    data() {
        return {
        }
    },
    template: `
        <div> 
            <router-view></router-view> 
        </div>
        `,
    components: {
    },
    methods: {
    }
}).use(router).mount('#app')