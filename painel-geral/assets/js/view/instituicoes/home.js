import get_template from '../../components/get_template.js'
import adm from "../../../../../static/js/api/adm.js"

export default {

	data: function () {

		return {
			id: "",
			token: null,
			nome_fantasia: null,
			subdomaim: null,
			dominio: null,
			search: "",
			dados: [],
		}

	},

	computed: {
 
		filtraCredencial() {
			return this.dados.filter((credencial) => {
				return credencial.nome_fantasia.match(this.search) || credencial.id.match(this.search);
			})
		}
	},

	async mounted() {

		this.dados = (await this.listar()).dados
		this.id = this.dados.id,
		this.nome_fantasia = this.dados.nome_fantasia,
		this.subdomaim = this.dados.subdomaim,
		this.dominio = this.dados.dominio,
 
		this.filtraCredencial.reverse();
	},

	methods: {

		async listar() {
			let res = await adm.listarInstutuicao(localStorage.getItem('token'))
			return res
		},

		async statusx(status) {
			this.error = null
			this.instituicao_id = status
			let res = await adm.onoffIntituicao(
				this.instituicao_id,
				this.token,
			)
			if (!res.next) {
		 
				this.error = res.message
				return null
			}

		},

		async editar(id) { 
			globalThis._instituicao = this.dados.find(user => user.id == id);
			window.location.href = "#/editarInstituicoes"
		},


		addLocahostore(item) {
			this.id = item.id
			this.nome_fantasia = item.nome_fantasia
			this.subdomaim = item.subdomaim

			localStorage.setItem("instituicao_id", this.id);
			localStorage.setItem("instituicao_nome", this.nome_fantasia);
			localStorage.setItem("instituicao_subdomaim", this.dominio || this.subdomaim);
			 
			
			window.location.href = "/painel/#/dash"
		},
	
	},

    template: await get_template('./assets/js/view/instituicoes/home')
}