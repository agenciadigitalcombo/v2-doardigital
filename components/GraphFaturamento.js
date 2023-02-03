export default function ($div, data) {
  var options = {
    series: [{
      name: 'Total Arrecadado',
      type: 'column',
      data: data.total
    }, {
      name: 'Total Pago',
      type: 'column',
      data: data.total_pago
    }, {
      name: 'Total Aberto',
      type: 'column',
      data: data.total_aberto
    }, {
      name: 'Meta',
      type: 'line',
      data: data.metas
    }],
    chart: {
      height: 350,
      type: 'line',
      stacked: false,
      toolbar: {
        show: false,
      }
    },
    stroke: {
      width: [1, 1, 4]
    },
    title: {
    },

    colors: ['#4792fc', '#13b385', '#fbd866', '#bc275f'],
    //labels: ['jan','fev','mar','abr', 'maio', 'jun','jul','ago','set','out','nov','dez'],
    xaxis: {
      categories: ['jan', 'fev', 'mar', 'abr', 'maio', 'jun', 'jul', 'ago', 'set', 'out', 'nov', 'dez'],

    },

  };
  $div.innerHTML = ''
  var chart = new ApexCharts($div, options);
  chart.render();
}