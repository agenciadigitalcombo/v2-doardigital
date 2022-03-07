import get_template from '../../components/get_template.js'
import adm from "../../../../../static/js/api/adm.js"
const { required, minLength } = window.validators

export default {

	data: function () {
		return {
			token: null,
			nome_fantasia: null,
			razao_social: null,
			subdomain: null,
			email: null,
			cnpj: null,
			telefone: null,
			msg: null,
			error: null,
			submitStatus: null,
			jms: true,
		}
	},


	validations: {
		nome_fantasia: {
			required,
			minLength: minLength(2)
		},
		razao_social: {
			required,
			minLength: minLength(2)
		},
		cnpj: {
			required,
			minLength: minLength(2)
		},
		telefone: {
			required,
			minLength: minLength(2)
		},
		email: {
			required,
			minLength: minLength(2)
		},
		subdomain: {
			required,
			minLength: minLength(2)
		},
	},

	methods: {

		async validDomain() {
			this.error = null
			let res = await adm.validarDomain(this.subdomain)
			if (!res.next) {
				// this.next = res.next
				this.jms= res.next,
				this.error = res.message
				return null
			}
			// this.next = res.next
			this.jms= res.next,
			this.msg = res.message
			return res
		},



		async listar() {

		},

		async addInstituicao() {
			this.error = null
			this.$v.$touch()
			if (this.$v.$invalid) {
				this.submitStatus = 'ERROR'
			}else if (this.jms === false) {
				this.error = "Porfavor adicione um subdominio valido "
			  } else {

				let res = await adm.cadastrarInstituicao(
					this.nome_fantasia,
					this.razao_social,
					this.subdomain,
					this.email,
					this.cnpj,
					this.telefone,
					this.token,
				)
				if (!res.next) {
					console.log(res)
					this.error = res.message
					return null
				}

				globalThis._subdomaim =  this.subdomain  
				globalThis._email =  this.email 
			    globalThis._telefone =  this.telefone 
				globalThis._nome =  this.nome_fantasia  
				globalThis._recebedor =  this.razao_social
				globalThis._cnpj =  this.cnpj.replace(/[^\d]+/g,'')

				this.submitStatus = 'PENDING'
				setTimeout(() => {
					this.submitStatus = 'OK' 
		        	window.location.href = "#/enderecoInstituicoes"
				}, 500)
			}

		},
	}, 

    template: await get_template('./assets/js/view/instituicoes/nova_instituicoes')
}