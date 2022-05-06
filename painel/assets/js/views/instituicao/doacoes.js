import get_template from '../../componentes/get_template.js'
import adm from "../../../../../static/js/api/adm.js" 

export default {
    

    data: function () {
        return {
            doacao_id: "",
            instituicao_id: "",
            data: "",
            doacoes: [],
            elementoPaginacao: 30,
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
            }

        }
    },

    computed: {

        filtraDoacao() {
            let valores
            valores = this.dadosPagina.filter((filtrar) => {
                return filtrar.data.split('-').join('') <= this.dataFinal;
            })
            return valores
        },



        totals() {
            return this.items.reduce((a, b) => {
                return a + b.width;
            }, 0);
        }

    },

    filters: {
        is_price(price) {
            var tmp = price + '';
            tmp = tmp.replace(/([0-9]{2})$/g, ",$1");
            if (tmp.length > 6)
                tmp = tmp.replace(/([0-9]{3}),([0-9]{2}$)/g, ".$1,$2");

            return `R$ ${tmp}`;
        },
        


        is_data(datas) {
            let data = datas.split('-').reverse().join('/');
            return `${data}`
        },


        este_status(status) {
            let apresentar = {
                PENDING: 'Aguardando Pagamento',
                refused: 'Cancelado',
                CONFIRMED: 'Pago',
                RECEIVED: 'Pago',
                OVERDUE: 'Vencida',
                REFUNDED: 'Reembolsado',
                authorized: 'Autorizado ',
                pending_refund: 'Reembolso pendente ',
                chargedback: 'Estorno',
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

        modal() {
            this.mostraresconder =
            {
                'show': true
            }
        },

        unfocused() {
            alert('good bye')
        },

        fechaModel() {
            this.mostraresconder =
            {
                'show': !true
            }
        },

        async listarDoacoes() {
            let res = await adm.listarDoacoes(
                this.instituicao_id
            )
            return res
        },

        totalPagina() {
            return Math.ceil(this.doacoes.length / this.elementoPaginacao)
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


        async editar(doacao_id) {
            globalThis._doador = this.doacoes.find(doad => doad.doacao_id == doacao_id)
            globalThis._doacoes = this.doacoes.find(doad => doad.doacao_id == doacao_id)
            window.location.href = "#/doador/detalhe"
        }
    },

    async mounted() {
        let dateObj = new Date()
        this.dataFinal = dateObj.toLocaleString('en-GB', {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
        }).split('/').reverse().join('');

        this.doacoes = (await this.listarDoacoes()).dados.reverse() || {}
        this.getPagina(1)

        let fmData = new Date()
       var final = fmData.toLocaleString('en-GB', {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
        }).split('/').reverse().join('');


        var detalheDoar = (await this.listarDoacoes()).dados

          let filtroTotal = detalheDoar.filter(function(produto) {
            return produto.data.split('-').join('') <= final;
            
          });
           
        var tatalArray = [];
        length = filtroTotal.length;

        for (var i = 0; i < length; i++) 
        tatalArray.push(parseInt(filtroTotal[i].valor));
 
        this.total = tatalArray.reduce(function (total, numero) {
            return total + numero;
        }, 0);
 

       
        let filtroPago
        filtroPago = detalheDoar.filter(function(pago) {
            return pago.data.split('-').join('') <= final;
          });
          filtroPago = filtroPago.filter(function(pago) {
            return pago.status_pagamento === "CONFIRMED" || pago.status_pagamento === "RECEIVED";
          });
          
           
        var pagoArray = [];
        length = filtroPago.length;

        for (var i = 0; i < length; i++) 
        pagoArray.push(parseInt(filtroPago[i].valor));
 

        this.pago = pagoArray.reduce(function (total, numero) {
            return total + numero;
        }, 0); 


        
        let filtroAberto
        filtroAberto = detalheDoar.filter(function(aberto) {
            return aberto.data.split('-').join('') <= final;
          });
          filtroAberto = filtroAberto.filter(function(aberto) {
            return aberto.status_pagamento === "PENDING";
          });
           
        var abertoArray = [];
        length = filtroAberto.length;

        for (var i = 0; i < length; i++) 
        abertoArray.push(parseInt(filtroAberto[i].valor));

        this.aberto = abertoArray.reduce(function (total, numero) {
            return total + numero;
        }, 0);

        let filtroVencido
        filtroVencido = detalheDoar.filter(function(vencido) {
            return vencido.data.split('-').join('') <= final;
          });
          filtroVencido = filtroVencido.filter(function(vencido) {
            return vencido.status_pagamento === "OVERDUE";
          });
           
        var vencidoArray = [];
        length = filtroVencido.length;

        for (var i = 0; i < length; i++) 
        vencidoArray.push(parseInt(filtroVencido[i].valor));

        this.vencido = vencidoArray.reduce(function (total, numero) {
            return total + numero;
        }, 0);

    },

    created() {
        this.instituicao_id = window.localStorage.getItem("instituicao_id")
    },


    template: await get_template('./assets/js/views/instituicao/doacoes')
}