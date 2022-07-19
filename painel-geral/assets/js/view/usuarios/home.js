import get_template from '../../components/get_template.js'
import adm from "../../../../../static/js/api/adm.js"


export default {
 
	data: function () {
        
		return {
			gravatar: '',
			nome: null,
			email: null,
			senha: null,
			telefone: null,
			credencial_id: null,
			dados: [],
			listaCredencial: [],
			nome_identificacao: null,
			recursos: null,
			secret: null,
			jms: {},
		}
	},
	methods: {
		async listar() {
			let res = await adm.listarSubadm(
				this.token,
				this.code,
			)
			return res
		},

		async listar_credencial() {
			let res = await adm.listarCredencial(localStorage.getItem('token'))
			return res
		},

		async editar(secret) {
			globalThis._usuario = this.dados.find(user => user.code == secret)
			window.location.href = "#/usuario-editar"
		},
	},


	async mounted() {
		this.token = localStorage.getItem('token')
	   let str = this.token.split('.')[0]
	   let encodedStr = atob(str); 
	   var res =  JSON.parse(encodedStr);
	   this.code = res.code

		this.dados = (await this.listar()).payload
 
		this.listaCredencial = (await this.listar_credencial()).payload 
        this.nome_identificacao = listaCredencial.nome_identificacao
        
		
	},
	filters: {
		nomeCredencial: (valor, lista) => lista.find(
			credencial => credencial.id == valor
		).recursos
	},
    template: await get_template('./assets/js/view/usuarios/home')
}