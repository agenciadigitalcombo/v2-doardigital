import Table  from "../components/Table.js"
import Botao  from "../components/Botao.js"
import BreadCrumb from "../components/BreadCrumb.js"
import Card  from "../components/Card.js"
import Loader from "../components/Loader.js"
import Card2 from "../components/Card2.js"
import CardGeral from "../components/CardGeral.js"
import ApiDoadores from "../components/apiDoadores.js"
import MyInstitution from "../components/myInstitution.js"




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
                { name: "Mel", value: 2.50, status: "PAID" },
                { name: "Jhon", value: 15.50, status: "AWAITING" },
                { name: "Kleber", value: 32, status: "RECUSED" },
                { name: "Bruno", value: 2.50, status: "PAID" },
                { name: "Jhon", value: 15.50, status: "AWAITING" },
                { name: "Kleber", value: 32, status: "RECUSED" },
                { name: "Bruno", value: 2.50, status: "PAID" },
                { name: "Jhon", value: 15.50, status: "AWAITING" },
                { name: "Kleber", value: 32, status: "RECUSED" },
                { name: "Bruno", value: 2.50, status: "PAID" },
                { name: "Jhon", value: 15.50, status: "AWAITING" },
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



        var options = {
            chart: {
              width: "100%",
              height: 380,
              type: "bar"
            },
            plotOptions: {
              bar: {
                horizontal: true
              }
            },
            dataLabels: {
              enabled: false
            },
            stroke: {
              width: 1,
              colors: ["#fff"]
            },
            series: [
              {
                data: [44, 55, 41, 64, 22, 43, 21]
              },
              {
                data: [53, 32, 33, 52, 13, 44, 32]
              }
            ],
            xaxis: {
              categories: [
                "Korea",
                "Canada",
                "Poland",
                "Italy",
                "France",
                "Japan",
                "China"
              ]
            },
            legend: {
              position: "right",
              verticalAlign: "top",
              containerMargin: {
                left: 35,
                right: 60
              }
            },
            responsive: [
              {
                breakpoint: 1000,
                options: {
                  plotOptions: {
                    bar: {
                      horizontal: false
                    }
                  },
                  legend: {
                    position: "bottom"
                  }
                }
              }
            ]
          };
          
          var chart = new ApexCharts(
            document.querySelector("#responsive-chart"),
            options
          );
          
          chart.render();
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
      somaAll(ar) {
          return ar.reduce((acc, el) => {
              acc += 1
              return acc
          }, 0)
      },
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
            <CardGeral text="Faturamento" size="full"/>
            <CardGeral text="Quantidade de Doações" size="full"/>
            <CardGeral text="Formas de Pagamentos" size="quatro"/>
            <CardGeral text="Quantidade por Planos" size="quatro"> 
            <div id="chart" style="max-width: 760px;">
            <div id="responsive-chart"></div>
            </div>
            </CardGeral>
            <CardGeral text="Status das Doações" size="quatro"/>
            <CardGeral text="Tipos dos Doadores" size="quatro"/>
            <CardGeral text="Status dos Doadores" size="quatro"/>
            <CardGeral text="Status das Assinaturas" size="quatro"/>

        </div>
    </div>`,
}