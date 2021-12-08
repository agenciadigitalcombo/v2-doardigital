import adm from "../../../../static/js/api/adm.js"

export default {
	template: `
	<div>

    <c-header></c-header>
    <c-aside></c-aside>

	<!--begin::Root-->
		<div class="d-flex flex-column flex-root">
			<!--begin::Page-->
			<div class="page d-flex flex-row flex-column-fluid">

				<!--begin::Wrapper-->
				<div class="wrapper d-flex flex-column flex-row-fluid" id="kt_wrapper">


					<!--begin::Content-->
					<div class="content d-flex flex-column flex-column-fluid" id="kt_content">
						<!--begin::Post-->
						<div class="post d-flex flex-column-fluid" id="kt_post">
							<!--begin::Container-->
							<div id="kt_content_container" class="container-xxl">

								<!--begin::Sign-in Method-->
								<div class="card mb-5 mb-xl-10">
									<!--begin::Card header-->
									<div class="card-header border-0 cursor-pointer" role="button"
										data-bs-toggle="collapse" data-bs-target="#kt_account_signin_method">
										<div class="card-title m-0">
											<h3 class="fw-bolder m-0">Novo Usuário</h3>
										</div>
									</div>
									<!--end::Card header-->
									<!--begin::Content-->
									<div id="kt_account_signin_method">
										<!--begin::Card body-->
										<div class="card-body border-top p-9">
											<!--begin::Email Address-->

											<!--begin::Password-->
											<div class="d-flex flex-wrap align-items-center mb-10">

												<!--end::Label-->
												<!--begin::Edit-->
												<!-- <div id="kt_signin_password_edit" class="flex-row-fluid d-none"> -->
												<div id="kt_signin_password_edit" class="flex-row-fluid ">
													<!--begin::Form-->
													<form id="kt_signin_change_password" class="form"
														novalidate="novalidate">
														<div class="row mb-1">
															<div class="col-lg-6">
																<div class="fv-row mb-5">
																	<label for="nome"
																		class="form-label fs-6 fw-bolder mb-3">Nome</label>
																	<input type="text"
																		class="form-control form-control-lg form-control-solid"
																		name="nome" id="nome" />
																</div>
															</div>
															<div class="col-lg-6">
																<div class="fv-row mb-5">
																	<label for="Email"
																		class="form-label fs-6 fw-bolder mb-3">Email</label>
																	<input type="email"
																		class="form-control form-control-lg form-control-solid"
																		name="Email" id="Email" />
																</div>
															</div>

															<div class="col-lg-6">
																<div class="fv-row mb-5">
																	<label for="Telefone"
																		class="form-label fs-6 fw-bolder mb-3">Telefone</label>
																	<input type="text"
																		class="form-control form-control-lg form-control-solid"
																		name="Telefone" id="Telefone" />
																</div>
															</div>
															<div class="col-lg-6">
																<div class="fv-row mb-5">
																	<label for="Credencial"
																		class="form-label fs-6 fw-bolder mb-3 ">Credencial</label>
																	<select
																		class="form-select form-control form-control-lg form-control-solid"
																		aria-label="Default select example">
																		<option selected>Qual a sua Credencial</option>
																		<option value="Consultor">Consultor</option>
																		<option value="Administrativo">Administrativo
																		</option>
																		<option value="Gerente">Gerente</option>
																		<option value="Diretor">Diretor</option>
																	</select>
																</div>
															</div>
															<div class="col-lg-6">
																<div class="fv-row ">
																	<label for="confirmpassword"
																		class="form-label fs-6 fw-bolder ">Senha</label>
																	<input type="password"
																		class="form-control form-control-lg form-control-solid"
																		name="confirmpassword" id="confirmpassword" />
																</div>
															</div>
															<div class="col-lg-6">
																<div class="fv-row ">
																	<label for="confirmpassword"
																		class="form-label fs-6 fw-bolder ">Confirma
																		Senha</label>
																	<input type="password"
																		class="form-control form-control-lg form-control-solid"
																		name="confirmpassword" id="confirmpassword" />
																</div>
															</div>
														</div>


														<div class="form-text mb-5">A senha deve ter pelo menos 8
															caracteres</div>


														<div class="col-lg-12">
															<div class="fv-row mb-15">
																<label for="Credencial"
																	class="form-label fs-6 fw-bolder mb-10">Selecione a
																	instituições de acesso</label>

																<div class="text-center">

																		<div class="row g-5">
																			<div class="col-lg-4">
																				<div class="card card-stretch mb-2">
																					<label
																						class="form-check form-switch form-check-custom form-check-solid">

																						<input class="form-check-input"
																							type="checkbox" />
																						<span class="form-check-label">
																							nome completo da instituicao
																						</span>
																					</label>
																				</div>
																			</div>
																			<div class="col-lg-4">
																				<div class="card card-stretch mb-2">
																					<label
																						class="form-check form-switch form-check-custom form-check-solid">

																						<input class="form-check-input"
																							type="checkbox" />
																						<span class="form-check-label">
																							nome completo da instituicao
																						</span>
																					</label>
																				</div>
																			</div>
																			<div class="col-lg-4">
																				<div class="card card-stretch mb-2">
																					<label
																						class="form-check form-switch form-check-custom form-check-solid">

																						<input class="form-check-input"
																							type="checkbox" />
																						<span class="form-check-label">
																							nome completo da instituicao
																						</span>
																					</label>
																				</div>
																			</div>
																			<div class="col-lg-4">
																				<div class="card card-stretch mb-2">
																					<label
																						class="form-check form-switch form-check-custom form-check-solid">

																						<input class="form-check-input"
																							type="checkbox" />
																						<span class="form-check-label">
																							nome completo da instituicao
																						</span>
																					</label>
																				</div>
																			</div>
																			<div class="col-lg-4">
																				<div class="card card-stretch mb-2">
																					<label
																						class="form-check form-switch form-check-custom form-check-solid">

																						<input class="form-check-input"
																							type="checkbox" />
																						<span class="form-check-label">
																							nome completo da instituicao
																						</span>
																					</label>
																				</div>
																			</div>
																			<div class="col-lg-4">
																				<div class="card card-stretch mb-2">
																					<label
																						class="form-check form-switch form-check-custom form-check-solid">

																						<input class="form-check-input"
																							type="checkbox" />
																						<span class="form-check-label">
																							nome completo da instituicao
																						</span>
																					</label>
																				</div>
																			</div>
										
																			<div class="col-lg-4">
																				<div class="card card-stretch mb-2">
																					<label
																						class="form-check form-switch form-check-custom form-check-solid">

																						<input class="form-check-input"
																							type="checkbox" />
																						<span class="form-check-label">
																							nome completo da instituicao
																						</span>
																					</label>
																				</div>
																			</div>
																			<div class="col-lg-4">
																				<div class="card card-stretch mb-2">
																					<label
																						class="form-check form-switch form-check-custom form-check-solid">

																						<input class="form-check-input"
																							type="checkbox" />
																						<span class="form-check-label">
																							nome completo da instituicao
																						</span>
																					</label>
																				</div>
																			</div>
																		</div>
																	
																</div>
															</div>
														</div>

														<div class="d-flex">
															<button id="kt_password_submit" type="button"
																class="btn btn-primary me-2 px-6">SALVAR</button>
															<button id="kt_password_cancel" type="button"
																class="btn btn-color-gray-400 btn-active-light-primary px-6">Cancelar</button>
														</div>
													</form>
													<!--end::Form-->
												</div>
												<!--end::Edit-->

											</div>
											<!--end::Password-->

										</div>
										<!--end::Card body-->
									</div>
									<!--end::Content-->
								</div>
								<!--end::Sign-in Method-->


							</div>
							<!--end::Container-->
						</div>
						<!--end::Post-->
					</div>
					<!--end::Content-->

				</div>
			</div>
		</div>

		<!--end::Root-->

		<c-footer/>
		
	</div>
    `,

	data: function () {
		return {
			gravatar: '../painel/assets/image/gravatar.png',
			jms: false,
		}
	},
	methods: {


	},


	mounted() {


	},
	created() {


	},


}

