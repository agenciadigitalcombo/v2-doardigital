import get_template from '../componentes/get_template.js'
import adm from '../../../../static/js/api/adm.js'
const { required, minLength, between, email } = window.validators

export default {

	data: function () {
		return {
			logo: '',
			mensal: "1",
			price: "",
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
			trial: '',
			backgroundColor: '',
			dados: [],
			digitado: "",
			titulo: "",
			temporario: "nuca",
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
		is_price(valor) {
			let price = (valor / 100).toLocaleString('pt-br', { minimumFractionDigits: 2 })
			return `${price}`
		},

		is_price2(valor) {
			let price = (valor / 100).toLocaleString('pt-br', { minimumFractionDigits: 2 })
			return `R$ ${price}`
		}
	},

	methods: {

		changejmsColorHouver(index) {
			this.jmsColorHouver = index;
		},

		changejmsOutros(index) {
			this.jmsColorHouver = null;
		},
 

		async lisConfiguracao() {
			let res = await adm.listConf(
				this.token,
				this.domain,
			)
			return res
		},

		setarPlano(jms) {

			this.valor = jms.price
			this.planos_id = jms.id
			this.planos_nome = jms.nome
			this.valor_digitado = "0"

		},


		money() {
			let valor
			valor = this.valor_digitado.replace(/\D/gi, '')
			valor = (valor / 100).toLocaleString('pt-br', { minimumFractionDigits: 2 })
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
					window.localStorage.setItem("planos_nome", "plano-" + this.valor_digitado)
					this.digitado = this.valor_digitado
					window.localStorage.setItem("price", this.valor_digitado.split(',00').join(''))
					window.localStorage.setItem("pricejms", this.valor_digitado)
				} else {
					window.localStorage.setItem("planos_id", this.planos_id)
					window.localStorage.setItem("planos_nome", this.planos_nome)
					window.localStorage.setItem("price", this.valor.split('00').join(''))
					window.localStorage.setItem("pricejms", this.valor)
				}

				window.localStorage.setItem("mensal", this.mensal)
				// window.localStorage.setItem("price_digitado", this.valor_digitado)
				window.localStorage.setItem("email", this.email)
				window.location.href = "#/finalizar"


			}
		},

	},

	computed: {

		filtraPlano() {
			return this.dados.filter((plano) => {
				return plano.trial.match(this.trial = 0);

			})
		}
	},


	async mounted() {


		this.token = localStorage.getItem('token')
		//this.domain = globalThis._instituicao.subdomain || globalThis._instituicao.domain
		this.domain = "jms21122xxcr"
		// this.this.domain  = window.location.hostname

		let config = (await this.lisConfiguracao()).payload
		this.logo = "https://doardigital.tk/api/upload/" + config.logo
		this.backgroundColor = config.cor


		this.dados = (await this.lisConfiguracao()).payload.planos
		this.price = this.dados.filter(x => x.trial == 0)[0].price
 
		this.valor_digitado = "0"
		this.valor = this.price

	},

	template: await get_template('./assets/js/view/checkout')
}