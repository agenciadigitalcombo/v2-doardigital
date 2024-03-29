import get_template from '../../components/get_template.js'
import adm from "../../../../../static/js/api/adm.js"
const { required, maxLength, minLength, between } = window.validators

export default {

	data: function () {
		return {
			token: null,
			nome: null,
			cpfCnpj: null,
			email: null,
			telefone: null,
			subdomain: null,
			tipoEmpresa: "",
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

			msg: "",
			error: null,
			tell: '',
			jms: true,
			type: 'A',

			isInforma: true,
			isEndereco: false,
			isBanco: false,

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
		cep: {
			required,
			minLength: minLength(8)
		},


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
			this.isInforma = true,
				this.isEndereco = false,
				this.isBanco = false
		},

		saveCache() {
			let payload = {
				nome: this.nome,
				cpfCnpj: this.cpfCnpj,
				email: this.email,
				telefone: this.telefone,
				subdomain: this.subdomain,
				tipoEmpresa: this.tipoEmpresa,
				razao_social: this.razao_social,
				cep: this.cep,
				numero: this.numero,
				logradouro: this.logradouro,
				complemento: this.complemento,
				bairro: this.bairro,
				cidade: this.cidade,
				estado: this.estado,
				jms: this.jms,
				type: this.type,
			}
			sessionStorage.setItem("cacheNewInst", JSON.stringify(payload))
		},

		getCache() {
			let data = sessionStorage.getItem("cacheNewInst") || "{}"
			data = JSON.parse(data)
			Object.keys(data).forEach(k => {
				this[k] = data[k]
			})
		},

		delCache() {
			sessionStorage.removeItem("cacheNewInst")
		},

		endereco() {
			this.type = 'B'
			this.isInforma = false
			this.isEndereco = true
			this.isBanco = false
			this.saveCache()
		},

		banco() {
			this.type = 'C'
			this.isInforma = false
			this.isEndereco = false
			this.isBanco = true
			this.saveCache()
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

		async addInstituicao() {
			this.error = null
			let res = await adm.cadastrarInstituicao(
				this.token,
				this.nome,
				this.cpfCnpj,
				this.email,
				this.telefone,
				this.subdomain + window.location.hostname,
				this.tipoEmpresa,
				this.cep,
				this.logradouro,
				this.numero,
				this.complemento,
				this.bairro,
				this.cidade,
				this.estado,

				this.adm_fk,
				this.account,
				this.accountDigit,
				this.accountName,
				this.agency,
				this.bank,
				this.bankAccountType,
			)
			if (!res.next) {
				this.error = res.message
				return null
			}

			window.location.href = "#/instituicoes"
			this.delCache()


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
		this.token = localStorage.getItem('token')
		let str = this.token.split('.')[0]
		let encodedStr = atob(str);
		var res = JSON.parse(encodedStr);
		this.code = res.code


		let dados = (await this.listar()).payload
		this.adm_fk = dados.code

		this.getCache()

	},


	template: await get_template('./assets/js/view/instituicoes/nova_instituicoes')
}