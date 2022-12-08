import getTemplate from '../components/getTemplate.js'
import Jwt from '../components/jwt.js'
import Admin from '../components/apiAdmin.js'
import Fatura from '../components/apiFatura.js'
import apiFatura from '../components/apiFatura.js'
import Tmp from '../components/Temp.js'



const html = await getTemplate('/finalizar-assinatura/finalizar')

export default {
    data: function () {
        return {
            message: null,
            load: false,
            plano: 'instituicao',
            isPix: false,
            isCupom: false,
            cupom: null,
            nome: null,
            nomeCadastro: null,
            email: null,
            telefone: null,
            cpf: null,
            numero: null,
            cvv: null,
            vencimento: null,
            valorAssinatura: 98.90,
            valorAssinaturaPrint: '98,90',
            institution_fk: 'inst_62d98175c7e51',
            typePayment: 'CREDIT_CARD',
            recorrente: 1,
            nextDueDate: 0,
            cep: '',
            addressNumber: null,
            planos: [
                { id: 'instituicao', name: 'Instituição', value: 98.90, printValue: '98,90', disparos: 1000 },
                { id: 'igreja', name: 'Paróquia / Igreja', value: 98.90, printValue: '98,90', disparos: 1000 },
                { id: 'oracao', name: 'Grupo de Oração', value: 49.90, printValue: '49,90', disparos: 500 },
                { id: 'missionario', name: 'Missionário', value: 49.90, printValue: '49,90', disparos: 500 },
            ],
            listCupom: [
                { code: "PIXDOAR", action: 'pix' },
                { code: "30DOAR", action: 'trial' },
            ]
        }
    },
    watch: {
        plano(idPlanos) {
            let plano = this.planos.find(p => p.id == idPlanos)
            this.valorAssinatura = plano.value
            this.valorAssinaturaPrint = plano.printValue
        },
        cupom(c) {
            this.isPix = false
            this.nextDueDate = 0
            this.typePayment = 'CREDIT_CARD'

            let myCupom = this.listCupom.find(i => i.code == (c.toUpperCase()))
            let action = myCupom?.action || 'default'
            if (action == 'pix') {
                this.isPix = true
                this.typePayment = 'PIX'
                this.nome = this.nomeCadastro
            }
            if (action == 'trial') {
                this.nextDueDate = 30
            }
        }
    },
    components: {},
    async mounted() {
        let jwt = new Jwt()
        let { code } = jwt.get()

        let adm = new Admin()
        let info = (await adm.info(code)).payload

        this.telefone = info.telefone
        this.cpf = info.cpf
        this.email = info.email
        this.nomeCadastro = info.nome

    },
    methods: {
        async fazerAssinatura() {
            this.message = null
            this.load = true
            let api = new apiFatura()
            let res = await api.finalizar(
                this.institution_fk,
                this.valorAssinatura,
                this.recorrente,
                this.email,
                this.nome,
                this.cpf,
                this.telefone,
                this.cep,
                this.addressNumber,
                this.typePayment,
                this.nome,
                this.numero,
                this.cvv,
                this.vencimento,
                this.nextDueDate
            )
            this.load = false
            this.message = res.message
            if (res.next) {
                let tmp = new Tmp()
                tmp.save({
                    code: res?.payload?.code,
                    id: 'pay_' + res?.payload?.url?.split('/')?.reverse?.()?.[0]
                })
                if (this.typePayment == 'CREDIT_CARD') {
                    let adm = new Admin()
                    let jwt = new Jwt()
                    let { code } = jwt.get()
                    adm.step(code, 1)
                }
                this.$router.push('obrigado')
            }
        },
        maskCvv() {
            this.cvv = this.cvv.replace(/\D/gi, '').substr(0, 3)
        },
        maskValidade() {
            this.vencimento = this.vencimento.replace(/\D/gi, '').replace(/(\d{2,2})(\d{2,2})/gi, '$1/$2').substr(0, 5)
        },
        maskNumero() {
            this.numero = this.numero.replace(/\D/gi, '').replace(/(\d{4,4})(\d{4,4})(\d{4,4})(\d{4,4})/gi, '$1 $2 $3 $4').substr(0, 19)
        },
        maskCep() {
            this.cep = this.cep.replace(/\D/gi, '').replace(/(\d{5,5})(\d{3,3})/gi, '$1-$2').substr(0, 9)
        }
    },
    template: html,
}