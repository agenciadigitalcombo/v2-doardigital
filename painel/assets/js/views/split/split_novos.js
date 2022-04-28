import get_template from '../../componentes/get_template.js'
import adm from "../../../../../static/js/api/adm.js"
const { required, minLength, between } = window.validators

export default {


	data: function () {
		return {
			token: null,
			fk: null,
			code: null,
			porcentagem: null,
			submitStatus: null,
			msg: null
		}
	},

	validations: {
		porcentagem: {
			required,
			between: between(0, 100)
		}
	},

	methods: {

		async addSplit() {
			this.error = null

			this.$v.$touch()
			if (this.$v.$invalid) {
				this.submitStatus = 'ERROR'
			} else {
				let res = await adm.split(
					this.token,
					this.fk,
					this.code,
					this.porcentagem,
				)
				if (!res.next) {
					this.error = res.message
					return null
				}

				this.submitStatus = 'PENDING'
				setTimeout(() => {
					this.submitStatus = 'OK'
					window.location.href = `#/divisao-pagamento`
				}, 900)
			}

		},



	},

	async mounted() {
		this.token = localStorage.getItem('token')
		let str = this.token.split('.')[0]
		let encodedStr = atob(str);
		var res = JSON.parse(encodedStr);
		this.code = res.code

		this.fk = window.localStorage.getItem('instituicao_id');
	},



	template: await get_template('./assets/js/views/split/split_novo')
}