import Logo from "./Logo.js"
import LinkMenu from "./LinkMenu.js"
import getTemplate from "./getTemplate.js"
import ApiAdmin from "../components/apiAdmin.js"
import Jwt from "../components/jwt.js"
import ApiCredencial from "../components/apiCredencial.js"

export default {
    props: ['lista', 'isOpen'],
    template: await getTemplate('./../components/MenuAside'),
    components: {
        Logo,
        LinkMenu,
    },
    emits: ['check'],
    data: function () {
        return {
            page: "",
            cred: [],
            showAll: true
        }
    },
    methods: {
        clickMenu() {
            this.$emit('check')
        },
        atualizarPagina(data) {
            this.page = data.link
        }
    },
    async mounted() {
        let api = new ApiAdmin()
        let jwt = new Jwt()
        let apiCred = new ApiCredencial()
        this.adm_fk = jwt.get().code
        let credencial_ID = (await api.info(this.adm_fk)).payload.credencial
        if (!!credencial_ID) {
            let credenciais = (await apiCred.info(credencial_ID))?.payload?.recursos?.split(',')
            this.cred = credenciais
            let listReal = JSON.parse(JSON.stringify(this.lista))
            this.showAll = false
        }
        this.page = window.location.hash
    },

}