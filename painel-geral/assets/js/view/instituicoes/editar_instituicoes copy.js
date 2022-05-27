import get_template from '../../components/get_template.js'
import adm from "../../../../../static/js/api/adm.js"
const { required, minLength } = window.validators

export default {
   
    
	data: function () {
		return {
			institution_fk: null,
		
			token: null,
			nome: null,
			cpfCnpj: null,
			email: null,
			telefone: null,
			subdomain: null,
			domain: null,
			tipoEmpresa: null,
			razao_social: null,
			submitStatus: null,

			validDomain : null,
			tell: null,
			msg: null,
			submitStatus: null,
			jms: true,
			radioFalse: false,
			radioTrue: false,
			tamanho: "",
		}
	},


	validations: {
		nome: {
			required,
			minLength: minLength(2)
		},
		razao_social: {
			required,
			minLength: minLength(2)
		},
		cpfCnpj: {
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
		async editaInstituicao() {
			this.error = null
			this.$v.$touch()
			if (this.$v.$invalid) {
				this.submitStatus = 'ERROR'
			} else {

				let res = await adm.alterarInstituicao(
					this.token,
					this.institution_fk,
					this.nome_fantasia,
					this.razao_social,
					this.email,
					this.cpfCnpj,
					this.telefone,
				)
				if (!res.next) {
				 
					this.error = res.message
					return null
				}
				this.submitStatus = 'PENDING'
				setTimeout(() => {
					this.submitStatus = 'OK'
					this.msg = res.message
				}, 500)
			} 
		},  
		async lisConfiguracao2() {
			this.error = null
			let res = await adm.listConf(
				this.token,
				this.domain,
				)
				if (!res.next) {
				 
					this.error = res.message
					return null
				}
				this.submitStatus = 'PENDING'
				setTimeout(() => {
					this.submitStatus = 'OK'
					this.msg = res.message
				}, 500)
		 
		}, 

		async lisConfiguracao() {
			let res = await adm.listConf(
				this.token,
				this.domain,
				)
			  return res
		  },
	},

	async mounted() {

		this.domain = "gltda.com.br", 
		this.token = "eyJjb2RlIjoiYWRtXzYyODY5NjhlMDc5ZjQifQ==.5a917761750fff6699e776d88e8cb8f48dcfb0ac"
	//	this.domain = globalThis._instituicao.subdomain || globalThis._instituicao.domain, 
		// this.token = localStorage.getItem('token')
       this.lisConfiguracao2()
		let config = (await this.lisConfiguracao()).dados

         console.log(config)
			this.nome = config.nome ,
			this.email = config.email,
			this.subdomain = config.subdomaim,
			this.telefone = config.telefone,
			this.cpfCnpj = config.cpfCnpj 

		this.tamanho = this.cpfCnpj.length
		if (this.tamanho < 12) {
			this.jms = true
			this.radioFalse= true
		} else if (this.tamanho >= 12) {
			this.jms = false
			this.radioTrue= true
		} 

	},


    template: await get_template('./assets/js/view/instituicoes/editar_instituicoes')
}