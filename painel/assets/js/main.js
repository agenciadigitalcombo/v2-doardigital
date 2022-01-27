import Vue from './vendor/vue.js'
import Router from './vendor/vue-router.js'
import store from './domain/store.js'

import {mapState} from './vendor/vuex.js'


Vue.use(window.vuelidate.default)
Vue.use(VueMask.VueMaskPlugin);

Vue.use(Router)
import routes from './domain/list-router.js'
const router = new Router({ routes })


import header from './componentes/c-header.js'
Vue.component('c-header', header )

import  aside from './componentes/c-aside.js'
Vue.component('c-aside', aside )

import footer from './componentes/c-footer.js'
Vue.component('c-footer', footer )

import mensagem from './componentes/c-mensagem.js'
Vue.component('c-mensagem', mensagem )

import loading from './componentes/c-loading.js'
Vue.component('c-loading', loading )
 

import validacao from './componentes/c-validacao.js'
Vue.component('c-validacao', validacao )

import detalhe from './componentes/c-detalhe.js'
Vue.component('c-detalhe', detalhe )





import login from './views/admin/login.js'
Vue.component('c-login', login)

import dash from './views/dash.js'
Vue.component('c-dash', dash )


import perfilEditar from './views/admin/perfil-editar.js'
Vue.component('c-perfil-editar', perfilEditar )

import EditarLocal from './views/admin/editar-local.js'
Vue.component('c-editar-local', EditarLocal )

import EditarSeguranca from './views/admin/editar-securanca.js'
Vue.component('c-editar-securanca', EditarSeguranca )

import credenciais from './views/admin/credenciais.js'
Vue.component('c-credenciais', credenciais )

import credenciaisAdd from './views/admin/credenciaisNova.js'
Vue.component('c-nova-credenciais', credenciaisAdd )

import credenciaisAtualizar from './views/admin/credenciaisAtualizar.js'
Vue.component('c-credenciaisAtualizar', credenciaisAtualizar )


import minhaInstituicao from './views/instituicao/minhaInstituicao.js'
Vue.component('c-minhaInstituicao', minhaInstituicao )


import addInstituicao from './views/instituicao/instituicaoAdd.js'
Vue.component('c-addInstituicao', addInstituicao )

import localInstituicao from './views/instituicao/instituicaoLoca.js'
Vue.component('c-localInstituicao', localInstituicao )

import instituLocaleditar from './views/instituicao/instituLocal-editar.js'
Vue.component('c-instituLocal-editar', instituLocaleditar )

import instituicaoBancoeditar from './views/instituicao/instituicaoBancario-editar.js'
Vue.component('c-instituicaoBancario-editar', instituicaoBancoeditar ) 

import bancoInstituicao from './views/instituicao/instituicaoBancario.js'
Vue.component('c-bancoInstituicao', bancoInstituicao )


import editarInstituicao from './views/instituicao/instituicaoEditar.js'
Vue.component('c-editarInstituicao', editarInstituicao )

import intituicaoMenu from './views/instituicao/intituicaoMenu.js'
Vue.component('c-intituicaoMenu', intituicaoMenu )



import modulos from './views/modulos/modulos.js'
Vue.component('c-modulos', modulos )

import modulosCorreios from './views/modulos/modulosCorreios.js'
Vue.component('c-modulosCorreios', modulosCorreios )

import modulosEmail from './views/modulos/modulosEmail.js'
Vue.component('c-modulosEmail', modulosEmail )

import modulosEvendas from './views/modulos/modulosEvendas.js'
Vue.component('c-modulosEvendas', modulosEvendas )

import modulosMailing from './views/modulos/modulosMailing.js'
Vue.component('c-modulosMailing', modulosMailing )

import modulosStation from './views/modulos/modulosStation.js'
Vue.component('c-modulosStation', modulosStation )


import assinatura from './views/admin/assinatura.js'
Vue.component('c-assinatura', assinatura )

import doadores from './views/instituicao/doadores.js'
Vue.component('c-doadores', doadores )

import doacoes from './views/instituicao/doacoes.js'
Vue.component('c-doacoes', doacoes )

import doacoesDetalhe from './views/instituicao/doacoes-detalhe.js'
Vue.component('c-doacoesDetalhe', doacoesDetalhe )

import doadorHitorico from './views/instituicao/doador-hitorico.js'
Vue.component('c-doadorHitorico', doadorHitorico )


import configuracao from './views/configuracao/configuracao.js'
Vue.component('c-configuracao', configuracao )

import dominio from './views/configuracao/dominio.js'
Vue.component('c-dominio', dominio )

import script from './views/configuracao/script.js'
Vue.component('c-script', script )



import carteira from './views/admin/carteira.js'
Vue.component('c-carteira', carteira )

import usuarios from './views/usuarios/usuarios.js'
Vue.component('c-usuarios', usuarios )

import user from './views/textes/user.js'
Vue.component('c-user', user )


import usuarioNovo from './views/usuarios/usuarioNovo.js'
Vue.component('c-usuarioNovo', usuarioNovo )

import usuarioEditar from './views/usuarios/usuarioEditar.js'
Vue.component('c-usuarioEditar', usuarioEditar )

import planos from './views/planos/planos.js'
Vue.component('c-planos', planos )

import planoEditar from './views/planos/planoEditar.js'
Vue.component('c-planoEditar', planoEditar )

import planoNovo from './views/planos/planoNovo.js'
Vue.component('c-planoNovo', planoNovo )

import qrCode from './views/qr-code.js'
Vue.component('c-qr-code', qrCode )


import divPagamento from './views/split/div-pagamento.js'
Vue.component('c-div-pagamento', divPagamento )

import divPagamentoAdd from './views/split/div-pagamentoAdd.js'
Vue.component('c-div-pagamentoAdd', divPagamentoAdd )


import divPagamentoEditar from './views/split/div-pagamento_editar.js'
Vue.component('c-div-pagamentoEditar', divPagamentoEditar )




import planosDigital from './views/planos/planos-digital.js'
Vue.component('c-planos-digital', planosDigital )

import planosDigitalNovo from './views/planos/planos-digitalNovo.js'
Vue.component('c-planos-digitalNovo', planosDigitalNovo )

import planosDigitalEditar from './views/planos/planos-digitalEdita.js'
Vue.component('c-planos-digitalEdita', planosDigitalEditar )

import metas from './views/metas.js'
Vue.component('c-metas', metas )

import modeloEmails from './views/modelo-de-emails.js'
Vue.component('c-modelo-de-emails', modeloEmails )

import modeloEmailsEditar from './views/modelo-emails-editar.js'
Vue.component('c-modelo-de-emails-editar', modeloEmailsEditar )

const app = new Vue({

    store,
    // scriptsbundle,
    router,
    data: {},
    computed: { },
    methods: { },
    mounted() {
        let is_token = localStorage.getItem('token')
		if(is_token) {
        if(window.location.hash == `#/` ){
            window.location.href = `#/dash`
            }
		}else {
            window.location.href = `#/`
        }
        

    },


}).$mount('#app')


