import Table  from "../components/Table.js"
import Botao  from "../components/Botao.js"
import BreadCrumb from "../components/BreadCrumb.js"
import Card  from "../components/Card.js"
import CardCarteira from "../components/CardCarteira.js"
import CardGeral from "../components/CardGeral.js"
import CardPerfil from "../components/CardPerfil.js"
import apiDoadores from "../components/apiDoadores.js"
import {getUriData} from "../components/format.js"

export default {
    data: function() {
        return { 
            info: {},
            donations : [
                { dataHora: "20/09/2022 08:20:34" ,value: "R$ 50", status: "PAGO", tipo: "PIX",  },
                { value: "R$ 1000", status: "AGUARDANDO PAGAMENTO", tipo:"PIX", dataHora: "19/09/2022 08:20:34" },
                { value: "R$ 500", status: "VENCIDO", tipo:"BOLETO", dataHora: "18/09/2022 08:20:34" },
                { value: "R$ 500", status: "PAGO", tipo:"CREDIT_CARD", dataHora: "18/09/2022 08:20:34" },
                { value: "R$ 50", status: "ESTORNADO", tipo:"PIX", dataHora: "17/09/2022 08:20:34" },
                { value: "R$ 500", status: "OVERDUE", tipo:"PIX", dataHora: "15/09/2022 08:20:34" },
                { value: "R$ 500", status: "PAGO", tipo:"BOLETO", dataHora: "12/09/2022 08:20:34" },
                { value: "R$ 50", status: "VENCIDO", tipo:"PIX", dataHora: "20/08/2022 08:20:34" },
                { value: "R$ 550", status: "PAGO", tipo:"CREDIT_CARD", dataHora: "20/08/2022 08:20:34" },
                { value: "R$ 950", status: "PAGO", tipo:"BOLETO", dataHora: "15/08/2022 08:20:34" },
                { value: "R$ 50", status: "PAGO", tipo:"PIX", dataHora: "10/08/2022 08:20:34" },
            ],
            assinaturas : [
                { dataHora: "20/09/2022 08:20:34" ,value: "R$ 50", status: "ATIVO", tipo: "CRÉDITO",  },
                { value: "R$ 1000", status: "INATIVO", tipo:"PIX", dataHora: "19/09/2022 08:20:34" },
            ],
            cols: {
                dataHora: "Data e Hora cadastrada",
                value: "Valor Doação",
                status: t => `<span class="bg-purple-200 text-purple-600 py-1 px-3 rounded-full text-xs">
                ${t.status}
                </span>`,
                tipo: t => `<span class="bg-white text-grey-600 py-1 px-3 rounded-full text-xs">
                ${t.tipo}
                </span>`,
                editar: e => `
                <div class="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                            </svg>
                                        </div>
                `
            },
            cols: {
                dataHora: "Data e Hora cadastrada",
                value: "Valor Doação",
                status: t => `<span class="bg-purple-200 text-purple-600 py-1 px-3 rounded-full text-xs">
                ${t.status}
                </span>`,
                tipo: t => `<span class="bg-white text-grey-600 py-1 px-3 rounded-full text-xs">
                ${t.tipo}
                </span>`,
                editar: e => `
                <div class="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                            </svg>
                                        </div>
                `
            },
        }
    },
    components: {
        Table,
        Botao,
        BreadCrumb,
        Card,
        CardCarteira,
        CardGeral,
        CardPerfil
    },
    async mounted() {
        let ID = getUriData('id')
        let doador = new apiDoadores()
        let request = await doador.detalhe(ID)
        if(request.next) {
            this.info = request.payload
            console.log(this.info )
        }
    },
    template: `
    <div>
    <BreadCrumb text="Home" text2="Detalhe Doador" />

       

    <div class="relative pt-2 pb-32 bg-[#fff]">
          <div class="px-4 md:px-6 mx-auto w-full">
             <div>
                <div class="flex flex-wrap">
                <CardPerfil :text="info.nome" />
                <CardGeral text="Dados do Doador" size="tres" value=""></CardGeral>
                <CardGeral text="Endereço" size="tres"></CardGeral>
                <CardGeral text="Histórico de Doações" size="quatro">
                <Table :rows="donations" :cols="cols" pagination="10" />
                </CardGeral>
                <CardGeral text="Assinaturas" size="quatro">
                <Table :rows="assinaturas" :cols="cols" pagination="10" />
                </CardGeral>
                
                
                
               

       

    </div>`,
}

