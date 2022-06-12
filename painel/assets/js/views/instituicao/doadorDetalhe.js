import get_template from '../../componentes/get_template.js'
import adm from "../../../../../static/js/api/adm.js"

export default {

 
    data: function () {

        return {
            nome: null,
            tipo: null,
            valor: null,
            recorente: null,
            data: null,
            hora: null,
            status: null,
            cpf: null,
            perDoar: null,
            cartao: null,
            valorLiquido: null,
            boleto: null,
            url_geral: null,
            codigo_geral: null
        }

    },


    filters: {

        is_price(price) { 
            var price  = parseFloat(price); 
            var valor = price.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
         
            return `${valor}`
        },

        is_data(datas) {
            let data = datas.split('-').reverse().join('/');
            return `${data}`
        },


        este_status(status) {
            let apresentar = {
                ACTIVE: 'Ativo',
                PENDING: 'Aguardando Pagamento',
                refused: 'Cancelado',
                CONFIRMED: 'Pago',
                RECEIVED: 'Pago',
                OVERDUE: 'Vencida',
                REFUNDED: 'Reembolsado',
                processing: 'Em processamento',
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


        este_recorente(status) {
            let apresentar = {
                1: 'SIM',
                0: 'NÃO',
            }
            return apresentar[status]
        },

    },

    methods: {
        copiar(ref) {
            this.$refs[ref].select(); document.execCommand('copy');
        }

    },
    async mounted() {

        this.tipo = globalThis._doacoes.tipo_pagamento
        var kim  = parseFloat(globalThis._doacoes.valor); 

        this.valor = parseFloat(globalThis._doacoes.valor); 

        this.data = globalThis._doacoes.data
        this.hora = globalThis._doacoes.hora
        this.status = globalThis._doacoes.status_pagamento
        this.codigo_geral = globalThis._doacoes.codigo
        this.url_geral = globalThis._doacoes.url
        this.nome = globalThis._doacoes.doador_nome
        this.recorente = globalThis._doacoes.recorrente
 

        var doado = (this.valor)
        var valorDoado = doado;
        var doar = (valorDoado / 100) * 4;
        this.perDoar = doar.toFixed(2);

        var cart = (valorDoado / 100) * 2.99;

        this.cartao = cart.toFixed(2)


        if (this.tipo == 'PIX') {
            var pix = parseFloat(this.perDoar) + 0.79
            var jmsP = parseFloat(valorDoado) - pix
            this.valorLiquido = jmsP.toFixed(2);
        } else if (this.tipo == 'CREDIT_CARD') {
            var cartao = parseFloat(this.perDoar) + parseFloat(this.cartao) + 0.49
            var jmsC = parseFloat(valorDoado) - cartao
            this.valorLiquido = jmsC

        } else {
            var boleto = parseFloat(this.perDoar) + 1.99
            var jmsB = parseFloat(valorDoado) - boleto
            this.valorLiquido = jmsB.toFixed(2);
        }




        if (this.tipo == 'PIX') {
            let code_pix = `${this.codigo_geral}`
            var qrcode = new QRCode(this.$refs.print_qr, {
                text: code_pix,
                width: 230,
                height: 230,
                height: 230,
                colorDark: "/doadorHitorico000000",
                colorLight: "/doadorHitoricoffffff",
                correctLevel: QRCode.CorrectLevel.L
            });
        }

    },

    template: await get_template('./assets/js/views/instituicao/doadorDetalhe')
}