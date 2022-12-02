import getTemplate from '../components/getTemplate.js'
import Temp from '../components/Temp.js'
import api from './api.js'

const html = await getTemplate( './plano' )

export default {
    data: function () {
        return {
            email: null,
            typeDonation: 'subscribe',
            valor: api.planos[0].price,
            planos: api.planos,
            logo: api.logo,
            cor: api.cor ? api.cor : '#232d7b',
            bg: api?.bg
        }
    },
    components: {},
    async mounted() {
        let tmp = new Temp();  
        let data = tmp.info() 
        this.email = data.email
        this.typeDonation = data?.typeDonation || 'subscribe'
        this.valor = data?.valor || api.planos[0].price
    },
    methods: {
        goToEnd() {
            this.autoSave()
            this.$router.push('finalizar')
        },
        autoSave() {
            let tmp = new Temp();            
            tmp.save({
                email: this.email,
                typeDonation: this.typeDonation,
                valor: this.valor,
            })
        }
    },
    template: html,
}