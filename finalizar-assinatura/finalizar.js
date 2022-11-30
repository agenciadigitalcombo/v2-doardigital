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
            institution_fk: '',
            typePayment: 'CREDIT_CARD',
            recorrente: 1,
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
            this.typePayment = 'CREDIT_CARD'

            let myCupom = this.listCupom.find( i => i.code == (c.toUpperCase()) )
            let action = myCupom?.action || 'default'
            if( action == 'pix' ) {
                this.isPix = true
                this.typePayment = 'PIX'

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
            this.$router.push('obrigado')
        },
        maskCvv() {
            this.cvv = this.cvv.replace(/\D/gi, '').substr(0,3)            
        },
        maskValidade() {
            this.vencimento = this.vencimento.replace(/\D/gi, '').replace(/(\d{2,2})(\d{2,2})/gi, '$1/$2').substr(0,5)            
        },
        maskNumero() {
            this.numero = this.numero.replace(/\D/gi, '').replace(/(\d{4,4})(\d{4,4})(\d{4,4})(\d{4,4})/gi, '$1 $2 $3 $4').substr(0,19) 
        }
    },
    template: html,
}