import Card  from "../components/Card.js"
import Botao  from "../components/Botao.js"
import BreadCrumb from "../components/BreadCrumb.js"
import CardCarteira from "../components/CardCarteira.js"
import Card2 from "../components/Card2.js"
import CardGeral from "../components/CardGeral.js"
import Loader from "../components/Loader.js"
import Bread from "../components/Bread.js"
import Aws from "../components/apiAws.js"
import MyInstitution from "../components/myInstitution.js"
import { Form, Input, Button, Text, Select, Option } from "../components/Form.js"
import ApiInstitution from "../components/apiInstitution.js"

export default {
    data: function() {
        return {
            isLoad: 'true',
            inputs: "",
            message: null,
            resAws: null,
            formData: {
                email: null
            },
            color: {
                Pending: "bg-[#05f]",
                Success: "bg-[#080]",
                Failed: "bg-[#c00]",
            },
            isColor: 'bg-[#CCC]'
        }
    },
    components: {
        Botao,
        Card,
        Card2,
        BreadCrumb,
        Bread,
        CardCarteira,
        CardGeral,
        Loader
    },
    async mounted() {
        this.isLoad = 'true'       

        let institution = new MyInstitution()
        let thisInstitution = new ApiInstitution()
        let request = await thisInstitution.get(institution.get())

        this.mailActive = request.payload.mailActive
        this.mailSender = request.payload.mailSender

        this.formData.email = this.mailSender

        const inputs = []

        if(this.mailActive == 1) {
            inputs.push( new Input('email', 'Email', 'email', 4, true, '', true))            
            inputs.push( new Button('Email já configurado', true))
            let aws = new Aws()
            this.resAws = await aws.status(this.mailSender)
            this.status = this.resAws.payload.VerificationStatus
            this.isColor = this.color[this.status]
            
        }else {            
            inputs.push( new Input('email', 'Email', 'email', 4, true))            
            inputs.push( new Button('Configurar Whats'))
        }
        
        globalThis.Dados = this.formData
        const form = new Form(inputs)
        this.inputs = form.render()
        this.isLoad = 'false'

    },
    methods: {
        async atualizar() {
            this.message = null
            let inst = new MyInstitution()
            let inst_fk = inst.get()
            let email = this.formData.email
            let aws = new Aws()
            let res = await aws.registrar(inst_fk, email)
            
            this.message = res.message
        }
    }, 
    template: `
    <div>
    <Loader :open="isLoad" />
        
    <Bread :steps="[
        ['Home','#/dashboard'],
        ['Mensageria','#/mensageria'],
        ['Configuração Whats','#/configuracao-whats'],
    ]" 
    />

    <div class="relative pt-2 pb-32 bg-[#fff]">
          <div class="px-4 md:px-6 mx-auto w-full">
             <div>
                <div class="flex flex-wrap">
                
                <CardGeral text="Configuração Disparo Whats" size="cinco">
                <span :class="'block w-full text-center mb-4 text-white rounded ' + isColor + ' p-2'"> o whats se encontra com status <b>{{status}}</b> </span>
                <form action="javascript:void(0)" methods="POST" class="js-form grid grid-cols-4 gap-4" v-html="inputs" @submit="atualizar"></form>   
                <div v-show="message">{{message}}</div>
                </CardGeral>
            
               
                        
                </div>
             </div>
          </div>
       </div>
    
    </div>`,
}