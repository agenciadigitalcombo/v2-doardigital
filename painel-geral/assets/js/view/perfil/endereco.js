import get_template from '../../components/get_template.js'
import adm from "../../../../../static/js/api/adm.js"  
const { required, minLength, between } = window.validators

export default {
     
	data: function () {
		return {
			id: null,
			nome_identificacao: "admin",
			cep: null,
			logadouro: null,
			numero: null,
			complemento: null,
			bairro: null,
			cidade: null,
			estado: null,
			secret: null,
			token: null,
			msg: "",
			items: [],
			data: null,
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

			let res = await adm.atualizarEndereco(
				this.token,
				this.nome_identificacao,
				this.cep,
				this.logadouro,
				this.numero,
				this.complemento,
				this.bairro,
				this.cidade,
				this.estado,

			)
			if (!res.next) {
				// this.error = res.message
				this.msg = res.message
				return null
			}

			this.msg = res.message,
				setTimeout(() => this.msg = "", 6000);
		},

		async listarEndereco() {
			let res = await adm.listarEndereco(
				(this.token)
			)
			return res
		},


		searchCep() {
			if (this.cep.length == 8) {
				axios.get(`https://viacep.com.br/ws/${this.cep}/json/`)
					.then(response => {
						this.cep = this.cep.replace(/[^\d]+/g, '')
						this.logadouro = response.data.logradouro,
							this.bairro = response.data.bairro,
							this.cidade = response.data.localidade,
							this.estado = response.data.uf
					}
					)
					.catch(error =>
						console.log(error)
					)
			}
		}
	},

	async mounted() {

		// Rua/Avenida Nº
		let enderecoDados = (await this.listarEndereco()).dados || {}
		this.logadouro = enderecoDados.logadouro
		this.cep = enderecoDados.cep
		this.nome_identificacao = enderecoDados.nome_identificacao
		this.numero = enderecoDados.numero
		this.complemento = enderecoDados.complemento
		this.bairro = enderecoDados.bairro
		this.cidade = enderecoDados.cidade
		this.estado = enderecoDados.estado
		this.id = enderecoDados.id


	},

	created() {
		this.token = localStorage.getItem('token')
	},
 
    template: await get_template('./assets/js/view/perfil/endereco')
}

