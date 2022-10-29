export default function ($div, data) {
  var options = {
    series: [{
      name: 'Valor',
      data: data.value
    }],

    chart: {
      height: 350,
      type: 'bar',
    },
    plotOptions: {
      bar: {
        borderRadius: 5,
        columnWidth: '50%',
      }
    },
    colors: ['#4792fc'],
    xaxis: {
      labels: {
        rotate: -15
      },
      categories: data.label,

    },

    title: {
    },
  };

  var chart = new ApexCharts($div, options);
  chart.render();

}
