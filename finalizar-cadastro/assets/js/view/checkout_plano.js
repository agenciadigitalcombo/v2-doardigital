import get_template from '../components/get_template.js'
import adm from "../../../../../static/js/api/adm.js"
const { required, minLength, maxLength } = window.validators

export default {
   
    data: function () {
        return {
            token: null,
            plano_token: "",
            amount: "5990",
            cart_nome: null,
            cart_numero: null,
            cart_cvv: null,
            mes: "",
            ano: "",
            cart_validade: null,
             
            search: null,
            jms: false,
            smsCupon: null,
            showCupon: null,
            invision: true,
            submitStatus: null,
            error: null,
            msg: null,

        }
    },

    filters: {
        form_valor(price) {
            let amount = (price / 100).toLocaleString('pt-br', { minimumFractionDigits: 2 })
            return `R$ ${amount}`
        }
    },
    
    methods: {
    
        async transacaoRecorrencia() {
            this.error = null
            this.submitStatus = 'CARREGAR'
            let res = await adm.recorrenciaDigital(
                this.token,
                this.plano_token,
                this.amount,
                this.cart_nome,
                this.cart_numero,
                this.cart_cvv,
                this.cart_validade =  this.mes+'/'+this.ano,

            )
            if (!res.next) {
                this.submitStatus = 'FALHA'
                 this.error = res.message 
                this.msg = res.message
                return null
            }

            window.location.href = "/painel-geral/index.html#/";
        },

        descartavel() {
            window.location.href = "/painel-geral/index.html#/perfil-editar";
        }

    },

    async mounted() {

    },

    template: await get_template('./assets/js/view/checkout_plano')
}