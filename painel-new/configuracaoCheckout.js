import Card from "../components/Card.js"
import Botao from "../components/Botao.js"
import BreadCrumb from "../components/BreadCrumb.js"
import CardCarteira from "../components/CardCarteira.js"
import { Form, Input, Button, Text, Select, Option, Upload } from "../components/Form.js"
import CardGeral from "../components/CardGeral.js"
import ApiInstitution from "../components/apiInstitution.js"
import MyInstitution from "../components/myInstitution.js"
import config from "../config.js"
import Loader from "../components/Loader.js"

export default {
    data: function () {
        return {
            isLoad: 'true',
            inputs: "",
            scripts: "",
            lastName: "",
            email: "",
            data: "",
            cpf: "",
            message: null,
            formData: {
                name: "Bruno",
                showCep: 0
            }
        }
    },
    methods: {
        async atualizar() {
            this.isLoad = true
            this.message = null
            let api = new ApiInstitution()
            let inst = new MyInstitution()
            let inst_fk = inst.get()

            this.formData.institution_fk
            this.formData.nome
            this.formData.cpfCnpj

            this.formData.telefone
            this.formData.registro
            this.formData.visible
            this.formData.domain
            this.formData.subdomain
            this.formData.logo
            this.formData.icon
            this.formData.account
            this.formData.accountDigit
            this.formData.accountName
            this.formData.agency
            this.formData.bank
            this.formData.bankAccountType

            this.formData.endereco.tipo
            this.formData.endereco.nome

            let request = await api.update(
                inst_fk,
                this.formData.nome,
                this.formData.email,
                this.formData.telefone,
                this.formData.domain,
                this.formData.logo,
                this.formData.logo,
                this.formData.cor,
                this.formData.nome,
                this.formData.tags,
                'instituição',
                this.formData.endereco.cep,
                this.formData.endereco.logadouro,
                this.formData.endereco.numero,
                this.formData.endereco.complemento,
                this.formData.endereco.bairro,
                this.formData.endereco.cidade,
                this.formData.endereco.estado,
                this.formData.showCep
            )

            this.message = request.message

            this.isLoad = 'false'
        }
    },
    async mounted() {
        this.isLoad = 'true'
        let api = new ApiInstitution()
        let inst = new MyInstitution()
        let inst_fk = inst.get()
        this.base = config.path_api + '/upload/'

        this.formData = (await api.get(inst_fk)).payload

        console.log(this.formData)
        const inputs = [
            new Input('nome', 'Título do Site', 'text', 3),
            new Input('cor', 'Cor do Site', 'color', 1),
            new Text('tags', 'Scripts Javascript (Header)', 4, true),
            new Upload('logo'),
            new Select('showCep', 'Coleta de Endereço', 4, [
                new Option('0', 'Não'),
                new Option('1', 'Sim'),
            ], false, this.formData.showCep),
            new Button('Atualizar'),
        ]
        globalThis.Dados = this.formData
        const form = new Form(inputs)
        this.inputs = form.render()
        this.isLoad = 'false'
    },
    components: {
        Botao,
        Card,
        BreadCrumb,
        CardCarteira,
        CardGeral,
        Loader
    },
    template: `
    <div>
        <Loader :open="isLoad" />
        <BreadCrumb text="Home" text2="Configurações" />
        <div class="relative pt-2 pb-32 bg-[#fff]">
        <div class="px-4 md:px-6 mx-auto w-full">
            <div>
                <div class="flex flex-wrap">
                    <CardGeral text="Alterar Configurações do Site" size="cinco">
                    <img :src="formData.logo_uri ? formData.logo_uri : base + formData.logo" />
                    <div class="mx-auto w-[90%] lg:w-[95%] pt-8">
                        <form action="javascript:void(0)" method="POST" class="js-form grid grid-cols-4 gap-4"
                            v-html="inputs" @submit="atualizar"></form>
                        <div v-if="message" class="block rounded bg-[#0F5] text-center mt-4"> 
                        {{message}} 
                        </div>
                    </div>
                    <canvas width="20" height="20" style="display: block; box-sizing: border-box; height: 65px;"
                        id="line-chart"></canvas>
                    </CardGeral>
                </div>
            </div>
        </div>
        </div>
    </div>`,
}