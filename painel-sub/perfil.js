import { Form, Input, Button, Text, Select, Option } from "../components/Form.js"
import BreadCrumb from "../components/BreadCrumb.js"
import ApiAdmin from "../components/apiAdmin.js"
import Jwt from "../components/jwt.js"
import CardGeral from "../components/CardGeral.js"
import { cpf, tel } from "../components/mask.js"
import Loader from "../components/Loader.js"
import CEP from "../components/ApiViaCep.js"


globalThis.MaskCpf = cpf

globalThis.MaskTel = tel

export default {
    data: function () {
        return {
            isLoad: 'true',
            error: null,
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
            this.error = request.message

        }
    },
    async mounted() {
        this.isLoad = 'true'
        let api = new ApiAdmin()
        let jwt = new Jwt()
        this.adm_fk = jwt.get().code
        let request = await api.info(this.adm_fk)

        if (request.next) {

        }

        this.formData.code = request.payload.code
        this.formData.cpf = cpf(request.payload.cpf)
        this.formData.credencial = request.payload.credencial
        this.formData.email = request.payload.email
        this.formData.etapa = request.payload.etapa
        this.formData.gravatar = request.payload.gravatar
        this.formData.data = request.payload.nascimento
        this.formData.name = request.payload.nome
        this.formData.telefone = tel(request.payload.telefone)


        const inputs = [
            new Input('name', 'Nome', 'text', 2),
            new Input('email', 'Email', 'email', 2, true, '', true),
            new Input('data', 'Data nascimento', 'date', 2, true),
            new Input('cpf', 'CPF', 'text', 2, true, '', false, null, 'MaskCpf'),
            new Input('telefone', 'Telefone', 'text', 2, true, '', false, null, 'MaskTel'),
            new Button('Atualizar Perfil'),
        ]

        globalThis.Dados = this.formData
        const form = new Form(inputs)
        this.inputs = form.render()
        this.isLoad = 'false'
    },
    components: {
        BreadCrumb,
        CardGeral,
        Loader
    },
    computed: {
        // a computed getter
        formData() {
            // `this` points to the component instance
            this.formData.name = ok
        }
    },
    adapter(listAll) {

        return listAll.map(d => ({
            ...d,
            cpf: cpf(d.cpf),
        }))
    },
    template: `
    <div>
        <Loader :open="isLoad" />
        <BreadCrumb text="Home" text2="Minha Conta" />
        <div class="relative pt-2 pb-32 bg-[#fff]">
          <div class="px-4 md:px-6 mx-auto w-full">
             <div>
                <div class="flex flex-wrap">
                <CardGeral text="Atualizar Perfil" size="quatro">
                <form action="javascript:void(0)" methods="POST" class="js-form grid grid-cols-4 gap-4" v-html="inputs" @submit="atualizar"></form>
                  <div v-show="error">{{error}}</div>
                </CardGeral>
                </div>
             </div>
          </div>
       </div>
        
        
    </div>`,
}