import get_template from '../../componentes/get_template.js'
import adm from "../../../../../static/js/api/adm.js"

export default {



    data: function () {
		return { 
			token: null,
			instituicao_fk: null,
			host: null,
			protocolo: null,
			porta: null,
			email: null,
			senha: null,
			msg: null,
            error: null,
        }
    },
	methods: {
	
		async adicionaEmail() {
			this.error = null
		
				let res = await adm.savarSmtp(
					this.token,
					this.instituicao_fk,
					this.host,
					this.protocolo,
					this.porta,
					this.email,
					this.senha,
				)
				if (!res.next) {
						setTimeout(() => this.msg = "", 5000);
					this.error = res.message
					return null
				}
				this.msg = res.message
		}, 

		async listar() {
            let res = await adm.listarSmtp(
                this.token,
                this.instituicao_fk,
			)			
            return res
        },

    },

	async mounted() {
		this.instituicao_fk = window.localStorage.getItem('instituicao_id');
		this.token = window.localStorage.getItem('token');

		var smtp = (await this.listar()).payload
		this.instituicao_fk = smtp.instituicao_fk,
		this.host = smtp.host,
		this.protocolo = smtp.protocolo,
		this.porta = smtp.porta,
		this.email = smtp.email,
		this.senha = smtp.senha

	},
	
    template: await get_template('./assets/js/views/modulos/modulosEmail')
}