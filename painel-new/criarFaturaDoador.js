import Table from "../components/Table.js"
import BreadCrumb from "../components/BreadCrumb.js"
import CardGeral from "../components/CardGeral.js"
import ApiDoadores from "../components/apiDoadores.js"
import ApiDoacoes from "../components/apiDoacoes.js"
import MyInstitution from "../components/myInstitution.js"
import status from "../components/status.js"
import { getUriData, data, formataMoeda, copy } from "../components/format.js"
import actions from "../components/actions.js"
import HeaderDoador from "../components/HeaderDoador.js"
import { cpf, tel, cep } from "../components/mask.js"
import { Form, Input, Button, Text, Select, Option } from "../components/Form.js"
import HeaderAlt from "../components/HeaderAlt.js"
import ApiInstitution from "../components/apiInstitution.js"

export default {
    data: function () {
        return {
            totalFaturas: 0,
            info: {
                address: { bairro: null }
            },
            info_inst: {},
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
                valor: "",
                data: "",
                tipo: "all",
                recorrencia: "sim",
                doador: "",
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
        HeaderDoador,
        HeaderAlt
    },
    async mounted() {

        this.renderForm()
        //
        let ID = getUriData('id')
        let institution = new MyInstitution()
        let inst = new ApiInstitution()
        let doador = new ApiDoadores()
        let request = await doador.detalhe(ID)
        let formatRequestDoador = request.payload
        let fkDoador = formatRequestDoador.fk
        //  
        let donations = new ApiDoacoes()
        let requestDoacao = await donations.lista(institution.get())
        let formatRequest = Object.values(requestDoacao)
        let minRequest = formatRequest[2]
        const ids = minRequest.filter(p => p.doador_fk === ID)
        this.formData.doador = ID

        this.info_inst = await inst.get(institution.get())

        if (request.next) {
            this.info = formatRequestDoador
            this.donations = this.adapter(ids)
            this.fkDoador = fkDoador
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
        copyPix() {
            copy(this.$refs.codePix)
        },
        cpf,
        tel,
        cep,
        formData: data,
        renderForm() {
            const inputs = [
                new Input('valor', 'Valor', 'text', 1, true),
                new Input('data', 'Data Vencimento', 'date', 1, true),
                new Select('tipo', 'Forma de Pagamento', 1, [
                    new Option('all', 'Todos'),
                    new Option('credit', 'Crédito'),
                    new Option('pix', 'PIX'),
                    new Option('boleto', 'Boleto'),
                ]),
                new Select('recorrencia', 'Recorrente', 1, [
                    new Option('sim', 'Sim'),
                    new Option('nao', 'Não'),
                ]),
                // new Button('Enviar'),
            ]
            globalThis.Dados = this.formData
            const form = new Form(inputs)
            this.inputs = form.render()
        },
        convertUrl(payload) {
            let base = (this.info_inst?.payload?.domain || this.info_inst?.payload?.subdomain)
            payload.valor = payload.valor ? payload.valor +'' : ''
            payload.valor = (payload.valor.replace(',','.'))
            let keys = Object.keys(payload)
            let url = keys.map(e => `${e}=${payload[e]}`).join('&')
            return `https://${base || ''}/fatura/#/?${url}`

        }
    },
    template: `
    <div>
    
        <BreadCrumb text="Home" text2="Criar Fatura Doador" />
        <HeaderAlt :recorrente="info.recorrente" :name="info.nome" :faturas="totalFaturas" :gravatar="info.gravatar" :ID="fkDoador"/>
 
        <CardGeral text="Criar Fatura" size="seis" value="">
            <form class="js-form grid grid-cols-4 gap-4" v-html="inputs" @submit="gerarLink"></form>
            <div class="w-full flex flex-col mt-8 space-y-3 sm:-mx-2 sm:flex-row sm:justify-center sm:space-y-0">
                <input ref="codePix" type="text" class="px-6 py-3 text-700 bg-white border rounded-md text-300 border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:border-blue-300 focus:outline-none focus:ring sm:mx-2 w-[70%]" :value="(convertUrl(formData))" />
                <button @click="copyPix" class="px-8 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-md hover:bg-blue-600 focus:bg-blue-600 focus:outline-none sm:mx-2">
                    COPIAR CÓDIGO
                </button>
            </div>
            <a :href="convertUrl(formData)" target="_blank">
                Clique aqui para visualizar
            </a>
        </CardGeral>

    </div>`,
}

