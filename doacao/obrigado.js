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
            tipo: null,
            url: null,
            links: {}
        }
    },
    components: {},
    async mounted() {
        let tmp = new Tmp()
        let info = tmp.info()
        this.code = info?.code
        this.tipo = info?.tipo
        this.url = info?.url
        this.links = this.compartilhar(api.domain)
       
    },
    methods: {
        copyPix() {
            this.$refs.codePix.select()
            this.$refs.codePix.setSelectionRange(0, 99999)
            navigator.clipboard.writeText(this.$refs.codePix.value)
        },
        compartilhar( domain ) {
            return {
                facebook: encodeURI( `https://www.facebook.com/sharer/sharer.php?u=https://${domain}`),
                whats: encodeURI(`https://web.whatsapp.com/send?text=https://${domain}`),
                twitter: encodeURI(`https://twitter.com/intent/tweet?text=https://${domain}`),
                telegram: encodeURI(`https://t.me/share/url?url=https://${domain}&text=`),
            }
        }
    },
    template: html,
}