import Table from "../components/Table.js"
import BreadCrumb from "../components/BreadCrumb.js"
import Card from "../components/Card.js"
import status from "../components/status.js"
import actions from "../components/actions.js"
import ApiDoacoes from "../components/apiDoacoes.js"
import MyInstitution from "../components/myInstitution.js"
import { data, formataMoeda, formatRecorrente } from "../components/format.js"
import Filtro from "../components/Filtro.js"
import CardGeral from "../components/CardGeral.js"

export default {
    data: function () {
        return {
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
                "Data": d => `${d.data}`,
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
        CardGeral
    },
    async mounted() {
        let donations = new ApiDoacoes()
        let institution = new MyInstitution()
        let request = await donations.lista(institution.get())
        if (request.next) {
            this.donations = this.adapter(request.payload)
            this.donationsCopy = this.adapter(request.payload)
        }

        this.statusAguardando = this.somaAll(this.donations.filter(d => d.status == 'PENDING'))
        this.statusOverdue = this.somaAll(this.donations.filter(d => d.status == 'OVERDUE'))
        this.statusRecebido = this.somaAll(this.donations.filter(d => d.status == 'CONFIRMED' || d.status == 'RECEIVED'))
        this.statusEstorno = this.somaAll(this.donations.filter(d => d.status == 'REFUNDED'))

        this.totalDonations = this.somaAll(this.donations)
        this.totalFaturas = this.donations.length
        console.log(request.payload)
    },
    methods: {
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
                let [Y, M, D] = d.data.split('-')
                return {
                    name: d.doador_nome,
                    email: d.doador_email,
                    cpf: d.cpf,
                    data: data(d.data),
                    value: formataMoeda(d.valor),
                    price: d.valor,
                    status: d.status_pagamento,
                    tipo: d.tipo_pagamento,
                    id: d.fatura_id,
                    timestamp: new Date(Y, (M - 1), D).valueOf(),
                    recorrente: formatRecorrente(d.recorrente)
                }
            })
        },
        filtrar(payload) {

            function timeStempToDate(time) {
                var date = new Date(time);
                var m = date.getMonth() + 1;
                var y = date.getFullYear();
                var d = date.getDate();
                return `${d}/${m}/${y}`
            }

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
            if (payload.date) {
                let hoje = this.hoje
                let dataSelecionada = +payload.date
                let dia = 86400 * 1000
                let amanha = hoje + dia
                let presente = hoje == dataSelecionada
                let ontem = (hoje - dia) == dataSelecionada
                if (presente) {
                    dados = dados.filter(t => {
                        let dataDonation = t.timestamp
                        return dataDonation == hoje
                    })
                } else if (ontem) {
                    dados = dados.filter(t => {
                        let dataDonation = t.timestamp
                        return dataDonation == dataSelecionada
                    })
                } else {
                    dados = dados.filter(t => {
                        let dataDonation = t.timestamp
                        return dataDonation >= dataSelecionada && dataDonation <= hoje
                    })
                }
            }
            this.totalFaturas = dados.length
            this.totalDonations = this.somaAll(dados)
            this.donations = dados
            
        }
    },
    template: `
    <div>
    <BreadCrumb text="Home" text2="Doações" />

        <div class="relative pt-10 pb-32 bg-[#fff]">
          <div class="bg-blackpx-4 md:px-6 mx-auto w-full">
             <div>
                <div class="flex flex-wrap">
                <Card text="Total de Doações" :value="totalFaturas" variation="blue" icon="bar" size="4" />
                <Card text="Total em Doações" :value="totalDonations" variation="blue" icon="bar" size="4" />
                <Card text="Total Pago" :value="statusRecebido" icon="heart" variation="green" size="4" />
                <Card text="Total Aberto" :value="statusAguardando" variation="yellow" icon="heart" size="4" />
                <br><br><br><br>
                <Card text="Vencido / Cancelado" :value="statusOverdue" variation="red" icon="heart" size="4" />
                <Card text="Estornado" :value="statusEstorno" variation="purple" icon="heart" size="4" />
                <Card text="Total Recorrente" :value="statusEstorno" variation="green" icon="heart" size="4" />
                <Card text="Total Único" :value="statusEstorno" variation="yellow" icon="heart" size="4" />
                <br><br><br><br>
                
                <Filtro @filter="filtrar" />
                
                
                </div>
                <Table :rows="donations" :cols="cols" pagination="5" />
             </div>
          </div>
       </div>

       
    </div>`,
}