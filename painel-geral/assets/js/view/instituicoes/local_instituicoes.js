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

		async cadastrarEndereco() { 
			this.error = null

			let res = await adm.enderecoInstituicao(
				this.token,
				await this.infoSubdomain(globalThis._subdomaim),
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

  
	created() {
		this.instituicao_id = localStorage.getItem('instituicao_id')
	},
    template: await get_template('./assets/js/view/instituicoes/local_instituicoes')
}