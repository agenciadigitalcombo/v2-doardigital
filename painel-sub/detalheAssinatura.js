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
import ApiDoadores from "../components/apiDoadores.js"
import Popup from "../components/popup.js"
import Loader from "../components/Loader.js"

export default {
    data: function () {
        return {
            isLoad: 'true',
            customer: null,
            assinatura_open: [],
            inputs: "",
            name: "",
            lastName: "",
            email: "",
            data: "",
            cpf: "",
            id_sub: "",
            fk_inst: "",
            fk_doador: "",
            formData: {
                data: "",
                numero: "",
                tipo: "",
            },
            error: null,
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
        Botao,
        Loader,
        Popup,
    },
    async mounted() {

        this.isLoad = 'true'

        let institution = new MyInstitution()
        let doador = new ApiDoadores()

        let id_sub = getUriData('sub_id')
        let fk_doador = getUriData('doador_fk')
        let fk_inst = institution.get()

        this.id_sub = id_sub
        this.fk_inst = fk_inst
        this.fk_doador = fk_doador

        let request = await doador.detalhe(fk_doador)
        let formatRequestDoador = request.payload
        let fkDoador = formatRequestDoador.fk

        

        let sub_info = formatRequestDoador.subs.find(s => s.id == id_sub)

        let assinatura_open = formatRequestDoador.history.filter( i => {
            return i.external_fk == sub_info.externalReference && i.status_pagamento == "PENDING"
        } )
        this.assinatura_open = assinatura_open
        this.customer = formatRequestDoador.asa.id

        this.info.doador_nome = formatRequestDoador.nome
        this.info.status_pagamento = sub_info.status
        this.info.tipo_pagamento = sub_info.billingType
        this.info.valor = sub_info.value
        this.info.data = sub_info.dateCreated
        this.info.proxima = sub_info.nextDueDate

        this.formData.data = this.info.proxima
        this.formData.numero = this.info.valor
        this.formData.tipo = this.info.tipo_pagamento
        this.fkDoador = fkDoador
        

        const inputs = [
            new Input('data', 'Vencimento', 'date', 2, true),
            new Input('numero', 'Valor', 'text', 2, true),
            new Select('tipo', 'Tipo', 2, [
                new Option('BOLETO', 'Boleto'),
                new Option('PIX', 'Pix'),
            ], true, sub_info.billingType),
            new Button('Modificar'),
        ]

        globalThis.Dados = this.formData
        const form = new Form(inputs)
        this.inputs = form.render()

        this.isLoad = 'false'


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
        popConfirm() {
            this.cancelar()
        },
        formataMoeda,
        formatData: data,
        formatRecorrente,
        copyPix() {
            copy(this.$refs.codePix)
        },
        status,
        async cancelar() {
            this.error = null
            let api = new ApiDoacoes()
            let request = await api.sub_cancel(this.fk_inst, this.id_sub)
            if( request.next ) {
                window.location.href  = `#/detalhe-doador?id=${this.fkDoador}`
            }else {
                this.error = request.message
            }
        },
        async atualizar() {
            this.error = null
            let api = new ApiDoacoes()            
            let request = await api.sub_update(
                this.fk_inst, 
                this.id_sub, 
                this.formData.tipo,
                this.formData.numero,
                this.formData.data
            )
            if( !request.next ) {
                this.error = request.message
                return
            }

            this.assinatura_open.forEach( async i => {
                let request = await api.fatura_update(
                    this.fk_inst,
                    i.fatura_id,
                    this.formData.numero,
                    this.formData.tipo,
                    i.data,
                    this.customer 
                )
                if( !request.next ) {
                    this.error = request.message
                    return
                }
            });
            window.location.href  = `#/detalhe-doador?id=${this.fkDoador}`
        },
    },
    template: `
    <div>
   
    <BreadCrumb text="Home" text2="Detalhe Assinatura" />
   
    <Loader :open="isLoad" />   
    <div class="relative pt-2 pb-32 bg-[#fff]">
          <div class="px-4 md:px-6 mx-auto w-full">
             <div>
                <div class="flex flex-wrap">

                <CardGeral text="Detalhe da Assinatura" size="quatro">
                    <h2 class="text-gray-500">Nome:</h2>                    
                    <router-link :to="'detalhe-doador?id='+this.fkDoador" > 
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
                    <p>{{ formatData( info.data ) }} </p>
                    <br>
                    <h2 class="text-gray-500">Próxima Cobrança em:</h2>
                    <p>{{ formatData( info.proxima ) }} </p>
                    <br><br>

                    <div 
                        class="cursor-not-allowed border-2 border-[#C00] text-[#C00] w-[230px] font-bold rounded text-center py-2"
                        v-show="info.status_pagamento == 'INACTIVE'" >
                        ASSINATURA CANCELADA
                    </div>

                    <div v-show="info.status_pagamento != 'INACTIVE'" >
                        <Popup                         
                            title="Cancelar Assinatura"
                            description="Você deseja realmente cancelar a assinatura?"
                            text_close="Não"
                            text_submit="Sim"
                            text_btn="Cancelar assinatura"
                            color="red"
                            @submit="popConfirm"
                            />
                    </div>
                    
                </CardGeral>
                <CardGeral text="Modificar Assinatura" size="quatro">
                <p>Os dados modificados serão referente a fatura mais recente. Demais faturas serão criadas com a mesma regra.</p>
                <br>
                <form action="javascript:void(0)" method="POST" class="js-form grid grid-cols-4 gap-4" v-html="inputs" @submit="atualizar"></form>
                
                <p v-show="error">{{error}}</p>
                
                <br><br>
                
                </CardGeral>
                
               
                

    </div>`,
}


