import get_template from '../../components/get_template.js'
import adm from "../../../../../static/js/api/adm.js"
const { required, minLength, between } = window.validators

export default {

	data: function () {
		return {
			id: null,
			instituicao_id: null,
			nome_identificacao: "instituicao",
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
		cep: {
			required,
			minLength: minLength(8)
		},
	},

	methods: {

		async editarEndereco() {
			this.error = null

			let res = await adm.enderecoInstituicao(
				this.token,
				this.id ,
				this.nome_identificacao,
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
			this.msg = res.message
		},

		async eliminaEndereco() {
			let res = await adm.eliminaEndereco(
				this.secret,
			)
			if (!res.next) { 
				this.error = res.message
				return null
			}
		},

		async listarEndereco() {
			let res = await adm.listarEnderecoInst(
				this.token,
				this.instituicao_id
			)
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
		}

	},

	async mounted() { 

		let enderecoDados = (await this.listarEndereco()).dados || {}
		this.logradouro = enderecoDados.logadouro   
		this.cep = enderecoDados.cep
		this.nome_identificacao = enderecoDados.nome_identificacao
		this.numero = enderecoDados.numero
		this.complemento = enderecoDados.complemento
		this.bairro = enderecoDados.bairro
		this.cidade = enderecoDados.cidade
		this.estado = enderecoDados.estado
	},

	created() {
		this.instituicao_id = globalThis._instituicao.id
		this.id = globalThis._instituicao.id
	},

    template: await get_template('./assets/js/view/instituicoes/local_editar_instituicoes')
}