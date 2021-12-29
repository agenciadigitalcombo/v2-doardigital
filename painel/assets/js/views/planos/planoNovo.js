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
																<input type="text" v-model.trin="$v.amount.$model" id="kt_inputmask_6" @input="money"
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
													<c-mensagem :msg="msg" ></c-mensagem>
													<div class="d-flex">
														<button class="btn btn-primary"" type=" submit"
															:disabled="submitStatus === 'PENDING'">SALVAR!</button>
													
														<button id="kt_password_cancel" type="button"
															class="btn btn-color-gray-400 btn-active-light-primary px-6">Cancelar</button>
													</div>
													<div>
												
														
													<p class="typo__p" v-if="submitStatus === 'OK'"> 
													
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
			id: null,
			instituicao_id: null,
			nome: null,
			amount: null,
			token: null,
			msg: null,
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
		money() {
			let val = this.amount
			val = val.replace('.', '')
			val = val.replace(/\D/gi, '')
			val = val ? val : 0
			val = `${parseInt(val)}` ?? '0'
			switch (val.length) {
				case 0:
					val = '00,00'
					break;
				case 1:
					val = val.replace(/(\d{1})/gi, '00,0$1')
					break;
				case 2:
					val = val.replace(/(\d{2})/gi, '00,$1')
					break;
				case 3:
					val = val.replace(/(\d{1})(\d{2})/gi, '0$1,$2')
					break;
				case 4:
					val = val.replace(/(\d{2})(\d{2})/gi, '$1,$2')
					break;
				case 5:
					val = val.replace(/(\d{3})(\d{2})/gi, '$1,$2')
					break;
				case 6:
					val = val.replace(/(\d{1})(\d{3})(\d{2})/gi, '$1.$2,$3')
					break;
				default:
					val = val.replace(/(\d{1})(\d{3})(\d{2})(.*)/gi, '$1.$2,$3')
					break;
			}
			this.amount = val
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
					this.msg = res.message,
						setTimeout(() => this.msg = "", 5000);

					this.error = res.message
					return null
				}
				this.submitStatus = 'PENDING'
				setTimeout(() => {
					this.submitStatus = 'OK'
					window.location.href = `#/planos`
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