import Table  from "../components/Table.js"
export default {
    data: function() {
        return { 
            donations : [
                
            ],
            cols: {
                name: "Nome Doador",
                value: "Valor Doação",
                status: t => `<span class="bg-purple-200 text-purple-600 py-1 px-3 rounded-full text-xs">
                ${t.status}
                </span>`,
                editar: e => `

                `
            },
        }
    },
    components: {
        Table
    },
    template: `<div>         
        <Table :rows="donations" :cols="cols" pagination="15" />
    </div>`,
}