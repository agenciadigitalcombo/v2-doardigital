import get_template from '../../componentes/get_template.js'
import adm from "../../../../../static/js/api/adm.js"

export default {



    data: function () {
        return {

            lista: [
                { nome: '2joaquim1', email: 'jjms@gm', is_price: '223232', status_pagamento: 'pago', tipo: 'recorrencia', },
                { nome: '2joaquim2', email: 'jjms@gm', is_price: '223232', status_pagamento: 'pago', tipo: 'recorrencia', },
                { nome: '2joaquim3', email: 'jjms@gm', is_price: '223232', status_pagamento: 'pago', tipo: 'recorrencia', },
                { nome: '2joaquim4', email: 'jjms@gm', is_price: '223232', status_pagamento: 'pago', tipo: 'recorrencia', },
                { nome: '2joaquim5', email: 'jjms@gm', is_price: '223232', status_pagamento: 'pago', tipo: 'recorrencia', },
                { nome: '2joaquim6', email: 'jjms@gm', is_price: '223232', status_pagamento: 'pago', tipo: 'recorrencia', },
                { nome: '2joaquim7', email: 'jjms@gm', is_price: '223232', status_pagamento: 'pago', tipo: 'recorrencia', },
                { nome: '2joaquim8', email: 'jjms@gm', is_price: '223232', status_pagamento: 'pago', tipo: 'recorrencia', },
                { nome: '2joaquim9', email: 'jjms@gm', is_price: '223232', status_pagamento: 'pago', tipo: 'recorrencia', },
                { nome: '2joaquim10', email: 'jjms@gm', is_price: '223232', status_pagamento: 'pago', tipo: 'recorrencia', },
                { nome: '2joaquim11', email: 'jjms@gm', is_price: '223232', status_pagamento: 'pago', tipo: 'recorrencia', },
                { nome: '2joaquim12', email: 'jjms@gm', is_price: '223232', status_pagamento: 'pago', tipo: 'recorrencia', },
                { nome: '2joaquim13', email: 'jjms@gm', is_price: '223232', status_pagamento: 'pago', tipo: 'recorrencia', },
                { nome: '2joaquim14', email: 'jjms@gm', is_price: '223232', status_pagamento: 'pago', tipo: 'recorrencia', },
                { nome: '2joaquim15', email: 'jjms@gm', is_price: '223232', status_pagamento: 'pago', tipo: 'recorrencia', },
                { nome: '2joaquim16', email: 'jjms@gm', is_price: '223232', status_pagamento: 'pago', tipo: 'recorrencia', },
                { nome: '2joaquim17', email: 'jjms@gm', is_price: '223232', status_pagamento: 'pago', tipo: 'recorrencia', },
                { nome: '2joaquim18', email: 'jjms@gm', is_price: '223232', status_pagamento: 'pago', tipo: 'recorrencia', },
                { nome: '2joaquim19', email: 'jjms@gm', is_price: '223232', status_pagamento: 'pago', tipo: 'recorrencia', },
                { nome: '2joaquim20', email: 'jjms@gm', is_price: '223232', status_pagamento: 'pago', tipo: 'recorrencia', },
                { nome: '2joaquim21', email: 'jjms@gm', is_price: '223232', status_pagamento: 'pago', tipo: 'recorrencia', },
                { nome: '2joaquim22', email: 'jjms@gm', is_price: '223232', status_pagamento: 'pago', tipo: 'recorrencia', },
                { nome: '2joaquim23', email: 'jjms@gm', is_price: '223232', status_pagamento: 'pago', tipo: 'recorrencia', },
                { nome: '2joaquim24', email: 'jjms@gm', is_price: '223232', status_pagamento: 'pago', tipo: 'recorrencia', },
                { nome: '2joaquim25', email: 'jjms@gm', is_price: '223232', status_pagamento: 'pago', tipo: 'recorrencia', },
                { nome: '2joaquim26', email: 'jjms@gm', is_price: '223232', status_pagamento: 'pago', tipo: 'recorrencia', },
                { nome: '2joaquim27', email: 'jjms@gm', is_price: '223232', status_pagamento: 'pago', tipo: 'recorrencia', },
                { nome: '2joaquim28', email: 'jjms@gm', is_price: '223232', status_pagamento: 'pago', tipo: 'recorrencia', },
                { nome: '2joaquim29', email: 'jjms@gm', is_price: '223232', status_pagamento: 'pago', tipo: 'recorrencia', },
                { nome: '2joaquim30', email: 'jjms@gm', is_price: '223232', status_pagamento: 'pago', tipo: 'recorrencia', },

                { nome: '2joaquim31', email: 'jjms@gm', is_price: '223232', status_pagamento: 'pago', tipo: 'recorrencia', },
                { nome: '2joaquim32', email: 'jjms@gm', is_price: '223232', status_pagamento: 'pago', tipo: 'recorrencia', },
                { nome: '2joaquim33', email: 'jjms@gm', is_price: '223232', status_pagamento: 'pago', tipo: 'recorrencia', },
                { nome: '2joaquim34', email: 'jjms@gm', is_price: '223232', status_pagamento: 'pago', tipo: 'recorrencia', },
                { nome: '2joaquim35', email: 'jjms@gm', is_price: '223232', status_pagamento: 'pago', tipo: 'recorrencia', },
                { nome: '2joaquim36', email: 'jjms@gm', is_price: '223232', status_pagamento: 'pago', tipo: 'recorrencia', },
                { nome: '2joaquim37', email: 'jjms@gm', is_price: '223232', status_pagamento: 'pago', tipo: 'recorrencia', },
                { nome: '2joaquim38', email: 'jjms@gm', is_price: '223232', status_pagamento: 'pago', tipo: 'recorrencia', },
                { nome: '2joaquim39', email: 'jjms@gm', is_price: '223232', status_pagamento: 'pago', tipo: 'recorrencia', },
                { nome: '2joaquim40', email: 'jjms@gm', is_price: '223232', status_pagamento: 'pago', tipo: 'recorrencia', },


                { nome: '2joaquim41', email: 'jjms@gm', is_price: '223232', status_pagamento: 'pago', tipo: 'recorrencia', },
                { nome: '2joaquim42', email: 'jjms@gm', is_price: '223232', status_pagamento: 'pago', tipo: 'recorrencia', },
                { nome: '2joaquim43', email: 'jjms@gm', is_price: '223232', status_pagamento: 'pago', tipo: 'recorrencia', },
                { nome: '2joaquim44', email: 'jjms@gm', is_price: '223232', status_pagamento: 'pago', tipo: 'recorrencia', },
                { nome: '2joaquim45', email: 'jjms@gm', is_price: '223232', status_pagamento: 'pago', tipo: 'recorrencia', },
                { nome: '2joaquim46', email: 'jjms@gm', is_price: '223232', status_pagamento: 'pago', tipo: 'recorrencia', },
                { nome: '2joaquim47', email: 'jjms@gm', is_price: '223232', status_pagamento: 'pago', tipo: 'recorrencia', },
                { nome: '2joaquim48', email: 'jjms@gm', is_price: '223232', status_pagamento: 'pago', tipo: 'recorrencia', },
                { nome: '2joaquim49', email: 'jjms@gm', is_price: '223232', status_pagamento: 'pago', tipo: 'recorrencia', },
                { nome: '2joaquim10', email: 'jjms@gm', is_price: '223232', status_pagamento: 'pago', tipo: 'recorrencia', },
                { nome: '2joaquim48', email: 'jjms@gm', is_price: '223232', status_pagamento: 'pago', tipo: 'recorrencia', },
                { nome: 'penultimo', email: 'jjms@gm', is_price: '223232', status_pagamento: 'pago', tipo: 'recorrencia', },
                { nome: 'ultimo', email: 'jjms@gm', is_price: '223232', status_pagamento: 'pago', tipo: 'recorrencia', },

            ],



            elementoPaginacao: 10,
            dadosPagina: [],
            maxVisibleButtons: 5,
            paginaAtual: 1,
            maxLeft: null,
            maxRight: null,
 
        }
    },



    methods: {

        totalPagina() {
            return Math.ceil(this.lista.length / this.elementoPaginacao)
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
            this.dadosPagina = this.lista.slice(inicio, fim);
 
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
        this.getPagina(1)

    },


    template: await get_template('./assets/js/views/instituicao/doacoes')
}