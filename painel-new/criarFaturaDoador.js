import Table from "../components/Table.js"
import BreadCrumb from "../components/BreadCrumb.js"
import CardGeral from "../components/CardGeral.js"
import ApiDoadores from "../components/apiDoadores.js"
import ApiDoacoes from "../components/apiDoacoes.js"
import MyInstitution from "../components/myInstitution.js"
import status from "../components/status.js"
import { getUriData, data, formataMoeda } from "../components/format.js"
import actions from "../components/actions.js"
import HeaderDoador from "../components/HeaderDoador.js"
import { cpf, tel, cep } from "../components/mask.js"
import { Form, Input, Button, Text, Select, Option } from "../components/Form.js";

export default {
    data: function () {
        return {
            totalFaturas: 0,
            info: {
                address: { bairro: null }
            },
            donations: [],
            assinaturas: [],
            cols: {
                data: d => `${d.datas}`,
                "valor": d => `${d.value}`,
                status: t => status(t.status),
                tipo: t => `<span class="bg-white text-grey-600 py-1 px-3 rounded-full text-xs">
                ${t.tipo}
                </span>`,
                "Ação": e => actions(`detalhe-doacao?id=${e.id}`, 'fa-solid fa-eye', 'blue')
            },
            colsSub: {

            },
            inputs: "",
            name: "",
            lastName: "",
            email: "",
            data: "",
            cpf: "",
            formData: {
                name: "John",
                lastName: "Hoffmann"
            }

        }
    },
    filters: {
        formataMoeda
    },
    components: {
        Table,
        BreadCrumb,
        CardGeral,
        HeaderDoador
    },
    async mounted() {
        const inputs = [
            new Input('valor', 'Valor', 'text', 1, true),
            new Input('data', 'Data Vencimento', 'date', 1, true),
            new Select('tipo', 'Tipo', 1, [
                new Option('1', 'PIX'),
                new Option('0', 'Boleto'),
            ]),
            new Select('recorrencia', 'Recorrente', 1, [
                new Option('1', 'Sim'),
                new Option('0', 'Não'),
            ]),
            new Button('Enviar'),
        ]
        globalThis.Dados = this.formData
        const form = new Form(inputs)
        this.inputs = form.render()
        //
        let ID = getUriData('id')
        let institution = new MyInstitution()
        let doador = new ApiDoadores()
        let request = await doador.detalhe(ID)
        let formatRequestDoador = request.payload
        //  
        let donations = new ApiDoacoes()
        let requestDoacao = await donations.lista(institution.get())
        let formatRequest = Object.values(requestDoacao)
        let minRequest = formatRequest[2]
        const ids = minRequest.filter(p => p.doador_fk === ID)




        if (request.next) {
            this.info = formatRequestDoador
            this.donations = this.adapter(ids)
            console.log(formatRequestDoador)
        }
        this.totalFaturas = this.donations.length
    },

    methods: {
        adapter(listAll) {
            return listAll.map(d => ({
                name: d.doador_nome,
                email: d.doador_email,
                datas: data(d.data),
                value: formataMoeda(d.valor),
                status: d.status_pagamento,
                tipo: d.tipo_pagamento,
                id: d.fatura_id,
                ...d,
            }))

        },
        cpf,
        tel,
        cep,
        formData: data,
    },
    template: `
    <div>
    <BreadCrumb text="Home" text2="Criar Fatura Doador" />
    <HeaderDoador :recorrente="info.recorrente" :name="info.nome" :faturas="totalFaturas" :gravatar="info.gravatar" />
       

    <div class="relative pt-2 pb-32 bg-[#fff]">
          <div class="px-4 md:px-6 mx-auto w-full">
             <div>
                <div class="flex flex-wrap">
                <CardGeral text="Criar Fatura" size="seis" value="">
                    <form class="js-form grid grid-cols-4 gap-4" v-html="inputs" @submit="atualizar"></form>
                </CardGeral>

                
                
               

       

    </div>`,
}

