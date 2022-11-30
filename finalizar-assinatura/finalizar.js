import getTemplate from '../components/getTemplate.js'

const html = await getTemplate( './finalizar' )

export default {
    data: function () {
        return {
            plano: 'instituicao',
            cupom: null,
            nome: null,
            numero: null,
            cvv: null,
            vencimento: null,
            valorAssinatura: 98.90,
            valorAssinaturaPrint: '98,90',
            planos: [
                { id: 'instituicao', name: 'Instituição' ,value: 98.90, printValue: '98,90', disparos: 1000 },
                { id: 'igreja', name: 'Paróquia / Igreja' ,value: 98.90, printValue: '98,90', disparos: 1000 },
                { id: 'oracao', name: 'Grupo de Oração' ,value: 49.90, printValue: '49,90', disparos: 500 },
                { id: 'missionario', name: 'Missionário' ,value: 49.90, printValue: '49,90', disparos: 500 },
            ]
        }
    },
    watch: {
        plano( idPlanos ) {
            let plano = this.planos.find( p => p.id == idPlanos )
            this.valorAssinatura = plano.value
            this.valorAssinaturaPrint = plano.printValue           
        }
    },
    components: {},
    async mounted() {},
    methods: {},
    template: html,
}