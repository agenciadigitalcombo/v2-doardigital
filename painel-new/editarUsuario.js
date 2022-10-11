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
import { Form, Input, Button, Text, Select, Option, Check } from "../components/Form.js"
import { getUriData, data, formataMoeda, formatRecorrente } from "../components/format.js"
import Jwt from "../components/jwt.js"

export default {
    data: function() {
        return {
            inputs: "",
            name: "",
            lastName: "",
            email: "",
            data: "",
            cpf: "",
            inputsAnotacoes: "",
            lista: [],
            listaInst: [],
            formData: {
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
        let ID = getUriData('id')
        this.ID =  ID
        let admin = new apiAdmin()
        let Inst = new ApiInstitution()
        let jwt = new Jwt()
        let adm_fk = jwt.get().code
        let requestInst = await Inst.list(adm_fk)
        let request = await admin.list_all_subs(adm_fk)
        let lista = request.payload
        let ids = lista.filter(p => p.code === ID)
        let transformIds = ids[0]

        this.formData.name = transformIds.nome
        this.formData.email = transformIds.email
        this.formData.phone = transformIds.telefone

        

        if(request.next) {
            this.renderInst()
            console.log(transformIds)
            console.log(requestInst)


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
        renderInst() {
            const inputsAnotacoes = [
                new Text('mensagem', 'Mensagem', 4, true),
                new Button('Criar Anotação'),
            ]
            const formAnotacoes = new Form(inputsAnotacoes)
            this.inputsAnotacoes = formAnotacoes.render()
        },
        adapter( listAll ) {
            return listAll.map( d => ({
                ...d,  
            }) )
        },
        adapter(listAll) {
            return listAll.map(d => ({
                ...d,
            }))
        },
        atualizar() {
            
            alert('tafarellll')
        }
    },
    template: `
    <div>
    {{listaInst}}
    
    <BreadCrumb text="Home" text2="Editar Usuário" />
    {{Ids}}
    <div class="relative pt-2 pb-32 bg-[#fff]">
          <div class="px-4 md:px-6 mx-auto w-full">
             <div>
                <div class="flex flex-wrap">
                
                <CardGeral text="Editar Usuário" size="quatro">
                <form class="js-form grid grid-cols-4 gap-4" v-html="inputs" @submit="atualizar"></form> 
                </CardGeral>

                <CardGeral text="Acessos" size="quatro">
                <form class="js-form grid grid-cols-4 gap-4" v-html="inputsAnotacoes" @submit="atualizar"></form> 
                </CardGeral>
                
                
                </div>
             </div>
          </div>
       </div>
    
    </div>`,
}