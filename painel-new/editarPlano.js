import BreadCrumb from "../components/BreadCrumb.js"
import CardGeral from "../components/CardGeral.js"
import MyInstitution from "../components/myInstitution.js"
import ApiPlanos from "../components/apiPlanos.js"
import { Form, Input, Button } from "../components/Form.js";
import { getUriData, formataMoeda } from "../components/format.js"

export default {
    data: function () {
        return {
            error: null,
            inputs: "",
            formData: {
                price: null,
            }
        }
    },
    components: {
        BreadCrumb,
        CardGeral,
    },
    async mounted() {

        let institution = new MyInstitution()
        let Api = new ApiPlanos()

        this.inst_fk = institution.get()
        this.ID = getUriData('id')

        let request = await Api.info(this.ID)
        this.formData.price = request.payload.price

        this.renderForm()

    },
    methods: {
        renderForm() {
            const inputs = [
                new Input('price', 'Valor', 'text', 2, true),
                new Button('Atualizar'),
            ]
            const form = new Form(inputs)
            globalThis.Dados = this.formData
            this.inputs = form.render()
        },        
        async atualizar() {
            this.error = null
            let Api = new ApiPlanos()
            let request = await Api.update(
                this.ID,
                this.inst_fk,
                this.formData.price
            )
            this.error = request.message
            if(request.next) {
                window.location.href = "#/planos"
            }
           
        }
    },
    filters: {
        formataMoeda
    },
    template: `
    <div>
        <BreadCrumb text="Home" text2="Editar Plano" />
        <div class="relative pt-2 pb-32 bg-[#fff]">
          <div class="px-4 md:px-6 mx-auto w-full">
             <div>
                <div class="flex flex-wrap">                
                    <CardGeral text="Editar Plano" size="quatro">
                        <form class="js-form grid grid-cols-4 gap-4"  action="javascript:void(0)" method="POST" v-html="inputs" @submit="atualizar"></form>
                        <div v-show="error">{{error}}</div>
                    </CardGeral>
                </div>
             </div>
          </div>
       </div>
    
    </div>`,
}