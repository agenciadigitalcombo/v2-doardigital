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



export default {
    data: function() {
        return {
            isLoad: 'true', 
            statusUnico: 0,
            statusRecorrente: 0,
            totalDoadores: 0,
            doadorTotal: 0,
            totalDoadorUnico: 0,
            requisicao: null,
            donations : [
            ],
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

      if (request.next) {
        this.doadorTotal = requestTotal
        this.totalDoadorUnico = totalDoadorUnico
        this.totalDoadorRecorrente = totalDoadorRecorrente
        this.requisicao = request
        this.isLoad = 'false'
      }
          
          GraphStatusAssinatura(this.$refs.statusAssinatura,[
            this.totalDoadorUnico,
            this.totalDoadorRecorrente
            
          ])
          statusDoadores(this.$refs.statusDoadores,[
            this.totalDoadorUnico,
            this.totalDoadorRecorrente
          ])
          tiposDoadores(this.$refs.tiposDoadores,[
            this.totalDoadorUnico,
            this.totalDoadorRecorrente
          ])
          statusDoacoes(this.$refs.statusDoacoes,[
            this.totalDoadorUnico,
            this.totalDoadorRecorrente
          ])
          quantidadePlanos(this.$refs.quantidadePlanos,[
            this.totalDoadorUnico,
            this.totalDoadorRecorrente
          ])
          formasPagamentos(this.$refs.formasPagamentos,[
            this.totalDoadorUnico,
            this.totalDoadorRecorrente
          ])
          quantidadeDoacoes(this.$refs.quantidadeDoacoes,[
            this.totalDoadorUnico,
            this.totalDoadorRecorrente
          ])
          GraphFaturamento(this.$refs.GraphFaturamento,[
            this.totalDoadorUnico,
            this.totalDoadorRecorrente
          ])
    },
    components: {
        Table,
        Botao,
        BreadCrumb,
        Card,
        Loader,
        Card2,
        CardGeral
    },
    methods: {
    },
    template: `
    <div>

    <br>
        <Loader :open="isLoad" />
        <div class="flex flex-wrap">
            <Card2 text="Total de Doadores" :value="doadorTotal" variation="blue" cor="blue" icon="grupo" size="4" />
            <Card2 value="??" text="Novos Doadores" :value="totalQntEstornado" variation="green" cor="green" icon="heart" size="4" />
            <Card2 text="Doadores Recorrentes" :value="totalDoadorRecorrente" variation="green" cor="green" icon="heart" size="4" />
            <Card2 text="Doadores Ùnico" :value="totalDoadorUnico" variation="yellow" cor="yellow" icon="heart" size="4" />
            <Card2 value="??" text="Doadores Adimplentes" :value="totalQntEstornado" variation="green" cor="green" icon="adimplente" size="4" />
            <Card2 value="??" text="Doadores Inadimplentes" :value="totalQntEstornado" variation="red" cor="red" icon="inadimplente" size="4" />
            <Card2 value="??" text="Doação Média" :value="totalQntEstornado" variation="blue" cor="blue" icon="heart" size="4" />
            <Card2 value="??" text="Doações Previstas" :value="totalQntEstornado" variation="blue" cor="blue" icon="heart" size="4" />
            <CardGeral text="Faturamento" size="full">
            <div id="chart" style="max-width: 760px;">
            <div ref="GraphFaturamento"></div>
            </div>
            </CardGeral>
            <CardGeral text="Quantidade de Doações" size="full">
            <div id="chart" style="max-width: 760px;">
            <div ref="quantidadeDoacoes"></div>
            </div>
            </CardGeral>
            <CardGeral text="Formas de Pagamentos" size="quatro">
            <div id="chart" style="max-width: 760px;">
            <div ref="formasPagamentos"></div>
            </div>
            </CardGeral>
            <CardGeral text="Quantidade por Planos" size="quatro"> 
            <div id="chart" style="max-width: 760px;">
            <div ref="quantidadePlanos"></div>
            </div>
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
            <CardGeral text="Status dos Doadores" size="quatro">
            <div id="chart" style="max-width: 760px;">
            <div ref="statusDoadores"></div>
            </div>
            </CardGeral>
            <CardGeral text="Status das Assinaturas" size="quatro">            
            <div id="chart" style="max-width: 760px;">
            <div ref="statusAssinatura"></div>
            </div>
            </CardGeral>

        </div>
    </div>`,
}