import { Form, Input, Button, Text, Select, Option } from "../components/Form.js"
import BreadCrumb from "../components/BreadCrumb.js"
import ApiAdmin from "../components/apiAdmin.js"
import Jwt from "../components/jwt.js"
import CardGeral from "../components/CardGeral.js"
import { cpf } from "../components/mask.js"

export default {
    data: function () {
        return {
            inputs: "",
            name: "",
            lastName: "",
            email: "",
            data: "",
            cpf: "",
            formData: {}
        }
    },

    methods: {
        async atualizar() {
            let api = new ApiAdmin()

            let request = await api.update(
                this.adm_fk,
                this.formData.name,
                this.formData.cpf,
                this.formData.data,
                this.formData.telefone
            )

        }
    },
    async mounted() {
        let api = new ApiAdmin()
        let jwt = new Jwt()
        this.adm_fk = jwt.get().code
        let request = await api.info(this.adm_fk)

        if (request.next) {
            
        }

        this.formData.code = request.payload.code
        this.formData.cpf = request.payload.cpf
        this.formData.credencial = request.payload.credencial
        this.formData.email = request.payload.email
        this.formData.etapa = request.payload.etapa
        this.formData.gravatar = request.payload.gravatar
        this.formData.data = request.payload.nascimento
        this.formData.name = request.payload.nome
        this.formData.telefone = request.payload.telefone

        console.log(request)

        
        const inputs = [
            new Input('name', 'Nome', 'text', 2),
            new Input('email', 'Email', 'email', 2, true, '', true),
            new Input('data', 'Data nascimento', 'date', 2, true),
            new Input('cpf', 'CPF', 'text', 2, true),
            new Input('telefone', 'Telefone', 'text', 2, true),
            new Button('Atualizar Perfil'),
        ]
        globalThis.Dados = this.formData
        const form = new Form(inputs)
        this.inputs = form.render()
    },
    components: {
        BreadCrumb,
        CardGeral,
    },
    adapter(listAll) {

        return listAll.map(d => ({
            ...d,
            cpf: cpf(d.cpf),
        }))
    },
    template: `
    <div>
        <BreadCrumb text="Home" text2="Minha Conta" />
        <div class="relative pt-2 pb-32 bg-[#fff]">
          <div class="px-4 md:px-6 mx-auto w-full">
             <div>
                <div class="flex flex-wrap">
                
                <CardGeral text="Atualizar Perfil" size="quatro">
                
                <form action="javascript:void(0)" methods="POST" class="js-form grid grid-cols-4 gap-4" v-html="inputs"
                                                    @submit="atualizar">
                                                </form>
                </CardGeral>
                
                
                </div>
             </div>
          </div>
       </div>
        
        
    </div>`,
}