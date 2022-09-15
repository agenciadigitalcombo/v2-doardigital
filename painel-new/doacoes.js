import Table  from "../components/Table.js"
import Botao  from "../components/Botao.js"
import BreadCrumb from "../components/BreadCrumb.js"
import Card  from "../components/Card.js"
import status from "../components/status.js"
import actions from "../components/actions.js"

export default {
    data: function() {
        return { 
            donations : [
                { name: "Mel", value: "R$ 50", status: "PAID", tipo: "PIX", dataHora: "20/09/2022 08:20:34" },
                { name: "Jhon", value: "R$ 1000", status: "PENDING", tipo:"PIX", dataHora: "19/09/2022 08:20:34" },
                { name: "Kleber", value: "R$ 500", status: "RECEIVED", tipo:"BOLETO", dataHora: "18/09/2022 08:20:34" },
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
                status: t => status(t.status),
                dataHora: "Data e Hora cadastrada",
                tipo: t => `<span class="bg-white text-grey-600 py-1 px-3 rounded-full text-xs">
                ${t.tipo}
                </span>`,
                action: e => actions( 'detalhe-doacao', 'fa-solid fa-info', 'red'  )
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