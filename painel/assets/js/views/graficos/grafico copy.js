import get_template from '../../componentes/get_template.js'
import adm from "../../../../../static/js/api/adm.js" 

export default {
    

	data: function () {

		return {
			 
		}

	},
 
	methods: { 
	},

	mounted() {
	    var options = {
          series: [60, 20, 20],
          chart: {
          width: 380,
          type: 'pie',
        },
		 colors: ['#6aa84f', '#f1c232', '#f44336'],
        labels: ['Pago', 'Aberto', 'Vencido'],
        responsive: [{
          breakpoint: 480,
          options: {
            chart: {
              width: 50
            },
            legend: {
              position: 'bottom'
            }
          }
        }]
        };

        var chart = new ApexCharts(document.querySelector("#statusDoacao"), options);
        chart.render();

		var options = {
			series: [70, 30],
			chart: {
			width: 380,
			type: 'pie',
		  },
		  colors: ['#39539E','#1ab7ea'],
		  labels: [ 'Recorrente', 'Unico'],
		  responsive: [{
			breakpoint: 480,
			options: {
			  chart: {
				width: 200
			  },
			  legend: {
				position: 'bottom',
			 
			  }
			}
		  }]
		  };
		var chart = new ApexCharts(document.querySelector("#tipoDoador"), options);
        chart.render();

		var options = {
			series: [80, 20],
			chart: {
			width: 380,
			type: 'pie',
		  },
		   colors: ['#6aa84f', '#f1c232'],
		  labels: ['Pago', 'Aberto'],
		  responsive: [{
			breakpoint: 480,
			options: {
			  chart: {
				width: 200
			  },
			  legend: {
				position: 'bottom'
			  }
			}
		  }]
		  };
		var chart = new ApexCharts(document.querySelector("#statusDoador"), options);
        chart.render();


		var options = {
			chart: {
			  type: 'bar'
			},
			series: [{
			  name: 'sales',
			  data: [30,40,45]
			}],
			xaxis: {
			  categories: [1991,1992,1993,1994,1995,1996,1997, 1998,1999]
			}
		  }
		  
		  var pagamento = new ApexCharts(document.querySelector("#formaPagamento"), options);
		  pagamento.render();


		    
		  var options = {
			series: [100, 67, 61, 90],
			chart: {
			height: 390,
			type: 'radialBar',
		  },
		  plotOptions: {
			radialBar: {
			  offsetY: 0,
			  startAngle: 0,
			  endAngle: 270,
			  hollow: {
				margin: 5,
				size: '30%',
				background: 'transparent',
				image: undefined,
			  },
			  dataLabels: {
				name: {
				  show: false,
				},
				value: {
				  show: false,
				}
			  }
			}
		  },
		  colors: ['#1ab7ea', '#0084ff', '#39539E', '#0077B5'],
		  labels: ['Total', 'Pix', 'Boleto', 'Cartao'],
		  legend: {
			show: true,
			floating: true,
			fontSize: '16px',
			position: 'left',
			offsetX: 160,
			offsetY: 15,
			labels: {
			  useSeriesColors: true,
			},
			markers: {
			  size: 0
			},
			formatter: function(seriesName, opts) {
			  return seriesName + ":  " + opts.w.globals.series[opts.seriesIndex]
			},
			itemMargin: {
			  vertical: 3
			}
		  },
		  responsive: [{
			breakpoint: 480,
			options: {
			  legend: {
				  show: false
			  }
			}
		  }]
		  };
  
		  var chart = new ApexCharts(document.querySelector("#chart3"), options);
		  chart.render();
		

		  
		  var options = {
			series: [{
			name: 'Website Blog',
			type: 'column',
			data: [440, 505, 414, 671, 227, 413, 201, 352, 752, 320, 257, 160]
		  }, {
			name: 'Cashflow',
			type: 'column',
			data: [1.1, 3, 3.1, 4, 4.1, 4.9, 6.5, 8.5]
		  }, {
			name: 'Social Media',
			type: 'line',
			data: [23, 42, 35, 27, 43, 22, 17, 31, 22, 22, 12, 16]
		  }],
			chart: {
			height: 350,
			type: 'line',
		  },
		  stroke: {
			width: [0, 4]
		  },
		  title: {
			text: 'Traffic Sources'
		  },
		  dataLabels: {
			enabled: true,
			enabledOnSeries: [1]
		  },
		  labels: ['01 Jan 2001', '02 Jan 2001', '03 Jan 2001', '04 Jan 2001', '05 Jan 2001', '06 Jan 2001', '07 Jan 2001', '08 Jan 2001', '09 Jan 2001', '10 Jan 2001', '11 Jan 2001', '12 Jan 2001'],
		  xaxis: {
			type: 'datetime'
		  },
		  yaxis: [{
			title: {
			  text: 'Website Blog',
			},
		  
		  }, {
			opposite: true,
			title: {
			  text: 'Social Media'
			}
		  }]
		  };
  
		  var chart = new ApexCharts(document.querySelector("#chart4"), options);
		  chart.render();
		


		  
		  var options = {
			series: [{
			name: 'Website Blog',
			type: 'column',
			data: [440, 505, 414, 671, 227, 413, 201, 352, 752, 320, 257, 160]
		  }, {
			name: 'Cashflow',
			type: 'column',
			data: [1.1, 3, 3.1, 4, 4.1, 4.9, 6.5, 8.5]
		  }, 
		  {
			name: 'Cashflow',
			type: 'column',
			data: [1.1, 3, 3.1, 4, 4.1, 4.9, 6.5, 8.5]
		  },{
		  
			name: 'Social Media',
			type: 'line',
			data: [1.1, 3, 3.1, 4, 4.1, 4.9, 6.5, 8.5]
		  }],
			chart: {
			height: 350,
			type: 'line',
		  },
		  stroke: {
			width: [0, 4]
		  },
		  title: {
			text: 'Traffic Sources'
		  },
		  dataLabels: {
			enabled: true,
			enabledOnSeries: [1]
		  },
		  labels: ['01 Jan 2001', '02 Jan 2001', '03 Jan 2001', '04 Jan 2001', '05 Jan 2001', '06 Jan 2001', '07 Jan 2001', '08 Jan 2001', '09 Jan 2001', '10 Jan 2001', '11 Jan 2001', '12 Jan 2001'],
		  xaxis: {
			type: 'datetime'
		  },
		  yaxis: [{
			title: {
			  text: 'Website Blog',
			},
		  
		  }, {
			opposite: true,
			title: {
			  text: 'Social Media'
			}
		  }]
		  };
  
        var chart = new ApexCharts(document.querySelector("#chart5"), options);
        chart.render();
      
	},

	created() {
	 
	},

    template: await get_template('./assets/js/views/graficos/grafico')
}