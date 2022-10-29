import Table  from "../components/Table.js"
import Botao  from "../components/Botao.js"
import BreadCrumb from "../components/BreadCrumb.js"
import Card  from "../components/Card.js"
import Loader from "../components/Loader.js"
import Card2 from "../components/Card2.js"
import CardGeral from "../components/CardGeral.js"
import ApiDoadores from "../components/apiDoadores.js"
import MyInstitution from "../components/myInstitution.js"
import GraphStatusAssinatura from "../components/GraphStatusAssinatura.js"
import statusDoadores from "../components/statusDoadores.js"
import tiposDoadores from "../components/tiposDoadores.js"
import statusDoacoes from "../components/statusDoacoes.js"
import quantidadePlanos from "../components/quantidadePlanos.js"
import formasPagamentos from "../components/formasPagamentos.js"
import quantidadeDoacoes from "../components/quantidadeDoacoes.js"
import GraphFaturamento from "../components/GraphFaturamento.js"
import ApiRelatorio from "../components/apiRelatorio.js"
import { data, formataMoeda, formatRecorrente, formatTipoPagamento } from "../components/format.js"
import CardDash from "../components/CardDash.js"



export default {
    data: function() {
        return {
            isLoad: 'true', 
            statusUnico: 0,
            statusRecorrente: 0,
            totalEmDoacoes: 0,
            totalEmPix: 0,
            totalEmBoleto: 0,
            totalEmCredito: 0,
            totalDoadores: 0,
            totalPago: 0,
            totalPagoPix: 0,
            totalPagoBoleto: 0,
            totalPagoCredito: 0,
            totalAberto: 0,
            totalAbertoPix: 0,
            totalAbertoBoleto: 0,
            totalAbertoCredito: 0,
            doadorTotal: 0,
            totalDoadorUnico: 0,
            requisicao: null,
            donations : [
            ],
            adimplente: 0,
            inadimplente: 0,
            normal: 0,
            previsto: 0,
            cols: {
                name: "Nome Doador",
                value: "Valor Doação",
                status: t => `<span class="bg-purple-200 text-purple-600 py-1 px-3 rounded-full text-xs">
                ${t.status}
                </span>`,
                editar: e => `
                <div class="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                            </svg>
                                        </div>
                `
            },
        
        }
    },
    async mounted(){
      this.isLoad = 'true'
      let Resumo = new ApiRelatorio()
      let doadores = new ApiDoadores()
      let institution = new MyInstitution()
      let request = await doadores.lista(institution.get())
      let requestPayload = request.payload
      let requestTotal = requestPayload.length
      let doadorUnico = requestPayload.filter(d => d.recorrente === false)
      let doadorRecorrente = requestPayload.filter(d => d.recorrente === true)
      let doadorUnicoTransform = Object.keys(doadorUnico)
      let doadorRecorrenteTransform = Object.keys(doadorRecorrente)
      let totalDoadorUnico = doadorUnicoTransform.length
      let totalDoadorRecorrente = doadorRecorrenteTransform.length
      let reqResumo = (await Resumo.info(institution.get())).payload

      let faturamento = reqResumo.faturamento
      let formaPagamento = reqResumo.formaPagamento
      let quantPlanos = reqResumo.quantPlanos
      let status = reqResumo.status

      this.adimplente = reqResumo.adimplente
      this.inadimplente = reqResumo.inadimplente
      this.normal = reqResumo.normal
      this.previsto = formataMoeda(reqResumo.previsto)
      this.donationByDay = reqResumo.donationByDay

      if (request.next) {
        this.doadorTotal = requestTotal
        this.totalDoadorUnico = totalDoadorUnico
        this.totalDoadorRecorrente = totalDoadorRecorrente
        this.totalEmDoacoes = formataMoeda(reqResumo.totalGeral.total)
        this.totalEmPix = formataMoeda(reqResumo.totalGeral.PIX)
        this.totalEmBoleto = formataMoeda(reqResumo.totalGeral.BOLETO)
        this.totalEmCredito = formataMoeda(reqResumo.totalGeral.CREDIT_CARD)
        this.totalPago = formataMoeda(reqResumo.totalPagos.total)
        this.totalPagoPix = formataMoeda(reqResumo.totalPagos.PIX)
        this.totalPagoBoleto = formataMoeda(reqResumo.totalPagos.BOLETO)
        this.totalPagoCredito = formataMoeda(reqResumo.totalPagos.CREDIT_CARD)
        this.totalAberto = formataMoeda(reqResumo.totalAberto.total)
        this.totalAbertoPix = formataMoeda(reqResumo.totalAberto.PIX)
        this.totalAbertoBoleto = formataMoeda(reqResumo.totalAberto.BOLETO)
        this.totalAbertoCredito = formataMoeda(reqResumo.totalAberto.CREDIT_CARD)
        this.totalACancelado = formataMoeda(reqResumo.totalACancelado.total)
        this.totalACanceladoPix = formataMoeda(reqResumo.totalACancelado.PIX)
        this.totalACanceladoBoleto = formataMoeda(reqResumo.totalACancelado.BOLETO)
        this.totalACanceladoCredito = formataMoeda(reqResumo.totalACancelado.CREDIT_CARD)
        this.requisicao = request
        this.isLoad = 'false'
        console.log(reqResumo)
        console.log(this.totalPago)
      }
          
         ''
          
          tiposDoadores(this.$refs.tiposDoadores,[
            this.totalDoadorRecorrente,
            this.totalDoadorUnico
          ])
          statusDoacoes(this.$refs.statusDoacoes,status)
          quantidadePlanos(this.$refs.quantidadePlanos,quantPlanos)
          formasPagamentos(this.$refs.formasPagamentos,formaPagamento)
          quantidadeDoacoes(this.$refs.quantidadeDoacoes,this.donationByDay)
          GraphFaturamento(this.$refs.GraphFaturamento, faturamento)
    },
    components: {
        Table,
        Botao,
        BreadCrumb,
        Card,
        Loader,
        Card2,
        CardGeral,
        CardDash
    },
    methods: {
    },
    template: `
    <div>

    <br>
        <Loader :open="isLoad" />
        <div class="flex flex-wrap">
            <CardDash size="4" cor="blue" variation="blue" text="Total em Doações" :value="totalEmDoacoes" :valuepix="totalEmPix" :valueboleto="totalEmBoleto" :valuecredito="totalEmCredito"/>
            <CardDash size="4" cor="green" variation="green" text="Total Pago" :value="totalPago" :valuepix="totalPagoPix" :valueboleto="totalPagoBoleto" :valuecredito="totalPagoCredito"/>
            <CardDash size="4" cor="yellow" variation="yellow" text="Total em Aberto" :value="totalAberto" :valuepix="totalAbertoPix" :valueboleto="totalAbertoBoleto" :valuecredito="totalAbertoCredito"/>
            <CardDash size="4" cor="red" variation="red" text="Total Vencido" :value="totalACancelado" :valuepix="totalACanceladoPix" :valueboleto="totalACanceladoBoleto" :valuecredito="totalACanceladoCredito"/>
            <Card2 text="Total de Doadores" :value="doadorTotal" variation="blue" cor="blue" icon="grupo" size="4" />
            <Card2 value="??" text="Novos Doadores" :value="totalQntEstornado" variation="green" cor="green" icon="heart" size="4" />
            <Card2 text="Doadores Ùnico" :value="totalDoadorUnico" variation="yellow" cor="yellow" icon="heart" size="4" />
            <Card2 text="Doadores Recorrentes" :value="totalDoadorRecorrente" variation="green" cor="green" icon="heart" size="4" />
            <Card2  text="Doadores Adimplentes" :value="adimplente" variation="green" cor="green" icon="adimplente" size="4" />
            <Card2 text="Doadores Médios" :value="normal" variation="yellow" cor="yellow" icon="heart" size="4" />
            <Card2  text="Doadores Inadimplentes" :value="inadimplente" variation="red" cor="red" icon="inadimplente" size="4" />
            <Card2 text="Doações Previstas" :value="previsto" variation="blue" cor="blue" icon="heart" size="4" />
            <CardGeral text="Faturamento" size="full">
            <div ref="GraphFaturamento"></div>
            </CardGeral>
            <CardGeral text="Quantidade de Doações" size="full">

            <div ref="quantidadeDoacoes"></div>

            </CardGeral>
            <CardGeral text="Formas de Pagamentos" size="quatro">

            <div ref="formasPagamentos"></div>

            </CardGeral>
            <CardGeral text="Quantidade por Planos" size="quatro"> 

            <div ref="quantidadePlanos"></div>

            </CardGeral>
            <CardGeral text="Status das Doações" size="quatro">
            <div id="chart" style="max-width: 760px;">
            <div ref="statusDoacoes"></div>
            </div>
            </CardGeral>
            <CardGeral text="Tipos dos Doadores" size="quatro">
            <div id="chart" style="max-width: 760px;">
            <div ref="tiposDoadores"></div>
            </div>
            </CardGeral>
            

        </div>
    </div>`,
}