import adm from "../../../../../static/js/api/adm.js"

export default {
	template: `
	<div>
	<div>

	<c-header></c-header>
	<c-aside></c-aside>

	<div class="d-flex flex-column flex-root">
			 
			<div class="page d-flex flex-row flex-column-fluid">
		 
				<div class="wrapper d-flex flex-column flex-row-fluid" id="kt_wrapper">
			  
					<div class="content d-flex flex-column flex-column-fluid" id="kt_content">
						 
						<div class="post d-flex flex-column-fluid" id="kt_post">
						 
							<div id="kt_content_container" class="container-xxl">
							 
								<div class="row g-5 g-xl-8">
								 
									<div class="col-xl-6">
									 
										<div class="card card-xl-stretch mb-xl-8">
                                            <div class="card-body p-5">
											<div id="chart">
											</div>
											
                                            </div>
										</div>
									
									</div>
									<!--end::Col-->
								
									<!--begin::Col-->
									<div class="col-xl-6">
										
										<div class="card card-xl-stretch mb-5 mb-xl-8">
                                            <div class="card-body p-5">
											<div id="chart2">
											</div>
                                            </div>
										</div>
									
									</div>
									<!--end::Col-->

										<!--begin::Col-->
										<div class="col-xl-6">
											
											<div class="card card-xl-stretch mb-5 mb-xl-8">
											<div class="card-body p-5">
											<div id="chart3">
											</div>
                                            </div>
											</div>
										
										</div>
										<!--end::Col-->

											<!--begin::Col-->
									<div class="col-xl-3">
										
										<div class="card card-xl-stretch mb-xl-8">
										 
										</div>
									
									</div>
									<!--end::Col-->
								</div>
								
						 
							</div>
						 
						</div>
					 
					</div>
					 
				</div>
			 
			</div>
			 
		</div>
											 
									  
	<c-footer/>
	</div>
 
	</div>												
    
    `,



	data: function () {

		return {
			 
		}

	},
 
	methods: { 
	},

	mounted() {
	    var options = {
          series: [44, 55, 13, 43, 22],
          chart: {
          width: 380,
          type: 'pie',
        },
        labels: ['Cartao', 'Boleto', 'Pix', 'Outros', 'Outros'],
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

        var chart = new ApexCharts(document.querySelector("#chart"), options);
        chart.render();


		var options = {
			chart: {
			  type: 'bar'
			},
			series: [{
			  name: 'sales',
			  data: [30,40,45,50,49,60,70,91,125]
			}],
			xaxis: {
			  categories: [1991,1992,1993,1994,1995,1996,1997, 1998,1999]
			}
		  }
		  
		  var chart = new ApexCharts(document.querySelector("#chart2"), options);
		  chart.render();


		    
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
		
	},

	created() {
	 
	},

}

