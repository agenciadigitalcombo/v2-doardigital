import getTemplate from "./getTemplate.js"

export default {
    props: ['link','text','value','variation','tax','icon'],
    template : await getTemplate( './../components/filtro' ),
    emits: ['filter'],
    data: function() {
        return {
            search: null,
            date: "",
            status: "",
            tipo: "",
            recorrencia: '',
            data_inicio: moment().format('YYYY-MM-DD'),
            data_final: moment().format('YYYY-MM-DD'),
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
                data_inicio: this.data_inicio,
                data_final: this.data_final,
            } )            
        }
    },
    mounted() {
        this.dataLabel = [
            {label: "Hoje", value: "hoje" },
            {label: "Ontem", value: "ontem" },
            {label: "Essa semana", value: "essa_semana" },
            {label: "Semana passada", value: "semana_passada" },
            {label: "Esse mês", value: "esse_mes" },
            {label: "Mês passado", value: "mes_passado" },
            {label: "Personalizado", value: "personalizado" },
        ]       
    }
}