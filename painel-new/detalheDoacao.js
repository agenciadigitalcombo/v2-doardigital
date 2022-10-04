import Table from "../components/Table.js"
import BreadCrumb from "../components/BreadCrumb.js"
import Card from "../components/Card.js"
import CardCarteira from "../components/CardCarteira.js"
import CardGeral from "../components/CardGeral.js"
import MyInstitution from "../components/myInstitution.js"
import ApiDoacoes from "../components/apiDoacoes.js"
import { getUriData, formataMoeda, data, formatRecorrente, copy, taxas } from "../components/format.js"
import status from "../components/status.js"
import actions from "../components/actions.js"
import Institution from "../components/apiInstitution.js"
import { Form, Input, Button, Text, Select, Option } from "../components/Form.js";

export default {
    data: function () {
        return {
            error: null,
            inputs: "",
            id_fatura: null,
            fk_inst: null,
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
            formData: {
                data: null,
                numero: null,
                tipo: null,
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
    },
    async mounted() {
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
        
        console.log(this.info)

        this.id_fatura = ID
        this.fk_inst = institution.get()

        this.formData.data = this.info.data
        this.formData.numero = this.info.valor
        this.formData.tipo = this.info.tipo_pagamento

        this.renderForm()

    },
    methods: {
        adapter(listAll) {
            return listAll.map(d => ({
                value: this.formataMoeda(d.valor),
                id: d.fatura_id,
                tipo: d.tipo_pagamento,
                ...d,
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
        renderForm() {
            const inputs = [
                new Input('data', 'Vencimento', 'date', 2, true),
                new Input('numero', 'Valor', 'text', 2, true),
                new Select('tipo', 'Tipo', 2, [
                    new Option('BOLETO', 'Boleto'),
                    new Option('PIX', 'Pix'),
                ], true, this.info.tipo_pagamento),
                new Button('Modificar'),
            ]
            globalThis.Dados = this.formData
            const form = new Form(inputs)
            this.inputs = form.render()
        },
        atualizar() {
            // this.error = null
            // let api = new ApiDoacoes()
            // let request = await api.sub_update(
            //     this.fk_inst,
            //     this.id_fatura,
            //     this.formData.tipo,
            //     this.formData.numero,
            //     this.formData.data
            // )
            // if (request.next) {
            //     window.location.href = `#/detalhe-doador?id=${this.fkDoador}`
            // } else {
            //     this.error = request.message
            // }
        }
    },
    template: `
    <div>
    <BreadCrumb text="Home" text2="Detalhe Doação" />
   
       
    <div class="relative pt-2 pb-32 bg-[#fff]">
          <div class="px-4 md:px-6 mx-auto w-full">
             <div>
                <div class="flex flex-wrap">

                <CardGeral text="Detalhe da Doação" size="quatro">
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
                    <br>
                    <br>
                    <h2 class="text-gray-500">Data:</h2>
                    <p>{{ formatData( info.data ) }}  - {{info.hora}}</p>
                    <br>
                    <h2 class="text-gray-500">Valor</h2>
                    <p>{{ formataMoeda( info.valor ) }}</p>
                    <br>
                    <h2 class="text-gray-500">Recorrente</h2>
                    <p>{{ formatRecorrente( info.recorrente ) }}</p>
                    <br>
                    
                </CardGeral>
                
                <CardGeral text="Código Pix / Boleto" size="quatro" v-show="info.tipo_pagamento!='CREDIT_CARD'" >
                    <div v-show="info.tipo_pagamento === 'BOLETO' || info.tipo_pagamento === 'PIX'" class="flex flex-col mt-8 space-y-3 sm:-mx-2 sm:flex-row sm:justify-center sm:space-y-0">
                        <input ref="codePix" id="email" type="text" class="px-6 py-3 text-700 bg-white border rounded-md text-300 border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:border-blue-300 focus:outline-none focus:ring sm:mx-2" :value="info.codigo" />
                        <button @click="copyPix" class="px-8 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-md hover:bg-blue-600 focus:bg-blue-600 focus:outline-none sm:mx-2">
                            COPIAR CÓDIGO
                        </button>
                    </div>
                    <div v-show="info.tipo_pagamento === 'BOLETO'" class="flex flex-col mt-8 space-y-3 sm:-mx-2 sm:flex-row sm:justify-center sm:space-y-0">
                        <input ref="codePix" id="email" type="text" class="px-6 py-3 text-700 bg-white border rounded-md text-300 border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:border-blue-300 focus:outline-none focus:ring sm:mx-2" :value="info.url" />
                        <button @click="copyPix" class="px-8 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-md hover:bg-blue-600 focus:bg-blue-600 focus:outline-none sm:mx-2">
                            COPIAR LINK
                        </button>
                    </div>
                </CardGeral>

                <CardGeral text="Modificar Fatura" size="quatro">
                    <p>Os dados modificados serão referente a fatura mais recente. Demais faturas serão criadas com a mesma regra.</p>
                    <br>
                    <form action="javascript:void(0)" method="POST" class="js-form grid grid-cols-4 gap-4" v-html="inputs" @submit="atualizar"></form>
                    <p v-show="error">{{error}}</p>                
                    <br><br>                
                </CardGeral>
                
                <CardGeral text="Detalhe da Transação" size="sete">
                    <Table :rows="donations" :cols="cols"/>
                </CardGeral>
                
                
                
                
               

       

    </div>`,
}

