import get_template from '../../components/get_template.js'
import adm from "../../../../../static/js/api/adm.js"
const { required, minLength, between } = window.validators

export default {

	data: function () {
		return {
			nome_fantasia: null,
			razao_social: null,
			subdomaim: null,
			tipo_empresa: null,
			email: null,
			cnpj: null,
			telefone: null,
			jms: true,
			id: null,
			instituicao_id: null, 
			cep: null,
			logradouro: null,
			numero: null,
			complemento: null,
			bairro: null,
			cidade: null,
			estado: null,
			secret: null,
			token: null,
			msg: "",
			error: null,
 
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
		cep: {
			required,
			minLength: minLength(8)
		},
	},

	methods: {

		async cadastrarEndereco() {
			this.error = null 
				let res = await adm.cadastrarInstituicao(
				this.token,
				this.nome_fantasia,
				this.razao_social,
				this.subdomaim,
				this.tipo_empresa,
				this.email,
				this.cnpj,
				this.telefone, 
				this.logradouro,
				this.complemento,
				this.bairro,
				this.cidade,
				this.estado,
				this.numero,
				this.cep,


			)
			if (!res.next) {
				this.error = res.message
				return null
			}
			localStorage.setItem("instituicao_id", await this.infoSubdomain(globalThis._subdomaim));
			window.location.href = "#/bancoInstituicoes"
		},

		async infoSubdomain(subdomaim) {
			let res = await adm.todoSubdomain(
				subdomaim
			)

			return res.dados_instituicao.id
		},

		async eliminaEndereco() {
			let res = await adm.eliminaEndereco(
				this.secret,
			)
			if (!res.next) {
				console.log(res)
				this.error = res.message
				return null
			}

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
		}

	},

	async mounted() {

		this.nome_fantasia = globalThis._nome
		this.razao_social = globalThis._recebedor
		this.subdomaim = globalThis._subdomaim
		this.tipo_empresa = globalThis._empresa
		this.email = globalThis._email
		this.cnpj = globalThis._cnpj
		this.telefone = globalThis._telefone
	},

	template: await get_template('./assets/js/view/instituicoes/local_instituicoes')
}