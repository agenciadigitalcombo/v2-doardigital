import get_template from '../../components/get_template.js'
import adm from "../../../../../static/js/api/adm.js" 

export default {
  

	data: function () {
		return {
			id: null,
			plano_id: null,
			nome: null,
			send_message: null,
			instituicao_max: null,
			quant_disparos: null,
			amount: null,
			status: null,
	        token: null,
     	    dados: [],

			 fk: null,
        }
    },

	filters: {
        is_price(price) {
            let amount = (price / 100).toLocaleString('pt-br', { minimumFractionDigits: 2 })
            return `R$ ${amount}`
        }
    },
	
	methods: {
        async listar() {
            let res = await adm.listarPlanoDigital(
				this.fk
			)
            return res
        },

		async editar(id) {
			globalThis._planos = this.dados.find(user => user.id == id)
            window.location.href = "#/plano-digital/editar"
        },

		async statusx(status) {
			this.error = null
			this.plano_id= status 
			let res = await adm.onOff(
				this.plano_id,
				this.token,
			)
			if (!res.next) {
				console.log(res)
				this.error = res.message
				return null
			}
			
		},	
	
	},

	async mounted() {
		this.fk = window.localStorage.getItem('instituicao_id');
		this.dados = (await this.listar()).payload
       
	   
	},

    template: await get_template('./assets/js/view/planos_digital/planos-digital')
}