import get_template from '../../components/get_template.js'
import adm from "../../../../../static/js/api/adm.js"

export default {
  
	data: function () {

		return {
			token: null,
			nome: null,
			// recursos: null,
			msg: null,
			isCheckAll: false,
			permisao: ['inicio', 'doadores', 'doacoes', 'credenciais', 'usuarios', 'sass', 'planos', 'planos_digital', 'divisao',
				'metas', 'modulos', 'modelo_de_emails', 'configuracao', 'perfil', 'Modulos', 'meu_plano', 'wallet', 'qr_code'],
				
				permisao_nome: ['Inicio', 'Doadores', 'Doações', 'Credenciais', 'Usuários', 'Minhas Instituições', 'Divisão Pagamento',
				'Metas', 'Modelo de E-mails', 'Configuração', 'Perfil', 'Modulos', 'Meu Plano', 'Carteira', 'QR CODE'],
			jms: [],
			recursos: ""
		}
	},

	async mounted() {

	},

	methods: {
		async adicionaCredencia() {
			this.error = null

			this.recursos = "";
			for (var key in this.jms) {
				this.recursos += this.jms[key] + ", ";
			}

			let res = await adm.cadastrarCredencia(
				this.token,
				this.nome,
				this.recursos
			)
			if (!res.next) {
				console.log(res)
				this.error = res.message
				return null
			}

			this.msg = res.message,
				setTimeout(() => this.msg = "", 3000); 
				this.nome= "",
				window.location.href = `#/credenciais`	
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


    template: await get_template('./assets/js/view/credenciais/nova_credencial')
}