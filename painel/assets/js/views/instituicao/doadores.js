import get_template from '../../componentes/get_template.js'
import adm from "../../../../../static/js/api/adm.js" 

export default {
    
	data: function () {
		return {
			token: null,
			instituicao_fk: "",

			quantRec: null,
			quantUnico: null,
			valorUnico: null,
			valorRecorrente: null,
			doadores: [],
			search: "",
			paginaAtual: 1,

		}
	},

	filters: {
        este_valor(price) {
            let valor = (price / 100).toLocaleString('pt-br', { minimumFractionDigits: 2 })
            return `R$ ${valor}`
        },
		esta_data(datas) {
            let data = datas.split('-').reverse().join('/');
            return `${data}`
        },
	},
	
    computed: {
 
		filtraDoadores() {
			return this.doadores.filter((doador) => {
			   return(
				 	doador.nome.toLowerCase().indexOf(this.search.toLowerCase()) > -1 ||
				//	doador.email.toLowerCase().indexOf(this.search.toLowerCase()) > -1 ||
				 	doador.cpf.toLowerCase().indexOf(this.search.toLowerCase()) > -1
				
			   )
			})
		}
	},

	methods: {

		async listarDoadores() {
			let res = await adm.listarDoadores(
				this.token,
				this.instituicao_fk
			)
			return res
		},

		estaActivo(semPagina) {
			//   return semPagina  == this.paginaAtual ? "active": ""
						   //        ou
			   if (semPagina == this.paginaAtual) {
				   return "active"
			   } else {
				   return ""
			   }
		   },

		   async editar(id){
			   globalThis._doador = this.doadores.find(doad => doad.id == id)
			   window.location.href = "#/doadorHitorico"
		   },

		   
		async istituicaoDashboard() {
			this.error = null
			let res = await adm.dashboardInstituicao(
				this.token,
				this.instituicao_id,
			)
			if (!res.next) {
				this.jms = res.next,
				 this.error = res.message
				return null
			}

			    this.jms = res.next,
				this.msg = res.message  
 
				this.quantRec = parseInt(res.dados.doadores.quantidade.recorrente)
				this.quantUnico = parseInt(res.dados.doadores.quantidade.unicos) 


			var unico1 = parseInt(res.dados.credit_card.unico.processing.total)
			var unico2 = parseInt(res.dados.credit_card.unico.authorized.total)
			var unico3 = parseInt(res.dados.credit_card.unico.paid.total)
			var unico4 = parseInt(res.dados.credit_card.unico.waiting_payment.total)
			var unico5 = parseInt(res.dados.credit_card.unico.refunded.total)
			var unico6 = parseInt(res.dados.credit_card.unico.pending_refund.total)
			var unico7 = parseInt(res.dados.credit_card.unico.refused.total)
			var unico8 = parseInt(res.dados.credit_card.unico.chargedback.total)
			
			var unico11 = parseInt(res.dados.pix.unico.processing.total)
			var unico21 = parseInt(res.dados.pix.unico.authorized.total)
			var unico31 = parseInt(res.dados.pix.unico.paid.total)
			var unico41 = parseInt(res.dados.pix.unico.waiting_payment.total)
			var unico51 = parseInt(res.dados.pix.unico.refunded.total)
			var unico61 = parseInt(res.dados.pix.unico.pending_refund.total)
			var unico71 = parseInt(res.dados.pix.unico.refused.total)
			var unico81 = parseInt(res.dados.pix.unico.chargedback.total)

			var unico12 = parseInt(res.dados.boleto.unico.processing.total)
			var unico22 = parseInt(res.dados.boleto.unico.authorized.total)
			var unico32 = parseInt(res.dados.boleto.unico.paid.total)
			var unico42 = parseInt(res.dados.boleto.unico.waiting_payment.total)
			var unico52 = parseInt(res.dados.boleto.unico.refunded.total)
			var unico62 = parseInt(res.dados.boleto.unico.pending_refund.total)
			var unico72 = parseInt(res.dados.boleto.unico.refused.total)
			var unico82 = parseInt(res.dados.boleto.unico.chargedback.total)
			
			this.valorUnico =
			 unico1 + unico2 + unico3 + unico4 + unico5 + unico6 + unico7 + unico8 +
			 unico11 + unico21 + unico31 + unico41 + unico51 + unico61 + unico71 + unico81 +
			 unico12 + unico22 + unico32 + unico42 + unico52 + unico62 + unico72 + unico82
			 
			
 

				var recorente1 = parseInt(res.dados.credit_card.recorrente.processing.total)
				var recorente2 = parseInt(res.dados.credit_card.recorrente.authorized.total)
				var recorente3 = parseInt(res.dados.credit_card.recorrente.paid.total)
				var recorente4 = parseInt(res.dados.credit_card.recorrente.waiting_payment.total)
				var recorente5 = parseInt(res.dados.credit_card.recorrente.refunded.total)
				var recorente6 = parseInt(res.dados.credit_card.recorrente.pending_refund.total)
				var recorente7 = parseInt(res.dados.credit_card.recorrente.refused.total)
				var recorente8 = parseInt(res.dados.credit_card.recorrente.chargedback.total)
				
				var recorente11 = parseInt(res.dados.pix.recorrente.processing.total)
				var recorente21 = parseInt(res.dados.pix.recorrente.authorized.total)
				var recorente31 = parseInt(res.dados.pix.recorrente.paid.total)
				var recorente41 = parseInt(res.dados.pix.recorrente.waiting_payment.total)
				var recorente51 = parseInt(res.dados.pix.recorrente.refunded.total)
				var recorente61 = parseInt(res.dados.pix.recorrente.pending_refund.total)
				var recorente71 = parseInt(res.dados.pix.recorrente.refused.total)
				var recorente81 = parseInt(res.dados.pix.recorrente.chargedback.total)
	
				var recorente12 = parseInt(res.dados.boleto.recorrente.processing.total)
				var recorente22 = parseInt(res.dados.boleto.recorrente.authorized.total)
				var recorente32 = parseInt(res.dados.boleto.recorrente.paid.total)
				var recorente42 = parseInt(res.dados.boleto.recorrente.waiting_payment.total)
				var recorente52 = parseInt(res.dados.boleto.recorrente.refunded.total)
				var recorente62 = parseInt(res.dados.boleto.recorrente.pending_refund.total)
				var recorente72 = parseInt(res.dados.boleto.recorrente.refused.total)
				var recorente82 = parseInt(res.dados.boleto.recorrente.chargedback.total)
				
				this.valorRecorrente =
				 recorente1 + recorente2 + recorente3 + recorente4 + recorente5 + recorente6 + recorente7 + recorente8 +
				 recorente11 + recorente21 + recorente31 + recorente41 + recorente51 + recorente61 + recorente71 + recorente81 +
				 recorente12 + recorente22 + recorente32 + recorente42 + recorente52 + recorente62 + recorente72 + recorente82
				 

			return res

		},
	},

	async mounted() {
		
		//this.istituicaoDashboard() 
		this.doadores = (await this.listarDoadores()).payload.reverse() || {}
	},

	created() {
		this.instituicao_fk = window.localStorage.getItem("instituicao_id")
	}, 



    template: await get_template('./assets/js/views/instituicao/doadores')
}