export default function ($div, data) {
  var options = {
    series: [{
      name: 'Total Arrecadado',
      type: 'column',
      data: [1.4, 2, 2.5, 1.5, 2.5, 2.8, 3.8, 4.6, 5, 8, 8, 6]
    }, {
      name: 'Total Pago',
      type: 'column',
      data: [1.1, 3, 3.1, 4, 4.1, 4.9, 6.5, 8.5, 5, 8, 8, 4]
    }, {
      name: 'Total Aberto',
      type: 'column',
      data: [2, 3, 3.1, 8, 4.1, 9, 6.5, 8.5, 2.5, 2.8, 3.8, 4.6]
    }, {
      name: 'Meta',
      type: 'line',
      data: [5, 9, 7, 9, 10, 14, 17, 18, 14, 18, 19, 8]
    }],
    chart: {
      height: 350,
      type: 'line',
      stacked: false
    },
    stroke: {
      width: [1, 1, 4]
    },
    title: {
      text: 'Faturamentos',
      align: 'left',
      offsetX: 110
    },

    colors: ['#4792fc', '#13b385', '#fbd866', '#bc275f'],
    //labels: ['jan','fev','mar','abr', 'maio', 'jun','jul','ago','set','out','nov','dez'],
    xaxis: {
      categories: ['jan', 'fev', 'mar', 'abr', 'maio', 'jun', 'jul', 'ago', 'set', 'out', 'nov', 'dez'],

    },

  };

  var chart = new ApexCharts($div, options);
  chart.render();
}