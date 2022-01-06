import adm from "../../../../../static/js/api/adm.js"
const { required, minLength, between } = window.validators

export default {
	template: `
<div>

	<c-header></c-header>
	<c-aside></c-aside>
	
	
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
<select @change="setar_ano()" v-model="ano" class="form-select form-select-solid" aria-label="Select example">
<option v-for="dado in ano_aray" >{{ dado }}</option>
  
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
																<input type="text" @input="masc_money1" placeholder="00,00"
																 v-model.trin="$v.janeiro.$model" required
																:class=" {'is-invalid':$v.janeiro.$error, 'is-valid':!$v.janeiro.$invalid }"
																	class="form-control form-control-lg form-control-solid ">
																</div>
														</div>
														<div class="col-lg-3">
															<div class="fv-row mb-5">
																<label for="Valor"
																	class="form-label fs-6 fw-bolder mb-3 required">fevereiro</label>
																<input type="text" @input="masc_money2" placeholder="00,00"
																 v-model.trin="$v.fevereiro.$model" required
																:class=" {'is-invalid':$v.fevereiro.$error, 'is-valid':!$v.fevereiro.$invalid }"
																	class="form-control form-control-lg form-control-solid ">
																	</div>
														</div>
														<div class="col-lg-3">
															<div class="fv-row mb-5">
																<label for="Valor"
																	class="form-label fs-6 fw-bolder mb-3 required">março</label>
																<input type="text"  @input="masc_money3" placeholder="00,00"
																 v-model.trin="$v.marco.$model" required
																:class=" {'is-invalid':$v.marco.$error, 'is-valid':!$v.marco.$invalid }"
																	class="form-control form-control-lg form-control-solid ">
																	</div>
															
														</div>
											

														<div class="col-lg-3">
															<div class="fv-row mb-5">
																<label for="Valor"
																	class="form-label fs-6 fw-bolder mb-3 required">abril</label>
																<input type="text" @input="masc_money4" placeholder="00,00"
																 v-model.trin="$v.abril.$model" required
																:class=" {'is-invalid':$v.abril.$error, 'is-valid':!$v.abril.$invalid }"
																	class="form-control form-control-lg form-control-solid ">
																	</div>
															
														</div>
														<div class="col-lg-3">
															<div class="fv-row mb-5">
																<label for="Valor"
																	class="form-label fs-6 fw-bolder mb-3 required">maio</label>
																<input type="text" @input="masc_money5" placeholder="00,00"
																 v-model.trin="$v.maio.$model" required
																:class=" {'is-invalid':$v.maio.$error, 'is-valid':!$v.maio.$invalid }"
																	class="form-control form-control-lg form-control-solid ">
																	</div>
															
														</div>
														<div class="col-lg-3">
															<div class="fv-row mb-5">
																<label for="Valor"
																	class="form-label fs-6 fw-bolder mb-3 required">junho</label>
																<input type="text" @input="masc_money6" placeholder="00,00"
																 v-model.trin="$v.junho.$model" required
																:class=" {'is-invalid':$v.junho.$error, 'is-valid':!$v.junho.$invalid }"
																	class="form-control form-control-lg form-control-solid ">
																	</div>
															
														</div>
	<div class="col-lg-3">
														<div class="fv-row mb-5">
															<label for="Valor"
																class="form-label fs-6 fw-bolder mb-3 required">julho</label>
															<input type="text" @input="masc_money7" placeholder="00,00"
															 v-model.trin="$v.julho.$model" required
																:class=" {'is-invalid':$v.julho.$error, 'is-valid':!$v.julho.$invalid }"
																class="form-control form-control-lg form-control-solid ">
															
																</div>
														
													</div>
													<div class="col-lg-3">
														<div class="fv-row mb-5">
															<label for="Valor"
																class="form-label fs-6 fw-bolder mb-3 required">agosto</label>
															<input type="text" @input="masc_money8" placeholder="00,00"
															 v-model.trin="$v.agosto.$model" required
																:class=" {'is-invalid':$v.agosto.$error, 'is-valid':!$v.agosto.$invalid }"
																class="form-control form-control-lg form-control-solid ">
															
																</div>
														
													</div>
													<div class="col-lg-3">
														<div class="fv-row mb-5">
															<label for="Valor"
																class="form-label fs-6 fw-bolder mb-3 required">setembro</label>
															<input type="text" @input="masc_money9" placeholder="00,00"
															 v-model.trin="$v.setembro.$model" required
																:class=" {'is-invalid':$v.setembro.$error, 'is-valid':!$v.setembro.$invalid }"
																class="form-control form-control-lg form-control-solid ">
															
																</div>
														
													</div>

													<div class="col-lg-3">
														<div class="fv-row mb-5">
															<label for="Valor"
																class="form-label fs-6 fw-bolder mb-3 required">outubro</label>
															<input type="text" @input="masc_money10" placeholder="00,00"
															 v-model.trin="$v.outubro.$model" required
																:class=" {'is-invalid':$v.outubro.$error, 'is-valid':!$v.outubro.$invalid }"
																class="form-control form-control-lg form-control-solid ">
															
																</div>
														
													</div>
													<div class="col-lg-3">
														<div class="fv-row mb-5">
															<label for="Valor"
																class="form-label fs-6 fw-bolder mb-3 required">novembro</label>
															<input type="text" @input="masc_money11" placeholder="00,00"
															 v-model.trin="$v.novembro.$model" required
																:class=" {'is-invalid':$v.novembro.$error, 'is-valid':!$v.novembro.$invalid }"
																class="form-control form-control-lg form-control-solid ">
															
																</div>
														
													</div>
													<div class="col-lg-3">
														<div class="fv-row mb-5">
															<label for="Valor"
																class="form-label fs-6 fw-bolder mb-3 required">dezembro</label>
															<input type="text" @input="masc_money12" placeholder="00,00"
															 v-model.trin="$v.dezembro.$model" required
																:class=" {'is-invalid':$v.dezembro.$error, 'is-valid':!$v.dezembro.$invalid }"
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
			ano: '2022',
			ano_aray: [2021, 2022],
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

			msg: null,
			submitStatus: null
		}
	},


	validations: {
		janeiro: {
			required,
			minLength: minLength(2)
		},
		fevereiro: {
			required,
			minLength: minLength(2)
		},
		marco: {
			required,
			minLength: minLength(2)
		},
		abril: {
			required,
			minLength: minLength(2)
		},
	
		maio: {
			required,
			minLength: minLength(2)
		},
		junho: {
			required,
			minLength: minLength(2)
		},
		julho: {
			required,
			minLength: minLength(2)
		},
		agosto: {
			required,
			minLength: minLength(2)
		},
		setembro: {
			required,
			minLength: minLength(2)
		},
		outubro: {
			required,
			minLength: minLength(4)
		},

		novembro: {
			required,
			minLength: minLength(4)
		},
		dezembro: {
			required,
			minLength: minLength(2)
		},
	},

	methods: {
	
		masc_money1() {
			let valor
           valor = this.janeiro.replace(/\D/gi, '')
            valor = (valor/100).toLocaleString('pt-br', { minimumFractionDigits: 2 })
            this.janeiro = valor
        },


		masc_money2() {
			let valor
			valor = this.fevereiro.replace(/\D/gi, '')
            valor = (valor/100).toLocaleString('pt-br', { minimumFractionDigits: 2 })
            this.fevereiro = valor
        },

		masc_money3() {
			let valor
			valor = this.marco.replace(/\D/gi, '')
            valor = (valor/100).toLocaleString('pt-br', { minimumFractionDigits: 2 })
            this.marco = valor
        },

		masc_money4() {
			let valor
			valor = this.abril.replace(/\D/gi, '')
            valor = (valor/100).toLocaleString('pt-br', { minimumFractionDigits: 2 })
            this.abril = valor
        },

		masc_money5() {
			let valor
			valor = this.maio.replace(/\D/gi, '')
            valor = (valor/100).toLocaleString('pt-br', { minimumFractionDigits: 2 })
            this.maio = valor
        },

		masc_money6() {
			let valor
			valor = this.junho.replace(/\D/gi, '')
            valor = (valor/100).toLocaleString('pt-br', { minimumFractionDigits: 2 })
            this.junho = valor
			
        },

		masc_money7() {
			let valor
			valor = this.julho.replace(/\D/gi, '')
            valor = (valor/100).toLocaleString('pt-br', { minimumFractionDigits: 2 })
            this.julho = valor
		
        },

		masc_money8() {
			let valor
			valor = this.agosto.replace(/\D/gi, '')
            valor = (valor/100).toLocaleString('pt-br', { minimumFractionDigits: 2 })
            this.agosto = valor
		
        },

		masc_money9() {
			let valor
			valor = this.setembro.replace(/\D/gi, '')
            valor = (valor/100).toLocaleString('pt-br', { minimumFractionDigits: 2 })
            this.setembro = valor

		
        },
		masc_money10() {
			let valor
			valor = this.outubro.replace(/\D/gi, '')
            valor = (valor/100).toLocaleString('pt-br', { minimumFractionDigits: 2 })
            this.outubro = valor

		
        },
		masc_money11() {
			let valor
			valor = this.novembro.replace(/\D/gi, '')
            valor = (valor/100).toLocaleString('pt-br', { minimumFractionDigits: 2 })
            this.novembro = valor

		
        },
		masc_money12() {
			let valor
			valor = this.dezembro.replace(/\D/gi, '')
            valor = (valor/100).toLocaleString('pt-br', { minimumFractionDigits: 2 })
            this.dezembro = valor
		
        },


		async setar_ano() {
			let dados = (await this.listar()).dados[0] || {}
			this.janeiro = dados.janeiro
			this.fevereiro = dados.fevereiro
			this.marco = dados.marco
			this.abril = dados.abril
			this.maio = dados.maio
			this.junho = dados.junho
			this.julho = dados.julho
			this.agosto = dados.agosto
			this.setembro = dados.setembro
			this.outubro = dados.outubro
			this.novembro = dados.novembro
			this.dezembro = dados.dezembro
			this.masc()
		},
		async masc() {
			this.masc_money1()
			this.masc_money2()
			this.masc_money3()
			this.masc_money4()
			this.masc_money5()
			this.masc_money6()
			this.masc_money7()
			this.masc_money8()
			this.masc_money9()
			this.masc_money10()
			this.masc_money11()
			this.masc_money12()
		},
		
		async adicionaMetas() {
			this.error = null
			this.$v.$touch()
			if (this.$v.$invalid) {
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
					this.msg = res.message
					
				}, 500)
			}

		},

		

		async listar() {
			let res = await adm.listarMetas(
				this.token,
				this.instituicao_id,
				this.ano = this.ano
			)
			return res
		},
	},


	async mounted() {
		this.instituicao_id = window.localStorage.getItem('instituicao_id');
		this.token = window.localStorage.getItem('token');

		let dados = (await this.listar()).dados[0] || {}
		this.janeiro = dados.janeiro
		this.fevereiro = dados.fevereiro
		this.marco = dados.marco
		this.abril = dados.abril
		this.maio = dados.maio
		this.junho = dados.junho
		this.julho = dados.julho
		this.agosto = dados.agosto
		this.setembro = dados.setembro
		this.outubro = dados.outubro
		this.novembro = dados.novembro
		this.dezembro = dados.dezembro
		this.masc()
	},
}

