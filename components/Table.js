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
        },
        rows( n, i) {
            const myTable = new Tabela( this.freeze(this.rows), this.cols, this.pagination, this.step )
            this.lista = this.freeze(myTable.dataRender)
            this.pages = myTable.pages
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
        },
        showStep( totalPaginas, btn, step ) {
            if(totalPaginas < 11) {
                return true                
            }else {
                let init = step - 5
                let final = step + 5
                let noShow = btn >= init && btn <= final
                console.log( {step, init, final, noShow})
                if( noShow ) {
                    return true
                }else {
                    return false
                }
            }
            return false
        }
    }
    
}