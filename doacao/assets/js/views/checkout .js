import adm from "../../../../static/js/api/adm.js" 

export default {
    template:`
	<div>
	<!--begin::Content-->
		<div class="content d-flex flex-column flex-column-fluid" id="kt_content">
			<!--begin::Post-->
			<div class="post d-flex flex-column-fluid" id="kt_post">
				<!--begin::Container-->
				<div id="kt_content_container" class="container-xxl">

					<div class="text-center mb-20 mb-xl-50">
						<img style="width: 20%;" src="../../doacao/assets/image/1633726236.png" class="rounded"
							alt="...">
					</div>

					<!--begin::Billing Address-->
					<div class="card mb-5 mb-xl-10">
						<!--begin::Card body-->
						<div class="card-body">
							<!--begin::Addresses-->
							<div class="row gx-9 gy-6">
								<!--begin::Col-->
								<div class="col-xl-6">
									<!--begin::Radio group-->
									<div>
										<div class="card-title mb-10">
											<h3>Escolha tipo</h3>
										</div>
										<div class="fv-row">
											<!--begin::Radio group-->
											<div class="btn-group w-100" data-kt-buttons="true"
												data-kt-buttons-target="[data-kt-button]">
												<!--begin::Radio-->
												<label
													class="btn btn-outline-secondary text-muted text-hover-white text-active-white btn-outline btn-active-primary active p-5"
													data-kt-button="true">
													<!--begin::Input-->
													<input v-model="tipo" class="btn-check" type="radio" name="method"
														value="mes" />
													<!--end::Input-->
													<h2>DOAÇÃO MENSAL </h2>
												</label>
												<!--end::Radio-->
												<!--begin::Radio-->
												<label
													class="btn btn-outline-secondary text-muted text-hover-white text-active-white btn-outline btn-active-primary p-5"
													data-kt-button="true">
													<!--begin::Input-->
													<input v-model="tipo" class="btn-check" type="radio" name="method"
														value="unica" />
													<!--end::Input-->
													<h2>DOAÇÃO UNICA </h2>

												</label>
												<!--end::Radio-->
											</div>
											<!--end::Radio group-->
										</div>
										<!--end::Row-->
									</div>
									<div>
										<div class="card-title mt-20">
											<h3>Escolha Valor para Doação</h3>
										</div>



										<!--begin::Plans-->
										<div class="d-flex flex-column">

											<!--begin::Row-->
											<div class="row mt-10">
													<!--begin::Col-->
													<div class="col-lg-4 mb-10 mb-lg-0">
														<!--begin::Tabs-->
														<div class="nav flex-column">
															<!--begin::Tab link-->
															<div class="nav-link btn btn-outline btn-outline-dashed btn-color-dark btn-active d-flex flex-stack text-start p-6 active mb-6"
																data-bs-toggle="tab"
																data-bs-target="#kt_upgrade_plan_startup">
																<!--end::Description-->
																<div class="d-flex align-items-center me-2">
																	<!--begin::Radio-->
																	<div
																		class="form-check form-check-custom form-check-solid form-check-success me-6">
																		<input v-model="valor" class="form-check-input"
																			type="radio" name="plan" checked="checked"
																			value="25,00" />
																	</div>
																	<!--end::Radio-->
																	<!--begin::Info-->
																	<div class="flex-grow-1">
																		<div class="fw-bold opacity-100">R$ 25,00</div>
	
																	</div>
																	<!--end::Info-->
																</div>
																<!--end::Description-->
																<!--begin::Price-->
	
																<!--end::Price-->
															</div>
															<!--end::Tab link-->
														</div>
														<!--end::Tabs-->
													</div>
													<!--end::Col-->
	
													<!--begin::Col-->
													<div class="col-lg-4 mb-10 mb-lg-0">
														<!--begin::Tabs-->
														<div class="nav flex-column">
															<!--begin::Tab link-->
															<div class="nav-link btn btn-outline btn-outline-dashed btn-color-dark btn-active d-flex flex-stack text-start p-6 active mb-6"
																data-bs-toggle="tab"
																data-bs-target="#kt_upgrade_plan_startup">
																<!--end::Description-->
																<div class="d-flex align-items-center me-2">
																	<!--begin::Radio-->
																	<div
																		class="form-check form-check-custom form-check-solid form-check-success me-6">
																		<input v-model="valor" class="form-check-input"
																			type="radio" name="plan" checked="checked"
																			value="30.00" />
																	</div>
																	<!--end::Radio-->
																	<!--begin::Info-->
																	<div class="flex-grow-1">
																		<div class="fw-bold opacity-100">R$ 30.00</div>
	
																	</div>
																	<!--end::Info-->
																</div>
																<!--end::Description-->
																<!--begin::Price-->
	
																<!--end::Price-->
															</div>
															<!--end::Tab link-->
														</div>
														<!--end::Tabs-->
													</div>
													<!--end::Col-->
												<!--begin::Col-->
												<div class="col-lg-4 mb-10 mb-lg-0">
													<!--begin::Tabs-->
													<div class="nav flex-column">
														<!--begin::Tab link-->
														<div class="nav-link btn btn-outline btn-outline-dashed btn-color-dark btn-active d-flex flex-stack text-start p-6 active mb-6"
															data-bs-toggle="tab"
															data-bs-target="#kt_upgrade_plan_startup">
															<!--end::Description-->
															<div class="d-flex align-items-center me-2">
																<!--begin::Radio-->
																<div
																	class="form-check form-check-custom form-check-solid form-check-success me-6">
																	<input v-model="valor" class="form-check-input"
																		type="radio" name="plan" checked="checked"
																		value="50.00" />
																</div>
																<!--end::Radio-->
																<!--begin::Info-->
																<div class="flex-grow-1">
																	<div class="fw-bold opacity-100">R$ 50.00</div>

																</div>
																<!--end::Info-->
															</div>
															<!--end::Description-->
															<!--begin::Price-->

															<!--end::Price-->
														</div>
														<!--end::Tab link-->
													</div>
													<!--end::Tabs-->
												</div>
												<!--end::Col-->
												<!--begin::Col-->
												<div class="col-lg-4 mb-10 mb-lg-0">
													<!--begin::Tabs-->
													<div class="nav flex-column">
														<!--begin::Tab link-->
														<div class="nav-link btn btn-outline btn-outline-dashed btn-color-dark btn-active d-flex flex-stack text-start p-6 active mb-6"
															data-bs-toggle="tab"
															data-bs-target="#kt_upgrade_plan_startup">
															<!--end::Description-->
															<div class="d-flex align-items-center me-2">
																<!--begin::Radio-->
																<div
																	class="form-check form-check-custom form-check-solid form-check-success me-6">
																	<input v-model="valor" class="form-check-input"
																		type="radio" name="plan" checked="checked"
																		value="75,00" />
																</div>
																<!--end::Radio-->
																<!--begin::Info-->
																<div class="flex-grow-1">
																	<div class="fw-bold opacity-100">R$ 75,00</div>

																</div>
																<!--end::Info-->
															</div>
															<!--end::Description-->
															<!--begin::Price-->

															<!--end::Price-->
														</div>
														<!--end::Tab link-->
													</div>
													<!--end::Tabs-->
												</div>
												<!--end::Col-->
											
												<!--begin::Col-->
												<div class="col-lg-4 mb-10 mb-lg-0">
													<!--begin::Tabs-->
													<div class="nav flex-column">
														<!--begin::Tab link-->
														<div class="nav-link btn btn-outline btn-outline-dashed btn-color-dark btn-active d-flex flex-stack text-start p-6 active mb-6"
															data-bs-toggle="tab"
															data-bs-target="#kt_upgrade_plan_startup">
															<!--end::Description-->
															<div class="d-flex align-items-center me-2">
																<!--begin::Radio-->
																<div
																	class="form-check form-check-custom form-check-solid form-check-success me-6">
																	<input v-model="valor" class="form-check-input"
																		type="radio" name="plan" checked="checked"
																		value="1.000,00" />
																</div>
																<!--end::Radio-->
																<!--begin::Info-->
																<div class="flex-grow-1">
																	<div class="fw-bold opacity-100">R$ 1.000,00</div>

																</div>
																<!--end::Info-->
															</div>
															<!--end::Description-->
															<!--begin::Price-->

															<!--end::Price-->
														</div>
														<!--end::Tab link-->
													</div>
													<!--end::Tabs-->
												</div>
												<!--end::Col-->
												<!--begin::Col-->
												<div class="col-lg-4 mb-10 mb-lg-0">
													<!--begin::Tabs-->
													<div class="nav flex-column">
														<!--begin::Tab link-->
														<div class="nav-link btn btn-outline btn-outline-dashed btn-color-dark btn-active d-flex flex-stack text-start p-6 active mb-6"
															data-bs-toggle="tab"
															data-bs-target="#kt_upgrade_plan_startup">
															<!--end::Description-->
															<div class="d-flex align-items-center me-2">
																<!--begin::Radio-->
																<div
																	class="form-check form-check-custom form-check-solid form-check-success me-6">
																	<input v-model="valor" v-model="valor"
																		class="form-check-input" type="radio"
																		name="plan" checked="checked"
																		value="1.000,00" />
																</div>
																<!--end::Radio-->
																<!--begin::Info-->
																<div class="flex-grow-1">
																	<div class="fw-bold opacity-100">R$ 1.000,00</div>

																</div>
																<!--end::Info-->
															</div>
															<!--end::Description-->
															<!--begin::Price-->

															<!--end::Price-->
														</div>
														<!--end::Tab link-->
													</div>
													<!--end::Tabs-->
												</div>
												<!--end::Col-->
											</div>
											<!--end::Row-->
										</div>
										<!--end::Plans-->


										<!--end::Row-->
									</div>


								</div>
								<!--end::Col-->
								<!--begin::Col-->
								<div class="col-xl-6">
									<!--begin::Radio group-->
									<div class="card-title mb-10">
										<h3>Informacao</h3>
									</div>
									<div class="mb-10">
										<label for="exampleFormControlInput1" class="required form-label">E-mail</label>
										<input v-model="email" type="email" class="form-control form-control-solid p-5"
											placeholder="Email" />

									</div>

									<div>
										<button @click="descartavel()" style="width: 100%;"
											class="btn btn-success p-5">PROSEGUIR...</button>
									</div>
								</div>
								<!--end::Col-->

							</div>
							<!--end::Addresses-->

						</div>
						<!--end::Card body-->
					</div>
				</div>
				<!--end::Container-->
			</div>
			<!--end::Post-->
		</div>

   
	</div>
    `,


     data: function () {
		return {
			gravatar: '../painel/assets/image/gravatar.png',
			tipo: null,
				valor: null,
				email: null,

        }
    },
	methods: {
	
		descartavel() {
			this.tipo = window.localStorage.setItem("tipo", this.tipo)
			this.valor = window.localStorage.setItem("valor", this.valor)
			this.email = window.localStorage.setItem("email", this.email)
		}
       

    },
	

	
}

