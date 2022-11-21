import Table from "../components/Table.js"
import BreadCrumb from "../components/BreadCrumb.js"
import Card from "../components/Card.js"
import status from "../components/status.js"
import actions from "../components/actions.js"
import ApiDoacoes from "../components/apiDoacoes.js"
import MyInstitution from "../components/myInstitution.js"
import { data, formataMoeda, formatRecorrente, formatTipoPagamento } from "../components/format.js"
import Filtro from "../components/Filtro.js"
import CardGeral from "../components/CardGeral.js"
import Loader from "../components/Loader.js"
import Bread from "../components/Bread.js"

export default {
    data: function () {
        return {
            isLoad: 'true',
            hoje: new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate()).valueOf(),
            totalFaturas: 0,
            totalDonations: 0,
            statusAguardando: 0,
            donations: [],
            donationsCopy: [],
            cols: {
                "Doador": d => `${d.name} <br/> ${d.email}`,
                "Valor": d => `${d.value}`,
                status: t => status(t.status),
                recorrente: "Recorrente",
                "Data": d => `${d.dataRegistro}`,
                "vencimento": d => `${d.data}`,
                tipo: t => `<span class="bg-white text-grey-600 py-1 px-3 rounded-full text-xs">
                ${t.tipo}
                </span>`,
                "Ação": e => actions(`detalhe-doacao?id=${e.id}`, 'fa-solid fa-eye', 'blue')
            },

        }
    },
    components: {
        Table,
        BreadCrumb,
        Card,
        Filtro,
        CardGeral,
        Loader,
        Bread
    },
    async mounted() {
        this.isLoad = 'true'
        let donations = new ApiDoacoes()
        let institution = new MyInstitution()
        let request = await donations.lista(institution.get())
        if (request.next) {
            let hoje = moment().format('YYYY-MM-DD')
            let all_donations = request.payload
            all_donations = this.adapter(all_donations)
            all_donations = all_donations.filter(d => {
                let data_donation = d.dataCreated
                return data_donation <= hoje
            })
            this.donations = all_donations
            this.donationsCopy = all_donations

        }
        this.resumos(this.donations)
        this.isLoad = 'false'


    },
    methods: {
        resumos(all_donations) {
            this.statusAguardando = this.somaAll(all_donations.filter(d => d.status == 'PENDING'))
            this.statusOverdue = this.somaAll(all_donations.filter(d => d.status == 'OVERDUE'))
            this.statusRecebido = this.somaAll(all_donations.filter(d => d.status == 'CONFIRMED' || d.status == 'RECEIVED'))
            this.statusEstorno = this.somaAll(all_donations.filter(d => d.status == 'REFUNDED'))
            this.statusRecorrenciaAtiva = this.somaAll(all_donations.filter(d => d.recorrente == 'ATIVA'))
            this.statusRecorrenciaInativo = this.somaAll(all_donations.filter(d => d.recorrente == 'INATIVO'))
            //
            this.qntStatusAguardando = all_donations.filter(d => d.status == 'PENDING')
            this.qntStatusVencido = all_donations.filter(d => d.status == 'OVERDUE')
            this.qntStatusPago = all_donations.filter(d => d.status == 'CONFIRMED' || d.status == 'RECEIVED')
            this.qntStatusEstornado = all_donations.filter(d => d.status == 'REFUNDED')
            this.qntRecorrenteAtivo = all_donations.filter(d => d.recorrente == 'ATIVA')
            this.qntRecorrenteInativo = all_donations.filter(d => d.recorrente == 'INATIVO')
            //
            this.totalRecorrente = this.qntRecorrenteAtivo.length
            this.totalRecorrenteInativo = this.qntRecorrenteInativo.length
            this.totalDonations = this.somaAll(all_donations)
            this.totalFaturas = all_donations.length
            this.totalQntAguardando = this.qntStatusAguardando.length
            this.totalQntVencido = this.qntStatusVencido.length
            this.totalQntPago = this.qntStatusPago.length
            this.totalQntEstornado = this.qntStatusEstornado.length
        },
        somaAll(ar) {
            return formataMoeda(ar.reduce((acc, el) => {
                acc += +el.price
                return acc
            }, 0))
        },
        somaQnt(arr) {
            return arr.reduce((acc, el) => {
                acc += 1
                return acc
            }, 0)
        },
        adapter(listAll) {
            return listAll.map(d => {
                return {
                    name: d.doador_nome,
                    email: d.doador_email,
                    cpf: d.cpf,
                    data: data(d.data),
                    dataCreated: d.dataCreated,
                    dataRegistro: data(d.dataCreated),
                    value: formataMoeda(d.valor),
                    price: d.valor,
                    status: d.status_pagamento,
                    tipo: formatTipoPagamento(d.tipo_pagamento),
                    id: d.fatura_id,
                    timestamp: d.data,
                    recorrente: formatRecorrente(d.recorrente)
                }
            })
        },
        filtrar(payload) {


            let dados = Array.from(this.donationsCopy.map(x => x))
            if (payload.search) {
                dados = dados.filter(t => {
                    let search = payload.search
                    let termo = t.name + " " + t.email + " " + t.cpf
                    search = search.toLowerCase()
                    termo = termo.toLowerCase()
                    search = search.normalize('NFD').replace(/[\u0300-\u036f]/g, "");
                    termo = termo.normalize('NFD').replace(/[\u0300-\u036f]/g, "");
                    return termo.indexOf(search) > -1
                })
            }
            if (payload.tipo.length > 2) {
                dados = dados.filter(t => {
                    return t.tipo == payload.tipo
                })
            }
            if (payload.recorrencia.length > 2) {
                dados = dados.filter(t => {
                    return t.recorrente == payload.recorrencia
                })
            }
            if (payload.status.length > 2) {

                if (payload.status == 'vencido') {
                    dados = dados.filter(t => {
                        return t.status == 'OVERDUE'
                    })
                }
                if (payload.status == 'pendente') {
                    dados = dados.filter(t => {
                        return t.status == 'PENDING'
                    })
                }
                if (payload.status == 'pago') {
                    dados = dados.filter(t => {
                        return t.status == 'RECEIVED' || t.status == 'CONFIRMED'
                    })
                }
                if (payload.status == 'estornado') {
                    dados = dados.filter(t => {
                        return t.status == 'REFUNDED'
                    })
                }
            }
            if (payload.date) {

                let format_data = 'YYYY-MM-DD'
                let dataSelecionada = payload.date

                let data_inicio = payload.data_inicio
                let data_final = payload.data_final
                

                let hoje = moment().format(format_data)
                let ontem = moment().subtract(1, 'day').format(format_data)
                let essa_semana = moment().startOf('week').format(format_data)
                let semana_passada = moment().startOf('week').subtract(1, 'w').format(format_data)
                let esse_mes = moment().startOf('month').format(format_data)
                let mes_passado = moment().subtract(1, 'month').format(format_data)

                if (dataSelecionada == 'hoje') {
                    dados = dados.filter(t => {
                        let dataDonation = t.dataCreated
                        return dataDonation == hoje
                    })
                }

                if (dataSelecionada == 'ontem') {
                    dados = dados.filter(t => {
                        let dataDonation = t.dataCreated
                        return dataDonation == ontem
                    })
                }

                if (dataSelecionada == 'essa_semana') {
                    dados = dados.filter(t => {
                        let dataDonation = t.dataCreated
                        return dataDonation >= essa_semana
                    })
                }

                if (dataSelecionada == 'semana_passada') {
                    dados = dados.filter(t => {
                        let dataDonation = t.dataCreated
                        return dataDonation >= semana_passada && dataDonation < essa_semana
                    })
                } 
                
                if (dataSelecionada == 'esse_mes') {
                    dados = dados.filter(t => {
                        let dataDonation = t.dataCreated
                        return dataDonation >= esse_mes
                    })
                }

                if (dataSelecionada == 'mes_passado') {
                    dados = dados.filter(t => {
                        let dataDonation = t.dataCreated
                        return dataDonation >= mes_passado && dataDonation < esse_mes
                    })
                } 

                if (dataSelecionada == 'personalizado') { 
                    dados = dados.filter(t => {
                        let dataDonation = t.dataCreated
                        return dataDonation >= data_inicio && dataDonation <= data_final
                    })
                }
                
            }
            this.totalFaturas = dados.length
            this.donations = dados
            this.resumos(this.donations)
        }
    },
    template: `
    <div>
        <Loader :open="isLoad" />
        <Bread :steps="[
            ['Home','#/dashboard'],
            ['Doações'],
        ]" 
        />
        <div class="relative pt-10 pb-32 bg-[#fff]">
          <div class="bg-blackpx-4 md:px-6 mx-auto w-full">
             <div>
                <div class="flex flex-wrap">
                <Card :tax="totalDonations" text="Total de Doações" :value="totalFaturas" variation="blue" icon="bar" size="4" />
                <Card :tax="statusRecebido" text="Total Pago" :value="totalQntPago" icon="heart" variation="green" size="4" />
                <Card :tax="statusAguardando" text="Total Aberto" :value="totalQntAguardando" variation="yellow" icon="heart" size="4" />
                <br><br><br><br><br>
                <Card :tax="statusOverdue" text="Vencido / Cancelado" :value="totalQntVencido" variation="red" icon="heart" size="4" />
                <Card :tax="statusEstorno" text="Estornado" :value="totalQntEstornado" variation="purple" icon="heart" size="4" />
                <Card :tax="statusRecorrenciaAtiva" tax="AQQQ" text="Total Recorrente" :value="totalRecorrente" variation="green" icon="heart" size="4" />
                <Card :tax="statusRecorrenciaInativo" text="Total Único" :value="totalRecorrenteInativo" variation="yellow" icon="heart" size="4" />
                <Card :tax="totalDonations" text="1° Doação" :value="totalFaturas" variation="blue" icon="heart" size="4" />
                <br><br><br><br><br>                
                <Filtro @filter="filtrar" />
                </div>
                <Table :rows="donations" :cols="cols" pagination="25" />
             </div>
          </div>
       </div>
    </div>`,
}