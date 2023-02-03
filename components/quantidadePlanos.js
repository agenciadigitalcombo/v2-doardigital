export default function ($div, data) {
  var options = {
    series: [{
      name: 'Valor',
      data: data.quant,
    }],
    chart: {
      height: 350,
      type: 'bar',
    },
    plotOptions: {
      bar: {
        borderRadius: 10,
        dataLabels: {
          position: 'top',
        },
      }
    },
    dataLabels: {
      enabled: true,
      formatter: function (val) {
        return val;
      },
      offsetY: -20,
      style: {
        fontSize: '12px',
        colors: ["#304758"]
      }
    },

    xaxis: {
      categories: data.valor,

    },
    yaxis: {
      axisBorder: {
        show: false
      },
      axisTicks: {
        show: false,
      },
      labels: {
        show: false,
        formatter: function (val) {
          return val;
        }
      }

    },
    title: {
    }
  };
  $div.innerHTML = ''
  var chart = new ApexCharts($div, options);
  chart.render();

}
