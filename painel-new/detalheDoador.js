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
import Anotacao from "../components/Anotacao.js"

export default {
    data: function () {
        return {
            totalFaturas: 0,
            info: {
                address: { bairro: null },
                payload: { notes: { message: null }}
            },
            totalAnotacoes: [],
            donations: [],
            assinaturas: [],
            subs: [],
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
                "Data": s => s.dateCreated,
                "Valor": s => s.value,
                "Tipo": s => `<span class="bg-white text-grey-600 py-1 px-3 rounded-full text-xs">
                ${s.type}
                </span>`,
                "Status": s => s.status,
                "Ação": s => actions(`detalhe-assinatura?sub_id=${s.id}&doador_fk=${this.ID}`, 'fa-solid fa-eye', 'blue'),
            },
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
        Anotacao
    },
    async mounted() {
        let ID = getUriData('id')
        this.ID =  ID
        let institution = new MyInstitution()
        let doador = new ApiDoadores()
        let request = await doador.detalhe(ID)
        let formatRequestDoador = request.payload

        let donations = new ApiDoacoes()
        let requestDoacao = await donations.lista(institution.get())
        let formatRequest = Object.values(requestDoacao)
        let minRequest = formatRequest[2]
        const ids = minRequest.filter(p => p.doador_fk === ID)

        if (request.next) {
            this.info = formatRequestDoador
            this.donations = this.adapter(ids)
            this.subs = request.payload.subs.map( s => ({
                dateCreated: data(s.dateCreated),
                id: s.id,
                status: s.status,
                value: formataMoeda(s.value),
                type: s.billingType,
            }) )
        }
        this.numeroAssinatura = request.payload.subs.length
        this.totalFaturas = this.donations.length
        this.totalAnotacoes = formatRequestDoador.payload?.notes?.reverse()
        this.numeroAnotacoes = request.payload.payload?.notes?.length || 0
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
    <BreadCrumb text="Home" text2="Detalhe Doador" />
    <HeaderDoador :anotacoes="numeroAnotacoes" :assinaturas="numeroAssinatura" :recorrente="info.recorrente" :name="info.nome" :faturas="totalFaturas" :gravatar="info.gravatar" :ID="ID" />
       

    <div class="relative pt-2 pb-32 bg-[#fff]">
          <div class="px-4 md:px-6 mx-auto w-full">
             <div>
                <div class="flex flex-wrap">
                <CardGeral text="Dados do Doador" size="tres" value="">
                    <h2 class="text-gray-500">Email:</h2>
                    <p>{{info.email}}</p>
                    <br>
                    <h2 class="text-gray-500">Telefone:</h2>
                    <p>{{tel(info.telefone)}}</p>
                    <br>
                    <h2 class="text-gray-500">CPF:</h2>
                    <p>{{ cpf(info.cpf) }}</p>
                    <br>                    
                    <h2 class="text-gray-500">Cadastro em:</h2>
                    <p>{{formData(info.registro)}}</p>
                    <br>                    
                </CardGeral>
                <CardGeral text="Endereço" size="tres">
                <h2 class="text-gray-500">CEP:</h2>
                    <p>{{cep(info.address.cep)}}</p>
                    <br>
                    <h2 class="text-gray-500">Rua:</h2>
                    <p>{{info.address.logadouro}}</p>
                    <br>
                    <h2 class="text-gray-500">Número:</h2>
                    <p>{{info.address.numero}}</p>
                    <br>
                    <h2 class="text-gray-500">Bairro:</h2>
                    <p>{{info.address.bairro}}</p>
                    <br>
                    <h2 class="text-gray-500">Cidade:</h2>
                    <p>{{info.address.cidade}}</p>
                    <br>
                    <h2 class="text-gray-500">Estado:</h2>
                    <p>{{info.address.estado}}</p>
                    <br>
                </CardGeral>
                <CardGeral text="Anotações" size="tres">

                <Anotacao v-for="item in totalAnotacoes" :text="item.message" :data="item.date" :autor="item.author_name" />

                </CardGeral>
                <CardGeral text="Histórico de Doações" size="sete">
                <Table :rows="donations" :cols="cols" pagination="10" />
                </CardGeral>
                <CardGeral text="Assinaturas" size="sete">
                <Table :rows="subs" :cols="colsSub" pagination="10" />
                </CardGeral>

    </div>`,
}

