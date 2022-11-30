import getTemplate from '../components/getTemplate.js'

const html = await getTemplate( './finalizar' )

export default {
    data: function () {
        return {
            plano: 'instituicao',
            isPix: false,
            isCupom: false,
            cupom: null,
            nome: null,
            numero: null,
            cvv: null,
            vencimento: null,
            valorAssinatura: 98.90,
            valorAssinaturaPrint: '98,90',
            nextDueDate: 0,
            planos: [
                { id: 'instituicao', name: 'Instituição' ,value: 98.90, printValue: '98,90', disparos: 1000 },
                { id: 'igreja', name: 'Paróquia / Igreja' ,value: 98.90, printValue: '98,90', disparos: 1000 },
                { id: 'oracao', name: 'Grupo de Oração' ,value: 49.90, printValue: '49,90', disparos: 500 },
                { id: 'missionario', name: 'Missionário' ,value: 49.90, printValue: '49,90', disparos: 500 },
            ],
            listCupom: [
                { code: "PIXDOAR", action: 'pix'},
                { code: "30DOAR", action: 'trial'},
            ]
        }
    },
    watch: {
        plano( idPlanos ) {
            let plano = this.planos.find( p => p.id == idPlanos )
            this.valorAssinatura = plano.value
            this.valorAssinaturaPrint = plano.printValue           
        },
        cupom(c) {
            this.isPix = false
            this.nextDueDate = 0
            let myCupom = this.listCupom.find( i => i.code == (c.toUpperCase()) )
            let action = myCupom?.action || 'default'

            if( action == 'pix' ) {
                this.isPix = true
            }

            if( action == 'trial' ) {
                this.nextDueDate = 30
            }
        }
    },
    components: {},
    async mounted() {},
    methods: {
        fazerAssinatura() {
            alert('the end')
        }
    },
    template: html,
}