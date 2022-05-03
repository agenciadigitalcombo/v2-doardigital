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
			colors: ['#39539E', '#1ab7ea'],
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
			}],
			title: {
				text: 'Status dos Doadores',

			},
		};
		var chart = new ApexCharts(document.querySelector("#statusDoador"), options);
		chart.render();


		var options = {
			series: [89, 11],
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

			colors: ['#1ab7ea', '#6aa84f', '#f44336'],
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
			colors: ['#1ab7ea', '#6aa84f', '#f44336'],
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
				name: 'Total Arrecadado',
				type: 'column',
				data: [1, 3, 6, 8, 9, 8, 12, 12, 14, 20]
			}, {
				name: 'Total Pago',
				type: 'column',
				data: [1.1, 3, 3.1, 4, 4.1, 4.9, 6.5, 8.5]

			},
			{
				name: 'Total Aberto',
				type: 'column',
				data: [2, 3, 3.1, 8, 4.1, 9, 6.5, 8.5]
			}, {

				name: 'Meta',
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
				text: 'Faturamentos'
			},
			dataLabels: {
				enabled: true,
				enabledOnSeries: [1]
			},
			//labels: ['jan','fev','mar','abr', 'maio', 'jun','jul','ago','set','out','nov','dez'],
			xaxis: {
				categories: ['jan', 'fev', 'mar', 'abr', 'maio', 'jun', 'jul', 'ago', 'set', 'out', 'nov', 'dez'],

			},

		};

		var chart = new ApexCharts(document.querySelector("#chart5"), options);
		chart.render();

	},

	created() {

	},

	template: await get_template('./assets/js/views/graficos/grafico')
}