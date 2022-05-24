import get_template from '../../components/get_template.js'
import adm from "../../../../../static/js/api/adm.js"
const { required, minLength } = window.validators

export default {

	data: function () {
		return {
			token: null,
			nome: null,
			cpfCnpj: null,
			email: null,
			telefone: null,
			subdomain: null,
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

			msg: "",
			error: null,
			tell: '',
			jms: true,
			type: 'A',
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
	},

	methods: {
		instituicao() {
			this.type = 'A'
			
		},

		endereco() {
			this.type = 'B'
			
		},

		instituicao() {
			this.type = 'C'
			
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
			let res = await adm.validarDomain(this.subdomain)
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

		async addInstituicao() {
			this.error = null


			let res = await adm.cadastrarInstituicao(
				this.token,
				this.nome,
				this.cpfCnpj,
				this.email,
				this.telefone,
				this.subdomain,
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

			this.submitStatus = 'PENDING'
			setTimeout(() => {
				this.submitStatus = 'OK'
				//	window.location.href = "#/enderecoInstituicoes"
			}, 500)


		},

	},

	mounted() {


	},


	template: await get_template('./assets/js/view/instituicoes/nova_instituicoes')
}