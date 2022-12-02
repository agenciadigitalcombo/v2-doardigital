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
        let api = new apiFatura()
        let validador = async () => {
            let res = await api.status(this.id)
            console.log({status: res.payload.status, id: this.id })
            if(res.payload.status == 'RECEIVED') {
                let adm = new Admin()
                let jwt = new Jwt()
                let { code } = jwt.get()
                adm.step(code, 1)
                tmp.delete()
                window.location.href = "/painel-new/#/criar-instituicao"
            }else{
                setTimeout( validador, 3000 )
            }

        }
        validador()
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