export default function($div, data) {
    var options = {
        series: [{
        name: 'Valor',
        data:  ["25", "50", "75", "100", "150", "200", "250", "300"],
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
          return "Rs " + val ;
        },
        offsetY: -20,
        style: {
          fontSize: '12px',
          colors: ["#304758"]
        }
      },
      
      xaxis: {
        categories: ["25", "50", "75", "100", "150", "200", "250", "300"],
      
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
            return val + "RS";
          }
        }
      
      },
      title: {
      }
      };

    var chart = new ApexCharts($div, options);
    chart.render();

}
