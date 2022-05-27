import get_template from '../../components/get_template.js'
import adm from "../../../../../static/js/api/adm.js"
const { required, maxLength, minLength, between } = window.validators

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

			adm_fk: null,
			account: null,
			accountDigit: null,
			accountName: null,
			agency: null,
			bank: null,
			bankAccountType: null,

			cep: null,
			logradouro: null,
			numero: null,
			complemento: null,
			bairro: null,
			cidade: null,
			estado: null,
			submitStatus: null,

			type: 'B',
			error: null,
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
		
		agency: {
			required,
			maxLength: maxLength(4)
		},

		accountName: {
			required,
			maxLength: maxLength(50)
		},
		account: {
			required,
			maxLength: maxLength(13)
		},
		accountDigit: {
			required,
			maxLength: maxLength(2)
		},
		bank: {
			required,
			maxLength: maxLength(4)
		},
	 

	},
 
	methods: {

		instituicao() {
			this.type = 'A'  
		},

		endereco() {
			this.type = 'B'  
		},
	 
		banco() {
			this.type = 'C'  
		},


		async editaInstituicao() {
			this.error = null
			this.$v.$touch()
			if (this.$v.$invalid) {
				this.submitStatus = 'ERROR'
			} else {

				let res = await adm.alterarInstituicao(
				this.token,
				this.institution_fk,
				this.nome,
				this.cpfCnpj,
				this.email,
				this.telefone,
				this.domain,
				this.logo,
				this.icon,
				this.cor,
				this.titulo,
				this.tags,
				this.descricao,
				this.tipoEmpresa,
				this.cep,
				this.logradouro,
				this.numero,
				this.complemento,
				this.bairro,
				this.cidade,
				this.estado,

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

		async lisConfiguracao() {
			let res = await adm.listConf(
				this.token,
				this.domain,
				)
			  return res
		  },
	},

	async mounted() {

	this.domain = globalThis._instituicao.subdomain || globalThis._instituicao.domain
	 this.token = localStorage.getItem('token')

		let config = (await this.lisConfiguracao()).payload
 
		 
		    this.institution_fk = config.institution_fk ,
			this.nome = config.nome ,
			this.email = config.email,
			this.telefone = config.telefone,
			this.cpfCnpj = config.cpfCnpj 
  
			this.logo = config.logo,
			//this.icon = config.icon,
			this.icon = "icon.png"
			//this.titulo = config.titulo,
			this.titulo = "titulo 0"
			//this.tags = config.tags,
			this.tags = "tags"
			//this.descricao = config.descricao,
			this.descricao = "tags mista cs"
			this.cor = config.cor 
			
			this.domain= config.domain,
			this.tipoEmpresa= config.tipoEmpresa,
 

			this.agency= config.agency,
			this.account= config.account,
			this.accountDigit= config.accountDigit,
			this.accountName= config.accountName,
			this.bank= config.bank,
			this.bankAccountType= config.bankAccountType,
		 
			this.cep= config.endereco.cep,
			this.logradouro= config.endereco.logadouro,
			this.numero= config.endereco.numero,
			this.complemento= config.endereco.complemento,
			this.bairro= config.endereco.bairro,
			this.cidade= config.endereco.cidade,
			this.estado= config.endereco.estado,
			alert(config.endereco.estado)

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