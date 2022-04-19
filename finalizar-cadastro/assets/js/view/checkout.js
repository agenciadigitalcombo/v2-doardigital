import get_template from '../components/get_template.js'
import adm from "../../../../../static/js/api/adm.js"
const { required, minLength, maxLength } = window.validators

export default {
  
	data: function () {
		return { 
			cpf_cnpj: null,
			data_nascimento: null,
			tipo: null,
			token: null,
			jms: "",
			error: null,

		}
	},

	validations: {
		data_nascimento: {
			required,
			minLength: minLength(10)
		},

	},
	methods: {
		async finalizarAdm() {
			this.error = null
			this.$v.$touch()
			if (this.$v.$invalid) {
				this.submitStatus = 'ERROR'
			} else {

				let res = await adm.atualizarFinaliza(
					this.cpf_cnpj,
					this.data_nascimento,
					this.tipo, 
					this.token

				)
				if (!res.next) {
					console.log(res)
					this.error = res.message
					return null
				}
				globalThis._cpf = this.cpf_cnpj
				globalThis._nascimento = this.data_nascimento
				globalThis._tipo = this.tipo
				window.location.href = `#/checkout_endereco`
			}

		},
	},


	async mounted() {
		this.jms = localStorage.getItem('cnpj')

	     this.cpf_cnpj = globalThis._cpf 
		 this.data_nascimento = globalThis._nascimento 
		 this.tipo = globalThis._tipo 
	}, 

    template: await get_template('./assets/js/view/checkout')
}