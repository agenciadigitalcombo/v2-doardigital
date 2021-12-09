import adm from "../../../../static/js/api/adm.js"

export default {
	template: `
    <div>
    <div>
 
    <c-header></c-header>
    <c-aside></c-aside>

    <!--begin::Root-->
    <div class="d-flex flex-column flex-root">
        <!--begin::Page-->
        <div class="page d-flex flex-row flex-column-fluid">
         
            <!--begin::Wrapper-->
            <div class="wrapper d-flex flex-column flex-row-fluid" id="kt_wrapper">
            <!--begin::Root-->
		<div class="content d-flex flex-column flex-column-fluid">
			<!--begin::Post-->
			<div class="post d-flex flex-column-fluid">
				<!--begin::Container-->
				<div class="container-xxl">
					<!--begin::Card-->
					<div class="card">
						<div class="card-body pb-0">
							<div class="card-px pt-10 pb-5">

								<h2 class="fs-2x fw-bolder mb-0 fs-4 fw-bold py-7">Adicione uma credencial</h2>
								<div class="text-center">
									<form class="form" >
									<input type="text" class="form-control form-control-solid" 
										placeholder="informe um nome" required />

									<p class="text-gray-400 fs-4 fw-bold py-7">Poderá acessar em:</p>

									<div class="row g-5">
										<div class="col-lg-4" >
											<div class="card card-stretch mb-5">
<label
													class="form-check form-switch form-check-custom form-check-solid">

													<input class="form-check-input" type="checkbox"
														 />
													<span class="form-check-label">
												 nome da credencial
													</span>
												</label>
											</div>
											</div>
											<div class="col-lg-4" >
												<div class="card card-stretch mb-5">
	<label
														class="form-check form-switch form-check-custom form-check-solid">
	
														<input class="form-check-input" type="checkbox"
															 />
														<span class="form-check-label">
													 nome da credencial
														</span>
													</label>
												</div>
												</div>
												<div class="col-lg-4" >
													<div class="card card-stretch mb-5">
		<label
															class="form-check form-switch form-check-custom form-check-solid">
		
															<input class="form-check-input" type="checkbox"
																 />
															<span class="form-check-label">
														 nome da credencial
															</span>
														</label>
													</div>
													</div>
													<div class="col-lg-4" >
														<div class="card card-stretch mb-5">
			<label
																class="form-check form-switch form-check-custom form-check-solid">
			
																<input class="form-check-input" type="checkbox"
																	 />
																<span class="form-check-label">
															 nome da credencial
																</span>
															</label>
														</div>
														</div>
														<div class="col-lg-4" >
															<div class="card card-stretch mb-5">
				<label
																	class="form-check form-switch form-check-custom form-check-solid">
				
																	<input class="form-check-input" type="checkbox"
																		 />
																	<span class="form-check-label">
																 nome da credencial
																	</span>
																</label>
															</div>
															</div>
															<div class="col-lg-4" >
																<div class="card card-stretch mb-5">
					<label
																		class="form-check form-switch form-check-custom form-check-solid">
					
																		<input class="form-check-input" type="checkbox"
																			 />
																		<span class="form-check-label">
																	 nome da credencial
																		</span>
																	</label>
																</div>
																</div>
																<div class="col-lg-4" >
																	<div class="card card-stretch mb-5">
						<label
																			class="form-check form-switch form-check-custom form-check-solid">
						
																			<input class="form-check-input" type="checkbox"
																				 />
																			<span class="form-check-label">
																		 nome da credencial
																			</span>
																		</label>
																	</div>
																	</div>
																	<div class="col-lg-4" >
																		<div class="card card-stretch mb-5">
							<label
																				class="form-check form-switch form-check-custom form-check-solid">
							
																				<input class="form-check-input" type="checkbox"
																					 />
																				<span class="form-check-label">
																			 nome da credencial
																				</span>
																			</label>
																		</div>
																		</div>
																		<div class="col-lg-4" >
																			<div class="card card-stretch mb-5">
								<label
																					class="form-check form-switch form-check-custom form-check-solid">
								
																					<input class="form-check-input" type="checkbox"
																						 />
																					<span class="form-check-label">
																				 nome da credencial
																					</span>
																				</label>
																			</div>
																			</div>
																			<div class="col-lg-4" >
																				<div class="card card-stretch mb-5">
									<label
																						class="form-check form-switch form-check-custom form-check-solid">
									
																						<input class="form-check-input" type="checkbox"
																							 />
																						<span class="form-check-label">
																					 nome da credencial
																						</span>
																					</label>
																				</div>
																				</div>
									</div>
									<button type="submit"
										class="btn btn-primary er fs-6 px-8 py-4 col-lg-4">Salvar</button>
								</form>
								</div>
							</div>
						</div>
					</div>

				</div>
			</div>
	
		<!--end::Root-->
 
            </div>
            <!--end::Wrapper-->
        </div>
        <!--end::Page-->
    </div>
 

    <c-footer/>
	</div>
 
	</div>
    
    `,



	data: function () {

		return {

		}

	},

	async mounted() {



	},

	methods: {

	},


}

