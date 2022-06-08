import get_template from '../../componentes/get_template.js'
import adm from "../../../../../static/js/api/adm.js"

export default {



    data: function () {
        return {
            doacao_id: "",
            institution_fk: "",
            data: "",
            doacoes: [], 
            dadosPagina: [],
            paginaAtual: 1,
            search: "",
            dataFinal: null,
            total: "",
            pago: "",
            aberto: "",
            vencido: "",
            mostraresconder:
            {
                'show': false
            },
            search: "",

            elementoPaginacao: 25, 
            maxVisibleButtons: 5,
            paginaAtual: 1,
            maxLeft: null,
            maxRight: null,
 
        }
    },


    computed: {

		filtraDoacoes() {
			return this.dadosPagina.filter((doacao) => {
				return (
					//doacao.nome.toLowerCase().indexOf(this.search.toLowerCase()) > -1 ||
					//	doacao.email.toLowerCase().indexOf(this.search.toLowerCase()) > -1 ||
					doacao.doador_nome.toLowerCase().indexOf(this.search.toLowerCase()) > -1

				)
			})
		}
	},


    methods: {

        async listarDoacoes() {
			let res = await adm.listarDoacoes(
				this.token,
				this.institution_fk
			)
			return res
		},

        totalPagina() {
            return Math.ceil(this.doacoes.length / this.elementoPaginacao)
        },

        atualizarPag() {
            this.getPagina(this.paginaAtual)
        },

        calculateMaxVisible() {
            let maxLeft = (this.paginaAtual - Math.floor(this.maxVisibleButtons / 2))
            let maxRight = (this.paginaAtual + Math.floor(this.maxVisibleButtons / 2))

            if (maxLeft < 1) {
                maxLeft = 1
                maxRight = this.maxVisibleButtons
            }

            if (maxRight > this.totalPagina()) {
                maxLeft = this.totalPagina() - (this.maxVisibleButtons - 1)
                maxRight = this.totalPagina()
                if (maxLeft < 1) {
                    maxLeft = 1
                }
            }

            console.log(maxLeft, maxRight)

            let numbers = new Array();
            for (var i = maxLeft; i <= maxRight; i++) {
                numbers.push(i);
            }
            return numbers;
        },

        botaoJmsPaginacao() {
            return this.calculateMaxVisible()
        },

        getPagina(semPagina) {
            this.paginaAtual = semPagina;
            this.dadosPagina = [];
            let inicio = (semPagina * this.elementoPaginacao) - this.elementoPaginacao;
            let fim = (semPagina * this.elementoPaginacao);
            this.dadosPagina = this.doacoes.slice(inicio, fim);
 
        },

        getProximo() {
            if (this.paginaAtual < this.totalPagina()) {
                this.paginaAtual++
            }
            this.getPagina(this.paginaAtual)
        },

        getUltima() {
            if (this.paginaAtual < this.totalPagina()) {
                this.paginaAtual = this.totalPagina()
            }
            this.getPagina(this.paginaAtual)
        },

        getAnterior() {
            if (this.paginaAtual > 1) {
                this.paginaAtual--
            }
            this.getPagina(this.paginaAtual)
        },
        estaActivo(semPagina) {
            return semPagina == this.paginaAtual ? "active" : ""
            //        ou
            //  if (semPagina == this.paginaAtual) {
            //     return "active"
            //   } else {
            //    return "" 
            //  }  
        },

    },

    async mounted() {
        this.doacoes = (await this.listarDoacoes()).payload.reverse() || {}
        this.getPagina(1) 
            console.log(this.dadosPagina)
    },


	created() {
		this.institution_fk = window.localStorage.getItem("instituicao_id")
	},

    template: await get_template('./assets/js/views/instituicao/doacoes')
}