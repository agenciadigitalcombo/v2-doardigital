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
												
													
													<div class="col-lg-3" v-for="(mes, index) in meses">
														<div class="fv-row mb-5">
															<label for="Valor"
																class="form-label fs-6 fw-bolder mb-3 required">{{ mes }} </label>
															<input type="text" v-model="playload[index]" placeholder="00,00" @input="playload[index] = mask_money(playload[index]) "
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
			money="",
			meses: ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'],
            playload: [],

		
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
	 money( valor ) {
			valor = valor.replace(/\D/gi, '')
			valor = (valor/100).toLocaleString('pt-br', { minimumFractionDigits: 2 })
			return valor
		
			
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