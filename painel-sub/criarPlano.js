import Card from "../components/Card.js"
import Botao from "../components/Botao.js"
import BreadCrumb from "../components/BreadCrumb.js"
import CardCarteira from "../components/CardCarteira.js"
import CardGeral from "../components/CardGeral.js"
import Table from "../components/Table.js"
import MyInstitution from "../components/myInstitution.js"
import ApiPlanos from "../components/apiPlanos.js"
import actions from "../components/actions.js"
import { Form, Input, Button } from "../components/Form.js";

export default {
    data: function () {
        return {
            inputs: "",
            inst_fk: "",
            error: null,
            formData: {
                price: "",
            },
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
        let institution = new MyInstitution()
        this.inst_fk = institution.get()
        const inputs = [
            new Input('price', 'Valor', 'text', 2),
            new Button('Criar'),
        ]
        globalThis.Dados = this.formData
        const form = new Form(inputs)
        this.inputs = form.render()
    },
    methods: {
        async save() {
            this.error = null
            let Api = new ApiPlanos()
            let request = await Api.criar(
                this.inst_fk,
                this.formData.price
            )
            this.error = request.message
            if (request.next) {
                window.location.href = "#/planos"
            }
        }
    },
    template: `
    <div>
        <BreadCrumb text="Home" text2="Criar Planos" />
        <div class="relative pt-2 pb-32 bg-[#fff]">
          <div class="px-4 md:px-6 mx-auto w-full">
             <div>
                <div class="flex flex-wrap">                
                    <CardGeral text="Criar Plano" size="quatro">
                        <form class="js-form grid grid-cols-4 gap-4" action="javascript:void(0)" method="POST" v-html="inputs" @submit="save"></form>
                        <div v-show="error">{{error}}</div>
                    </CardGeral>
                </div>
             </div>
          </div>
       </div>    
    </div>`,
}