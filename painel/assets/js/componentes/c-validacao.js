import adm from "../../../../static/js/api/adm.js"
const { required, minLength, between } = window.validators

export default {


	data: function () {

		return {
			gravatar: '../painel/assets/image/gravatar.png',
			id: null,
			instituicao_id: null,
			nome: null,
			amount: null,
			token: null,

			text: '',
			age: 0,
			submitStatus: null
		}
	},

	validations: {
		amount: {
			required,
			minLength: minLength(5)
		},
		nome: {
			required,
			minLength: minLength(4)
		}
	},

	methods: {

		status(validation) {
			return {
				error: validation.$error,
				dirty: validation.$dirty
			}
		},

		async addPlanos() {
			this.error = null

			console.log('kim!')
			this.$v.$touch()
			if (this.$v.$invalid) {
				this.submitStatus = 'ERROR'
			} else {
				let res = await adm.cadastrarPlanos(
					this.id,
					this.instituicao_id,
					this.nome,
					this.amount,
					this.token,
				)
				if (!res.next) {
					this.error = res.message
					return null
				}
			}

		},




	},


	async mounted() {
		this.instituicao_id = window.localStorage.getItem('instituicao_id');
		this.id = window.localStorage.getItem('instituicao_id');

	},


	created() {


	},


}