import get_template from '../componentes/get_template.js'
import adm from '../../../../static/js/api/adm.js'
const { required, minLength, between, email } = window.validators

export default {
    
	data: function () {
		return {
			logo: '',
			mensal: "1",
			amount: "",
			valor: 111111,
			planos_nome: null,
			valor_digitado: null,
			planos_id: null,
			email: "",
			outro: null,
			subdomaim: null,
			submitStatus: null,
			minimoalerta: null, 
			jmsColorHouver: 0,
			status: '',
			backgroundColor: '',
			dados: [],
			digitado: "",
			titulo: "",
			temporario : "nuca",
		}
	},
 
	validations: {
		valor_digitado: {
			required,

		},
		valor: {
			required,
		},
		email: {
			required,
			email,
		},

	},
	//

	filters: {
		is_price(price) {
			let amount = (price / 100).toLocaleString('pt-br', { minimumFractionDigits: 2 })
			return `${amount}`
		},

		is_price2(price) {
			let amount = (price / 100).toLocaleString('pt-br', { minimumFractionDigits: 2 })
			return `R$ ${amount}`
		}
	},

	methods: {

		changejmsColorHouver(index) {
			this.jmsColorHouver = index;
		},

		changejmsOutros(index) {
			this.jmsColorHouver = null;
		},

		async infoSubdomain() {
			let res = await adm.todoSubdomain(this.subdomaim )
		return res
		},

		setarPlano(jms) {
		
			this.valor = jms.amount
			this.planos_id = jms.id
			this.planos_nome = jms.nome
			this.valor_digitado = "0"
		 
		},


		money() {
			let valor
			valor = this.valor_digitado.replace(/\D/gi, '')
			 valor = (valor/100).toLocaleString('pt-br', { minimumFractionDigits: 2 })
			 this.valor_digitado = valor
		},

		descartavel() {

			let cunston_valor = parseInt(`${this.valor_digitado}`.replace(/\D/gi, ''))

			this.error = null
			this.$v.$touch()
			if (this.$v.$invalid) {
				this.submitStatus = 'ERROR'
			}
			else if (cunston_valor != 0 && cunston_valor <= 1999) {
				this.minimoalerta = "Valor minimo deve ser 20,00"
			}
			else {
				//this.valor_digitado = parseInt(`${this.valor_digitado}`.replace(/\D/gi, ''))
				if (this.valor == 0) {

					this.valor_digitado = this.valor_digitado.split('.').join('')

					window.localStorage.setItem("planos_id", "49")
					window.localStorage.setItem("planos_nome", "plano-"+this.valor_digitado)
					this.digitado = this.valor_digitado
					window.localStorage.setItem("amount", this.valor_digitado.split(',00').join(''))
					 window.localStorage.setItem("amountjms", this.valor_digitado)
				} else {
					window.localStorage.setItem("planos_id", this.planos_id)
					window.localStorage.setItem("planos_nome", this.planos_nome)
					window.localStorage.setItem("amount", this.valor.split('00').join(''))
				 	window.localStorage.setItem("amountjms", this.valor)
				}

				window.localStorage.setItem("mensal", this.mensal)
				// window.localStorage.setItem("amount_digitado", this.valor_digitado)
				window.localStorage.setItem("email", this.email)
				window.location.href = "#/finalizar"


			}
		},

	},

	computed: {

		filtraPlano() {
			return this.dados.filter((plano) => {
				return plano.status.match(this.status = 1);

			})
		}
	},


	async mounted() {
	 
			//	this.subdomaim = "combopay.com.br"
	this.subdomaim = window.location.hostname
 
		let config = (await this.infoSubdomain()).dados_instituicao
		this.logo = "https://doardigital.com.br/api/upload/"+config.logo
		this.backgroundColor = config.cor
 
		this.dados = (await this.infoSubdomain()).dados_instituicao.plano
		this.amount = this.dados.filter(x => x.status == 1)[0].amount

		 

		this.valor_digitado = "0"
		this.valor = this.amount

	},
 
    template: await get_template('./assets/js/view/checkout')
}