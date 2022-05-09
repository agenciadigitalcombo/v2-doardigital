import get_template from '../../componentes/get_template.js'
import adm from "../../../../../static/js/api/adm.js"

export default {


	data: function () {

		return {
			token: null,
			instituicao_id: null,
			dash_inst: "",
			doacao_total: "",
			cartao_total: "",
			 boleto_total: "",
			 pix_total: "",

			 concluido_total: "",
			 cartao_concluido: "",
			 boleto_concluido: "",
			 pix_concluido: "",

			 aberto_total: "",
			 cartao_aberto: "",
			 boleto_aberto: "",
			 pix_aberto: "",

			 falhado_total: "",
			 cartao_falhado: "",
			 boleto_falhado: "",
			 pix_falhado: "",

			msg: null,
			error: null,
			jms: true,

// outro
			ontem: true,
			seteDia: false,
			trintaDia: false,
			esteAno: false, 
		}

	},

	methods: {
		ontemX() {
		 	this.ontem = true,
			 this.seteDia = false,
			 this.trintaDia = false,
			 this.esteAno = false
		},

		seteDiaX() {
			this.ontem = false,
			this.seteDia = true,
			this.trintaDia = false,
			this.esteAno = false
		},

		trintaDiaX() {
			this.ontem = false,
			this.seteDia = false,
			this.trintaDia = true,
			this.esteAno = false
		},

		esteAnoX() {
			this.ontem = false,
			this.seteDia = false,
			this.trintaDia = false,
			this.esteAno = true
		},

	},

	mounted() {
		var options = {
			series: [60, 20, 20],
			chart: {
				width: 380,
				type: 'pie',
			},
			colors: ['#37be00', '#ffd752', '#fe504f'],
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
			}],
			title: {
				text: 'Status das Doações',

			},
		};

		var chart = new ApexCharts(document.querySelector("#statusDoacao"), options);
		chart.render();

		var options = {
			series: [70, 30],
			chart: {
				width: 380,
				type: 'pie',
			},
			colors: ['#39539E', '#4fa8ff'],
			labels: ['Recorrente', 'Unico'],
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
			}],
			title: {
				text: 'Tipos dos Doadores',

			},
		};
		var chart = new ApexCharts(document.querySelector("#tipoDoador"), options);
		chart.render();

		var options = {
			series: [80, 20],
			chart: {
				width: 380,
				type: 'pie',
			},
			colors: ['#11b200', '#ff9901'],
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
			}],
			title: {
				text: 'Status dos Doadores',

			},
		};
		var chart = new ApexCharts(document.querySelector("#statusDoador"), options);
		chart.render();


		var options = {
			series: [19, 81],
			chart: {
				width: 380,
				type: 'pie',
			},
			colors: ['#6aa84f', '#f1c232'],
			labels: ['Ativo', 'Inativo'],
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
			}],
			title: {
				text: 'Status da Assinturas',

			},
		};
		var chart = new ApexCharts(document.querySelector("#statusAssinturas"), options);
		chart.render();


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
				text: 'Formas de Pagamentos',

			},

			colors: ['#49bfff', '#0fa39e', '#bf265f'],
			labels: [''],

		}

		var pagamento = new ApexCharts(document.querySelector("#formaPagamento"), options);
		pagamento.render();


 



		var options = {
			series: [{
				data: [21, 22, 10]
			}],
			chart: {
				height: 350,
				type: 'bar',
				events: {
					click: function (chart, w, e) {
						// console.log(chart, w, e)
					}
				}
			},
			colors: ['#49bfff', '#0fa39e', '#bf265f'],
			plotOptions: {
				bar: {
					columnWidth: '75%',
					distributed: true,
				}
			},
			dataLabels: {
				enabled: false
			},
			legend: {
				show: false
			},
			title: {
				text: 'Formas de Pagamentos',

			},
			xaxis: {
				categories: [
					['Boleto'],
					['Pix'],
					'Cartao',
				],
				labels: {
					style: {
						colors: ['#1ab7ea', '#6aa84f', '#f44336'],
						fontSize: '12px'
					}
				}
			}
		};

		var chart = new ApexCharts(document.querySelector("#chart4"), options);
		chart.render();


  
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
			text: 'Quantidade de Doações'
		},
		  };
  
		  var chart = new ApexCharts(document.querySelector("#chart"), options);
		  chart.render();
		
		 
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
			 },{
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


  
		  
		var chart = new ApexCharts(document.querySelector("#faturamentos"), options);
		chart.render();

	},

	created() {

	},

	template: await get_template('./assets/js/views/graficos/grafico')
}