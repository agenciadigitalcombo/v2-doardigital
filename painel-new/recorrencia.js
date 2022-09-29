import Table from "../components/Table.js"
import BreadCrumb from "../components/BreadCrumb.js"
import Card from "../components/Card.js"
import status from "../components/status.js"
import actions from "../components/actions.js"
import ApiDoacoes from "../components/apiDoacoes.js"
import MyInstitution from "../components/myInstitution.js"
import { data, formataMoeda, formatRecorrente } from "../components/format.js"
import Filtro from "../components/Filtro.js"

export default {
    data: function () {
        return {
            donations: [],
            totalQuantidade: 0,
            totalMoney:  0,
            cols: {
                "Doador": d => `${d.name} <br/> ${d.email}`,
                "Valor": d => `${d.value}`,
                status: t => status(t.status),
                recorrente: "Recorrente",
                "Data": d => `${d.data}`,
                tipo: t => `<span class="bg-white text-grey-600 py-1 px-3 rounded-full text-xs">
                ${t.tipo}
                </span>`,
                "Ação": e => actions(`detalhe-doacao?id=${e.id}`, 'fa-solid fa-eye', 'blue')
            },
        }
    },
    components: {
        Table,
        BreadCrumb,
        Card,
        Filtro
    },
    async mounted() {
        let donations = new ApiDoacoes()
        let institution = new MyInstitution()
        let request = await donations.lista(institution.get())
        if (request.next) {
            let hoje = moment().format('YYYY-MM-DD')
            let all_donations = request.payload
            all_donations = this.adapter(all_donations)
            all_donations = all_donations.filter(d => {
                let data_donation = d.data
                return hoje > data_donation
            })
            all_donations = all_donations.reverse()
            this.donations = all_donations
            this.totalQuantidade = all_donations.length
            this.totalMoney = this.somaAll(all_donations)
        }
    },
    methods: {
        adapter(listAll) {
            return listAll.map(d => ({
                name: d.doador_nome,
                email: d.doador_email,
                data: data(d.data),
                value: formataMoeda(d.valor),
                price: d.valor,
                status: d.status_pagamento,
                tipo: d.tipo_pagamento,
                id: d.fatura_id,
                recorrente: formatRecorrente(d.recorrente)
            }))
        },
        somaAll(ar) {
            return formataMoeda(ar.reduce((acc, el) => {
                acc += +el.price
                return acc
            }, 0))
        },
    },
    template: `
    <div>
        <BreadCrumb text="Home" text2="Doações Recorrentes" />
        <div class="relative pt-10 pb-32 bg-[#fff]">
          <div class="bg-blackpx-4 md:px-6 mx-auto w-full">
             <div>
                <div class="flex flex-wrap">
                    <Card text="Total de Doações Previstas" :value="totalQuantidade" variation="blue" icon="bar" size="2" />
                    <Card text="Total em Doações Previstas" :value="totalMoney" variation="blue" icon="bar" size="2" />
                </div>
                <Table :rows="donations" :cols="cols" pagination="12" />
             </div>
          </div>
       </div>       
    </div>`,
}