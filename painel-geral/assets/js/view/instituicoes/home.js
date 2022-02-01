import get_template from '../../components/get_template.js'
import adm from "../../../../../static/js/api/adm.js"

export default {

	data: function () {

		return {
			id: "",
			token: null,
			nome_fantasia: null,
			subdomaim: null,
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
				console.log(res)
				this.error = res.message
				return null
			}

		},

		async editar(id) { 
			globalThis._instituicao = this.dados.find(user => user.id == id);
			window.location.href = "#/instituicoes/editar"
		},
	},

    template: await get_template('./assets/js/view/instituicoes/home')
}