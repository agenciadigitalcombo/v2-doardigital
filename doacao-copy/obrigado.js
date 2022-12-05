import getTemplate from '../components/getTemplate.js'
import apiFatura from '../components/apiFatura.js'
import Tmp from '../components/Temp.js'
import Admin from '../components/apiAdmin.js'
import Jwt from '../components/jwt.js'


const html = await getTemplate( './obrigado' )

export default {
    data: function () {
        return { 
            code: null,
            id: null,
        }
    },
    components: {},
    async mounted() {
        let tmp = new Tmp()
        let info = tmp.info()
        this.code = info.code
        this.id = info.id
        

    },
    methods: {
        copyPix() {
            this.$refs.codePix.select()
            this.$refs.codePix.setSelectionRange(0, 99999)
            navigator.clipboard.writeText(this.$refs.codePix.value)
        },
    },
    template: html,
}