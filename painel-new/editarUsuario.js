import Card  from "../components/Card.js"
import Botao  from "../components/Botao.js"
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

export default {
    data: function() {
        return {
            inputs: "",
            name: "",
            lastName: "",
            email: "",
            data: "",
            cpf: "",
            formData: {
                name: "John",
                lastName: "Hoffmann"
            },
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
        let admin = new apiAdmin()
        let institution = new MyInstitution()
        let apiinstituicao = new ApiInstitution()
        let request = await admin.list_all_subs(institution.get())
        let requestTransform = request.payload
        if(request.next) {
            console.log(requestTransform)

        }
        const inputs = [
            new Input('name', 'Nome', 'text', 2),
            new Input('email', 'Email', 'email', 2, true),
            new Input('phone', 'Telefone', 'text', 2),
            new Input('password', 'Senha', 'text', 2, true),
            new Select('credencial',"Credencial", 4, [
                new Option( '1', 'teste')
            ]),
            new Button('Atualizar Usuário'),
        ]
        globalThis.Dados = this.formData
        const form = new Form(inputs)
        this.inputs = form.render()

    },
    methods: {
        adapter( listAll ) {
            return listAll.map( d => ({
                ...d,  
            }) )
        },
        atualizar() {
            
            alert('tafarellll')
        }
    },
    template: `
    <div>
    
    
    <BreadCrumb text="Home" text2="Editar Usuário" />
    <div class="relative pt-2 pb-32 bg-[#fff]">
          <div class="px-4 md:px-6 mx-auto w-full">
             <div>
                <div class="flex flex-wrap">
                
                <CardGeral text="Editar Usuário" size="quatro">
                <form class="js-form grid grid-cols-4 gap-4" v-html="inputs" @submit="atualizar"></form> 
                </CardGeral>
                
                
                </div>
             </div>
          </div>
       </div>
    
    </div>`,
}