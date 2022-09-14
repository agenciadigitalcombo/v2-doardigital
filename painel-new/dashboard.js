import Table  from "../components/Table.js"
import Botao  from "../components/Botao.js"
import BreadCrumb from "../components/BreadCrumb.js"
import Card  from "../components/Card.js"

export default {
    data: function() {
        return { 
            donations : [
                { name: "Mel", value: 2.50, status: "PAID" },
                { name: "Jhon", value: 15.50, status: "AWAITING" },
                { name: "Kleber", value: 32, status: "RECUSED" },
                { name: "Bruno", value: 2.50, status: "PAID" },
                { name: "Jhon", value: 15.50, status: "AWAITING" },
                { name: "Kleber", value: 32, status: "RECUSED" },
                { name: "Bruno", value: 2.50, status: "PAID" },
                { name: "Jhon", value: 15.50, status: "AWAITING" },
                { name: "Kleber", value: 32, status: "RECUSED" },
                { name: "Bruno", value: 2.50, status: "PAID" },
                { name: "Jhon", value: 15.50, status: "AWAITING" },
            ],
            cols: {
                name: "Nome Doador",
                value: "Valor Doação",
                status: t => `<span class="bg-purple-200 text-purple-600 py-1 px-3 rounded-full text-xs">
                ${t.status}
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
    <BreadCrumb text="Home" text2="Dashboard" />

       
    </div>`,
}