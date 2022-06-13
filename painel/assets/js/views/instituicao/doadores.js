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
          
			modal: false

		}
	},

	filters: {
		este_valor(price) {
			var price  = parseFloat(price); 
            var valor = price.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
         
            return `${valor}`
		},
 
		esta_data(datas) {
			let data = datas.split('-').reverse().join('/');
			return `${data}`
		},

	 cpf(v){
		v=v.replace(/\D/g,"")                   
    v=v.replace(/(\d{3})(\d)/,"$1.$2")      
    v=v.replace(/(\d{3})(\d)/,"$1.$2")       
                                          
    v=v.replace(/(\d{3})(\d{1,2})$/,"$1-$2")  
    return v
		},

		recorrente(status) {
			let apresentar = {
				false: 'UNICO',
				true: 'RECORRENTE',
			}
			return apresentar[status]
		}
	},

	computed: {

		filtraDoadores() {
			return this.doadores.filter((doador) => {
				return (
					doador.nome.toLowerCase().indexOf(this.search.toLowerCase()) > -1 ||
					//	doador.email.toLowerCase().indexOf(this.search.toLowerCase()) > -1 ||
					doador.cpf.toLowerCase().indexOf(this.search.toLowerCase()) > -1

				)
			})
		},

		filtraUnica() {
			return this.doadores.filter((doador) => {
				return (
					doador.recorrente === false

				)
			})
		},

		filtraRecorente() {
			return this.doadores.filter((doador) => {
				return (
					doador.recorrente === true

				)
			})
		}
	},

	methods: {
		 handleClickOutside (event){
			let overlay = document.getElementById("overlay");
			let modal = document.getElementById("meu_modal");
			if (!modal.contains(event.target)) {
				modal.style.display = 'none';
				overlay.style.display = 'none';
				document.removeEventListener('click', this.handleClickOutside, false);
			}
		},
		
		 openModal () {
			let overlay = document.getElementById("overlay");
			let modal = document.getElementById("meu_modal");
			overlay.style.display = 'flex'
			modal.style.display = 'flex'
			setTimeout(() => { document.addEventListener('click', this.handleClickOutside, false) }, 200);
		},

		modalAcao(){
				if(this.modal == false){ 
					this.modal = true 
				}else{
					this.modal = false 
				}

		},

		async exportar() {

			const FIX = 'data:text/csv;charset=utf-8,'
			const ENTER = '%0A'
				; (() => {
					const $link = document.querySelector('.js-baixar')
					let linhas = this.filtraDoadores.map(u => `${u.registro};${u.nome};${u.cpf};${u.sexo};${u.nascimento};${u.email};${u.telefone}${ENTER}`)
					//	let linhas = `${'olaa'}${ENTER}`
					$link.href = FIX + linhas
				})()

		},

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

		async editar(cpf) {
			globalThis._doador = this.doadores.find(doad => doad.cpf == cpf)
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
 
			return res

		},
	},

	async mounted() {

		//this.istituicaoDashboard() 
		this.doadores = (await this.listarDoadores()).payload.reverse() || {}

	 
        var QUnico = this.filtraUnica;
		this.quantUnico = QUnico.length

		 var QRecorente = this.filtraRecorente;
		this.quantRec = QRecorente.length
		 
	},

	created() {
		this.instituicao_fk = window.localStorage.getItem("instituicao_id")
	},



	template: await get_template('./assets/js/views/instituicao/doadores')
}