import getTemplate from "./getTemplate.js"

export default {
    props: ['link','text','value','variation','tax','icon'],
    template : await getTemplate( './../components/Filtro' ),
    emits: ['filter'],
    data: function() {
        return {
            search: null,
            date: "",
            status: "",
            tipo: "",
            recorrencia: '',
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
        let format_data = 'YYYY-MM-DD' 
        this.dataLabel = [
            {label: "Hoje", value: moment().format(format_data) },
            {label: "Ontem", value: moment().subtract(1, 'day').format(format_data) },
            {label: "Essa semana", value: moment().startOf('week').format(format_data) },
            {label: "Semana passada", value: moment().startOf('week').subtract(1, 'week').format(format_data)  },
            {label: "Esse mês", value: moment().startOf('month').format(format_data) },
            {label: "Mês passado", value: moment().startOf('month').subtract(1, 'month').format(format_data) },
        ]       
    }
}