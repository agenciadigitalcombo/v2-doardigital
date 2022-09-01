import Tabela from "./Tabela.js"
import getTemplate from "./getTemplate.js"
export default {
    template: await getTemplate('./../components/Table'),
    props: ['rows', 'cols', 'pagination', 'step'],
    data: function() {
        return {
            lista: []
        }
    },
    mounted() {
        const myTable = new Tabela( this.rows, this.cols, this.pagination, 1 )
        this.lista = myTable.dataRender

        console.log(this.lista[0])
    }
    
}