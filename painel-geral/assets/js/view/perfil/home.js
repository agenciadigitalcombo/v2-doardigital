import get_template from '../../components/get_template.js'
import adm from "../../../../../static/js/api/adm.js"

export default {
    data: function () {
        return {
            title: "Meu Perfil",
			foto: null,
            nome: null,
			token: null,
			code: null,
			email: null,
			cpf: null,
			telefone: null,
			data_nascimento: null,
			error: null,
			data: null,
			msg: "",
			jms: "",
			dados: null,
        }
    },

	methods: {

		async alterarAdm() {
			this.error = null

			let res = await adm.atualizar(
				this.token,
				this.nome,
				this.cpf,
				this.telefone,
				this.data_nascimento,
				
			)
			if (!res.next) {
				console.log(res)
				this.msg = res.message,
				this.error = res.message
				return null
			}
			this.msg = res.message,
				setTimeout(() => this.msg = "", 3000);
		},

		updateForm(event) {
			this[event.name] = event.value
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
		 var res =  JSON.parse(encodedStr);
		 this.code = res.code

		let dados = (await this.listar()).payload
		this.nome = dados.nome
		this.email = dados.email
		this.cpf = dados.cpf
		this.telefone = dados.telefone 
		this.data_nascimento =  dados.nascimento.split('-').reverse().join('/');
		 
	},

    template: await get_template('./assets/js/view/perfil/home')
}