import get_template from '../../componentes/get_template.js'
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

	computed: {

        planos() {
            let lista
            lista = this.dados.filter((filtrar) => {
                return filtrar.fk !== "10";
            })
            return lista
        }, 
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
            window.location.href = "#/planos/editar"
        },

		async eliminar(dados) {
            if (confirm('deseja excluir este Plano ?')) {
                this.error = null
                let res = await adm.eliminaPlanosDigital(
                    this.token,
                    this.id = dados.id,

                )
                if (!res.next) {
                    
                    this.error = res.message
                    return null
                }

                this.msg = res.message,
                    setTimeout(() => this.msg = "", 5000);


                this.dados = (await this.listar()).payload 
                 
            }
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
		var planos = window.localStorage.getItem('instituicao_id').replace(/[^\d]+/g,'') ; 
		this.fk = planos
		this.dados = (await this.listar()).payload
       
	   
	},

    template: await get_template('./assets/js/views/planos/planos')
}