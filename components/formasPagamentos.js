export default function($div, data) {
  var options = {
    chart: {
      type: 'bar'
    },
    series: [
      {
        name: 'Boleto',
        data: [30]
      },
      {
        name: 'Pix',
        data: [40]
      },
      {
        name: 'Cartao',
        data: [45]
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
