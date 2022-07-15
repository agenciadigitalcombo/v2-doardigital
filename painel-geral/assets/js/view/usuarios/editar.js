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
			msg: null,
			error: null,
			jms: true,
			institution: [],
			institutionSub: [],
			sub_adm_fk: null

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

			this.jms = res.next,
				this.msg = res.message
			setTimeout(() => {
				window.location.href = "#/usuarios"
			}, 1200)
		},

		async listar() {
			let res = await adm.listarCredencial(localStorage.getItem('token'))
			return res
		},
		async listarInst() {
			let res = await adm.listarInstutuicao(
				this.token,
				this.adm_fk,
			)
			return res
		},
		async listarInst_sub() {
			let res = await adm.listarInstutuicao(
			    this.token,
				this.sub_adm_fk,
			)
			return res
		},
		async setAdm($el) {
			let adm_fk = this.sub_adm_fk
			let inst_fk = $el.target.value
			let isChecked = $el.target.checked ? "1" : "0"
			let resApi = await adm.setAdm(adm_fk, inst_fk, isChecked)
		},
		isAdministrate( inst_fk ) {
			return this.institutionSub.find( i => i.institution_fk == inst_fk )
		}
	},


	async mounted() {

		this.token = localStorage.getItem('token')
		let str = this.token.split('.')[0]
		let encodedStr = atob(str);
		var res = JSON.parse(encodedStr);
		this.adm_fk = res.code

		

		
		this.nome = globalThis._usuario.nome
		this.telefone = globalThis._usuario.telefone
		this.credencial_id = globalThis._usuario.credencial_id
		this.email = globalThis._usuario.email
		this.sub_adm_fk = globalThis._usuario.code
		
		this.institution = (await this.listarInst()).payload
		this.institutionSub = (await this.listarInst_sub()).payload
		console.log(this.institutionSub)

	},

	template: await get_template('./assets/js/view/usuarios/editar')
}

