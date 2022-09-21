import getTemplate from "./getTemplate.js"

export default {
    props: ['link','text','value','variation','tax','icon'],
    template : await getTemplate( './../components/Filtro' ),
    emits: ['filter'],
    data: function() {
        return {
            search: null,
            date: "",
            status: null,
            tipo: "",
            recorrencia: null,
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
                date: this.date,
                status: this.status,
                tipo: this.tipo,
                recorrencia: this.recorrencia,
            } )            
        }
    },
    mounted() {

        function timeStempToDate( time ) {
            var date = new Date(time);
            var m = date.getMonth() + 1;
            var y = date.getFullYear();
            var d = date.getDate();
            return `${d}/${m}/${y}`
        }

        let dataObj =  new Date()
        let dia = 86400 * 1000
        let hoje = new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate()).valueOf()

        this.dataLabel = [
            {label: "Hoje", value: hoje },
            {label: "Ontem", value: hoje - dia },
            {label: "Essa semana", value: hoje - (dia*dataObj.getDay()) },
            {label: "Semana passada", value: hoje - ((dataObj.getDay()+7) *dia)  },
            {label: "Esse mês", value: hoje - (dia*(dataObj.getDate()-1)) },
            // {label: "Mês passado", value: hoje - ((dataObj.getDate()+28)*dia) },
        ]
       
    }
}