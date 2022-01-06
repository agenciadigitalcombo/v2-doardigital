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
																<input type="text" v-model="janeiro" @input="masc_money" placeholder="00,00"
																	class="form-control form-control-lg form-control-solid ">
																</div>
														</div>
														<div class="col-lg-3">
															<div class="fv-row mb-5">
																<label for="Valor"
																	class="form-label fs-6 fw-bolder mb-3 required">fevereiro</label>
																<input type="text" v-model="fevereiro" @input="masc_money" placeholder="00,00"
																	class="form-control form-control-lg form-control-solid ">
																	</div>
														</div>
														<div class="col-lg-3">
															<div class="fv-row mb-5">
																<label for="Valor"
																	class="form-label fs-6 fw-bolder mb-3 required">março</label>
																<input type="text" v-model="marco" @input="masc_money" placeholder="00,00"
																	class="form-control form-control-lg form-control-solid ">
																	</div>
															
														</div>
											

														<div class="col-lg-3">
															<div class="fv-row mb-5">
																<label for="Valor"
																	class="form-label fs-6 fw-bolder mb-3 required">abril</label>
																<input type="text" v-model="abril" @input="masc_money" placeholder="00,00"
																	class="form-control form-control-lg form-control-solid ">
																	</div>
															
														</div>
														<div class="col-lg-3">
															<div class="fv-row mb-5">
																<label for="Valor"
																	class="form-label fs-6 fw-bolder mb-3 required">maio</label>
																<input type="text" v-model="maio" @input="masc_money" placeholder="00,00"
																	class="form-control form-control-lg form-control-solid ">
																	</div>
															
														</div>
														<div class="col-lg-3">
															<div class="fv-row mb-5">
																<label for="Valor"
																	class="form-label fs-6 fw-bolder mb-3 required">junho</label>
																<input type="text" v-model="junho" @input="masc_money" placeholder="00,00"
																	class="form-control form-control-lg form-control-solid ">
																	</div>
															
														</div>
	<div class="col-lg-3">
														<div class="fv-row mb-5">
															<label for="Valor"
																class="form-label fs-6 fw-bolder mb-3 required">julho</label>
															<input type="text" v-model="julho" @input="masc_money" placeholder="00,00"
																class="form-control form-control-lg form-control-solid ">
															
																</div>
														
													</div>
													<div class="col-lg-3">
														<div class="fv-row mb-5">
															<label for="Valor"
																class="form-label fs-6 fw-bolder mb-3 required">agosto</label>
															<input type="text" v-model="agosto" @input="masc_money" placeholder="00,00"
																class="form-control form-control-lg form-control-solid ">
															
																</div>
														
													</div>
													<div class="col-lg-3">
														<div class="fv-row mb-5">
															<label for="Valor"
																class="form-label fs-6 fw-bolder mb-3 required">setembro</label>
															<input type="text" v-model="setembro" @input="masc_money" placeholder="00,00"
																class="form-control form-control-lg form-control-solid ">
															
																</div>
														
													</div>

													<div class="col-lg-3">
														<div class="fv-row mb-5">
															<label for="Valor"
																class="form-label fs-6 fw-bolder mb-3 required">outubro</label>
															<input type="text" v-model="outubro" @input="masc_money" placeholder="00,00"
																class="form-control form-control-lg form-control-solid ">
															
																</div>
														
													</div>
													<div class="col-lg-3">
														<div class="fv-row mb-5">
															<label for="Valor"
																class="form-label fs-6 fw-bolder mb-3 required">novembro</label>
															<input type="text" v-model="novembro" @input="masc_money" placeholder="00,00"
																class="form-control form-control-lg form-control-solid ">
															
																</div>
														
													</div>
													<div class="col-lg-3">
														<div class="fv-row mb-5">
															<label for="Valor"
																class="form-label fs-6 fw-bolder mb-3 required">dezembro</label>
															<input type="text" v-model="dezembro" @input="masc_money" placeholder="00,00"
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
			ano: '2021',
			ano_aray: [2020,2021, 2022, 2013],
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



	methods: {

		masc_money() {
		// 	let valor

        //    valor = this.janeiro.replace(/\D/gi, '')
        //     valor = (valor/100).toLocaleString('pt-br', { minimumFractionDigits: 2 })
        //     this.janeiro = valor

		// 	valor = this.fevereiro.replace(/\D/gi, '')
        //     valor = (valor/100).toLocaleString('pt-br', { minimumFractionDigits: 2 })
        //     this.fevereiro = valor

		// 	valor = this.marco.replace(/\D/gi, '')
        //     valor = (valor/100).toLocaleString('pt-br', { minimumFractionDigits: 2 })
        //     this.marco = valor

		// 	valor = this.abril.replace(/\D/gi, '')
        //     valor = (valor/100).toLocaleString('pt-br', { minimumFractionDigits: 2 })
        //     this.abril = valor

		// 	valor = this.maio.replace(/\D/gi, '')
        //     valor = (valor/100).toLocaleString('pt-br', { minimumFractionDigits: 2 })
        //     this.maio = valor
			
		// 	valor = this.junho.replace(/\D/gi, '')
        //     valor = (valor/100).toLocaleString('pt-br', { minimumFractionDigits: 2 })
        //     this.junho = valor
			
		// 	valor = this.julho.replace(/\D/gi, '')
        //     valor = (valor/100).toLocaleString('pt-br', { minimumFractionDigits: 2 })
        //     this.julho = valor

		// 	valor = this.agosto.replace(/\D/gi, '')
        //     valor = (valor/100).toLocaleString('pt-br', { minimumFractionDigits: 2 })
        //     this.agosto = valor
		
		// 	valor = this.setembro.replace(/\D/gi, '')
        //     valor = (valor/100).toLocaleString('pt-br', { minimumFractionDigits: 2 })
        //     this.setembro = valor

		// 	valor = this.outubro.replace(/\D/gi, '')
        //     valor = (valor/100).toLocaleString('pt-br', { minimumFractionDigits: 2 })
        //     this.outubro = valor

		// 	valor = this.novembro.replace(/\D/gi, '')
        //     valor = (valor/100).toLocaleString('pt-br', { minimumFractionDigits: 2 })
        //     this.novembro = valor

		// 	valor = this.dezembro.replace(/\D/gi, '')
        //     valor = (valor/100).toLocaleString('pt-br', { minimumFractionDigits: 2 })
        //     this.dezembro = valor
		
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

			this.masc_money()
		},



		async adicionaMetas() {
			this.error = null

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
			this.msg = res.message,
				setTimeout(() => this.msg = "", 5000);

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
 this.masc_money()
	},
}