import getTemplate from "./getTemplate.js"

export default {
    props: ['link','text','value','variation','tax','icon'],
    template : await getTemplate( './../components/FiltroDoador' ),
    emits: ['filter'],
    data: function() {
        return {
            search: null,
            recorrente: "todos",
            dashboard: false,
            dataLabel: [],
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
                recorrente: this.recorrente,
            } )            
        }
    },
    mounted() {
       
    }
}