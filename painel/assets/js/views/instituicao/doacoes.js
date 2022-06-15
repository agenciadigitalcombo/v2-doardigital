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
            estorno: "",
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
            let items = [];
            items = this.dadosPagina.filter((item) => {
                return (
                    item.doador_email.toLowerCase().indexOf(this.search.toLowerCase()) > -1 ||
                    item.doador_nome.toLowerCase().indexOf(this.search.toLowerCase()) > -1
                );
            });
            items = items.filter((item) => {
                return item.data.split('-').join('') <= this.dataFinal
            });
            return items;
        },

        filtraTotal() {
            return this.filltroDoa.filter((doacao) => {
                return (
                    doacao.data.split('-').join('') <= this.dataFinal
                )
            })
        },

        filtraAberto() {
            let items = [];
            items = this.dadosPagina.filter((item) => {
                return (
                    item.status_pagamento === 'PENDING'
                );
            });
            items = items.filter((item) => {
                return item.data.split('-').join('') <= this.dataFinal
            });
            return items;

        },

        filtraPago() {
            let items = [];
            items = this.dadosPagina.filter((item) => {
                return (
                    item.status_pagamento === 'CONFIRMED' ||
                    item.status_pagamento === 'RECEIVED'
                );
            });
            items = items.filter((item) => {
                return item.data.split('-').join('') <= this.dataFinal
            });
            return items;
        },

        filtraVencido() {
            let items = [];
            items = this.dadosPagina.filter((item) => {
                return (
                    item.status_pagamento === 'OVERDUE'
                );
            });
            items = items.filter((item) => {
                return item.data.split('-').join('') <= this.dataFinal
            });
            return items;

        },

        filtraEstorno() {
            let items = [];
            items = this.dadosPagina.filter((item) => {
                return (
                    item.status_pagamento === 'OVERDUE'
                );
            });
            items = items.filter((item) => {
                return item.data.split('-').join('') <= this.dataFinal
            });
            return items;
        },

    },


    filters: {
        este_valor(price) {
            var price = parseFloat(price);
            var valor = price.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' });

            return `${valor}`
        },

        esta_data(datas) {
            let data = datas.split('-').reverse().join('/');
            return `${data}`
        },

        recorrente(status) {
            let apresentar = {
                false: 'UNICO',
                true: 'RECORRENTE',
            }
            return apresentar[status]
        },

        este_status(status) {
            let apresentar = {
                PENDING: 'Aguardando Pagamento',
                RECEIVED: 'Pago',
                CONFIRMED: 'Pago',
                OVERDUE: 'Vencida',

                REFUND_REQUESTED: 'Estorno',
                CHARGEBACK_REQUESTED: 'Estorno',
                CHARGEBACK_DISPUTE: 'Estorno',
                AWAITING_CHARGEBACK_REVERSAL: 'Estorno',
            }

            return apresentar[status]
        },


        este_tipo(status) {
            let apresentar = {
                BOLETO: 'Boleto',
                CREDIT_CARD: 'Crédito',
                PIX: 'PIX',
            }
            return apresentar[status]
        },
    },

    methods: {

        handleClickOutside(event) {
            let overlay = document.getElementById("overlay");
            let modal = document.getElementById("meu_modal");
            if (!modal.contains(event.target)) {
                modal.style.display = 'none';
                overlay.style.display = 'none';
                document.removeEventListener('click', this.handleClickOutside, false);
            }
        },

        openModal() {
            let overlay = document.getElementById("overlay");
            let modal = document.getElementById("meu_modal");
            overlay.style.display = 'flex'
            modal.style.display = 'flex'
            setTimeout(() => { document.addEventListener('click', this.handleClickOutside, false) }, 200);
        },

        async listarDoacoes() {
            let res = await adm.listarDoacoes(
                this.token,
                this.institution_fk
            )
            return res
        },

        async editar(fatura_id) {
            globalThis._doacoes = this.doacoes.find(doad => doad.fatura_id == fatura_id)
            window.location.href = "#/doador/detalhe"
        },

        async exportar() {

            const FIX = 'data:text/csv;charset=utf-8,'
            const ENTER = '%0A'
                ; (() => {
                    const $link = document.querySelector('.js-baixar')
                    let linhas = this.filtraDoacoes.map(u => `${u.registro};${u.nome};${u.cpf};${u.sexo};${u.nascimento};${u.email};${u.telefone}${ENTER}`)
                    //	let linhas = `${'olaa'}${ENTER}`
                    $link.href = FIX + linhas
                })()

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
        let dateObj = new Date()
        this.dataFinal = dateObj.toLocaleString('en-GB', {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
        }).split('/').reverse().join('');


        this.doacoes = (await this.listarDoacoes()).payload.reverse() || {}
        this.getPagina(1)

        this.filltroDoa = (await this.listarDoacoes()).payload || {}

        var tatalArray = [];
        length = this.filtraTotal.length;
        for (var i = 0; i < length; i++)
            tatalArray.push(parseInt(this.filtraTotal[i].valor));
        this.total = tatalArray.reduce(function (total, numero) {
            return total + numero;
        }, 0);


        var abertoArray = [];
        length = this.filtraAberto.length;
        for (var i = 0; i < length; i++)
            abertoArray.push(parseInt(this.filtraAberto[i].valor));
        this.aberto = abertoArray.reduce(function (total, numero) {
            return total + numero;
        }, 0);


        var abertoArray = [];
        length = this.filtraPago.length;
        for (var i = 0; i < length; i++)
            abertoArray.push(parseInt(this.filtraPago[i].valor));
        this.pago = abertoArray.reduce(function (total, numero) {
            return total + numero;
        }, 0);

        var abertoVencido = [];
        length = this.filtraVencido.length;
        for (var i = 0; i < length; i++)
            abertoVencido.push(parseInt(this.filtraVencido[i].valor));
        this.vencido = abertoVencido.reduce(function (total, numero) {
            return total + numero;
        }, 0);

        var abertoEstorno = [];
        length = this.filtraEstorno.length;
        for (var i = 0; i < length; i++)
            abertoEstorno.push(parseInt(this.filtraEstorno[i].valor));
        this.estorno = abertoEstorno.reduce(function (total, numero) {
            return total + numero;
        }, 0);



    },


    created() {
        this.institution_fk = window.localStorage.getItem("instituicao_id")
    },

    template: await get_template('./assets/js/views/instituicao/doacoes')
}