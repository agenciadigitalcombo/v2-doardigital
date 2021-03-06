import get_template from '../../componentes/get_template.js'
import adm from "../../../../../static/js/api/adm.js"

export default {



    data: function () {
        return {
            token: "",
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
            nowMonth: 0,

            elementoPaginacao: 25,
            maxVisibleButtons: 5,
            paginaAtual: 1,
            maxLeft: null,
            maxRight: null,
            filtraDoacoes: [],

        }
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
        buscarNome() {
            if (this.search.length === 0) {
                this.filtraDoacoes = [...this.doacoes]
                return null
            }
            this.filtraDoacoes = this.doacoes.filter(d => {
                return (d.doador_nome).toLowerCase().indexOf(this.search.toLowerCase()) !== -1
            })
        },

        fechaModalExporta(event) {
            let overlay = document.getElementById("exporta");
            let modal = document.getElementById("exporta_modal");
            if (!modal.contains(event.target)) {
                modal.style.display = 'none';
                overlay.style.display = 'none';
                document.removeEventListener('click', this.fechaModalExporta, false);
            }
        },


        fechaModalImporta(event) {
            let importarModal = document.getElementById("importar_modal");
            let importar = document.getElementById("importar");

            if (!importarModal.contains(event.target)) {
                importar.style.display = 'none';
                importarModal.style.display = 'none';
                document.removeEventListener('click', this.fechaModalImporta, false);
            }
        },



        modalExporta() {
            let overlay = document.getElementById("exporta");
            let modal = document.getElementById("exporta_modal");
            overlay.style.display = 'flex'
            modal.style.display = 'flex'
            setTimeout(() => { document.addEventListener('click', this.fechaModalExporta, false) }, 200);
        },

        modalImportar() {
            let importar = document.getElementById("importar");
            let importarModal = document.getElementById("importar_modal");
            importar.style.display = 'flex'
            importarModal.style.display = 'flex'
            setTimeout(() => { document.addEventListener('click', this.fechaModalImporta, false) }, 200);
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

        async Importa() {
            let file = new FormData();

            file.append('token', this.token,);
            file.append('institution_fk', this.institution_fk,);
            file.append('file', this.$refs.file.files[0]);

            this.error = null

            let res = await adm.doacaoUploadCsv(
                file
            )
            if (!res.next) {
                this.error = res.message
                return null
            }
            this.logo = res.payload.nome,
                globalThis._foto = res.payload.nome

            this.msg = res.message,
                setTimeout(() => this.msg = "", 3000);
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









    },

    async mounted() {

        this.token = window.localStorage.getItem("token")
        this.institution_fk = window.localStorage.getItem("instituicao_id")

        let dateObj = new Date()
        this.dataFinal = dateObj.toLocaleString('en-GB', {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
        }).split('/').reverse().join('');

        this.nowMonth = Date.now()

        let allDonations = (await this.listarDoacoes()).payload || []

        let allDonationsNowMonth = allDonations.filter(donation => {
            let month_donation = donation.dataTime
            let month_now = donation.dataNow            
            return month_donation <= month_now 
        })

        this.doacoes = allDonationsNowMonth
        this.filltroDoa = allDonationsNowMonth
        this.filtraDoacoes = allDonationsNowMonth

        let somar = lista => lista.reduce((acc, v) => (acc + v), 0)

        let paga = allDonationsNowMonth.filter(d => d.status_pagamento == "CONFIRMED" || d.status_pagamento == "RECEIVED").map(d => +d.valor)
        let aberto = allDonationsNowMonth.filter(d => d.status_pagamento == "PENDING").map(d => +d.valor)
        let devolvida = allDonationsNowMonth.filter(d => d.status_pagamento == "REFUNDED").map(d => +d.valor)
        let vencidaCancelada = allDonationsNowMonth.filter(d => d.status_pagamento == "OVERDUE").map(d => +d.valor)

        let pagaTotal = somar(paga)
        let abertoTotal = somar(aberto)
        let devolvidaTotal = somar(devolvida)
        let vencidaCanceladaTotal = somar(vencidaCancelada)

        let total = pagaTotal + abertoTotal + devolvidaTotal + vencidaCanceladaTotal

        this.total = total
        this.pago = pagaTotal
        this.aberto = abertoTotal
        this.vencido = vencidaCanceladaTotal
        this.estorno = devolvidaTotal

    },

    template: await get_template('./assets/js/views/instituicao/doacoes')
}