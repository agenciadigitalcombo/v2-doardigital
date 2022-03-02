import get_template from '../../components/get_template.js'
import adm from "../../../../../static/js/api/adm.js"
const { required, minLength } = window.validators

export default {
   
    
	data: function () {
		return {
			instituicao_id: null,
			nome_fantasia: null,
			razao_social: null,
			sub_domain: null,
			email: null,
			cnpj: null,
			telefone: null,
			msg: null,
			submitStatus: null,
			jms: true,
			radioFalse: false,
			radioTrue: false,
			tamanho: "",
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
		sub_domain: {
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
					this.instituicao_id,
					this.nome_fantasia,
					this.razao_social,
					this.email,
					this.cnpj,
					this.telefone,
				)
				if (!res.next) {
					console.log(res)
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

		async lisConfiguracao() {
			let res = await adm.listConf(this.instituicao_id = globalThis._instituicao.id,)
			  return res
		  },
	},

	async mounted() {

		let config = (await this.lisConfiguracao()).dados

		this.instituicao_id = globalThis._instituicao.id,
  
			this.nome_fantasia = config.nome_fantasia ,
			this.email = config.email,
			this.sub_domain = config.subdomaim,
			this.telefone = config.telefone,
			this.razao_social = config.razao_social ,
			this.cnpj = config.cnpj 

		this.tamanho = this.cnpj.length
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