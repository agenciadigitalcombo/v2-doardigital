export default function($div, data) {
  var options = {
    series: [{
    name: 'Dia',
    data: [44, 55, 41, 67, 22, 43, 21, 33, 45, 31, 87, 65, 35, 31, 87, 65, 43, 21, 31, 87, 65, 35, 31, 87,12, 35, 31, 87,12]
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
    categories: ['1', '2', '3', '4', '5', '6','7', '8', '9', '10', '11', '12', '13', 
   '14', '15', '16','17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29',
    ],
     
    },
 
    title: {
  },
    };

    var chart = new ApexCharts($div, options);
    chart.render();

}
