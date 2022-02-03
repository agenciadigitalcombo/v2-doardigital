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
												<span class="fs-4 fw-bold text-info pb-1 px-2">Saldo Liberado</span>
												<span class="fs-lg-2tx fw-bolder d-flex justify-content-center">R$
													<span data-kt-countup="true"
														data-kt-countup-value="63,240.00"> {{liberado}}</span></span>
											</div>
										</div> 
										<div class="col">
											<div class="card card-dashed flex-center min-w-175px my-3 p-6">
												<span class="fs-4 fw-bold text-success pb-1 px-2">Saldo á liberar</span>
												<span class="fs-lg-2tx fw-bolder d-flex justify-content-center">R$
													<span data-kt-countup="true"
														data-kt-countup-value="8,530.00">{{liberar}}</span></span>
											</div>
										</div> 
										<div class="col">
											<div class="card card-dashed flex-center min-w-175px my-3 p-6">
												<span class="fs-4 fw-bold text-danger pb-1 px-2">Total Retirado</span>
												<span class="fs-lg-2tx fw-bolder d-flex justify-content-center">R$
													<span data-kt-countup="true"
														data-kt-countup-value="2,600">{{retirado}}</span></span>
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
												<form class="form" action="#"> 
													<div class="py-10 px-lg-17"> 
														<div class="mb-5"> 
															<div class="fv-row"> 
																<div class="btn-group w-100" data-kt-buttons="true"
																	data-kt-buttons-target="[data-kt-button]"> 
																	<label
																		class="btn btn-outline-secondary text-muted text-hover-white text-active-white btn-outline btn-active-success active"
																		data-kt-button="true"> 
																		<input @click="jms = false" class="btn-check"
																			type="radio" name="method" value="1" />
																	 
																		Valor Total
																	</label> 
																	<label
																		class="btn btn-outline-secondary text-muted text-hover-white text-active-white btn-outline btn-active-success"
																		data-kt-button="true">
																		<!--begin::Input-->
																		<input @click="jms = true" class="btn-check"
																			type="radio" name="method" value="2" />
																	 
																		Valor Parcial
																	</label> 
																</div> 
																<div class="mb-2 mt-10" v-if="jms">
																	<input type="email"
																		class="form-control form-control-solid"
																		value="0" />
																</div>

															</div> 
														</div> 
													</div> 
													<div class="modal-footer flex-center">
 
														<button type="submit" id="kt_modal_create_api_key_submit"
															class="btn btn-primary">
															<span class="indicator-label">Solicitar Saque</span>
															<span class="indicator-progress">Please wait...
																<span
																	class="spinner-border spinner-border-sm align-middle ms-2"></span></span>
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
														<div class="timeline-label fw-bolder text-gray-800 fs-6">08:42
														</div> 
														<div class="timeline-badge">
															<i class="fa fa-genderless text-warning fs-1"></i>
														</div> 
														<div class="timeline-content fw-bolder text-gray-800 ps-3">
															{{item.status}}
															<a href="#" class="text-primary">R$ {{item.amount}}</a>
															<div class="timeline-content fw-bolder text-gray-800 fs-6">
															{{item.date_created}}
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
			jms: null,
			liberado: null,
			liberar: null,
			retirado: null,

			data: null,
			valor: null,
			status: null,
			historico: []
		}
	},

	methods: {
      async listar() {
            let res = await adm.listarCarteira( 
				this.token,
				this.instituicao_id,
			)
            return res
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
	//	this.data = historico.date_created
	//	this.valor = historico.amount
	//	this.status = historico.status
		 
		
    
        console.log(this.data)
    },


	created() {


	},


}

