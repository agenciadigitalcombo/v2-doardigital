import adm from "../../../../../static/js/api/adm.js" 

export default {
	template: `
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
									<div class="row"> 
										<div class="col">
											<div class="card card-dashed flex-center min-w-175px my-3 p-6">
												<span class="fs-4 fw-bold text-success pb-1 px-2">Saldo Liberado</span>
												
													<span > {{liberado | form_valor}}</span></span>
											</div>
										</div> 
										<div class="col">
											<div class="card card-dashed flex-center min-w-175px my-3 p-6">
												<span class="fs-4 fw-bold text-info pb-1 px-2">Saldo á liberar</span>
												
													<span >{{liberar | form_valor}}</span></span>
											</div>
										</div> 
										<div class="col">
											<div class="card card-dashed flex-center min-w-175px my-3 p-6">
												<span class="fs-4 fw-bold text-danger pb-1 px-2">Total Retirado</span>
												
													<span >{{retirado | form_valor}}</span></span>
											</div>
										</div>  
									</div> 
								</div> 
								<div class="row g-5 g-xl-8 pt-5"> 
									<div class="col-xl-6"> 
										<div class="card card-xl-stretch mb-xl-8"> 
											<div class="card-header align-items-center border-0 mt-4">
												<h3 class="card-title align-items-start flex-column">
													<span class="fw-bolder mb-2 text-dark">Solicitar Saque</span>
												</h3>

											</div> 
											<div class="card-body pt-5"> 
												<form class="form" action="#" @submit.prevent="solicitarSaque"> 
													<div class="py-10 px-lg-17"> 
														<div class="mb-5"> 
															<div class="fv-row"> 
																<div class="btn-group w-100" data-kt-buttons="true"
																	data-kt-buttons-target="[data-kt-button]"> 
																	<label
																		class="btn btn-outline-secondary text-muted text-hover-white text-active-white btn-outline btn-active-success" 
																		:class="{ active: totalActive }"
																		data-kt-button="true"> 
																		<input @click="total()" class="btn-check"
																			type="radio" name="method" value="1" />
																	 
																		Valor Total
																	</label> 
																	<label
																		class="btn btn-outline-secondary text-muted text-hover-white text-active-white btn-outline btn-active-success" 
																		:class="{ active: parcialActive }"
																		data-kt-button="true">
																		<!--begin::Input-->
																		<input @click="parcial()" class="btn-check"
																			type="radio" name="method" value="2" />
																	 
																		Valor Parcial  
																	</label> 
																</div> 
																<div class="mb-2 mt-10" v-if="jms">
																	<input type="text" v-model="amount"  @input="masc_money"
																		class="form-control form-control-solid" />
																</div>

															</div> 
														</div> 
													</div> 
													<div class="modal-footer flex-center">
 
														<button type="submit" class="btn btn-primary">
															<span class="indicator-label">Solicitar Saque</span>
														</button> 
														<div class=""> 
															<div class="timeline-content fw-bolder text-gray-800 ps-3">
																*Será cobrado o valor de
																<a class="text-primary"> R$3,90 </a>
																por saque
															</div> 
														</div> 
													</div> 
												</form> 
											</div> 
										</div> 
									</div>

									<div class="col-xl-6"> 
										<div class="card card-xl-stretch mb-xl-8">
										 
											<div class="card-header align-items-center border-0 mt-4">
												<h3 class="card-title align-items-start flex-column">
													<span class="fw-bolder mb-2 text-dark">Historico</span>
												</h3>

											</div> 
											<div class="card-body pt-5"> 
												<div class="timeline-label"> 
													<div class="timeline-item" v-for=" (item, indice ) in historico" :key="item.id"> 
														<div class="timeline-label fw-bolder text-gray-800 fs-6">{{item.date_created | form_hora }} 
														</div> 
														<div class="timeline-badge">
															<i class="fa fa-genderless text-warning fs-1"></i>
														</div> 
														<div class="timeline-content fw-bolder text-gray-800 ps-3">
															{{item.status}} 
															<a href="#" class="text-primary">{{item.amount | form_valor}}</a>
															<div class="timeline-content fw-bolder text-gray-800 fs-6">
															{{item.date_created | form_data }}
															</div>
														</div> 
													</div> 
													
												</div> 
											</div> 
										</div> 
									</div> 
								</div>  
							</div> 
						</div> 
					</div> 
				</div> 
			</div> 
		</div> 

		<c-footer/>
		
	</div>
    `,

	data: function () {
		return {  
			token: null,
            instituicao_id: null,
			jms: false,
			liberado: null,
			liberar: null,
			retirado: null,
			amount: null,
			date_created: null,
			valor: null,
			status: null,
			historico: [],
			error: null,
			msg: null, 
			totalActive: true,
			parcialActive: false
		}
	},
	
	filters: {
        form_valor(price) {
            let amount = (price / 100).toLocaleString('pt-br', { minimumFractionDigits: 2 })
            return `R$ ${amount}`
        },

		form_data(datas) {
           // let date_created = datas.split('-').reverse().join('/'); 
		   let date_created = datas.substr(0, 10);
             return `${date_created}`
        },

		form_hora(horas) { 
			let date_created = horas.substr(11, 5);
			  return `${date_created}`
		 },
    },
	methods: {

		total() {
			this.jms = false
			this.totalActive = true,
			this.parcialActive = false,
			this.amount = "50000"
		},

		parcial() {
			this.jms = true
			this.totalActive = false,
			this.parcialActive = true,
			this.amount = "00"
		},

		masc_money() {
            let valor = this.amount.replace(/\D/gi, '')
            valor = (valor/100).toLocaleString('pt-br', { minimumFractionDigits: 2 })
            this.amount = valor
        },

      async listar() {
            let res = await adm.listarCarteira( 
				this.token,
				this.instituicao_id,
			)
            return res
        },
		
		async solicitarSaque() {
			this.error = null
		
				let res = await adm.antecipacao(
					this.token,
					this.instituicao_id,
					this.amount,
			
				)
				if (!res.next) {
						setTimeout(() => this.msg = "", 5000);
					this.error = res.message
					return null
				}
				this.msg = res.message
		},
	},


    async mounted() {
		this.instituicao_id = window.localStorage.getItem('instituicao_id');
		this.token = window.localStorage.getItem('token');

        var carteira = (await this.listar()).payload
		this.liberado = carteira.available.amount
		this.liberar = carteira.waiting_funds.amount
		this.retirado = carteira.transferred.amount


		this.historico = (await this.listar()).historico
		var date_created = this.historico.date_created 
	//	this.data = historico.date_created
	//	this.valor = historico.amount
	//	this.status = historico.status
		 
		
    
        console.log(date_created)
    },


	created() {


	},


}

