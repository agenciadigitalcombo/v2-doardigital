import get_template from '../../components/get_template.js'
import adm from "../../../../../static/js/api/adm.js"  
const { required, minLength, between } = window.validators

export default {
     
	data: function () {
		return {
			id: null,
			nome: "admin",
			cep: null,
			logradouro: null,
			numero: null,
			complemento: null,
			bairro: null,
			cidade: null,
			estado: null,
			secret: null,
			token: null,
			code: null,
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
				this.code, 
				this.cep,
				this.logradouro,
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
			 this.token, this.code
			)
			return res
		},


		searchCep() {
			if (this.cep.length == 8) {
				axios.get(`https://viacep.com.br/ws/${this.cep}/json/`)
					.then(response => {
						this.cep = this.cep.replace(/[^\d]+/g, '')
						this.logradouro = response.data.logradouro,
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

		this.token = localStorage.getItem('token')
		let str = this.token.split('.')[0]
		let encodedStr = atob(str); 
		var res =  JSON.parse(encodedStr);
		this.code = res.code
	 
		// Rua/Avenida Nº
		let enderecoDados = (await this.listarEndereco()).payload || {}
		this.logradouro = enderecoDados.logadouro
		this.cep = enderecoDados.cep
		this.nome = enderecoDados.nome
		this.numero = enderecoDados.numero
		this.complemento = enderecoDados.complemento
		this.bairro = enderecoDados.bairro
		this.cidade = enderecoDados.cidade
		this.estado = enderecoDados.estado
		this.id = enderecoDados.id
 
	},

	created() {
	
	},
 
    template: await get_template('./assets/js/view/perfil/endereco')
}

