import get_template from '../../components/get_template.js'
import adm from "../../../../../static/js/api/adm.js"

export default {

	data: function () {

		return {
			adm_fk: null,
			token: null,
			nome: null,
			subdomain: null,
			dominio: null,
			search: "",
			dados: [],
		}

	},

	computed: {
 
		filtraCredencial() {
			return this.dados.filter((credencial) => {
				return credencial.nome.match(this.search) || credencial.subdomain.match(this.search);
			})
		}
	},

	async mounted() {
		this.token = localStorage.getItem('token')
		let str = this.token.split('.')[0]
		let encodedStr = atob(str); 
		var res =  JSON.parse(encodedStr);
		this.adm_fk = res.code


		this.dados = (await this.listar()).payload
		 
 
		this.filtraCredencial.reverse();
	},
	 
	methods: {

		async listar() {
			let res = await adm.listarInstutuicao(
			    this.token,
				this.adm_fk,
			)
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
			this.institution_fk = item.institution_fk
			this.nome = item.nome
			this.subdomain = item.subdomain

			this.institution_fk = window.localStorage.getItem("instituicao_id")


			localStorage.setItem("instituicao_id", this.institution_fk);
			localStorage.setItem("instituicao_nome", this.nome);
			localStorage.setItem("instituicao_subdomaim", this.domain || this.subdomain);
			  
			window.location.href = "/painel/#/"
		},
	
	},

    template: await get_template('./assets/js/view/instituicoes/home')
}