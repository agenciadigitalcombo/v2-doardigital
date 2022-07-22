import adm from "../../../../../static/js/api/adm.js"
import get_template from '../../componentes/get_template.js'

export default {
	data: function () {
		return {
			saldo_liberado: 0,
			saldo_a_liberar: 0,
			total_retirado: 0,
			token: null,
			id: null,
			jms: false,
			liberado: null,
			liberar: null,
			retirado: null,
			amount: null,
			date_created: null,
			valor: null,
			status: null,
			historico: [],
			error: null,
			msg: null,
			totalActive: true,
			parcialActive: false,
			active: true,
		}
	},
	filters: {
		form_valor(valor) {
			let price = (+valor).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL', minimumFractionDigits: 2 })
			return `${price}`
		},

		form_data(datas) {
			return datas.substr(5,10).split("-").reverse().join("/")
		},

		form_hora(horas) {
			let date_created = horas.substr(11, 5);
			return `${date_created}`
		},
	},
	methods: {
		total() {
			this.jms = false
			this.totalActive = true,
				this.parcialActive = false,
				this.amount = "50000"
		},
		parcial() {
			this.jms = true
			this.totalActive = false,
				this.parcialActive = true,
				this.amount = "00"
		},
		masc_money() {
			valor = (valor+"").toLocaleString('pt-br', { minimumFractionDigits: 2 })
			this.amount = valor
		},
		async listar() {
			let res = await adm.listarCarteira(
				this.id,
			)
			return res
		},
		async saque() {
			let res = await adm.saque(
				this.id,
				this.amount
			)
			return res
		},
		async solicitarSaque() {
			this.active = false
			this.error = null
			let resApi = this.saque()
			console.log( resApi )
			setTimeout(() => {
				this.active = true
				this.error = resApi.message;
			}, 1500);
			
		},
	},
	async mounted() {
		this.id = window.localStorage.getItem('instituicao_id');

		let resApi = await this.listar()

		this.saldo_liberado = resApi.payload.balance
		this.saldo_a_liberar = resApi.payload.statistic.netValue
		this.total_retirado = resApi.payload.statistic.quantity
		this.historico = resApi.payload.extrato.data
		console.log(this.historico)

	},

	template: await get_template('./assets/js/views/admin/carteira'),
}

