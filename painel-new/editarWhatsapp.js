import { Form, Input, Button, Text } from "../components/Form.js"
import BreadCrumb from "../components/BreadCrumb.js"
import CardGeral from "../components/CardGeral.js"
import Loader from "../components/Loader.js"
import ApiTemplateEmails from "../components/apiTemplateEmails.js"
import { getUriData } from "../components/format.js"
import MyInstitution from "../components/myInstitution.js"


export default {
    data: function () {
        return {
            isLoad: 'true',
            error: null,
            inputs: "",
            formData: {
                body: '',
                assunto: '',
                tipo: '',
                status: '',
                inst_fk: '',
            }
        }
    },
    methods: {
        async atualizar() {
            this.isLoad = 'true'
            let api = new ApiTemplateEmails()
            let res = await api.salvarEmail(
                this.formData.tipo,
                this.formData.inst_fk,
                this.formData.status,
                this.formData.assunto,
                this.formData.body
            )
            this.error = res.message
            this.isLoad = 'false'
        }
    },
    async mounted() {
        this.isLoad = 'true'

        let institution = new MyInstitution()
        let inst_fk = institution.get()

        let tipo = getUriData('tipo')
        let status = getUriData('status')

        let api = new ApiTemplateEmails()
        let rest = await api.info(
            tipo,
            inst_fk,
            status
        )     

        let assunto = rest.payload.assunto
        let body = rest.payload.content
        
        this.formData.body = body
        this.formData.assunto = assunto
        this.formData.tipo = tipo
        this.formData.status = status
        this.formData.inst_fk = inst_fk

        const inputs = [
            new Input('assunto', 'Assunto', 'text', 4, true),
            new Text('body', 'Conteúdo', 7, true),
            new Button('Salvar'),
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
    template: `
    <div>
        <Loader :open="isLoad" />
        <BreadCrumb text="Home" text2="Editar E-mail" />
        <div class="relative pt-2 pb-32 bg-[#fff]">
            <div class="px-4 md:px-6 mx-auto w-full">
                <div>
                    <div class="flex flex-wrap">
                        <CardGeral text="Editar E-mail" size="full">
                            <form action="javascript:void(0)" methods="POST" class="js-form grid grid-cols-4 gap-4" v-html="inputs" @submit="atualizar"></form>
                            <div v-show="error">{{error}}</div>
                        </CardGeral>
                    </div>
                </div>
            </div>
        </div>
    </div>`,
}