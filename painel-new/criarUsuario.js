import Card from "../components/Card.js"
import Botao from "../components/Botao.js"
import BreadCrumb from "../components/BreadCrumb.js"
import CardCarteira from "../components/CardCarteira.js"
import CardGeral from "../components/CardGeral.js"
import Table from "../components/Table.js"
import MyInstitution from "../components/myInstitution.js"
import ApiPlanos from "../components/apiPlanos.js"
import actions from "../components/actions.js"
import ApiInstitution from "../components/apiInstitution.js"
import apiAdmin from "../components/apiAdmin.js"
import { Form, Input, Button, Text, Select, Option } from "../components/Form.js"
import ApiCredencial from "../components/apiCredencial.js"
import Jwt from "../components/jwt.js"

export default {
    data: function () {
        return {
            error: "",
            inputs: "",
            name: "",
            lastName: "",
            email: "",
            data: "",
            cpf: "",
            formData: {},
            transferencias: [],
            cols: {
                value: d => `${d.value}`,
                action: e => actions(`detalhe-doacao?id=${e.id}`, 'fa-solid fa-eye', 'blue')
            },
        }
    },
    components: {
        Botao,
        Card,
        BreadCrumb,
        CardCarteira,
        CardGeral,
        Table
    },
    async mounted() {

        let apiCred = new ApiCredencial()
        let allCredencial = await apiCred.listar()
        let arrCred = allCredencial.payload.map(c => new Option(c.id, c.nome_identificacao))
        this.formData.credencial = allCredencial.payload[0].id
        
        const inputs = [
            new Input('name', 'Nome', 'text', 2),
            new Input('email', 'Email', 'email', 2, true),
            new Input('phone', 'Telefone', 'text', 2),
            new Input('password', 'Senha', 'text', 2, true),
            new Select('credencial', "Credencial", 4, arrCred),
            new Button('Criar Usuário'),
        ]
        globalThis.Dados = this.formData
        const form = new Form(inputs)
        this.inputs = form.render()

    },
    methods: {
        adapter(listAll) {
            return listAll.map(d => ({
                ...d,
            }))
        },
        async atualizar() {
            let admin = new apiAdmin()
            let jwt = new Jwt()
            let adm_fk = jwt.get().code 
            let request = await admin.cadastrar_sub(
                this.formData.name,
                adm_fk,
                this.formData.email,
                this.formData.password,
                this.formData.phone,
                this.formData.credencial
            )
            this.error = request.message
            if(!request.next) {
                return
            }
            window.location.href = "#/usuarios"
           
        }
    },
    template: `
    <div>
        <BreadCrumb text="Home" text2="Criar Usuário" />
        <div class="relative pt-2 pb-32 bg-[#fff]">
            <div class="px-4 md:px-6 mx-auto w-full">
                <div>
                    <div class="flex flex-wrap">
                        <CardGeral text="Criar Usuário" size="quatro">
                            <form action="javascript:void(0)" action="POST" class="js-form grid grid-cols-4 gap-4"
                                v-html="inputs" @submit="atualizar"></form>
                            <div v-show="error">{{ error }}</div>
                        </CardGeral>
                    </div>
                </div>
            </div>
        </div>
    </div>`,
}