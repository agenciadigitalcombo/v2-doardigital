import Table from "../components/Table.js"
import BreadCrumb from "../components/BreadCrumb.js"
import Card from "../components/Card.js"
import CardCarteira from "../components/CardCarteira.js"
import CardGeral from "../components/CardGeral.js"
import MyInstitution from "../components/myInstitution.js"
import ApiDoacoes from "../components/apiDoacoes.js"
import { getUriData } from "../components/format.js"
import status from "../components/status.js"
import { data } from "../components/format.js"
import actions from "../components/actions.js"

export default {
    data: function () {
        return {
            info: {},
            donations: [],
            cols: {
                tipo: t => `<span class="bg-white text-grey-600 py-1 px-3 rounded-full text-xs">
                ${t.tipo}
                </span>`,
                value: d => `${d.value}`,
                doar: "Doar",
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
      //  
        let donations = new ApiDoacoes()
        let request = await donations.lista(institution.get())
        let formatRequest = Object.values(request)
        let minRequest = formatRequest[2]
        const ids = minRequest.filter(p => p.fatura_id === ID)



        if (request.next) {
            this.donations = this.adapter(ids)
            this.doare = donations
            console.log()
        }
    },
    methods: {
        adapter(listAll) {
            return listAll.map(d => ({
                value: d.valor,
                id: d.fatura_id,
                tipo: d.tipo_pagamento,
                ... d,
            }))

        }
    },
    template: `
    <div>
    {{donations}}
    <BreadCrumb text="Home" text2="Detalhe Doação" />
   
       
    <div class="relative pt-2 pb-32 bg-[#fff]">
          <div class="px-4 md:px-6 mx-auto w-full">
             <div>
                <div class="flex flex-wrap">

                <CardGeral text="Detalhe da Doação" size="quatro">
                    <h2 class="text-gray-500">Nome:</h2>
                    <p>{{donations.doador_nome}}</p>
                    <br>
                    <h2 class="text-gray-500">Status</h2>
                        <span class="bg-green-200 text-green-600 py-1 px-3 rounded-full text-xs">
                        {{info.status_pagamento}}
                        </span>
                    <br>    
                    <br>
                    <h2 class="text-gray-500">Tipo:</h2>
                        <span class="bg-purple-200 text-purple-600 py-1 px-3 rounded-full text-xs">
                        {{info.tipo_pagamento}}
                        </span>
                    <br>
                    <br>
                    <h2 class="text-gray-500">Data:</h2>
                    <p>{{info.data}} - {{info.hora}}</p>
                    <br>
                    <h2 class="text-gray-500">Valor</h2>
                    <p>{{info.value}}</p>
                    <br>
                    <h2 class="text-gray-500">Recorrente</h2>
                    <p>{{info.recorrente}}</p>
                    <br>
                    
                </CardGeral>
                <CardGeral text="Código Pix / Boleto" size="quatro">
                <div class="flex flex-col mt-8 space-y-3 sm:-mx-2 sm:flex-row sm:justify-center sm:space-y-0">
                    <input id="email" type="text" class="px-6 py-3 text-gray-700 bg-white border rounded-md text-gray-300 border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 focus:border-blue-300 focus:outline-none focus:ring sm:mx-2" placeholder="{{info.codigo}}" />

                    <button class="px-8 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-md hover:bg-blue-600 focus:bg-blue-600 focus:outline-none sm:mx-2">
                        COPIAR CÓDIGO
                    </button>
                </div>
                </CardGeral>
                
                <CardGeral text="Detalhe da Transação" size="sete">
                    <Table :rows="donations" :cols="cols"/>
                </CardGeral>
                
                
                
                
               

       

    </div>`,
}

