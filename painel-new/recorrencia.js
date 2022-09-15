import Table  from "../components/Table.js"
import Botao  from "../components/Botao.js"
import BreadCrumb from "../components/BreadCrumb.js"
import Card  from "../components/Card.js"

export default {
    data: function() {
        return { 
            donations : [
                { name: "Mel", value: "R$ 50", status: "PAGO", tipo: "PIX", dataHora: "20/09/2022 08:20:34" },
                { name: "Jhon", value: "R$ 1000", status: "AGUARDANDO PAGAMENTO", tipo:"PIX", dataHora: "19/09/2022 08:20:34" },
                { name: "Kleber", value: "R$ 500", status: "VENCIDO", tipo:"BOLETO", dataHora: "18/09/2022 08:20:34" },
                { name: "Bruno", value: "R$ 500", status: "PAGO", tipo:"CREDIT_CARD", dataHora: "18/09/2022 08:20:34" },
                { name: "Jhon", value: "R$ 50", status: "ESTORNADO", tipo:"PIX", dataHora: "17/09/2022 08:20:34" },
                { name: "Kleber", value: "R$ 500", status: "OVERDUE", tipo:"PIX", dataHora: "15/09/2022 08:20:34" },
                { name: "Bruno", value: "R$ 500", status: "PAGO", tipo:"BOLETO", dataHora: "12/09/2022 08:20:34" },
                { name: "Jhon", value: "R$ 50", status: "VENCIDO", tipo:"PIX", dataHora: "20/08/2022 08:20:34" },
                { name: "Kleber", value: "R$ 550", status: "PAGO", tipo:"CREDIT_CARD", dataHora: "20/08/2022 08:20:34" },
                { name: "Bruno", value: "R$ 950", status: "PAGO", tipo:"BOLETO", dataHora: "15/08/2022 08:20:34" },
                { name: "Jhon", value: "R$ 50", status: "PAGO", tipo:"PIX", dataHora: "10/08/2022 08:20:34" },
            ],
            cols: {
                name: "Nome Doador",
                value: "Valor Doação",
                status: t => `<span class="bg-purple-200 text-purple-600 py-1 px-3 rounded-full text-xs">
                ${t.status}
                </span>`,
                dataHora: "Data e Hora cadastrada",
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
        Card
    },
    template: `
    <div>
    <BreadCrumb text="Home" text2="Doações Recorrentes" />

    

   
        


        <div class="relative pt-10 pb-32 bg-[#fff]">
          <div class="bg-blackpx-4 md:px-6 mx-auto w-full">
             <div>
                <div class="flex flex-wrap">
                <Card text="Total de Doações Previstas" value="300" variation="blue" icon="bar" size="4" />
                <Card text="Total Pago" value="100" variation="green" size="4" />
                <Card text="Total Aberto" value="200" variation="yellow" icon="heart" size="4" />
                <Card text="Vencido / Cancelado" value="200" variation="red" icon="heart" size="4" />
                
                <CardCarteira />
                
                
                </div>
                <Table :rows="donations" :cols="cols" pagination="10" />
             </div>
          </div>
       </div>

       
    </div>`,
}