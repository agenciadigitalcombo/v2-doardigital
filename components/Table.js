import Tabela from "./Tabela.js"
import getTemplate from "./getTemplate.js"
export default {
    template: await getTemplate('./../components/Table'),
    props: ['rows', 'cols', 'pagination', 'step'],
    data: function() {
        return {
            lista: [],
            pages: 0,
            step: 0
        }
    },
    watch: {
        step(nw,ol) {
            const myTable = new Tabela( this.freeze(this.rows), this.cols, this.pagination, +this.step )
            this.lista = this.freeze(myTable.dataRender)
        }
    },
    mounted() {
        const myTable = new Tabela( this.freeze(this.rows), this.cols, this.pagination, this.step )
        this.lista = this.freeze(myTable.dataRender)
        this.pages = myTable.pages
    },
    methods: {
        freeze(payload) {
            return JSON.parse( JSON.stringify(payload) )
        }
    }
    
}