export default function($div, data) {
  console.log(data)
  var options = {
    chart: {
      type: 'bar'
    },
    series: [
      {
        name: 'Boleto',
        data: [data.BOLETO]
      },
      {
        name: 'Pix',
        data: [data.PIX]
      },
      {
        name: 'Cartao',
        data: [data.CREDIT_CARD]
      }
    ],

    plotOptions: {
      bar: {
        dataLabels: {
          position: 'top'

        }
      }
    },

    title: {
    },

    colors: ['#49bfff', '#0fa39e', '#39539E'],
    labels: [''],

  }

  var pagamento = new ApexCharts($div, options);
  pagamento.render();

}
