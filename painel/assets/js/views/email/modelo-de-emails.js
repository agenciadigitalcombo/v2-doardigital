import get_template from '../../componentes/get_template.js'
import adm from "../../../../../static/js/api/adm.js"

export default {


    data: function () {
        return {
            token: null,
        instituicao_fk: null,
            id: null,
            acao: null,
            emails: [],
            default: []
        }
    },

    filters: {
       
        este_status(status) {
            let apresentar = {
                PENDING: 'Aguardando Pagamento',
                RECEIVED: 'Pago',
                CONFIRMED: 'Pago',
                OVERDUE: 'Vencida',
                RECOVER_2_DAY: 'Recuperação 2 dias', 
                RECOVER_3_DAY: 'Recuperação 3 dias', 
                RECOVER_4_DAY: 'Recuperação 4 dias', 
                RECOVER_5_DAY: 'Recuperação 5 dias', 
                RECOVER_6_DAY: 'Recuperação 6 dias',
                RECOVER_15: 'Recuperação 15',
                RECOVER_25: 'Recuperação 25',
                RECOVER_40: 'Recuperação 40',
                RECOVER_45: 'Recuperação 45', 

                REFUND_REQUESTED: 'Estorno',
                CHARGEBACK_REQUESTED: 'Estorno',
                CHARGEBACK_DISPUTE: 'Estorno',
                AWAITING_CHARGEBACK_REVERSAL: 'Estorno', 

            }
            return apresentar[status]
        },

        este_tipo(status) {
            let apresentar = {
                BOLETO: 'BOLETO',
                PIX: 'PIX',  
                CREDIT_CARD: 'CRÉDITO', 
                LEAD: 'CONDUZIR', 
                
                CREDIT_CARD_SIGNATURE: 'ASSINATURA CRÉDITO', 
                BOLETO_SIGNATURE: 'ASSINATURA BOLETO', 
                PIX_SIGNATURE: 'ASSINATURA PIX', 
                RECOVER_CART: 'RECUPERAÇÃO DOAÇÃO',
                BOLETO_RECOVER: 'RECUPERAÇÃO BOLETO',
                PIX_RECOVER: 'RECUPERAÇÃO PIX'
                     
            }
            return apresentar[status]
        },
    },

    


    methods: {
        async listarEmails() {
            let res = await adm.listarEmail(
                this.token,
                this.instituicao_fk
            )
            return res
        },

        async editar(assunto) {
            globalThis._emails = this.emails.find(email => email.assunto == assunto)
            window.location.href = "#/modelo-de-emails/editar"
        },


        async statusx(status) {
            this.error = null
            this.plano_id = status
            let res = await adm.onoffPlano(
                this.plano_id,
                this.token,
            )
            if (!res.next) {
                console.log(res)
                this.error = res.message
                return null
            }

        },

    },

    async mounted() {   
    
        this.instituicao_fk = localStorage.getItem("instituicao_id");
        this.emails = (await this.listarEmails()).payload 
       
    },

 

	template: await get_template('./assets/js/views/email/modelo-de-emails')
}