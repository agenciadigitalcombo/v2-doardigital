import adm from "../../../../../static/js/api/adm.js"

export default {
    template:`
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
											<h3 class="fw-bolder m-0">Novo Divisao de Pagamento</h3>
										</div>
									</div>
									<!--end::Card header-->
									<!--begin::Content-->
									<div id="kt_account_signin_method">
										<!--begin::Card body-->
										<div class="card-body border-top p-9">
							
											<div class="d-flex flex-wrap align-items-center mb-10">

												<!--end::Label-->
												<!--begin::Edit-->
												<!-- <div id="kt_signin_password_edit" class="flex-row-fluid d-none"> -->
												<div id="kt_signin_password_edit" class="flex-row-fluid ">
													<!--begin::Form-->
													<form id="kt_docs_formvalidation_text" class="form"
														novalidate="novalidate">
														<div class="row mb-1">
															<div class="col-lg-6">
																<div class="fv-row mb-5">
																	<label for="Recebedor"
																		class="form-label fs-6 fw-bolder mb-3 required">Recebedor</label>
																	<input type="text"
																		class="form-control form-control-lg form-control-solid"
																		name="text_input"/>
																</div>
															</div>

															<div class="col-lg-6">
																<div class="fv-row mb-5">
																	<label for="Porcentagem"
																		class="form-label fs-6 fw-bolder mb-3 required">Porcentagem</label>
																	<input  type="text"  
																		class="form-control form-control-lg form-control-solid"
																		name="text_input" />
																</div>
															</div>
														
														</div>

														<div class="d-flex">
															<button  id="kt_docs_formvalidation_text_submit" type="submit" class="btn btn-primary">
																<span class="indicator-label">SALVAR</span>
																<span class="indicator-progress">Por favor, aguarde...
																<span class="spinner-border spinner-border-sm align-middle ms-2"></span></span>
																</button>
															
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
			id: null,
			instituicao_id: null,
			Recebedor: null,
			amount: null,
	          token: null,
			lista_dados: [],
		}
	},
	methods: {
		async addPlanos() {
			this.error = null

			let res = await adm.cadastrarPlanos(
				this.id,
				this.instituicao_id,
				this.Recebedor,
				this.amount,
				this.token,						
				)
			if (!res.next) {
				this.error = res.message
				return null
			}
		},

	


	},


	async mounted() {
		this.instituicao_id = window.localStorage.getItem('instituicao_id');
		this.id = window.localStorage.getItem('instituicao_id');

				
		let validacao = document.createElement('script'); validacao.setAttribute('src', "../../assets/assets/js/custom/documentation/forms/formvalidation/basic.js");
	document.head.appendChild(validacao);

   }, 


	created() {


	},


}


