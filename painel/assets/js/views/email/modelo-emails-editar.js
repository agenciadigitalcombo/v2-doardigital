import get_template from '../../componentes/get_template.js'
import adm from "../../../../../static/js/api/adm.js"

export default {


	data: function () {
		return {
			error: null,
			msg: null,
			token: null,
			tipo: null,
			instituicao_fk: null,
			status_pagamento: null,
			assunto: null,
			content: null,
			cron: null,
			pagamento: [],
			tipos: []
		}
	},




   


	filters: {

		este_status(status) {
			let apresentar = {
				PENDING: 'Aguardando Pagamento',
				RECEIVED: 'Pago',
				CONFIRMED: 'Pago',
				OVERDUE: 'Vencida',
				RECOVER_2_DAY: 'Recuperação 2 dias',
				RECOVER_3_DAY: 'Recuperação 3 dias',
				RECOVER_4_DAY: 'Recuperação 4 dias',
				RECOVER_5_DAY: 'Recuperação 5 dias',
				RECOVER_6_DAY: 'Recuperação 6 dias',

				REFUND_REQUESTED: 'Estorno',
				CHARGEBACK_REQUESTED: 'Estorno',
				CHARGEBACK_DISPUTE: 'Estorno',
				AWAITING_CHARGEBACK_REVERSAL: 'Estorno',
			}
			return apresentar[status]
		},
	},


	methods: {

		async atualizarEmail() {
			this.error = null

			let res = await adm.salvarEmail(
				this.token,
				this.tipo,
				this.instituicao_fk,
				this.status_pagamento,
				this.assunto,
				this.content,
			)
			if (!res.next) {
				setTimeout(() => this.msg = "", 5000);
				this.error = res.message
				return null
			}
			this.msg = res.message
		},

		async recuperarEmail() {
			this.error = null
			let res = await adm.recuperaEmail(
				this.token,
				this.tipo,
				this.instituicao_fk,
				this.status_pagamento
			)
			if (!res.next) {
				setTimeout(() => this.msg = "", 5000);
				this.error = res.message
				return null
			}
			this.msg = res.message

		},




		async listarEmails() {
			let res = await adm.listarEmail(
				this.token,
				this.instituicao_fk
			)
			return res
		},

	},

	async mounted() {

		this.instituicao_fk = window.localStorage.getItem("instituicao_id")

		//this.pagamento = (await this.listarEmails()).payload
		var kim = (await this.listarEmails()).payload

	 
		  this.pagamento = kim.map(item => item.status_pagamento)
			.filter((value, index, self) => self.indexOf(value) === index)
			
			this.tipos = kim.map(item => item.tipo)
			.filter((value, index, self) => self.indexOf(value) === index)

 

		this.assunto = globalThis._emails.assunto
		this.content = globalThis._emails.content

		this.status_pagamento = globalThis._emails.status_pagamento
		this.tipo = globalThis._emails.tipo

		//this.pagamento = (await this.listarEmails()).status_pagamento
		//this.tempo = (await this.listarEmails()).cron
	},



	template: await get_template('./assets/js/views/email/modelo-emails-editar')
}