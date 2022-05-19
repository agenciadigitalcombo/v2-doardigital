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

		am5.ready(function() {

			// Create root element
			// https://www.amcharts.com/docs/v5/getting-started/#Root_element
			var root = am5.Root.new("statusDoacao");
			
			// Set themes
			// https://www.amcharts.com/docs/v5/concepts/themes/
			root.setThemes([
			  am5themes_Animated.new(root)
			]);
			
			// Create chart
			// https://www.amcharts.com/docs/v5/charts/percent-charts/pie-chart/
			var chart = root.container.children.push(
			  am5percent.PieChart.new(root, {
				endAngle: 270
			  })
			);
			
			// Create series
			// https://www.amcharts.com/docs/v5/charts/percent-charts/pie-chart/#Series
			var series = chart.series.push(
			  am5percent.PieSeries.new(root, {
				valueField: "value",
				categoryField: "category",
				endAngle: 270
			  })
			);
			
			series.states.create("hidden", {
			  endAngle: -90
			});
			
			// Set data
			// https://www.amcharts.com/docs/v5/charts/percent-charts/pie-chart/#Setting_data
			series.data.setAll([{
			  category: "Pago",
			  value: 501.9
			}, {
			  category: "Aberto",
			  value: 301.9
			},  {
			  category: "Vencido",
			  value: 99
			}]);
			
			series.appear(1000, 100);
			
			}); // end am5.ready()

	 
 

		am5.ready(function() {

			// Create root element
			// https://www.amcharts.com/docs/v5/getting-started/#Root_element
			var root = am5.Root.new("tipoDoador");
			
			// Set themes
			// https://www.amcharts.com/docs/v5/concepts/themes/
			root.setThemes([
			  am5themes_Animated.new(root)
			]);
			
			// Create chart
			// https://www.amcharts.com/docs/v5/charts/percent-charts/pie-chart/
			var chart = root.container.children.push(
			  am5percent.PieChart.new(root, {
				endAngle: 270
			  })
			);
			
			// Create series
			// https://www.amcharts.com/docs/v5/charts/percent-charts/pie-chart/#Series
			var series = chart.series.push(
			  am5percent.PieSeries.new(root, {
				valueField: "value",
				categoryField: "category",
				endAngle: 270
			  })
			);
			
			series.states.create("hidden", {
			  endAngle: -90
			});
			
			// Set data
			// https://www.amcharts.com/docs/v5/charts/percent-charts/pie-chart/#Setting_data
			series.data.setAll([ {
			  category: "Recorrente",
			  value: 165.8
			}, {
			  category: "Unico",
			  value: 139.9
			}]);
			
			series.appear(1000, 100);
			
			}); // end am5.ready()

	 
		am5.ready(function() {

			// Create root element
			// https://www.amcharts.com/docs/v5/getting-started/#Root_element
			var root = am5.Root.new("statusDoador");
			
			// Set themes
			// https://www.amcharts.com/docs/v5/concepts/themes/
			root.setThemes([
			  am5themes_Animated.new(root)
			]);
			
			// Create chart
			// https://www.amcharts.com/docs/v5/charts/percent-charts/pie-chart/
			var chart = root.container.children.push(
			  am5percent.PieChart.new(root, {
				endAngle: 270
			  })
			);
			
			// Create series
			// https://www.amcharts.com/docs/v5/charts/percent-charts/pie-chart/#Series
			var series = chart.series.push(
			  am5percent.PieSeries.new(root, {
				valueField: "value",
				categoryField: "category",
				endAngle: 270
			  })
			);
			
			series.states.create("hidden", {
			  endAngle: -90
			});
			
			// Set data
			// https://www.amcharts.com/docs/v5/charts/percent-charts/pie-chart/#Setting_data
			series.data.setAll([{
			  category: "Pago",
			  value: 501.9
			}, {
			  category: "Aberto",
			  value: 99
			}]);
			
			series.appear(1000, 100);
			
			}); // end am5.ready()

		 

		am5.ready(function() {

			// Create root element
			// https://www.amcharts.com/docs/v5/getting-started/#Root_element
			var root = am5.Root.new("statusAssinturas");
			
			// Set themes
			// https://www.amcharts.com/docs/v5/concepts/themes/
			root.setThemes([
			  am5themes_Animated.new(root)
			]);
			
			// Create chart
			// https://www.amcharts.com/docs/v5/charts/percent-charts/pie-chart/
			var chart = root.container.children.push(
			  am5percent.PieChart.new(root, {
				endAngle: 270
			  })
			);
			
			// Create series
			// https://www.amcharts.com/docs/v5/charts/percent-charts/pie-chart/#Series
			var series = chart.series.push(
			  am5percent.PieSeries.new(root, {
				valueField: "value",
				categoryField: "category",
				endAngle: 270
			  })
			);
			
			series.states.create("hidden", {
			  endAngle: -90
			});
			
			// Set data
			// https://www.amcharts.com/docs/v5/charts/percent-charts/pie-chart/#Setting_data
			series.data.setAll([  {
			  category: "Ativo",
			  value: 201.1
			}, {
			  category: "Inativo",
			  value: 465.8
			}]);
			
			series.appear(1000, 100);
			
			}); // end am5.ready()

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

			colors: ['#49bfff', '#0fa39e', '#39539E'],
			labels: [''],

		}

		var pagamento = new ApexCharts(document.querySelector("#formaPagamento"), options);
		pagamento.render();
 
  
		am5.ready(function() {

			// Create root element
			// https://www.amcharts.com/docs/v5/getting-started/#Root_element
			var root = am5.Root.new("quantidade");
			
			// Set themes
			// https://www.amcharts.com/docs/v5/concepts/themes/
			root.setThemes([
			  am5themes_Animated.new(root)
			]);
			
			// Create chart
			// https://www.amcharts.com/docs/v5/charts/xy-chart/
			var chart = root.container.children.push(am5xy.XYChart.new(root, {
			  panX: false,
			  panY: false,
			  wheelX: "none",
			  wheelY: "none"
			}));
			
			// Add cursor
			// https://www.amcharts.com/docs/v5/charts/xy-chart/cursor/
			var cursor = chart.set("cursor", am5xy.XYCursor.new(root, {}));
			cursor.lineY.set("visible", false);
			
			// Create axes
			// https://www.amcharts.com/docs/v5/charts/xy-chart/axes/
			var xRenderer = am5xy.AxisRendererX.new(root, { minGridDistance: 30 });
			
			var xAxis = chart.xAxes.push(am5xy.CategoryAxis.new(root, {
			  maxDeviation: 0,
			  categoryField: "name",
			  renderer: xRenderer,
			  tooltip: am5.Tooltip.new(root, {})
			}));
			
			xRenderer.grid.template.set("visible", false);
			
			var yRenderer = am5xy.AxisRendererY.new(root, {});
			var yAxis = chart.yAxes.push(am5xy.ValueAxis.new(root, {
			  maxDeviation: 0,
			  min: 0,
			  extraMax: 0.1,
			  renderer: yRenderer
			}));
			
			yRenderer.grid.template.setAll({
			  strokeDasharray: [2, 2]
			});
			
			// Create series
			// https://www.amcharts.com/docs/v5/charts/xy-chart/series/
			var series = chart.series.push(am5xy.ColumnSeries.new(root, {
			  name: "Series 1",
			  xAxis: xAxis,
			  yAxis: yAxis,
			  valueYField: "value",
			  sequencedInterpolation: true,
			  categoryXField: "name",
			  tooltip: am5.Tooltip.new(root, { dy: -25, labelText: "{valueY}" })
			}));
			
			
			series.columns.template.setAll({
			  cornerRadiusTL: 5,
			  cornerRadiusTR: 5
			});
			
			series.columns.template.adapters.add("fill", (fill, target) => {
			  return chart.get("colors").getIndex(series.columns.indexOf(target));
			});
			
			series.columns.template.adapters.add("stroke", (stroke, target) => {
			  return chart.get("colors").getIndex(series.columns.indexOf(target));
			});
			
			// Set data
			var data = [
			  
			  {
				name: "25",
				value: 45724,
			  },
			  {
				name: "50",
				value: 13654, 
			  },
			  {
				name: "75",
				value: 65456,
			  },
			  {
				name: "100",
				value: 45724,
			  },
			  {
				name: "150",
				value: 13654, 
			  },
			  {
				name: "200",
				value: 65456,
			  },
			  {
				name: "250",
				value: 45724,
			  },
			  {
				name: "300",
				value: 13654, 
			  },
			];
		 
			xAxis.data.setAll(data);
			series.data.setAll(data);
			
			// Make stuff animate on load
			// https://www.amcharts.com/docs/v5/concepts/animations/
			series.appear(1000);
			chart.appear(1000, 100);
			
			}); // end am5.ready()
		
		 


  
		am5.ready(function() {

			// Create root element
			// https://www.amcharts.com/docs/v5/getting-started/#Root_element
			var root = am5.Root.new("usuario");
			
			// Set themes
			// https://www.amcharts.com/docs/v5/concepts/themes/
			root.setThemes([
			  am5themes_Animated.new(root)
			]);
			
			// Create chart
			// https://www.amcharts.com/docs/v5/charts/xy-chart/
			var chart = root.container.children.push(am5xy.XYChart.new(root, {
			  panX: false,
			  panY: false,
			  wheelX: "none",
			  wheelY: "none"
			}));
			
			// Add cursor
			// https://www.amcharts.com/docs/v5/charts/xy-chart/cursor/
			var cursor = chart.set("cursor", am5xy.XYCursor.new(root, {}));
			cursor.lineY.set("visible", false);
			
			// Create axes
			// https://www.amcharts.com/docs/v5/charts/xy-chart/axes/
			var xRenderer = am5xy.AxisRendererX.new(root, { minGridDistance: 30 });
			
			var xAxis = chart.xAxes.push(am5xy.CategoryAxis.new(root, {
			  maxDeviation: 0,
			  categoryField: "name",
			  renderer: xRenderer,
			  tooltip: am5.Tooltip.new(root, {})
			}));
			
			xRenderer.grid.template.set("visible", false);
			
			var yRenderer = am5xy.AxisRendererY.new(root, {});
			var yAxis = chart.yAxes.push(am5xy.ValueAxis.new(root, {
			  maxDeviation: 0,
			  min: 0,
			  extraMax: 0.1,
			  renderer: yRenderer
			}));
			
			yRenderer.grid.template.setAll({
			  strokeDasharray: [2, 2]
			});
			
			// Create series
			// https://www.amcharts.com/docs/v5/charts/xy-chart/series/
			var series = chart.series.push(am5xy.ColumnSeries.new(root, {
			  name: "Series 1",
			  xAxis: xAxis,
			  yAxis: yAxis,
			  valueYField: "value",
			  sequencedInterpolation: true,
			  categoryXField: "name",
			  tooltip: am5.Tooltip.new(root, { dy: -25, labelText: "{valueY}" })
			}));
			
			
			series.columns.template.setAll({
			  cornerRadiusTL: 5,
			  cornerRadiusTR: 5
			});
			
			series.columns.template.adapters.add("fill", (fill, target) => {
			  return chart.get("colors").getIndex(series.columns.indexOf(target));
			});
			
			series.columns.template.adapters.add("stroke", (stroke, target) => {
			  return chart.get("colors").getIndex(series.columns.indexOf(target));
			});
			
			// Set data
			var data = [
			  {
				name: "1",
				value: 35654,
				bulletSettings: { src: "https://www.amcharts.com/lib/images/faces/A04.png" }
			  },
			  {
				name: "2",
				value: 65456,
			  },
			  {
				name: "3",
				value: 45724,
			  },
			  {
				name: "4",
				value: 13654, 
			  },
			  {
				name: "5",
				value: 65456,
			  },
			  {
				name: "6",
				value: 45724,
			  },
			  {
				name: "7",
				value: 13654, 
			  },
			  {
				name: "8",
				value: 65456,
			  },
			  {
				name: "9",
				value: 45724,
			  },
			  {
				name: "10",
				value: 13654, 
			  }, {
				name: "11",
				value: 35654,
				bulletSettings: { src: "https://www.amcharts.com/lib/images/faces/A04.png" }
			  },
			  {
				name: "12",
				value: 65456,
			  },
			  {
				name: "13",
				value: 45724,
			  },
			  {
				name: "14",
				value: 13654, 
			  },
			  {
				name: "15",
				value: 65456,
			  },
			  {
				name: "16",
				value: 45724,
			  },
			  {
				name: "17",
				value: 13654, 
			  },
			  {
				name: "18",
				value: 65456,
			  },
			  {
				name: "19",
				value: 45724,
			  },  {
				name: "20",
				value: 45724,
			  },  {
				name: "21",
				value: 35654,
				bulletSettings: { src: "https://www.amcharts.com/lib/images/faces/A04.png" }
			  },
			  {
				name: "22",
				value: 65456,
			  },
			  {
				name: "23",
				value: 45724,
			  },
			  {
				name: "24",
				value: 13654, 
			  },
			  {
				name: "25",
				value: 65456,
			  },
			  {
				name: "26",
				value: 45724,
			  },
			  {
				name: "27",
				value: 13654, 
			  },
			  {
				name: "28",
				value: 65456,
			  },
			  {
				name: "29",
				value: 45724,
			  },
			  {
				name: "30",
				value: 13654, 
			  },
			];
		 
			xAxis.data.setAll(data);
			series.data.setAll(data);
			
			// Make stuff animate on load
			// https://www.amcharts.com/docs/v5/concepts/animations/
			series.appear(1000);
			chart.appear(1000, 100);
			
			}); // end am5.ready()
		
		 
		  am5.ready(function() {

			// Create root element
			// https://www.amcharts.com/docs/v5/getting-started/#Root_element
			var root = am5.Root.new("faturamentos");
			
			
			// Set themes
			// https://www.amcharts.com/docs/v5/concepts/themes/
			root.setThemes([
			  am5themes_Animated.new(root)
			]);
			
			
			// Create chart
			// https://www.amcharts.com/docs/v5/charts/xy-chart/
			var chart = root.container.children.push(am5xy.XYChart.new(root, {
			  panX: false,
			  panY: false,
			  wheelX: "panX",
			  wheelY: "zoomX",
			  layout: root.verticalLayout
			}));
			
			
			// Add legend
			// https://www.amcharts.com/docs/v5/charts/xy-chart/legend-xy-series/
			var legend = chart.children.push(
			  am5.Legend.new(root, {
				centerX: am5.p50,
				x: am5.p50
			  })
			);
			
			var data = [{
			  "year": "Jan",
			  "arrecadado": 2.5,
			  "pago": 2.5,
			  "aberto": 2.1,
			 
			}, {
			  "year": "Fev",
			  "arrecadado": 2.6,
			  "pago": 2.7,
			  "aberto": 2.2,
			 
			}, {
			  "year": "Mar",
			  "arrecadado": 2.8,
			  "pago": 2.9,
			  "aberto": 2.4,
			 
			}, {
				"year": "Abr",
				"arrecadado": 2.6,
				"pago": 2.7,
				"aberto": 2.2,
			   
			  }, {
				"year": "Maio",
				"arrecadado": 2.8,
				"pago": 2.9,
				"aberto": 2.4,
			   
			  }, {
				"year": "Jun",
				"arrecadado": 2.6,
				"pago": 2.7,
				"aberto": 2.2,
			   
			  }, {
				"year": "Jul",
				"arrecadado": 2.8,
				"pago": 2.9,
				"aberto": 2.4,
			   
			  }, {
				"year": "Ago",
				"arrecadado": 2.6,
				"pago": 2.7,
				"aberto": 2.2,
			   
			  }, {
				"year": "Set",
				"arrecadado": 2.8,
				"pago": 2.9,
				"aberto": 2.4,
			   
			  }, {
				"year": "Out",
				"arrecadado": 2.6,
				"pago": 2.7,
				"aberto": 2.2,
			   
			  }, {
				"year": "Nov",
				"arrecadado": 2.8,
				"pago": 2.9,
				"aberto": 2.4,
			   
			  }, {
				"year": "Dez",
				"arrecadado": 2.6,
				"pago": 2.7,
				"aberto": 2.2,
			   
			  }]
			
			
			// Create axes
			// https://www.amcharts.com/docs/v5/charts/xy-chart/axes/
			var xAxis = chart.xAxes.push(am5xy.CategoryAxis.new(root, {
			  categoryField: "year",
			  renderer: am5xy.AxisRendererX.new(root, {
				cellStartLocation: 0.1,
				cellEndLocation: 0.9
			  }),
			  tooltip: am5.Tooltip.new(root, {})
			}));
			
			xAxis.data.setAll(data);
			
			var yAxis = chart.yAxes.push(am5xy.ValueAxis.new(root, {
			  renderer: am5xy.AxisRendererY.new(root, {})
			}));
			
			
			// Add series
			// https://www.amcharts.com/docs/v5/charts/xy-chart/series/
			function makeSeries(name, fieldName) {
			  var series = chart.series.push(am5xy.ColumnSeries.new(root, {
				name: name,
				xAxis: xAxis,
				yAxis: yAxis,
				valueYField: fieldName,
				categoryXField: "year"
			  }));
			
			  series.columns.template.setAll({
				tooltipText: "{name}, {categoryX}:{valueY}",
				width: am5.percent(90),
				tooltipY: 0
			  });
			
			  series.data.setAll(data);
			
			  // Make stuff animate on load
			  // https://www.amcharts.com/docs/v5/concepts/animations/
			  series.appear();
			
			  series.bullets.push(function () {
				return am5.Bullet.new(root, {
				  locationY: 0,
				  sprite: am5.Label.new(root, {
					text: "{valueY}",
					fill: root.interfaceColors.get("alternativeText"),
					centerY: 0,
					centerX: am5.p50,
					populateText: true
				  })
				});
			  });
			
			  legend.data.push(series);
			}
			
			makeSeries("Total Arrecadado", "arrecadado");
			makeSeries("Total Pago", "pago");
			makeSeries("Total Aberto", "aberto");
		
			
			
			// Make stuff animate on load
			// https://www.amcharts.com/docs/v5/concepts/animations/
			chart.appear(1000, 100);
			
			}); // end am5.ready()

	 

	},

	created() {

	},

	template: await get_template('./assets/js/views/graficos/grafico2')
}