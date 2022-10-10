import Card  from "../components/Card.js"
import Botao  from "../components/Botao.js"
import BreadCrumb from "../components/BreadCrumb.js"
import CardCarteira from "../components/CardCarteira.js"
import CardGeral from "../components/CardGeral.js"
import Table from "../components/Table.js"
import MyInstitution from "../components/myInstitution.js"
import ApiPlanos from "../components/apiPlanos.js"
import actions from "../components/actions.js"
import { Form, Input, Button, Text, Select, Option } from "../components/Form.js";

export default {
    data: function() {
        return {
            inputs: "",
            formData: {
                price: "",
            },
            transferencias: [],
            cols: {
                value: d => `${d.value}`,
                action: e => actions(`editar-credencial?id=${e.id}`, 'fa-solid fa-eye', 'blue')
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
        let transferencias = new ApiPlanos()
        let institution = new MyInstitution()
        let request = await transferencias.listarPlanoDigital(institution.get())
        let requestTransform = request.payload
        if(request.next) {
            this.transferencias = this.adapter(requestTransform)

            console.log(requestTransform)
        }

        const inputs = [
            new Input('nome', 'Nome', 'text', 2),
            new Button('Atualizar'),
        ]
        globalThis.Dados = this.formData
        const form = new Form(inputs)
        this.inputs = form.render()

    },
    methods: {
        adapter( listAll ) {
            return listAll.map( d => ({
                value: d.price,
                ...d,  
            }) )
        },
        atualizar() {
            
            alert('tafarellll')
        }
    },
    template: `
    <div>
    
    
    <BreadCrumb text="Home" text2="Editar Credencial" />
    {{planos}}
    <div class="relative pt-2 pb-32 bg-[#fff]">
          <div class="px-4 md:px-6 mx-auto w-full">
             <div>
                <div class="flex flex-wrap">
                
                <CardGeral text="Editar Credencial" size="quatro">
                <form class="js-form grid grid-cols-4 gap-4" v-html="inputs" @submit="atualizar"></form>
                </CardGeral>
                
                
                </div>
             </div>
          </div>
       </div>
    
    </div>`,
}