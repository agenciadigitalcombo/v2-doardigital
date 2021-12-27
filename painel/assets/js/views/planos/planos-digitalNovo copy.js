import adm from "../../../../../static/js/api/adm.js"

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
											<h3 class="fw-bolder m-0">Novo Plano Digital </h3>
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
													<form id="kt_docs_formvalidation_text" class="form"
														novalidate="novalidate">
														<div class="row mb-1">
															<div class="col-lg-6">
																<div class="fv-row mb-5">
																	<label for="nome"
																		class="form-label fs-6 fw-bolder mb-3 required">Nome</label>
																	<input v-model="nome"  type="text"
																		class="form-control form-control-lg form-control-solid"
																		name="text_input" id="nome" />
																</div>
															</div>

															<div class="col-lg-6">
																<div class="fv-row mb-5">
																	<label for="Valor"
																		class="form-label fs-6 fw-bolder mb-3 required">Valor</label>
																	<input v-model="amount"  type="text" id="kt_inputmask_6"  placeholder="00,00" 
																		class="form-control form-control-lg form-control-solid"
																		name="text_input"  />
																</div>

															




															
																<div>
																	<money v-model="price" v-bind="money"></money> {{price}}
																</div>
																<h1>
																	Directive
																  </h1>
																  <input v-model="price"
																		 v-money="money"
																		 class="form-input input-lg"
																		 style="text-align: right" />
																  {{price}}
													










															</div>


															<div class="col-lg-6">
																<div class="fv-row mb-5">

														
															
																	<label for="whatsapp"
																		class="form-label fs-6 fw-bolder mb-3 required">Whatsapp</label>
																	<select  v-model="whatsapp" name="text_input" class="form-select form-select-solid" aria-label="Select example">
																	<option value="1">Sim</option>
																		<option value="0">Não</option>
																	</select>

																</div>
															</div>

															<div class="col-lg-6">
																<div class="fv-row mb-5">
																	<label for="instituicao_max"
																		class="form-label fs-6 fw-bolder mb-3 required">Instituicao Maxima</label>
																	<input v-model="instituicao_max"  type="number"  
																		class="form-control form-control-lg form-control-solid"
																		name="text_input" id="instituicao_max" />
																</div>
															</div>
		
														</div>

														<div class="d-flex">
															<button  id="kt_docs_formvalidation_text_submit" type="submit" class="btn btn-primary" @click="addPlanos()">
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

		<!--end:: Root-- >

	<c-footer />
	</div >
	`,

	data: function () {
		return {
			gravatar: '../painel/assets/image/gravatar.png',
			price: 123.45,
			money: {
				decimal: ',',
				thousands: '.',
				prefix: 'R$ ',
				suffix: ' #',
				precision: 2,
				masked: false
			},

			id: null,
			nome: null,
			whatsapp: 1,
			instituicao_max: null,
			amount: null,
			token: null,
			lista_dados: [],

			// whatsapps: ['Sim','Não' ],
		}
	},
	methods: {
		async addPlanos() {
			this.error = null

			let res = await adm.cadastrarPlanosDigital(
				// this.id,
				this.nome,
				this.whatsapp,
				this.instituicao_max,
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
		
		// this.instituicao_id = window.localStorage.getItem('instituicao_id');
		// this.id = window.localStorage.getItem('instituicao_id');


		// let validacao = document.createElement('script'); validacao.setAttribute('src', "../../assets/assets/js/custom/documentation/forms/formvalidation/basic.js");
		// document.head.appendChild(validacao);
		
	},


	created() {


	},


}


