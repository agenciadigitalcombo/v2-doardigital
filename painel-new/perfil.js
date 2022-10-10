import { Form, Input, Button, Text, Select, Option } from "../components/Form.js"
import BreadCrumb from "../components/BreadCrumb.js"
import ApiAdmin from "../components/apiAdmin.js"
import Jwt from "../components/jwt.js"

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

        this.formData.code = request.payload.code
        this.formData.cpf = request.payload.cpf
        this.formData.credencial = request.payload.credencial
        this.formData.email = request.payload.email
        this.formData.etapa = request.payload.etapa
        this.formData.gravatar = request.payload.gravatar
        this.formData.data = request.payload.nascimento
        this.formData.name = request.payload.nome
        this.formData.telefone = request.payload.telefone

        
        const inputs = [
            new Input('name', 'Nome', 'text', 2),
            new Input('email', 'email', 'email', 2, true),
            new Input('data', 'data nascimento', 'date', 2, true),
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
    },
    template: `
    <div>
        <BreadCrumb text="Home" text2="Minha Conta" />
        <div class="relative pt-6 pb-32 bg-[#fff]">
            <div class="px-4 md:px-6 mx-auto w-full">
                <div>
                    <div class="flex flex-wrap">
                        <div class="mx-auto w-full">
                            <div class="flex flex-wrap">
                                <div class="pb-8 w-full xl:w-8/12 px-2">
                                    <div
                                        class="relative flex flex-col min-w-0 break-words w-full mb-8 shadow-lg rounded-lg bg-white text-blueGray-700">
                                        <div class="px-6 py-4 border-0">
                                            <div class="flex flex-wrap items-center">
                                                <div class="relative w-full max-w-full flex-grow flex-1">
                                                    <h3 class="font-bold text-lg text-blueGray-700">
                                                        Atualizar Perfil
                                                    </h3>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="block w-full overflow-x-auto">
                                            <div class="mx-auto w-[90%] lg:w-[95%] pt-8">
                                                <form action="javascript:void(0)" methods="POST" class="js-form grid grid-cols-4 gap-4" v-html="inputs"
                                                    @submit="atualizar">
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>`,
}