import get_template from '../../components/get_template.js'
import adm from "../../../../../static/js/api/adm.js"

export default {
   
    data: function () {

		return {
			token: null,
			nome_identificacao: null,
			// recursos: null,
			msg: null,
			isCheckAll: false,
			permisao: ['Inicio', 'Doadores', 'Doações', 'Credenciais', 'Usuários', 'Minhas Instituições', 'Divisão Pagamento',
				'Metas', 'Modelo de E-mails', 'Configuração', 'Perfil', 'Modulos', 'Meu Plano', 'Carteira', 'QR CODE'],
			jms: [],
			recursos: ""
		}
	},

	async mounted() {
		this.jms = globalThis._usuario.recursos.split(', ')
		this.nome_identificacao = globalThis._usuario.nome_identificacao
		this.id = globalThis._usuario.id
	},

	methods: {
		
		
		async alterarCredencia() {
			this.error = null

			this.recursos = "";
			for (var key in this.jms) {
				this.recursos += this.jms[key] + ", ";
			}
			let res = await adm.atualizarCredencia(
				this.id,
				this.nome_identificacao,
				this.recursos,
			)
			if (!res.next) {
			 
				this.error = res.message
				return null
			}
				 
			this.msg = res.message,
			setTimeout(() => this.msg = "", 3000);

			this.nome_identificacao= ""
		},

		checkAll() {
			this.isCheckAll = !this.isCheckAll;
			this.jms = [];

			if (this.isCheckAll) {
				for (var key in this.permisao) {
					this.jms.push(this.permisao[key]);
				}
			}
		},
		updateCheckall() {
			if (this.jms.length == this.permisao.length) {
				this.isCheckAll = true;
			} else {
				this.isCheckAll = false;
			}
		},

		printValues() {
			this.recursos = "";

			for (var key in this.jms) {
				this.recursos += this.jms[key] + ", ";

			}
		}

	},


    template: await get_template('./assets/js/view/credenciais/editar_credencial')
}