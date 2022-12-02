import getTemplate from '../components/getTemplate.js'
import Temp from '../components/Temp.js'
import api from './api.js'

const html = await getTemplate( './finalizar' )

console.log(api)

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

            name: null,
            telefone: null,
            cpf: null,

            addressNumber: null,
            cep: null,

            tipoPagamento: 'CREDIT_CARD',
            numero_card: null,
            vencimento: null,
            cvv: null,
        }
    },
    components: {
        
    },
    async mounted() {
        let tmp = new Temp();  
        let data = tmp.info() 
        this.email = data.email
        this.typeDonation = data?.typeDonation || 'subscribe'
        this.valor = data?.valor || api.planos[0].price
        this.printValor = this.price(this.valor)
    },
    methods: {
        price(v) {            
            return (+v).toLocaleString('pt-br', {minimumFractionDigits: 2})
        }
    },
    template: html,
}