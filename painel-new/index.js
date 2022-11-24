const { createApp, h } = Vue


import MenuMobile from "../components/MenuMobile.js"
import MenuAside from "../components/MenuAside.js"
import Header from "../components/Header.js"
import dataMenuPainelGeral from "../components/dataMenuPainelGeral.js"
import apiAdmin from "../components/apiAdmin.js"
import Jwt from "../components/jwt.js"

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
import DetalheDoador from "./detalheDoador.js"
import DetalheDoacao from "./detalheDoacao.js"
import EditarDoador from "./editarDoador.js"
import DetalheAssinatura from "./detalheAssinatura.js"
import CriarFaturaDoador from "./criarFaturaDoador.js"
import MinhasInstituicoes from "./minhasInstituicoes.js"
import CriarPlano from "./criarPlano.js"
import EditarPlano from "./editarPlano.js"
import TrocarSenha from "./trocarSenha.js"
import Usuarios from "./usuarios.js"
import CriarUsuario from "./criarUsuario.js"
import EditarUsuario from "./editarUsuario.js"
import Credenciais from "./credenciais.js"
import CriarCredencial from "./criarCredencial.js"
import EditarCredencial from "./editarCredencial.js"
import CriarInstituicao from "./criarInstituicao.js"
import CriarInstituicaoEndereco from "./criarInstituicaoEndereco.js"
import CriarInstituicaoDominio from "./criarInstituicaoDominio.js"
import CriarInstituicaoBanco from "./criarInstituicaoBanco.js"
import EditarInstituicao from "./editarInstituicao.js"
import ModelosDeEmail from "./modelosDeEmail.js"
import EditarEmail from "./editarEmail.js"
import ConfiguracaoEmail from "./configuracaoEmail.js"
import Checkout from "./checkout.js"

const routes = [
    { path: '/', component: Dashboard },
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
    { path: '/detalhe-doador', component: DetalheDoador },
    { path: '/detalhe-doacao', component: DetalheDoacao },
    { path: '/editar-doador', component: EditarDoador },
    { path: '/detalhe-assinatura', component: DetalheAssinatura },
    { path: '/criar-fatura-doador', component: CriarFaturaDoador },
    { path: '/minhas-instituicoes', component: MinhasInstituicoes },
    { path: '/criar-instituicao', component: CriarInstituicao },
    { path: '/criar-instituicao-endereco', component: CriarInstituicaoEndereco },
    { path: '/criar-instituicao-dominio', component: CriarInstituicaoDominio },
    { path: '/criar-instituicao-banco', component: CriarInstituicaoBanco },
    { path: '/criar-plano', component: CriarPlano },
    { path: '/editar-plano', component: EditarPlano },
    { path: '/trocar-senha', component: TrocarSenha },
    { path: '/usuarios', component: Usuarios },
    { path: '/criar-usuario', component: CriarUsuario },
    { path: '/editar-usuario', component: EditarUsuario },
    { path: '/credenciais', component: Credenciais },
    { path: '/criar-credencial', component: CriarCredencial },
    { path: '/editar-credencial', component: EditarCredencial },
    { path: '/editar-instituicao', component: EditarInstituicao },
    { path: '/modelo-de-emails', component: ModelosDeEmail },
    { path: '/editar-email', component: EditarEmail },
    { path: '/configuracao-email', component: ConfiguracaoEmail },
    { path: '/checkout', component: Checkout },
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
        <Header />
            <MenuMobile @check='toggleMenu' /> 
            <div class='grid grid-cols-1 lg:grid-cols-[270px_1fr]'> 
                <MenuAside :isOpen='isOpen' :lista='itemsMenu' @check='toggleMenu'/> 
                <div> 
                                         
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
    async mounted() {
        let api = new apiAdmin()
        let jwt = new Jwt() 
        let code = jwt.get()?.code
        let requestInfo = await api.info(code)  

        let level = 'sub'
        if (requestInfo?.payload?.adm?.length == 0) {
            level = 'adm'
        }
        if (requestInfo?.payload?.sass == '1') {
            level = 'super'
        }
        if (!jwt.logged() || level != "adm" ) {
            window.location.href = `//${window.location.host}/login`
        }
    },
    methods: {
        toggleMenu() {
            this.isOpen = !this.isOpen
        }
    }
}).use(router).mount('#app')