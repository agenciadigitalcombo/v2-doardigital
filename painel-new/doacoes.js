import Table from "../components/Table.js"
import BreadCrumb from "../components/BreadCrumb.js"
import Card from "../components/Card.js"
import status from "../components/status.js"
import actions from "../components/actions.js"
import ApiDoacoes from "../components/apiDoacoes.js"
import MyInstitution from "../components/myInstitution.js"
import { data } from "../components/format.js"

export default {
    data: function () {
        return {
            donations: [],
            cols: {
                name: d => `${d.name} <br/> ${d.email}`,
                value: d => `${d.value}`,
                status: t => status(t.status),
                dataHora: d => `${d.data}`,
                tipo: t => `<span class="bg-white text-grey-600 py-1 px-3 rounded-full text-xs">
                ${t.tipo}
                </span>`,
                action: e => actions(`detalhe-doacao?id=${e.id}`, 'fa-solid fa-eye', 'blue')
            },

        }
    },
    components: {
        Table,
        BreadCrumb,
        Card
    },
    async mounted() {
        let donations = new ApiDoacoes()
        let institution = new MyInstitution()
        let request = await donations.lista(institution.get())
        console.log(request.payload)
        if (request.next) {
            this.donations = this.adapter(request.payload)
        }
    },
    methods: {
        adapter(listAll) {
            return listAll.map(d => ({
                name: d.doador_nome,
                email: d.doador_email,
                data: data(d.data),
                value: d.valor,
                status: d.status_pagamento,
                tipo: d.tipo_pagamento,
                id: d.fatura_id
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
                <Card text="Total de Doações" value="300" variation="blue" icon="bar" size="4" />
                <Card text="Total Pago" value="100" variation="green" size="4" />
                <Card text="Total Aberto" value="200" variation="yellow" icon="heart" size="6" />
                <Card text="Vencido / Cancelado" value="200" variation="red" icon="heart" size="6" />
                <Card text="Estornado" value="200" variation="purple" icon="heart" size="6" />
                
                <CardCarteira />
                
                
                </div>
                <Table :rows="donations" :cols="cols" pagination="10" />
             </div>
          </div>
       </div>

       
    </div>`,
}