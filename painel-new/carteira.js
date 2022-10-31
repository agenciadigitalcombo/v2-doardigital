import Card from "../components/Card.js"
import Botao from "../components/Botao.js"
import BreadCrumb from "../components/BreadCrumb.js"
import CardCarteira from "../components/CardCarteira.js"
import CardGeral from "../components/CardGeral.js"
import Table from "../components/Table.js"
import BotaoGrupo from "../components/BotaoGrupo.js"
import MyInstitution from "../components/myInstitution.js"
import ApiCarteira from "../components/apiCarteira.js"
import status from "../components/status.js"
import { data, formataMoeda, formatRecorrente } from "../components/format.js"
import Loader from "../components/Loader.js"
import Popup from "../components/popup.js"

export default {
    data: function () {
        return {
            isLoad: 'true',
            saldo: 0,
            aLiberar: 0,
            totalSacado: 0,
            inst_fk: "",
            price: "0",
            error: null,
            maxSaque: 0,
            load: false,
            dados: {
                balance: null
            },
            info: { address: { bairro: null } },
            extrato: [],
            cols: {
                "Data Solicitada": d => `${d.data}`,
                "Valor": d => `
                    ${d.valor}
                    <br /> 
                    <a 
                        href="${d.transactionReceiptUrl}" 
                        ${!d.transactionReceiptUrl && 'hidden'}
                        target="_blank"
                    >
                        Comprovante
                    </a>
                `,
                status: t => status(t.status),
            },
        }
    },
    components: {
        Botao,
        Card,
        BreadCrumb,
        CardCarteira,
        CardGeral,
        Table,
        BotaoGrupo,
        Loader,
        Popup
    },
    async mounted() {
        this.isLoad = 'true'
        let carteira = new ApiCarteira()
        let institution = new MyInstitution()
        let request = await carteira.listarCarteira(institution.get())
        let requestPayload = request.payload
        let requestExtrato = request.payload.extrato.data
        this.inst_fk = institution.get()
        requestExtrato = requestExtrato.filter(i => (i.status == "PENDING" || i.status == 'DONE') && i.type == 'BANK_ACCOUNT')
        
        if (request.next) {
            this.extrato = this.adapter(requestExtrato)
            this.dados = requestPayload
            this.saldo = formataMoeda(requestPayload.balance)
            this.maxSaque = requestPayload.balance
            this.aLiberar = formataMoeda(requestPayload.statistic.netValue)
            this.totalSacado = this.somaAll(this.extrato.filter(i => i.status == 'DONE'))
        }
        this.isLoad = 'false'
        
    },
    methods: {
        adapter(listAll) {
            return listAll.map(d => ({
                valor: formataMoeda(d.value),
                price: d.value,
                data: data(d.dateCreated),
                ...d,
            }))
        },
        somaAll(ar) {
            return formataMoeda(ar.reduce((acc, el) => {
                acc += +el.price
                return acc
            }, 0))
        },
        setValorTotal() {
            this.price = this.maxSaque + 0
        },
        async sacar() {
            this.load = true
            this.error = null
            let api = new ApiCarteira()

            let min = 50
            let max = this.maxSaque
            let price = parseFloat( this.price.replace(/\D/gi, '') ) || 0

            if(price < min) {
                this.error = "O valor mínimo para saque é " + min
                this.load = false
                return null
            }
            
            if(price > max) {
                this.error = "O valor máximo para saque é " + max
                this.load = false
                return null
            }

            let request = await api.saque(
                this.inst_fk,
                this.price
            )

            if( request.next ) {
                this.price = 0
            }

            this.load = false

            this.error = request.message

            window.location.reload()

        }
    },
    template: `
    <div>
        <Loader :open="isLoad" />    
            <BreadCrumb text="Home" text2="Carteira" />        
            <div class="relative pt-10 pb-32 bg-[#fff]">
                <div class="px-4 md:px-6 mx-auto w-full">
                    <div>
                        <div class="flex flex-wrap">
                        <Card text="Saldo Liberado" :value="saldo" variation="blue" icon="bar" size="3"/>
                        <Card text="Saldo á liberar" :value="aLiberar" variation="yellow" size="3"/>
                        <Card text="Total Já Sacado" :value="totalSacado" variation="green" icon="heart" size="3"/>
                        <CardGeral text="Solicitação de Saque" size="quatro">
                            <button @click="setValorTotal" class="mb-4 rounded-l px-6 py-2.5 bg-blue-800 text-white font-medium text-xs leading-tight uppercase hover:bg-blue-700 focus:bg-blue-700 focus:outline-none focus:ring-0 active:bg-blue-800 transition duration-150 ease-in-out">Valor Total</button> <br>
                            <p>Informe valor abaixo ou selecione valor total.</p>   
                            <input v-model="price" class="rounded border border-gray-300 block w-full py-2 px-4 text-gray-700 focus:outline-blue-700 mb-4">



                            <Popup 
                            title="Solicitação de saque"
                            description="Você realmente deseja realizar o saque?"
                            text_close="Não"
                            text_submit="Sim"
                            text_btn="Solicitar saque"
                            color="green"
                            @submit="sacar"
                            />


                            <div v-show="error">{{error}}</div>
                            <br>
                            <p>*Será cobrado o valor de R$5,00 por saque</p>
                        </CardGeral>
                        <CardGeral text="Histórico de Transferências" size="quatro">   
                            <Table :rows="extrato" :cols="cols" pagination="10" step="1" />
                        </CardGeral>
                        </div>
                    </div>
                </div>
            </div>
        </div>`,
}