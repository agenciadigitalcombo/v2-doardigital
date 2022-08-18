const { createApp, h } = Vue

import MenuMobile from "../components/MenuMobile.js"
import MenuAside from "../components/MenuAside.js"
import Header from "../components/Header.js"
import dataMenuPainelGeral from "../components/dataMenuPainelGeral.js"

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
        return {
            itemsMenu: dataMenuPainelGeral
        }
    },
    template: "<div> <MenuMobile /> <div class='grid grid-cols-[270px_1fr]'> <MenuAside :lista='itemsMenu'/> <div> <Header /> <router-view></router-view> </div> </div> </div>",
    components: {
        MenuAside,
        Header,
        MenuMobile
    }
}).use(router).mount('#app')