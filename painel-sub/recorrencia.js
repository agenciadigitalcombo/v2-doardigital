import Table from "../components/Table.js"
import BreadCrumb from "../components/BreadCrumb.js"
import Card from "../components/Card.js"
import status from "../components/status.js"
import actions from "../components/actions.js"
import ApiDoacoes from "../components/apiDoacoes.js"
import MyInstitution from "../components/myInstitution.js"
import { data, formataMoeda, formatRecorrente } from "../components/format.js"
import FiltroNome from "../components/FiltroNome.js"
import Loader from "../components/Loader.js"

export default {
    data: function () {
        return {
            isLoad: 'true',
            donations: [],
            donationsCopy: [],
            totalQuantidade: 0,
            totalMoney: 0,
            cols: {
                "Doador": d => `${d.name} <br/> ${d.email}`,
                "Valor": d => `${d.value}`,
                status: t => status(t.status),
                recorrente: "Recorrente",
                "Data": d => `${d.dataRegistro}`,
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
        FiltroNome,
        Loader
    },
    async mounted() {
        this.isLoad = 'true'
        let donations = new ApiDoacoes()
        let institution = new MyInstitution()
        let request = await donations.lista(institution.get())
        if (request.next) {
            let hoje = moment().format('YYYY-MM-DD')
            let all_donations = request.payload.reverse()
            all_donations = this.adapter(all_donations)
            all_donations = all_donations.filter(d => {
                let data_donation = d.dataCreated
                return hoje < data_donation
            })
            this.donations = all_donations
            this.donationsCopy = all_donations
            this.totalQuantidade = all_donations.length
            this.totalMoney = this.somaAll(all_donations)
            this.isLoad = 'false'
            console.log(request)
        }
    },
    methods: {
        adapter(listAll) {
            return listAll.map(d => ({
                name: d.doador_nome,
                email: d.doador_email,
                data: data(d.data),
                dataCreated: d.dataCreated,
                dataRegistro: data(d.dataCreated),
                value: formataMoeda(d.valor),
                price: d.valor,
                status: d.status_pagamento,
                tipo: d.tipo_pagamento,
                id: d.fatura_id,
                recorrente: formatRecorrente(d.recorrente)
            }))
        },
        somaAll(ar) {
            return formataMoeda(ar.reduce((acc, el) => {
                acc += +el.price
                return acc
            }, 0))
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

                let hoje = moment().format('YYYY-MM-DD')
                let dataSelecionada = payload.date

                let presente = hoje == dataSelecionada
                let ontem = dataSelecionada == moment().subtract(1, 'day').format('YYYY-MM-DD')
                if (presente) {
                    dados = dados.filter(t => {
                        let dataDonation = t.dataCreated
                        return dataDonation == hoje
                    })
                } else if (ontem) {

                    dados = dados.filter(t => {
                        let dataDonation = t.dataCreated
                        return dataDonation == dataSelecionada
                    })
                } else {
                    dados = dados.filter(t => {
                        let dataDonation = t.dataCreated
                        return dataDonation >= dataSelecionada
                    })
                }
            }
            this.totalFaturas = dados.length
            this.donations = dados
        }
    },
    template: `
    <div>
        <Loader :open="isLoad" />
        <BreadCrumb text="Home" text2="Doações Recorrentes" />
        <div class="relative pt-10 pb-32 bg-[#fff]">
          <div class="bg-blackpx-4 md:px-6 mx-auto w-full">
             <div>
                <div class="flex flex-wrap">
                    <Card text="Total de Doações Previstas" :value="totalQuantidade" variation="blue" icon="bar" size="2" />
                    <Card text="Total em Doações Previstas" :value="totalMoney" variation="blue" icon="bar" size="2" />
                </div>
                <br>
                <FiltroNome @filter="filtrar"/>
                <Table :rows="donations" :cols="cols" pagination="12" />
             </div>
          </div>
       </div>       
    </div>`,
}