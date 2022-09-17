import Table from "../components/Table.js"
import BreadCrumb from "../components/BreadCrumb.js"
import Card from "../components/Card.js"
import CardCarteira from "../components/CardCarteira.js"
import CardGeral from "../components/CardGeral.js"
import MyInstitution from "../components/myInstitution.js"
import ApiDoacoes from "../components/apiDoacoes.js"
import { getUriData } from "../components/format.js"
import { data } from "../components/format.js"

export default {
    data: function () {
        return {
            info: {},
            donations: [
                {
                    name: "Mel",
                    value: "${d.value}",
                    status: "PAGO",
                    tipo: "PIX",
                    dataHora: "20/09/2022 08:20:34"
                },
            ],
            cols: {
                value: d => `${d.value}`,
                doar: "Doar",
                pix: "Pix",
                total: "Valor Liquido",
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
        let donations = new ApiDoacoes()
        let institution = new MyInstitution()

        let request = await donations.lista(institution.get())
        let formatRequest = Object.values(request)
        let minRequest = formatRequest[2]
        const ids = minRequest.filter(p => p.fatura_id === ID);
        let idss = ids[0]

        if (request.next) {
            this.info = idss
            console.log(idss)

        }



        //  const doacao = request.filter(d => fatura_id === "pay_3964019606267467")

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
    <BreadCrumb text="Home" text2="Detalhe Doador" />
    {{info}}
       
    <div class="relative pt-2 pb-32 bg-[#fff]">
          <div class="px-4 md:px-6 mx-auto w-full">
             <div>
                <div class="flex flex-wrap">

                <CardGeral text="Detalhe da Doação" size="quatro">
                    <h2 class="text-gray-500">Nome:</h2>
                    <p>{{info.doador_nome}}</p>
                    <br>
                    <h2 class="text-gray-500">Status</h2>
                        <span class="bg-green-200 text-green-600 py-1 px-3 rounded-full text-xs">
                        {{info.status_pagamento}}
                        </span>
                    <br>    
                    <br>
                    <h2 class="text-gray-500">Tipo:</h2>
                        <span class="bg-purple-200 text-purple-600 py-1 px-3 rounded-full text-xs">
                        {{info.recorrente}}
                        </span>
                    <br>
                    <br>
                    <h2 class="text-gray-500">Data:</h2>
                    <p>{{info.data}} - {{info.hora}}</p>
                    <br>
                    <h2 class="text-gray-500">Valor</h2>
                    <p>{{info.valor}}</p>
                    <br>
                    <h2 class="text-gray-500">Recorrente</h2>
                    <p>{{info.recorrente}}</p>
                    <br>
                    
                </CardGeral>
                <CardGeral text="Código Pix / Boleto" size="quatro">
                <form class="m-4 flex">
                    <input class="rounded-l-lg p-4 border-t mr-0 border-b border-l text-gray-800 border-gray-200 bg-white" placeholder="134308107343432432423423423423423555325325235235235235235"/>
                    <button class="px-8 rounded-r-lg bg-blue-600 text-white font-bold p-4 uppercase border-blue-500 border-t border-b border-r">COPIAR</button>
                </form>
                </CardGeral>
                <CardGeral text="Quadro de Anotações" size="sete">
                    
                </CardGeral>
                <CardGeral text="Detalhe da Transação" size="sete">
                    <Table :rows="donations" :cols="cols"/>
                </CardGeral>
                
                
                
                
               

       

    </div>`,
}

