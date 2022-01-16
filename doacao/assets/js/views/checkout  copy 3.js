import adm from "../../../../../static/js/api/adm.js"
// const { required, minLength, between } = window.validators

export default {
	template: `
		<div>

			<div class="content d-flex flex-column flex-column-fluid" id="kt_content">

				<div class="post d-flex flex-column-fluid" id="kt_post">
					<div id="kt_content_container" class="container-xxl">
						<div class="text-center mb-20 mb-xl-5">
							<img style="width: 15%;" src="../../doacao/assets/image/1633726236.png" class="rounded"
								alt="...">

								<img class="rounded" style="width: 15%;" v-bind:src="gravatar">
								</div>
								<div class="card mb-5 mb-xl-10">
									<div class="card-body">
										<div class="row gx-9 gy-6">
											<div class="col-xl-6">
												<div>
													<div class="card-title mb-5">
														<h3>Escolha tipo</h3>
													</div>
													<div class="fv-row">
														<div class="btn-group w-100" data-kt-buttons="true"
															data-kt-buttons-target="[data-kt-button]">

															<input v-model="tipo" type="radio" class="btn-check"
																name="radio_buttons_2" value="mes" checked="checked"
																id="kt_radio_buttons_2_option_1" />
															<label
																class="btn btn-outline btn-outline-dashed btn-outline-default p-5 d-flex align-items-center mb-5"
																for="kt_radio_buttons_2_option_1">
																<span class="d-block fw-bold text-start">
																	<span class="text-dark fw-bolder d-block fs-3">DOAÇÃO MENSAL</span>
																</span>
															</label>

															<input v-model="tipo" type="radio" class="btn-check"
																name="radio_buttons_2" value="unica"
																id="kt_radio_buttons_2_option_2" />
															<label
																class="btn btn-outline btn-outline-dashed btn-outline-default p-5 d-flex align-items-center mb-5"
																for="kt_radio_buttons_2_option_2">
																<span class="d-block fw-bold text-start">
																	<span class="text-dark fw-bolder d-block fs-3">DOAÇÃO UNICA</span>
																</span>
															</label>
														</div>
													</div>

												</div>
												<div>
													<div class="card-title mt-10">
														<h3>Escolha Valor para Doação</h3>
													</div>

													<div class="d-flex flex-column">

														<div class="row mt-5">

															<div class="col-lg-4 mb-10 mb-lg-0" v-for="listar in dados" :key="listar.id">
															<label
																class="btn btn-outline btn-outline-dashed d-flex flex-stack text-start p-6">
																<div class="d-flex align-items-center me-2">

																	<div
																		class="form-check form-check-custom form-check-solid form-check-primary me-6">
																		<input v-bind:value="listar.amount" v-model="valor" class="form-check-input"
																			type="radio" name="plan" />
																	</div>

																	<div class="flex-grow-1">
																		<div class="fw-bold opacity-100">R$  {{ listar.amount }}</div>
																	</div>
																</div>
															</label>
														</div>

														<div class="col-lg-4 mb-10 mb-lg-0" v-if="tipo !== 'mes'">

															<label
																class="btn btn-outline btn-outline-dashed d-flex flex-stack text-start p-6">

																<div class="d-flex align-items-center me-2">

																	<div
																		class="form-check form-check-custom form-check-solid form-check-primary me-6">
																		<input v-model="valor" class="form-check-input"
																			type="radio" name="plan" value="0" />
																	</div>

																	<div class="flex-grow-1">
																		<div class="fw-bold opacity-100">OUTRO</div>
																	</div>
																</div>
															</label>
														</div>
													</div>

												</div>
											</div>
										</div>

										<div class="col-xl-6">
											<div class="mb-10" v-if="valor === '0' && tipo !== 'mes'">
												<div class="card-title mb-5">
													<h3>Informe um valor, mínimo R$ 25,00. (Pix máximo R$ 1000,00 dia)</h3>
												</div>

												<input v-model="amount" type="text" class="form-control form-control-solid p-5"
													placeholder="00.00" />
											</div>
											<div class="card-title mb-10">
												<h3>Informacao</h3>
											</div>
											<div class="mb-10">
												<label for="exampleFormControlInput1" class="required form-label">E-mail</label>
												<input v-model="email" type="email" class="form-control form-control-solid p-5"
													placeholder="Email" />
											</div>
											{{valor}}
											<div>
												<button @click="descartavel()" style="width: 100%;"
										 class="btn btn-success p-5">PROSEGUIR...</button>
										</div>
									</div>
								</div>
						</div>
					</div>
				</div>
			</div>
		</div> 

		<div class="footer py-4 d-flex flex-lg-column a-footer">
			<div class="container-fluid d-flex flex-column flex-md-row align-items-center justify-content-between">
				<div class="text-dark order-2 order-md-1"><span class="text-muted fw-bold me-1">2021©</span> <a
						href="https://keenthemes.com" target="_blank" class="text-gray-800 text-hover-primary">- Digital
						Combo</a></div>
			</div>
		</div>
 
	</div>
	`,


	data: function () {
		return {
			gravatar: '',
			tipo: "mes",
			amount: null,
			valor: null,
			email: null,
			outro: null,
			subdomaim: null,
			dados: []
		}
	},
	methods: {
		async infoSubdomain() {
			let res = await adm.todoSubdomain(this.subdomaim = "34edqwe21")
			return res
		},


		descartavel() {
			this.tipo = window.localStorage.setItem("tipo", this.tipo)
			this.valor = window.localStorage.setItem("amount", this.amount)
			this.email = window.localStorage.setItem("email", this.email)
		}
	},

	async mounted() {
		this.dados = (await this.infoSubdomain()).dados_instituicao.plano
		this.amount = dados.amount

		// let gravatar = (await this.infoSubdomain()).dados_instituicao
		//  this.gravatar = gravatar.logo

	},


}

