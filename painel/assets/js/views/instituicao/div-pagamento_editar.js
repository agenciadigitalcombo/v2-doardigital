import adm from "../../../../../static/js/api/adm.js"

export default {
	template:`
		<div>

			<c-header></c-header>
			<c-aside></c-aside>

			<!--begin::Root-->
			<div class="d-flex flex-column flex-root">

				<div class="page d-flex flex-row flex-column-fluid">
					<div class="wrapper d-flex flex-column flex-row-fluid" id="kt_wrapper">

						<div class="content d-flex flex-column flex-column-fluid" id="kt_content">

							<div class="post d-flex flex-column-fluid" id="kt_post">

								<div id="kt_content_container" class="container-xxl">

									<div class="card mb-5 mb-xl-10">

										<div class="card-header border-0 cursor-pointer" role="button"
											data-bs-toggle="collapse" data-bs-target="#kt_account_signin_method">
											<div class="card-title m-0">
												<h3 class="fw-bolder m-0">Novo Divisao de Pagamento</h3>
											</div>
										</div>
										<div id="kt_account_signin_method">
											<div class="card-body border-top p-9">

												<div class="d-flex flex-wrap align-items-center mb-10">


													<div class="flex-row-fluid ">

														<form class="form" @submit.prevent="UpdateSplit"
															novalidate="novalidate">
															<div class="row mb-1">
																<div class="col-lg-12">
																	<div class="fv-row mb-5">
																		<label for="Recebedor"
																			class="form-label fs-6 fw-bolder mb-3 required">Recebedor</label>
																		<input type="text" v-model="recebedor_id"
																			class="form-control form-control-lg form-control-solid"
																			name="text_input" />
																	</div>
																</div>

																<div class="col-lg-6">
																	<div class="fv-row mb-5">
																		<label for="Responsavel"
																			class="form-label fs-6 fw-bolder mb-3 required">Responsavel</label>

																		<select v-model="responsavel_estorno" class="form-select form-select-solid" data-control="select2" data-hide-search="true">
																			<option></option>
																			<option value="1" selected>Sim</option>
																			<option value="2">Não</option>
																		</select>
																	</div>
																</div>
																<div class="col-lg-6">
																	<div class="fv-row mb-5">
																		<label for="Porcentagem"
																			class="form-label fs-6 fw-bolder mb-3 required">Porcentagem</label>
																		<input type="text" v-model="porcentagem"
																			class="form-control form-control-lg form-control-solid"
																			name="text_input" />
																	</div>
																</div>
															</div>

															<div class="d-flex">
																<button id="kt_docs_formvalidation_text_submit" type="submit" class="btn btn-primary">
																	<span class="indicator-label">SALVAR</span>
																	<span class="indicator-progress">Por favor, aguarde...
																		<span class="spinner-border spinner-border-sm align-middle ms-2"></span></span>
																</button>

																<button id="kt_password_cancel" type="button"
																	class="btn btn-color-gray-400 btn-active-light-primary px-6">Cancelar</button>
															</div>
														</form>
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

			<!--end::Root-->

			<c-footer />
		</div>
    `,


	data: function () {
		return {
			instituicao_id: null,
			recebedor_id: null,
			responsavel_estorno: null,
			porcentagem: null,
			token: null,
		}
	},

	methods: {
		async UpdateSplit() {
			this.error = null

			let res = await adm.splitUpdate(
				this.id,
				this.instituicao_id,
				this.recebedor_id,
				this.responsavel_estorno,
				this.porcentagem,
				this.token,						
				)
			if (!res.next) {
				this.error = res.message
				return null
			}
		},

	},

	async mounted() {
		this.id = globalThis._divisao.id,
		this.instituicao_id = globalThis._divisao.instituicao_id,
		this.recebedor_id = globalThis._divisao.recebedor_id
		this.responsavel_estorno = globalThis._divisao.responsavel_estorno,
		this.porcentagem = globalThis._divisao.porcentagem		
   }, 


}


