import get_template from '../../components/get_template.js'
import adm from "../../../../../static/js/api/adm.js"


export default {
 

	data: function () {
		return {
			gravatar: '../painel/assets/image/gravatar.png',
			jms: false,
			id: null,
			nome: null,
			email: null,
			senha: null,
			telefone: null,
			credencial_id: null,
			token: null,
			secret: null,
			lista_dados: [],
			id: null,
			nome_identificacao: null,
			recursos: null,

		}
	},

	methods: {
		
		async editarUsuario() {
			this.error = null

			let res = await adm.editarSubadm(
				this.nome,
				this.telefone,
				this.credencial_id,
				this.email,
				this.secret,
				this.token,

			)
			if (!res.next) {
				this.error = res.message
				return null
			}

		},

		async listar() {
		    let res = await adm.listarCredencial( localStorage.getItem('token') )
			return res
		},
	},


	async mounted() {
		this.nome = globalThis._usuario.nome
		this.telefone = globalThis._usuario.telefone
		this.credencial_id = globalThis._usuario.credencial_id
		this.email = globalThis._usuario.email
		this.secret = globalThis._usuario.secret

		this.lista_dados = (await this.listar()).dados
	
		
	},

    template: await get_template('./assets/js/view/usuarios/editar')
}
 