const { createApp, h } = Vue

import MenuMobile from "../components/MenuMobile.js"
import MenuAside from "../components/MenuAside.js"
import Header from "../components/Header.js"
import dataMenuPainelGeral from "../components/dataMenuPainelGeral.js"


import Sobre from "./sobre.js"
import Inicio from "./home.js"
import Doadores from "./doadores.js"
import Carteira from "./carteira.js"
import Perfil from "./perfil.js"
import Configuracao from "./configuracao.js"
import Modelos from "./modelosDeEmail.js"
import Modulos from "./modulos.js"
import Metas from "./metas.js"
import Planos from "./planos.js"
import Recorrencia from "./recorrencia.js"
import Doacoes from "./doacoes.js"
import PaginaQrCode from "./paginaQrCode.js"
import Dashboard from "./dashboard.js"


const routes = [
    { path: '/', component: Inicio },
    { path: '/dashboard', component: Dashboard },
    { path: '/doadores', component: Doadores },
    { path: '/carteira', component: Carteira },
    { path: '/meu-perfil', component: Perfil },
    { path: '/configuracao', component: Configuracao },
    { path: '/modelo-de-email', component: Modelos },
    { path: '/modulos', component: Modulos },
    { path: '/metas', component: Metas },
    { path: '/planos', component: Planos },
    { path: '/recorrencia', component: Recorrencia },
    { path: '/doacoes', component: Doacoes },
    { path: '/qr-code', component: PaginaQrCode },

]

const router = VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    routes,
})

createApp({
    data() {
        return {
            itemsMenu: dataMenuPainelGeral,
            isOpen: true
        }
    },
    template: `
        <div> 
            <MenuMobile @check='toggleMenu' /> 
            <div class='grid grid-cols-1 lg:grid-cols-[270px_1fr]'> 
                <MenuAside :isOpen='isOpen' :lista='itemsMenu' @check='toggleMenu'/> 
                <div> 
                    <Header />                     
                    <router-view></router-view> 
                </div> 
            </div> 
        </div>
        `,
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