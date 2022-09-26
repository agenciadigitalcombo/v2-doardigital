import Table from "../components/Table.js"
import BreadCrumb from "../components/BreadCrumb.js"
import Card from "../components/Card.js"
import CardCarteira from "../components/CardCarteira.js"
import CardGeral from "../components/CardGeral.js"
import MyInstitution from "../components/myInstitution.js"
import ApiDoacoes from "../components/apiDoacoes.js"
import Botao from "../components/Botao.js"
import { getUriData, formataMoeda, data, formatRecorrente, copy, taxas } from "../components/format.js"
import status from "../components/status.js"
import actions from "../components/actions.js"
import Institution from "../components/apiInstitution.js"
import { Form, Input, Button, Text, Select, Option } from "../components/Form.js";

export default {
    data: function () {
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
            info: {
                doador_nome: null,
                status_pagamento: null,
                tipo_pagamento: null,
                data: '0000-00-00',
                hora: null,
                value: null,
                recorrente: null,
                codigo: null,
                split: 4,
            },
            donations: [],
            cols: {
                tipo: t => `<span class="bg-white text-grey-600 py-1 px-3 rounded-full text-xs">
                ${t.tipo}
                </span>`,
                "Valor": d => `${d.value}`,
                "Taxa Doar Digital": t => formataMoeda(t.doar),
                "Taxa Gateway": t => formataMoeda(t.fix),
                "Valor liquido": t => formataMoeda(t.liquid),
            },
        }
    },
    components: {
        Table,
        BreadCrumb,
        Card,
        CardCarteira,
        CardGeral,
        Botao
    },
    async mounted() {
        const inputs = [
            new Input('data', 'Vencimento', 'date', 2, true),
            new Input('numero', 'Valor', 'text', 2, true),
            new Select('status', 'Tipo', 2, [
                new Option('0', 'Boleto'),
                new Option('1', 'Pix'),
            ]),
            new Button('Modificar'),
        ]
        globalThis.Dados = this.formData
        const form = new Form(inputs)
        this.inputs = form.render()
        //
        let ID = getUriData('id')        
        let institution = new MyInstitution()
        let donations = new ApiDoacoes()
        let inst = new Institution()
        let requestInfoInst = await inst.get(institution.get())
        this.split = +requestInfoInst.payload.split.porcentagem
        let request = await donations.lista(institution.get())
        let minRequest = request.payload
        this.info = minRequest.find(p => p.fatura_id === ID) 
        this.donations.push(this.info)        
        this.donations = this.adapter(this.donations)      
        
    },
    methods: {
        adapter(listAll) {
            return listAll.map(d => ({
                value: this.formataMoeda(d.valor),
                id: d.fatura_id,
                tipo: d.tipo_pagamento,
                ... d,
                ...taxas(d.valor, d.tipo_pagamento, this.split)
            }))
        },
        formataMoeda,
        formatData: data,
        formatRecorrente,
        copyPix() {
            copy(this.$refs.codePix)            
        },
        status,
    },
    template: `
    <div>
    {{info}}
    <BreadCrumb text="Home" text2="Detalhe Assinatura" />
   
       
    <div class="relative pt-2 pb-32 bg-[#fff]">
          <div class="px-4 md:px-6 mx-auto w-full">
             <div>
                <div class="flex flex-wrap">

                <CardGeral text="Detalhe da Assinatura" size="quatro">
                    <h2 class="text-gray-500">Nome:</h2>                    
                    <router-link :to="'detalhe-doador?id='+info.doador_fk" > 
                        <p>{{info.doador_nome}}</p>
                    </router-link >
                    <br>
                    <h2 class="text-gray-500">Status</h2>
                        <span v-html=" status(info.status_pagamento )"></span>
                    <br>    
                    <br>
                    <h2 class="text-gray-500">Tipo:</h2>
                        <span class="bg-gray-200 text-gray-600 py-1 px-3 rounded-full text-xs">
                        {{info.tipo_pagamento}}
                        </span>
                    <br><br>
                    <h2 class="text-gray-500">Valor</h2>
                    <p>{{ formataMoeda( info.valor ) }}</p>
                    <br>
                    <h2 class="text-gray-500">Iniciado em:</h2>
                    <p>{{ formatData( info.data ) }}  - {{info.hora}}</p>
                    <br>
                    <h2 class="text-gray-500">Próxima Cobrança em:</h2>
                    <p>{{ formatData( info.data ) }}  - {{info.hora}}</p>
                    <br>
                    
                    
                </CardGeral>
                <CardGeral text="Modificar Assinatura" size="quatro">
                <p>Os dados modificados serão referente a fatura mais recente. Demais faturas serão criadas com a mesma regra.</p>
                <br>
                <form class="js-form grid grid-cols-4 gap-4" v-html="inputs" @submit="atualizar"></form>
                <br><br>
                
                </CardGeral>
                
                <Botao text="Cancelar Assinatura" variation="red" />
                
                
                
               

       

    </div>`,
}

