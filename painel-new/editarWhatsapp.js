import { Form, Input, Button, Text } from "../components/Form.js"
import BreadCrumb from "../components/BreadCrumb.js"
import CardGeral from "../components/CardGeral.js"
import Loader from "../components/Loader.js"
import ApiTemplateWhats from "../components/apiTemplateWhats.js"
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
            let api = new ApiTemplateWhats()
            let res = await api.salvar(
                this.formData.tipo,
                this.formData.inst_fk,
                this.formData.status,
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

        let api = new ApiTemplateWhats()
        let rest = await api.info(
            tipo,
            inst_fk,
            status
        )     

        let body = rest.payload.content
        
        this.formData.body = body
        this.formData.tipo = tipo
        this.formData.status = status
        this.formData.inst_fk = inst_fk

        const inputs = [
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
        <BreadCrumb text="Home" text2="Editar WhatsApp" />
        <div class="relative pt-2 pb-32 bg-[#fff]">
            <div class="px-4 md:px-6 mx-auto w-full">
                <div>
                    <div class="flex flex-wrap">
                        <CardGeral text="Editar WhatsApp" size="full">
                            <form action="javascript:void(0)" methods="POST" class="js-form grid grid-cols-4 gap-4" v-html="inputs" @submit="atualizar"></form>
                            <div v-show="error">{{error}}</div>
                        </CardGeral>
                    </div>
                </div>
            </div>
        </div>
    </div>`,
}