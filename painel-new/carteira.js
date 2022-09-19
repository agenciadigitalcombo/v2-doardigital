import Card  from "../components/Card.js"
import Botao  from "../components/Botao.js"
import BreadCrumb from "../components/BreadCrumb.js"
import CardCarteira from "../components/CardCarteira.js"
import CardGeral from "../components/CardGeral.js"
import Table from "../components/Table.js"

export default {
    data: function() {
        return {
            info: { address: { bairro: null } },
            transferencias: [],
            cols: {
                data: "Data e Hora",
                value: "Valor",
                status: "Status",
            },

        }
    },
    components: {
        Botao,
        Card,
        BreadCrumb,
        CardCarteira,
        CardGeral,
        Table
    },
    template: `
    <div>
    
    
    <BreadCrumb text="Home" text2="Carteira" />
    
    <div class="relative pt-10 pb-32 bg-[#fff]">
          <div class="px-4 md:px-6 mx-auto w-full">
             <div>
                <div class="flex flex-wrap">
                <Card text="Saldo Liberado" value="R$ 8.900,55" variation="blue" icon="bar" size="3"/>
                <Card text="Saldo á liberar" value="R$ 5.255,55" variation="yellow" size="3"/>
                <Card text="Total Já Sacado" value="R$ 28.900,55" variation="green" icon="heart" size="3"/>
                
                <CardGeral text="Solicitação de Saque" size="quatro">   
                    <p>Solicite o saque selecionando abaixo as opções:.</p>
                </CardGeral>

                <CardGeral text="Histórico de Transferências" size="quatro">   
                    <Table :rows="transferencias" :cols="cols" pagination="10" />
                </CardGeral>
                
                
                </div>
             </div>
          </div>
       </div>
    
    </div>`,
}