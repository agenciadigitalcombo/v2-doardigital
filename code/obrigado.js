import getTemplate from '../components/getTemplate.js'
import Tmp from '../components/Temp.js'
import api from './api.js'

const html = await getTemplate( './obrigado' )

export default {
    data: function () {
        return { 
            logo: api.logo,
            cor: api.cor,
            code: null,
            url: null,
            successes: false,
            type: 'BOLETO',
        }
    },
    components: {},
    async mounted() {
        
        const path = "https://painel.doardigital.com.br/api/instituicao/resgata-status-fatura?payment_id="
        const code = this.getUriData('code')
        let tmp = new Tmp()
        let info = tmp.info()
        let api = (await (await fetch(path + code)).json()).payload  
        this.code = api.code
        this.url = api.url  
        this.type = api.type  
       
    },
    methods: {
        getUriData(name) {
            const url = new URL(window.location.href.replace('#/'))
            return url.searchParams.get(name)
        },
        copyPix() {
            this.successes =  true
            setTimeout( _ => {
                this.successes = false
            }, 5000 )
            this.text = "COPIADO!!!"
            this.$refs.codePix.select()
            this.$refs.codePix.setSelectionRange(0, 99999)
            navigator.clipboard.writeText(this.$refs.codePix.value)
        },
    },
    template: html,
}