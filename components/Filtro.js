import getTemplate from "./getTemplate.js"

export default {
    props: ['link','text','value','variation','tax','icon'],
    template : await getTemplate( './../components/Filtro' ),
    emits: ['filter'],
    data: function() {
        return {
            search: null,
            date: null,
            status: null,
            tipo: null,
            recorrencia: null,
            dashboard: false,
            icons:{
            },
            variations:{
            }
        }
    },
    methods: {
        filter() {
            this.$emit( 'filter', {
                search: this.search,
                date: this.date,
                status: this.status,
                tipo: this.tipo,
                recorrencia: this.recorrencia,
            } )            
        }
    },
    mounted() {
    }
}