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

			<div class="wrapper d-flex flex-column flex-row-fluid" >

				<div class="content d-flex flex-column flex-column-fluid">

					<div class="post d-flex flex-column-fluid" id="kt_post">

						<div class="container-xxl">

							<div class="card mb-5 mb-xl-10">

								<div class="card-header border-0 cursor-pointer" >
									<div class="card-title m-0">
										<h3 class="fw-bolder m-0">Metas {{ano}}</h3>
									</div>

			

												<div class="card-toolbar" data-kt-buttons="true">
<select v-model="ano" class="form-select form-select-solid" aria-label="Select example">
    <option value="2021">2021</option>
    <option value="2022">2022</option>
    <option value="2023">2023</option>
</select>
													</div>  
			
												
								</div>
								
									<div class="card-body border-top p-9">
										<div class="d-flex flex-wrap align-items-center mb-10">
											<div id="kt_signin_password_edit" class="flex-row-fluid ">

												<form @submit.prevent="adicionaMetas" class="form" novalidate="novalidate">
													<div class="row mb-1">
													<div class="col-lg-3">
															<div class="fv-row mb-5">
																<label for="Valor"
																	class="form-label fs-6 fw-bolder mb-3 required">janeiro</label>
																<input type="text" v-model="janeiro" @input="money" placeholder="00,00"
																	class="form-control form-control-lg form-control-solid ">
																</div>
														</div>
														<div class="col-lg-3">
															<div class="fv-row mb-5">
																<label for="Valor"
																	class="form-label fs-6 fw-bolder mb-3 required">fevereiro</label>
																<input type="text" v-model="fevereiro" @input="money" placeholder="00,00"
																	class="form-control form-control-lg form-control-solid ">
																	</div>
														</div>
														<div class="col-lg-3">
															<div class="fv-row mb-5">
																<label for="Valor"
																	class="form-label fs-6 fw-bolder mb-3 required">março</label>
																<input type="text" v-model="marco" @input="money" placeholder="00,00"
																	class="form-control form-control-lg form-control-solid ">
																	</div>
															
														</div>
											

														<div class="col-lg-3">
															<div class="fv-row mb-5">
																<label for="Valor"
																	class="form-label fs-6 fw-bolder mb-3 required">abril</label>
																<input type="text" v-model="abril" @input="money" placeholder="00,00"
																	class="form-control form-control-lg form-control-solid ">
																	</div>
															
														</div>
														<div class="col-lg-3">
															<div class="fv-row mb-5">
																<label for="Valor"
																	class="form-label fs-6 fw-bolder mb-3 required">maio</label>
																<input type="text" v-model="maio" @input="money" placeholder="00,00"
																	class="form-control form-control-lg form-control-solid ">
																	</div>
															
														</div>
														<div class="col-lg-3">
															<div class="fv-row mb-5">
																<label for="Valor"
																	class="form-label fs-6 fw-bolder mb-3 required">junho</label>
																<input type="text" v-model="junho" @input="money" placeholder="00,00"
																	class="form-control form-control-lg form-control-solid ">
																	</div>
															
														</div>
	<div class="col-lg-3">
														<div class="fv-row mb-5">
															<label for="Valor"
																class="form-label fs-6 fw-bolder mb-3 required">julho</label>
															<input type="text" v-model="julho" @input="money" placeholder="00,00"
																class="form-control form-control-lg form-control-solid ">
															
																</div>
														
													</div>
													<div class="col-lg-3">
														<div class="fv-row mb-5">
															<label for="Valor"
																class="form-label fs-6 fw-bolder mb-3 required">agosto</label>
															<input type="text" v-model="agosto" @input="money" placeholder="00,00"
																class="form-control form-control-lg form-control-solid ">
															
																</div>
														
													</div>
													<div class="col-lg-3">
														<div class="fv-row mb-5">
															<label for="Valor"
																class="form-label fs-6 fw-bolder mb-3 required">setembro</label>
															<input type="text" v-model="setembro" @input="money" placeholder="00,00"
																class="form-control form-control-lg form-control-solid ">
															
																</div>
														
													</div>

													<div class="col-lg-3">
														<div class="fv-row mb-5">
															<label for="Valor"
																class="form-label fs-6 fw-bolder mb-3 required">outubro</label>
															<input type="text" v-model="outubro" @input="money" placeholder="00,00"
																class="form-control form-control-lg form-control-solid ">
															
																</div>
														
													</div>
													<div class="col-lg-3">
														<div class="fv-row mb-5">
															<label for="Valor"
																class="form-label fs-6 fw-bolder mb-3 required">novembro</label>
															<input type="text" v-model="novembro" @input="money" placeholder="00,00"
																class="form-control form-control-lg form-control-solid ">
															
																</div>
														
													</div>
													<div class="col-lg-3">
														<div class="fv-row mb-5">
															<label for="Valor"
																class="form-label fs-6 fw-bolder mb-3 required">dezembro</label>
															<input type="text" v-model="dezembro" @input="money" placeholder="00,00"
																class="form-control form-control-lg form-control-solid ">
															
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
	<!--end::Root-->

	<c-footer />
</div>
`,


	data: function () {

		return {
			token: null,
			instituicao_id: null,
			ano: 2021,
			janeiro: null,
			fevereiro: null,
			marco: null,
			abril: null,
			maio: null,
			junho: null,
			julho: null,
			agosto: null,
			setembro: null,
			outubro: null,
			novembro: null,
			dezembro: null,


			amount: null,
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
			let val = this.janeiro
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
			this.janeiro = val
		},
		
		async adicionaMetas() {
			this.error = null

			this.$touch()
			if (this.$invalid) {
				this.submitStatus = 'ERROR'
			} else {
				let res = await adm.addMetas(
					this.token,
					this.instituicao_id,
				this.ano,
				this.janeiro,
				this.fevereiro,
				this.marco,
				this.abril,
				this.maio,
				this.junho,
				this.julho,
				this.agosto,
				this.setembro,
				this.outubro,
				this.novembro,
				this.dezembro
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
}