import adm from "../../../../../static/js/api/adm.js"
const { required, minLength, between } = window.validators

export default {
	template: `
<div>

	<c-header></c-header>
	<c-aside></c-aside>

	<c-validacao :amount="amount"></c-validacao>	
	
	<!--begin::Root-->
	<div class="d-flex flex-column flex-root">

		<div class="page d-flex flex-row flex-column-fluid">

			<div class="wrapper d-flex flex-column flex-row-fluid" id="kt_wrapper">

				<div class="content d-flex flex-column flex-column-fluid" id="kt_content">

					<div class="post d-flex flex-column-fluid" id="kt_post">

						<div id="kt_content_container" class="container-xxl">

							<div class="card mb-5 mb-xl-10">

								<div class="card-header border-0 cursor-pointer" role="button" data-bs-toggle="collapse"
									data-bs-target="#kt_account_signin_method">
									<div class="card-title m-0">
										<h3 class="fw-bolder m-0">Plano</h3>
									</div>
								</div>
								<div id="kt_account_signin_method">

									<div class="card-body border-top p-9">
										<div class="d-flex flex-wrap align-items-center mb-10">
											<div id="kt_signin_password_edit" class="flex-row-fluid ">

												<form class="form" @submit.prevent="addPlanos" novalidate="novalidate">
													<div class="row mb-1">
														<div class="col-lg-6">
															<div class="fv-row mb-5">
																<label for="nome"
																	class="form-label fs-6 fw-bolder mb-3 required">Nome</label>
																<input type="text" v-model.trin="$v.nome.$model"
																:class=" {'is-invalid':$v.nome.$error, 'is-valid':!$v.nome.$invalid }"
																	class="form-control form-control-lg form-control-solid" />
															
																	<div class="erros" v-if="$v.nome.$error">
																	<div class="erro_texte" v-if="!$v.nome.required">O nome
																		é necessária</div>
																	<div class="erro_texte" v-if="!$v.nome.minLength">
																		quantidade deve ter pelo menos 4 letras.</div>
																</div>
		
																<div class="sucesso_texte" v-else> 
																		
																	</div>
																	</div>
														</div>

														<div class="col-lg-6">
															<div class="fv-row mb-5">
																<label for="Valor"
																	class="form-label fs-6 fw-bolder mb-3 required">Valor</label>
																<input type="text" v-model.trin="$v.amount.$model"
																	:class=" {'is-invalid':$v.amount.$error, 'is-valid':!$v.amount.$invalid }"
																	class="form-control form-control-lg form-control-solid ">
																
																	<div class="erros" v-if="$v.amount.$error">
																	<div class="erro_texte" v-if="!$v.amount.required">Valor
																		é necessária</div>
																	<div class="erro_texte" v-if="!$v.amount.minLength">
																		adicione no minimo 2 numero.</div>
																</div>

																<div class="sucesso_texte" v-else> 
																		
																	</div>
																	</div>
															
														</div>
													</div>
													
													<div class="d-flex">
														<button class="btn btn-primary"" type=" submit"
															:disabled="submitStatus === 'PENDING'">SALVAR!</button>
													
														<button id="kt_password_cancel" type="button"
															class="btn btn-color-gray-400 btn-active-light-primary px-6">Cancelar</button>
													</div>
													<div>
												
														
													<p class="typo__p" v-if="submitStatus === 'OK'"> 
													<c-mensagem :msg="msg"></c-mensagem>
													</p>
													<p class="typo__p" v-if="submitStatus === 'ERROR'">
													Por favor, preencha o formulário corretamente.</p>
													<p class="typo__p" v-if="submitStatus === 'PENDING'">Sending...
													</p>
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
			gravatar: '../painel/assets/image/gravatar.png',
			id: null,
			instituicao_id: null,
			nome: null,
			amount: null,
			token: null,

			submitStatus: null
		}
	},

	validations: {
		amount: {
			required,
			minLength: minLength(2)
		},
		nome: {
			required,
			minLength: minLength(4)
		}
	},

	methods: {

		status(validation) {
			return {
				error: validation.$error,
				dirty: validation.$dirty
			}
		},

		async addPlanos() {
			this.error = null

			this.$v.$touch()
			if (this.$v.$invalid) {
				this.submitStatus = 'ERROR'
			} else {
				let res = await adm.cadastrarPlanos(
					this.id,
					this.instituicao_id,
					this.nome,
					this.amount,
					this.token,
				)
				if (!res.next) {
					this.error = res.message
					return null
				}
				this.submitStatus = 'PENDING'
				setTimeout(() => {
				  this.submitStatus = 'OK'
				  this.msg = res.message
				}, 500)
			}

		},

	},


	async mounted() {
		this.instituicao_id = window.localStorage.getItem('instituicao_id');
		this.id = window.localStorage.getItem('instituicao_id');
	},

	created() {
	},


}