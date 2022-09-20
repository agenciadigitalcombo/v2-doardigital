import Table from "../components/Table.js"
import BreadCrumb from "../components/BreadCrumb.js"
import Card from "../components/Card.js"
import status from "../components/status.js"
import actions from "../components/actions.js"
import ApiDoacoes from "../components/apiDoacoes.js"
import MyInstitution from "../components/myInstitution.js"
import { data, formataMoeda, formatRecorrente } from "../components/format.js"
import Filtro from "../components/Filtro.js"
import CardGeral from "../components/CardGeral.js"

export default {
    data: function () {
        return {
            totalFaturas: 0,
            totalDonations: 0,
            statusAguardando: 0,
            donations: [],
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
        Filtro,
        CardGeral
    },
    async mounted() {
        let donations = new ApiDoacoes()
        let institution = new MyInstitution()
        let request = await donations.lista(institution.get())
        if (request.next) {
            this.donations = this.adapter(request.payload)
        }

        this.statusAguardando = this.somaAll(this.donations.filter( d => d.status == 'PENDING' ))
        this.statusOverdue = this.somaAll(this.donations.filter( d => d.status == 'OVERDUE' ))
        this.statusRecebido = this.somaAll(this.donations.filter( d => d.status == 'CONFIRMED' || d.status == 'RECEIVED'))
        this.statusEstorno = this.somaAll(this.donations.filter( d => d.status == 'REFUNDED' ))
        
        this.totalDonations = this.somaAll(this.donations) 
        this.totalFaturas = this.somaQnt(this.doadores)
        console.log(this.totalFaturas)
    },
    methods: {
        somaAll( ar ) {
            return formataMoeda(ar.reduce((acc, el) => {
                acc += +el.price 
                return acc
            }, 0) )
        },
        somaQnt( arr ) {
            return arr.reduce((acc, el) => {
                acc += 1
                return acc 
            }, 0)
        },
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
        }
    },
    template: `
    <div>
    <BreadCrumb text="Home" text2="Doações" />

        <div class="relative pt-10 pb-32 bg-[#fff]">
          <div class="bg-blackpx-4 md:px-6 mx-auto w-full">
             <div>
                <div class="flex flex-wrap">
                <Card text="Total de Doações" :value="totalFaturas" variation="blue" icon="bar" size="4" />
                <Card text="Total em Doações" :value="totalDonations" variation="blue" icon="bar" size="4" />
                <Card text="Total Pago" :value="statusRecebido" icon="heart" variation="green" size="4" />
                <Card text="Total Aberto" :value="statusAguardando" variation="yellow" icon="heart" size="4" />
                <br><br><br><br>
                <Card text="Vencido / Cancelado" :value="statusOverdue" variation="red" icon="heart" size="4" />
                <Card text="Estornado" :value="statusEstorno" variation="purple" icon="heart" size="4" />
                <Card text="Total Recorrente" :value="statusEstorno" variation="green" icon="heart" size="4" />
                <Card text="Total Único" :value="statusEstorno" variation="yellow" icon="heart" size="4" />
                
                
                <Filtro />
                
                
                </div>
                <Table :rows="donations" :cols="cols" pagination="5" />
             </div>
          </div>
       </div>

       
    </div>`,
}