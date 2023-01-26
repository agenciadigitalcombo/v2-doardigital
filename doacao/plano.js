import getTemplate from '../components/getTemplate.js'
import Temp from '../components/Temp.js'
import ApiRecover from '../components/apiRecover.js'
import api from './api.js'
import { Money } from '../components/mask.js'

const html = await getTemplate('./plano')

export default {
    data: function () {
        return {
            email: null,
            typeDonation: 'subscribe',
            valor: api.planos[0].price,
            planos: api.planos.reverse(),
            logo: api.logo,
            cor: api.cor ? api.cor : '#232d7b',
            bg: api?.bg,
            error: null,
            outro: 0
        }
    },
    components: {},
    async mounted() {
        let tmp = new Temp();
        let data = tmp.info()
        this.email = data.email
        this.typeDonation = data?.typeDonation || 'subscribe'
        this.valor = data?.valor || api.planos[0].price

        let apiProto = new ApiRecover()
        let protocolo = apiProto.existProtocolo()
        if (protocolo) {
            let resInfo = await apiProto.info(protocolo)
            if (resInfo.payload.finalizado == 0 && resInfo.payload.email) {
                apiProto.setProtocolo(protocolo)
            } else {
                apiProto.clearProtocolo()
            }
        }

        let getProto = apiProto.getProtocolo()
        if (getProto) {
            let resInfo = await apiProto.info(getProto)
            if (resInfo.payload.finalizado == 0 && resInfo.payload.email) {
                this.email = resInfo.payload.email
                this.typeDonation = resInfo.payload.recorrente == 0 ? 'single' : 'subscribe'
                this.valor = resInfo.payload.valor
            }
        }

        let valor = this.getValor()
        if (valor) {
            this.valor = valor
        }

        if( !this.planos.find( p =>p.price ==this.valor ) ) {
            this.outro = Money(this.valor)
            this.valor = 'outro'
        }

    },
    methods: {
        getValor() {
            const url = new URL(window.location.href.replace('#/'))
            return url.searchParams.get('valor')
        },
        async goToEnd() {
            let apiProto = new ApiRecover()
            let res = await apiProto.save(
                api.institution_fk,
                this.email,
                this.valor == 'outro' ? this.toFloat( this.outro ) : this.valor,
                this.typeDonation == 'subscribe' ? 1 : 0,
                apiProto.getProtocolo()
            )
            apiProto.setProtocolo(res.payload.protocolo)
            this.autoSave()
            this.$router.push('finalizar')
        },
        outroValor() {
            this.outro = Money(this.outro)
        },
        autoSave() {
            let tmp = new Temp();
            tmp.save({
                email: this.email,
                typeDonation: this.typeDonation,
                valor: this.valor,
                outro: this.outro,
            })
        },
        toFloat(valor) {
            return parseFloat(valor.replace('.', '').replace(',', '.'))
        },
        valorMin() {
            this.error = null
            let valor = this.toFloat(this.outro)
            if (valor < 10) {
                this.error = 'O valor mínimo é de R$10,00'
            }
            this.autoSave()
        }
    },
    template: html,
}