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
            zap: null,
            inst: null,
            cupon: null,
            validarCupon: null, 
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
      
      
        setaCupon(event) {
            const novoaray = this.dados.filter((valorAtual) => {
                return valorAtual.codigo_cupom.includes(this.cupon)

            })

            try {
                this.invision = true
                this.amount = novoaray[1].amount
                this.plano_token = novoaray[1].token


            } catch (e) {
                if (e instanceof TypeError) {

                }
            }
        },


        verCupoms(event) {
            try {
                const vercupom = this.dados.filter((cuponAtual) => {
                    return cuponAtual.instituicao_max.includes(this.inst) && cuponAtual.quant_disparos.includes(this.zap) && cuponAtual.codigo_cupom.includes(this.cupon)
                })
 
                if (this.cupon === this.validarCupon) {

                    this.amount = vercupom[0].amount
                    this.plano_token = vercupom[0].token
                    this.validarCupon = vercupom[0].codigo_cupom
                 
                    this.invision = true
                    this.showCupon = "1"
                    this.smsCupon = "Cupom confirmado"

                } else {
                    this.invision = false
                    this.showCupon = "0"
                    this.smsCupon = "Este Cupon não é valido" 
                    this.amount = globalThis._amount || "00" 
                }
            } catch (e) {
                if (e instanceof TypeError) {

                    this.invision = false
                    this.showCupon = "0"
                    this.smsCupon = "Este Cupon não é valido" 
                    this.amount = globalThis._amount || "00"  

                } else {
                    this.invision = false
                    this.showCupon = "0"
                    this.smsCupon = "Este Cupon não é valido"
                    this.amount = globalThis._amount || "00" 
                }
            }


        },

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
    

    template: await get_template('./assets/js/view/checkout_plano')
}