import get_template from '../components/get_template.js'
import adm from "../../../../../static/js/api/adm.js"
const { required, minLength, maxLength } = window.validators

export default {
  
	data: function () {
		return { 
			cpf: null,
			nascimento: null,
			nome: null,
			telefone: null,
			credencial: "",
			sexo: "",
			code: null,
			token: null,
			jms: "",
			error: null,

		}
	},
	 
	
	validations: {
		nascimento: {
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
					this.token,
					this.code,
					this.nome, 
					this.cpf,
					this.nascimento,
					this.telefone, 
					this.credencial
				)
				if (!res.next) {
					console.log(res)
					this.error = res.message
					return null
				}
				globalThis._cpf = this.cpf
				globalThis._nascimento = this.nascimento 
				globalThis._sexo = this.sexo 
 
				window.location.href = `#/checkout_endereco`
			}

		},

		async listar() {
			let res = await adm.ListarPerfil(
				this.token,
				this.code,
			)
			return res
		},
	},


	async mounted() {
		this.jms = localStorage.getItem('cnpj')

		 this.token = localStorage.getItem('token')
		 let str = this.token.split('.')[0]
		 let encodedStr = atob(str); 
		 var res =  JSON.parse(encodedStr);
		 this.code = res.code

		let dados = (await this.listar()).payload
		this.nome = dados.nome 
		this.telefone = dados.telefone  
	}, 

    template: await get_template('./assets/js/view/checkout')
}