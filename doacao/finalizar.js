import getTemplate from '../components/getTemplate.js'
import Temp from '../components/Temp.js'
import { cpf, tel } from '../components/mask.js'
import apiFatura from '../components/apiFatura.js'
import api from './api.js'
import ApiRecover from '../components/apiRecover.js'

console.log(api)

const html = await getTemplate('./finalizar')

export default {
    data: function () {
        return {
            email: null,
            typeDonation: null,
            valor: null,
            printValor: null,
            planos: api.planos,
            logo: api.logo,
            cor: api.cor ? api.cor : '#232d7b',
            bg: api?.bg,
            recorrente: null,

            nameDonation: null,
            name: null,
            telefone: null,
            cpf: '',
            institution_fk: api.institution_fk,
            addressNumber: null,
            cep: '',

            tipoPagamento: 'CREDIT_CARD',
            numero: null,
            vencimento: null,
            cvv: null,
            message: null,
            load: false,

            nextDueDate: 0,
            showCep: api?.showCep == 0 ? false : true
        }
    },
    components: {},
    async mounted() {
        let tmp = new Temp();
        let data = tmp.info()
        this.email = data.email
        this.typeDonation = data?.typeDonation || 'subscribe'
        this.valor = data?.valor || api.planos[0].price
        this.printValor = this.price(this.valor)
        this.recorrente = this.typeDonation == 'single' ? 0 : 1

        let protocolo = this.getProtocoloUrl() 

        if(protocolo) {
            let apiProto = new ApiRecover()
            let {next, payload} = await apiProto.info(protocolo)
            if(next) {
                this.email = payload.email
                this.valor = payload.valor
                this.nameDonation = payload.nome
                this.telefone = payload.telefone
                this.cpf = payload.cpf
            }

        }

    },
    methods: {
        getProtocoloUrl() {
            const url = new URL(window.location.href.replace('#/'))
            return url.searchParams.get('protocolo')
        },
        price(v) {
            return (+v).toLocaleString('pt-br', { minimumFractionDigits: 2 })
        },
        async atualizaRecover() {
            let apiProto = new ApiRecover()
            await apiProto.save(
                this.institution_fk,
                this.email,
                this.valor == 'outro' ? this.toFloat(this.outro) : this.valor,
                this.typeDonation == 'subscribe' ? 1 : 0,
                apiProto.getProtocolo(),
                this.nameDonation,
                this.telefone,
                this.cpf,
                this.tipoPagamento
            )
        },
        async fazerAssinatura() {
            this.message = null
            this.load = true
            let api = new apiFatura()
            let res = await api.finalizar(
                this.institution_fk,
                this.valor,
                this.recorrente,
                this.email,
                this.nameDonation,
                this.cpf,
                this.telefone,
                this.cep,
                this.addressNumber,
                this.tipoPagamento,
                this.nome,
                this.numero,
                this.cvv,
                this.vencimento,
                this.nextDueDate
            )
            this.load = false
            this.message = res.message
            if (res.next) {
                let tmp = new Temp()
                tmp.save({
                    code: res?.payload?.code,
                    tipo: this.tipoPagamento,
                    url: res?.payload?.url,
                    email:null,
                    valor: null
                })
                let apiProto = new ApiRecover()
                await apiProto.finalizar(apiProto.getProtocolo())
                apiProto.clearProtocolo()
                this.$router.push('obrigado')
            }
        },
        maskCvv() {
            this.cvv = this.cvv.replace(/\D/gi, '').substr(0, 3)
        },
        maskValidade() {
            this.vencimento = this.vencimento.replace(/\D/gi, '').replace(/(\d{2,2})(\d{2,2})/gi, '$1/$2').substr(0, 5)
        },
        maskNumero() {
            this.numero = this.numero.replace(/\D/gi, '').replace(/(\d{4,4})(\d{4,4})(\d{4,4})(\d{4,4})/gi, '$1 $2 $3 $4').substr(0, 19)
        },
        maskCep() {
            this.cep = this.cep.replace(/\D/gi, '').replace(/(\d{5,5})(\d{3,3})/gi, '$1-$2').substr(0, 9)
        },
        maskCpf() {
            this.cpf = cpf(this.cpf)
        },
        maskTel() {
            this.telefone = tel(this.telefone)
        },
    },
    template: html,
}