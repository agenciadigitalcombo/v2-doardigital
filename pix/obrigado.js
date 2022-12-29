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
        }
    },
    components: {},
    async mounted() {
        let tmp = new Tmp()
        let info = tmp.info()
        this.code = this.getUriData('code')
        this.tipo = info?.tipo
        this.url = info?.url
    },
    methods: {
        getUriData(name) {
            const url = new URL(window.location.href.replace('#/'))
            return url.searchParams.get(name)
        },
        copyPix() {
            this.$refs.codePix.select()
            this.$refs.codePix.setSelectionRange(0, 99999)
            navigator.clipboard.writeText(this.$refs.codePix.value)
        },
    },
    template: html,
}