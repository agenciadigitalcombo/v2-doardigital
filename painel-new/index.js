const { createApp, h } = Vue

import Sobre from "./sobre.js"
import Inicio from "./home.js"





const routes = [
    { path: '/', component: Inicio },
    { path: '/sobre', component: Sobre },
]

const router = VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    routes,
})

createApp({
    data() {
        return {}
    }
}).use(router).mount('#app')