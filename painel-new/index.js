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
            itemsMenu: dataMenuPainelGeral,
            isOpen: false
        }
    },
    template: "<div> <MenuMobile @check='toggleMenu' /> <div class='grid grid-cols-[270px_1fr]'> <MenuAside :isOpen='isOpen' :lista='itemsMenu'/> <div> <Header /> <div v-if='isOpen'>tafarelll</div> <router-view></router-view> </div> </div> </div>",
    components: {
        MenuAside,
        Header,
        MenuMobile
    },
    methods: {
        toggleMenu() {
            this.isOpen = !this.isOpen
        }
    }
}).use(router).mount('#app')