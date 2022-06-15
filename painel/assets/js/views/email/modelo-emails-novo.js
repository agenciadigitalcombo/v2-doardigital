import get_template from '../../componentes/get_template.js'
import adm from "../../../../../static/js/api/adm.js"

export default {

 

	data: function () {
		return {
			gravatar: '../painel/assets/image/gravatar.png',
			tags: [
				"{{nome_doador}}",
				"{{nome_doador_completo}}",
				"{{nome_instituicao}}",
				"{{link_boleto}}",
				"{{botao_com_boleto}}",
				"{{link_recuperar_doacao}}",
				"{{botao_recuperar_doacao}}",
				"{{codigo_barras_boleto}}",
				"{{link_recuperacao_senha}}",
				"{{botao_recuperacao_senha}}",
				"{{telefone_doador}}",
				"{{telefone_instituicao}}"
			],
			error: null,
			msg: null,
			token,
			tipo,
			instituicao_fk,
			status_pagamento,
			assunto,
			content,
			pagamento: [],
			tempo: []
		}
	},
	methods: {
		
		async salvarEmail() {
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

		async listarEmails() {
			let res = await adm.listarEmail(localStorage.getItem('instituicao_id'))
			return res
		},
	},

	async mounted() {
		this.pagamento = (await this.listarEmails()).status_pagamento
		this.tempo = (await this.listarEmails()).cron

		this.instituicao_id = window.localStorage.getItem("instituicao_id")

	},

 

	template: await get_template('./assets/js/views/email/modelo-emails-novo')
}