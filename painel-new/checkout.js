import Loader from "../components/Loader.js"
import BreadCrumb from "../components/BreadCrumb.js"
import Botao from "../components/Botao.js"

import MyInstitution from "../components/myInstitution.js"
import ApiInstitution from "../components/apiInstitution.js"
import Jwt from "../components/jwt.js"



export default {
    data: function () {
        return {
            isLoad: 'true',
            link: null
        }
    },
    components: {
        Loader,
        BreadCrumb,
        Botao,        
    },
    async mounted() {
        this.isLoad = 'true'

        let institution = new MyInstitution()
        this.inst_fk = institution.get()

        let api = new ApiInstitution()
        let res = (await api.get(this.inst_fk)).payload

        let base = res.domain ? res.domain : res.subdomain

        let jwt = new Jwt()
        let token = jwt.logged()

        this.link = 'https://' + base + '/doacao/#/?token=' + token
   
        this.isLoad = 'false'        
    },
    methods: {
        open() {
            this.$refs.linkHidden.click()
        }
    },
    template: `
        <div>
            <Loader :open="isLoad" />    
            <BreadCrumb text="Home" text2="Checkout" />
            <div class="p-4" @click="open">
                <Botao text="Acessar meu Checkout" variation="green" link="javascript:void(0)"/>
                <a ref="linkHidden" class="hidden mt-4" :href="link">{{link}}</a>
            </div>
        </div>`,
}