import get_template from '../../components/get_template.js'
import adm from "../../../../../static/js/api/adm.js"


export default {
 
	data: function () {
        
		return {
			gravatar: 'https://doardigital.com.br/api/gravatar?email=brunnocriacoes@gmail.com',
			nome: null,
			email: null,
			senha: null,
			telefone: null,
			credencial_id: null,
			dados: [],
			listaCredencial: [],
			nome_identificacao: null,
			secret: null,
			jms: {},
		}
	},
	methods: {
		async listar() {
			let res = await adm.listarSubadm(localStorage.getItem('token'))
			return res
		},

		async listar_credencial() {
			let res = await adm.listarCredencial(localStorage.getItem('token'))
			return res
		},

		async editar(secret) {
			globalThis._usuario = this.dados.find(user => user.secret == secret)
			window.location.href = "#/usuario-editar"
		},
	},


	async mounted() {
		this.dados = (await this.listar()).dados

		this.listaCredencial = (await this.listar_credencial()).dados
		this.nome_identificacao = this.listaCredencial.nome_identificacao
		
	},
     
	filters: {
		nomeCredencial: (valor, lista) => lista.find(
			credencial => credencial.id == valor
		)
	},
    template: await get_template('./assets/js/view/usuarios/home')
}