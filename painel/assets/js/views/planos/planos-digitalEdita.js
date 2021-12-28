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
												<h3 class="fw-bolder m-0">Editar Plano Digital</h3>
											</div>
										</div>
										<div id="kt_account_signin_method">

											<div class="card-body border-top p-9">

												<div class="d-flex flex-wrap align-items-center mb-10">

													<div id="kt_signin_password_edit" class="flex-row-fluid ">

														<form class="form"
															novalidate="novalidate">
															<div class="row mb-1">
																<div class="col-lg-6">
																	<div class="fv-row mb-5">
																		<label for="nome"
																			class="form-label fs-6 fw-bolder mb-3 required">Nome</label>
																		<input v-model="nome" type="text"
																			class="form-control form-control-lg form-control-solid"
																			name="text_input" id="nome" />
																	</div>
																</div>
																<div class="col-lg-6">
																	<div class="fv-row mb-5">
																		<label for="Valor"
																			class="form-label fs-6 fw-bolder mb-3 required">Valor</label>
																		<input v-model="amount" type="text" v-mask="'#.###,##'" placeholder="R$ 00,00" disabled
																			class="form-control form-control-lg form-control-solid"
																			name="text_input" id="Valor" />
																	</div>
																</div>
																<div class="col-lg-6">
																	<div class="fv-row mb-5">
																		<label for="whatsapp"
																			class="form-label fs-6 fw-bolder mb-3 required">Whatsapp</label>
																		<select v-model="whatsapp" name="text_input" class="form-select form-select-solid" aria-label="Select example" disabled>
																			<option value="1">Sim</option>
																			<option value="0">Não</option>

																		</select>
																	</div>
																</div>
																<div class="col-lg-6">
																	<div class="fv-row mb-5">
																		<label for="instituicao_max"
																			class="form-label fs-6 fw-bolder mb-3 required">Instituicao Maxima</label>
																		<input v-model="instituicao_max" type="number" disabled
																			class="form-control form-control-lg form-control-solid"
																			name="text_input" id="instituicao_max" />
																	</div>
																</div>
															</div>

															<div class="d-flex">

																<button type="submit" class="btn btn-primary" @click="editarPlanos()">
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

		< !--end:: Root-- >

	<c-footer />
	</div >
	`,


	data: function () {
		return {
			gravatar: '../painel/assets/image/gravatar.png',
			plano_id: null,
			nome: null,
			whatsapp: null,
			instituicao_max: null,
			amount: null,
			token: null,
			lista_dados: [],
		}
	},
	methods: {

		async editarPlanos() {
			this.error = null

			let res = await adm.editarPlanosDigital(
				this.plano_id ,
				this.nome,
				this.token,
			)
			if (!res.next) {
				this.error = res.message
				return null
			}
			window.location.href = `#/plano-digital`
		},




	},


	async mounted() {
		// this.id = window.localStorage.getItem('instituicao_id');
		this.plano_id = globalThis._planos.id
		this.nome = globalThis._planos.nome
		this.whatsapp = globalThis._planos.whatsapp
		this.instituicao_max = globalThis._planos.instituicao_max
		this.amount = globalThis._planos.amount

	
	},


	created() {


	},


}