import adm from "../../../../../static/js/api/adm.js"
const { required, minLength, between } = window.validators

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

														<form class="form" @submit.prevent="addSplit"
															novalidate="novalidate">
															<div class="row mb-1">
																<div class="col-lg-12">
																	<div class="fv-row mb-5">
																		<label for="Recebedor"
																			class="form-label fs-6 fw-bolder mb-3 required">Recebedor</label>
																		<input type="text"  v-model.trin="$v.recebedor_id.$model"
																		:class=" {'is-invalid':$v.recebedor_id.$error, 'is-valid':!$v.recebedor_id.$invalid }"
																			class="form-control form-control-lg form-control-solid" />

																			<div class="erros" v-if="$v.recebedor_id.$error">
																			<div class="erro_texte" v-if="!$v.recebedor_id.required">O Id do recebedor
																				é necessária</div>
																			<div class="erro_texte" v-if="!$v.recebedor_id.minLength">
																				quantidade deve ter pelo menos 4 caracter.</div>
																		</div>
				
																		<div class="sucesso_texte" v-else> 
																			</div>

																	</div>
																</div>

																<div class="col-lg-6">
																	<div class="fv-row mb-5">
																		<label for="Responsavel"
																			class="form-label fs-6 fw-bolder mb-3 required">Responsavel</label>

																		<select v-model="responsavel_estorno" class="form-select form-select-solid" >
																			<option></option>
																			<option value="1">Sim</option>
																			<option value="0">Não</option>
																		</select>
																	</div>
																</div>

																<div class="col-lg-6">
																	<div class="fv-row mb-5">
																		<label for="Porcentagem"
																			class="form-label fs-6 fw-bolder mb-3 required">Porcentagem</label>
																		<input type="text"  v-model.trin="$v.porcentagem.$model"
																		:class=" {'is-invalid':$v.porcentagem.$error, 'is-valid':!$v.porcentagem.$invalid }"
																			class="form-control form-control-lg form-control-solid"
																			 />

																			 <div class="erros" v-if="$v.porcentagem.$error">
																			 <div class="erro_texte" v-if="!$v.porcentagem.required">Adicione a porcentagem </div>
																			 <div class="erro_texte" v-if="!$v.porcentagem.between">
																				 A Porcentagem deve ser de 1 a 100% .</div>
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
															</div>
															<div>
															<p class="typo__p" v-if="submitStatus === 'OK'"> 
															</p>
															<p class="typo__p" v-if="submitStatus === 'ERROR'">
															Por favor, preencha o formulário corretamente.</p>
															<p class="typo__p" v-if="submitStatus === 'PENDING'">Carregando...
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
			instituicao_id: null,
			recebedor_id: null,
			responsavel_estorno: 1,
			porcentagem: null,
			token: null,
			submitStatus: null,
			msg: null
		}
	},

	validations: {
		recebedor_id: {
			required,
			minLength: minLength(2)
		},
		porcentagem: {
			required,
			between: between(0, 100)
		}
	},

	methods: {

		async addSplit() {
			this.error = null

			this.$v.$touch()
			if (this.$v.$invalid) {
				this.submitStatus = 'ERROR'
			} else {
				let res = await adm.split(
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
				
				this.submitStatus = 'PENDING'
				setTimeout(() => {
					this.submitStatus = 'OK'
					window.location.href = `#/divisao-pagamento`
				}, 900)
			}

		},



	},

	async mounted() {
		this.instituicao_id = window.localStorage.getItem('instituicao_id');		
   }, 


}


