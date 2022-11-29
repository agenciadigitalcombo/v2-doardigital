import { Form, Input, Button, Text, Select, Option } from "../components/Form.js";
import BreadCrumb from "../components/BreadCrumb.js"
import ApiAdmin from "../components/apiAdmin.js"
import Jwt from "../components/jwt.js"

export default {
    data: function () {
        return {
            error: null,
            inputs: "",
            name: "",
            lastName: "",
            email: "",
            data: "",
            cpf: "",
            formData: {
               
            }
        }
    },
    
    methods: {
        async atualizar() {
            this.error = null
            let senha = this.formData.novasenha
            let replica = this.formData.repitasenha

            if(senha != replica) {
                this.error = "As senhas tem que ser iguais"
                return
            }
            
            if(senha.length < 8) {
                this.error = "As senhas tem que no mínimo 8 caracteres"
                return
            }
            
            let api = new ApiAdmin()
            let request = await api.alterar_senha(
                this.adm_fk,
                senha
            )
            console.log(request)
            this.error = request.message
        }
    },
    mounted() {
        let api = new ApiAdmin()
        let jwt = new Jwt()
        this.adm_fk = jwt.get().code
        const inputs = [
            new Input('novasenha', 'Nova senha', 'password', 2),
            new Input('repitasenha', 'Repita nova senha', 'password', 2),           
            new Button('Atualizar Senha'),
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
        <BreadCrumb text="Home" text2="Trocar Senha" />
        <div class="relative pt-6 pb-32 bg-[#fff]">
            <div class="px-4 md:px-6 mx-auto w-full">
                <div>
                    <div class="flex flex-wrap">

                        <div class="mx-auto w-full">
                            <div class="flex flex-wrap">
                                <div class="pb-8 w-full xl:w-8/12 px-2">
                                    <div class="relative flex flex-col min-w-0 break-words w-full mb-8 shadow-lg rounded-lg bg-white text-blueGray-700">
                                        <div class="px-6 py-4 border-0">
                                            <div class="flex flex-wrap items-center">
                                                <div class="relative w-full max-w-full flex-grow flex-1">
                                                    <h3 class="font-bold text-lg text-blueGray-700">Trocar Senha</h3>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="block w-full overflow-x-auto">
                                            <div class="mx-auto w-[90%] lg:w-[95%] pt-8">
                                                <form action="javascript:void(0)" method="POST" class="js-form grid grid-cols-4 gap-4" v-html="inputs" @submit="atualizar"></form>
                                                <div v-show="error">{{error}}</div>
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