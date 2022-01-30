import get_template from '../../components/get_template.js'
import adm from "../../../../../static/js/api/adm.js"

export default {
    data: function () {
        return {
            title: "Meu Perfil",
            nome: null,
			token: null,
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
			let res = await adm.ListarPerfil(localStorage.getItem('token'))
			return res
		},
	},
	async mounted() {
		this.token = localStorage.getItem('token')
		let dados = (await this.listar()).dados
 
		this.nome = dados.nome
		this.email = dados.email
		this.cpf = dados.cpf
		this.telefone = dados.telefone
		this.token = dados.token
		 this.data_nascimento =  dados.data_nascimento.split('-').reverse().join('/');
		
		
	},
    template: await get_template('./assets/js/view/perfil/home')
}