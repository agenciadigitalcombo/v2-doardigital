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
import ApiInstitution from "../components/apiInstitution.js"
import { Form, Input, Button, Text, Select } from "../components/Form.js";
import { Money } from "../components/mask.js"

export default {
    data: function () {
        return {
            isLoad: 'true',
            inputs: "",
            saldo: 0,
            aLiberar: 0,
            totalSacado: 0,
            inst_fk: "",
            price: "0",
            error: null,
            maxSaque: 0,
            inputsAnotacoes: "",
            load: false,
            formDataAnotacoes: {
            },
            formData: {
            },
            dados: {
                balance: null
            },
            info: { address: { bairro: null } },
            extrato: [],
            cols: {
                "Data Solicitada": d => `${d.data}`,
                "Tipo": t => t.operationType == 'INTERNAL' ? 'TAXA' : t.operationType,
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
        let thisInstitution = new ApiInstitution()
        let requestInstitution = await thisInstitution.get(institution.get())


        let request = await carteira.listarCarteira(institution.get())
        let requestPayload = request.payload
        let requestExtrato = request.payload.extrato.data
        this.inst_fk = institution.get()
        requestExtrato = requestExtrato.filter(i => (i.status == "PENDING" || i.status == 'DONE') && i.type == 'BANK_ACCOUNT' || i.type == 'ASAAS_ACCOUNT' )

        if (request.next) {
            this.dadosInst = requestInstitution.payload
            this.formData = requestInstitution.payload
            this.extrato = this.adapter(requestExtrato)
            this.dados = requestPayload
            this.saldo = formataMoeda(requestPayload.balance)
            this.maxSaque = requestPayload.balance
            this.aLiberar = formataMoeda(requestPayload.statistic.netValue)
            this.totalSacado = this.somaAll(this.extrato.filter(i => i.status == 'DONE'))
            globalThis.Dados = this.formData
            this.renderBank()
        }
        this.isLoad = 'false'
        
    },
    methods: {
        renderBank() {
            this.formData.agencia = this.dadosInst.agency
            this.formData.conta = this.dadosInst.account
            this.formData.contaDigito = this.dadosInst.accountDigit
            this.formData.bank = this.dadosInst.bank
            const inputsAnotacoes = [
                new Input('account', 'Conta', 'text', 3, false, '', true),
                new Input('contaDigito', 'Digito', 'text', 1, false, '', true),
                new Input('agencia', 'Agência', 'text', 2, false, '', true),
                new Input('bank', 'Banco', 'text', 2, false, '', true),
                new Select('tipo', 'Tidpo', 4, [
                    new Option('CONTA_CORRENTE', 'Corrente'),
                    new Option('POUPANCA', 'Poupança'),
                ], false, this.formData.bankAccountType, true),
            ]
            const formBank = new Form(inputsAnotacoes)
            this.inputsAnotacoes = formBank.render()
        },
        Money(ev) {
            ev.target.value = Money(ev.target.value)
        },
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
            // this.isLoad = 'true'
            console.log('tafarelll')
            this.error = null
            let api = new ApiCarteira()

            let min = 10
            let max = this.maxSaque
            this.price = Money(this.price)
            let price = parseFloat( this.price.replace(/\D/gi, '') ) || 0
            console.log({
                min,
                max,
                price,
                peice2: this.price
            })
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

            // this.isLoad = 'false'

            this.error = request.message

            window.location.reload()

        }
    },
    template: `
    <div>
        <Loader :open="isLoad" />    
            <BreadCrumb text="Home" text2="Carteira" />        
            <div class="relative pt-10 bg-[#fff]">
                <div class="px-4 md:px-6 mx-auto w-full">
                    <div>
                        <div class="flex flex-wrap">
                        <Card text="Saldo Liberado" :value="saldo" variation="blue" icon="bar" size="3"/>
                        <Card text="Saldo á liberar" :value="aLiberar" variation="yellow" size="3"/>
                        <Card text="Total Já Sacado" :value="totalSacado" variation="green" icon="heart" size="3"/>

                        

                        
                        
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="flex-1 mx-auto md:p-8">
                <ul class="grid grid-cols-6 gap-8">
                <li class="col-span-6 md:col-span-3">
            <div class="">
            <CardGeral text="Solicitação de Saque" size="full">
            <button @click="setValorTotal" class="mb-4 rounded-l px-6 py-2.5 bg-blue-800 text-white font-medium text-xs leading-tight uppercase hover:bg-blue-700 focus:bg-blue-700 focus:outline-none focus:ring-0 active:bg-blue-800 transition duration-150 ease-in-out">Valor Total</button> <br>
            <p>Informe valor abaixo ou selecione valor total.</p>  
            
            <input @input="Money" v-model="price" class="rounded border border-gray-300 block w-64 py-2 px-4 text-gray-700 focus:outline-blue-700 mb-4">



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


        <CardGeral text="Dados Bancários" size="full">
                <form action="javascript:void(0)" method="POST" class="js-form grid grid-cols-4 gap-4" v-html="inputsAnotacoes" @submit="add_note"></form>
                <br>
                <p>Caso queira alterar dados bancários, entrar em contato com o suporte.</p>
                </CardGeral>


            </div>
                </li>
                <li class="col-span-6 md:col-span-3">
            <div class="">
            <CardGeral text="Histórico de Transferências" size="full">   
                            <Table :rows="extrato" :cols="cols" pagination="10" step="1" />
                        </CardGeral>
                       
            </div>
                </li>
                </ul>
            </div>

        </div>`,
}