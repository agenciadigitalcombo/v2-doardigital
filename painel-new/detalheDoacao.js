import Table  from "../components/Table.js"
import Botao  from "../components/Botao.js"
import BreadCrumb from "../components/BreadCrumb.js"
import Card  from "../components/Card.js"
import CardCarteira from "../components/CardCarteira.js"
import CardGeral from "../components/CardGeral.js"
import CardPerfil from "../components/CardPerfil.js"

export default {
    data: function() {
        return { 
            donations : [
                { value: "R$ 33,00", doar: "R$ 1.32", pix: "R$ 0.79", total: "R$ 30,89" },
            ],
            cols: {
                value: "Valor",
                doar: "Doar",
                pix: "Pix",
                total: "Valor Liquido",
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
    template: `
    <div>
    <BreadCrumb text="Home" text2="Detalhe Doador" />

       

    <div class="relative pt-2 pb-32 bg-[#fff]">
          <div class="px-4 md:px-6 mx-auto w-full">
             <div>
                <div class="flex flex-wrap">

                <CardGeral text="Detalhe da Doação" size="quatro">
                    <h2 class="text-gray-500">Nome:</h2>
                    <p>Suzana Maria Aparecida Silva</p>
                    <br>
                    <h2 class="text-gray-500">Status</h2>
                    <p>Aguardando Pagamento</p>
                    <br>
                    <h2 class="text-gray-500">Tipo:</h2>
                    <p>Tipo</p>
                    <br>
                    <h2 class="text-gray-500">Data:</h2>
                    <p>14/09/2022 - 09:17:13</p>
                    <br>
                    <h2 class="text-gray-500">Valor</h2>
                    <p>R$ 33,00</p>
                    <br>
                    <h2 class="text-gray-500">Recorrente</h2>
                    <p>NÃO</p>
                    <br>
                    
                </CardGeral>
                <CardGeral text="Código Pix / Boleto" size="quatro">
                <form class="m-4 flex">
                    <input class="rounded-l-lg p-4 border-t mr-0 border-b border-l text-gray-800 border-gray-200 bg-white" placeholder="134308107343432432423423423423423555325325235235235235235"/>
                    <button class="px-8 rounded-r-lg bg-blue-600 text-white font-bold p-4 uppercase border-blue-500 border-t border-b border-r">COPIAR</button>
                </form>
                </CardGeral>
                <CardGeral text="Detalhe da Transação" size="sete">
                    <Table :rows="donations" :cols="cols"/>
                </CardGeral>
                
                
                
               

       

    </div>`,
}

