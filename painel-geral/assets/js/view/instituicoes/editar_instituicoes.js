import get_template from '../../components/get_template.js'
import adm from "../../../../../static/js/api/adm.js" 
const { required, maxLength, minLength, between } = window.validators

export default {

	data: function () {
		return {
			token: null,
			nome: null, 
			email: null,
			telefone: null,
			domain: null, 
			razao_social: null,
			submitStatus: null, 
			adm_fk: null,
		  
			cep: null,
			logradouro: null,
			numero: null,
			complemento: null,
			bairro: null,
			cidade: null,
			estado: null,

			msg: null,
			error: null,
			tell: '',
			jms: null,
			type: 'A',

			isInforma: true,
			isEndereco: false,
			isBanco: false,

		}
	},

 

	methods: {
		instituicao() {
			this.type = 'A'
			this.isInforma = true,
				this.isEndereco = false,
				this.isBanco = false
		},

		endereco() {
			this.type = 'B'
			this.isInforma = false,
				this.isEndereco = true,
				this.isBanco = false
		},

		banco() {
			this.type = 'C'
			this.isInforma = false,
				this.isEndereco = false,
				this.isBanco = true
		},

		validaTell(event) {
			var phone = this.telefone.replace(/\D/g, "");

			if (phone.length < 11) {

				this.tell = '(##) ####-####'
			} else {
				this.tell = '(##) #####-####'
			}
		},

		tiraHifen(event) {
			this.tell = '(##) #####-####'
		},

		async validDomain() {
			this.error = null
			let res = await adm.validarDomain(this.domain)
			if (!res.next) {
				// this.next = res.next
				this.jms = res.next,
					this.error = res.message
				return null
			}
			// this.next = res.next
			this.jms = res.next,
				this.msg = res.message
			return res
		},

		searchCep() {
			if (this.cep.length == 8) {
				axios.get(`https://viacep.com.br/ws/${this.cep}/json/`)
					.then(response => {
						this.error = ""
						this.logradouro = response.data.logradouro,
							this.bairro = response.data.bairro,
							this.cidade = response.data.localidade,
							this.estado = response.data.uf

						if (response.data.erro) {
							this.error = "Número do CEP inválido pretendes Preecher manualmente ?? "
						}
					}
					)
					.catch(error =>
						error
					)
			}
		},

		async editaInstituicao() {
			this.error = null 
			 
				let res = await adm.alterarInstituicao(
					this.token,
					this.institution_fk,
					this.nome,
					this.email,
					this.telefone,
					this.domain,
					this.logo,
					this.icon,
					this.cor,
					this.titulo,
					this.tags,
					this.descricao,
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
					this.jms = "erro"
					return null
				}
				this.submitStatus = 'PENDING'
				setTimeout(() => {
					this.submitStatus = 'OK'
					this.msg = res.message
					this.jms = "sucesso"
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

	 
		this.token = localStorage.getItem('token')
		this.domain = globalThis._instituicao.subdomain || globalThis._instituicao.domain

		let config = (await this.lisConfiguracao()).payload


		this.institution_fk = config.institution_fk,
			this.nome = config.nome,
			this.email = config.email,
			this.telefone = config.telefone,
		 

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

		this.domain = config.domain, 
  
			this.cep = config.endereco.cep,
			this.logradouro = config.endereco.logadouro,
			this.numero = config.endereco.numero,
			this.complemento = config.endereco.complemento,
			this.bairro = config.endereco.bairro,
			this.cidade = config.endereco.cidade,
			this.estado = config.endereco.estado




	},


	template: await get_template('./assets/js/view/instituicoes/editar_instituicoes')
}