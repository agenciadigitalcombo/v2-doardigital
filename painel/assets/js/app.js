import Vue from './vendor/vue.js'
import Router from './vendor/vue-router.js'
import store from './domain/store.js'

import { mapState } from './vendor/vuex.js'

Vue.use(window.vuelidate.default)
Vue.use(VueMask.VueMaskPlugin);

Vue.use(Router)
import routes from './domain/list-router.js'
const router = new Router({ routes })

import header from './componentes/c-header.js'
Vue.component('c-header', header)

import aside from './componentes/c-aside.js'
Vue.component('c-aside', aside)

import footer from './componentes/c-footer.js'
Vue.component('c-footer', footer)

import mensagem from './componentes/c-mensagem.js'
Vue.component('c-mensagem', mensagem)

import loading from './componentes/c-loading.js'
Vue.component('c-loading', loading)


import validacao from './componentes/c-validacao.js'
Vue.component('c-validacao', validacao)

import detalhe from './componentes/c-detalhe.js'
Vue.component('c-detalhe', detalhe)

import grafico from './views/grafico.js'
Vue.component('c-grafico', grafico)

import dash from './views/dash.js'
Vue.component('c-dash', dash)

import modulos from './views/modulos/modulos.js'
Vue.component('c-modulos', modulos)

import modulosCorreios from './views/modulos/modulosCorreios.js'
Vue.component('c-modulosCorreios', modulosCorreios)

import modulosEmail from './views/modulos/modulosEmail.js'
Vue.component('c-modulosEmail', modulosEmail)

import modulosEvendas from './views/modulos/modulosEvendas.js'
Vue.component('c-modulosEvendas', modulosEvendas)

import modulosMailing from './views/modulos/modulosMailing.js'
Vue.component('c-modulosMailing', modulosMailing)

import modulosStation from './views/modulos/modulosStation.js'
Vue.component('c-modulosStation', modulosStation)

import dominio from './views/modulos/dominio.js'
Vue.component('c-dominio', dominio)


import doadores from './views/instituicao/doadores.js'
Vue.component('c-doadores', doadores)

import doacoes from './views/instituicao/doacoes.js'
Vue.component('c-doacoes', doacoes)

import doadorDetalhe from './views/instituicao/doadorDetalhe.js'
Vue.component('c-doadorDetalhe', doadorDetalhe)

import doadorHitorico from './views/instituicao/doador-hitorico.js'
Vue.component('c-doadorHitorico', doadorHitorico)


import configuracao from './views/configuracao/configuracao.js'
Vue.component('c-configuracao', configuracao)

import script from './views/configuracao/script.js'
Vue.component('c-script', script)

import carteira from './views/admin/carteira.js'
Vue.component('c-carteira', carteira)

import planos from './views/planos/planos.js'
Vue.component('c-planos', planos)

import planoEditar from './views/planos/planoEditar.js'
Vue.component('c-planoEditar', planoEditar)

import planoNovo from './views/planos/planoNovo.js'
Vue.component('c-planoNovo', planoNovo)

import qrCode from './views/qr-code.js'
Vue.component('c-qr-code', qrCode)


import divPagamento from './views/split/div-pagamento.js'
Vue.component('c-div-pagamento', divPagamento)

import divPagamentoAdd from './views/split/split_novos.js'
Vue.component('c-split_novo', divPagamentoAdd)

import divPagamentoEditar from './views/split/div-pagamento_editar.js'
Vue.component('c-div-pagamentoEditar', divPagamentoEditar)


import metas from './views/metas.js'
Vue.component('c-metas', metas)

import modeloEmails from './views/modelo-de-emails.js'
Vue.component('c-modelo-de-emails', modeloEmails)

import modeloEmailsNovo from './views/modelo-emails-novo.js'
Vue.component('c-modelo-de-emails-novo', modeloEmailsNovo)

import modeloEmailsEditar from './views/modelo-emails-editar.js'
Vue.component('c-modelo-de-emails-editar', modeloEmailsEditar)
 

new Vue({
    router,
    data: {},
    mounted() {
        let is_token = localStorage.getItem('token')
        if (is_token) {
            if (window.location.hash == `/painel-geral/index.html#/login`) {
                window.location.href = `#/dash`
            }
        } else {
            window.location.href = `/painel-geral/index.html#/login`
        }


    },
}).$mount('#app')

;(async () => { })()
