import adm from "../../../../../static/js/api/adm.js"
const { required, minLength, maxLength } = window.validators

export default {
	template: `
 
	<div class="d-flex flex-column flex-lg-row flex-column-fluid stepper stepper-pills stepper-column" id="kt_create_account_stepper">
		 
	<div class="d-flex flex-column flex-lg-row-auto w-xl-500px bg-lighten shadow-sm">
 
		<div class="d-flex flex-column position-xl-fixed top-0 bottom-0 w-xl-500px scroll-y"> 
			<div class="d-flex flex-row-fluid flex-column flex-center p-10 pt-lg-20"> 
				<a href="../../demo9/dist/index.html" class="mb-10 mb-lg-20">
					<img alt="Logo" src="assets/media/logos/logotipo1.png" class="h-40px" />
				</a> 
				<div class="stepper-nav"> 
					<div class="stepper-item completed" data-kt-stepper-element="nav"> 
						<div class="stepper-line w-40px"></div> 
						<div class="stepper-icon w-40px h-40px">
							<i class="stepper-check fas fa-check"></i>
							<span class="stepper-number">1</span>
						</div> 
						<div class="stepper-label">
							<h3 class="stepper-title">Tipo de Conta</h3>
						</div> 
					</div> 

					<div class="stepper-item current" data-kt-stepper-element="nav"> 
						<div class="stepper-line w-40px"></div> 
						<div class="stepper-icon w-40px h-40px">
							<i class="stepper-check fas fa-check"></i>
							<span class="stepper-number">2</span>
						</div> 
						<div class="stepper-label">
							<h3 class="stepper-title">Completar Perfil</h3>
						</div> 
					</div> 
					<div class="stepper-item" data-kt-stepper-element="nav"> 
						<div class="stepper-line w-40px"></div> 
						<div class="stepper-icon w-40px h-40px">
							<i class="stepper-check fas fa-check"></i>
							<span class="stepper-number">3</span> </div>
						<div class="stepper-label">
							<h3 class="stepper-title">Endereço</h3>
						</div> 
					</div> 
					<div class="stepper-item" data-kt-stepper-element="nav"> 
						<div class="stepper-line w-40px"></div> 
						<div class="stepper-icon w-40px h-40px">
							<i class="stepper-check fas fa-check"></i>
							<span class="stepper-number">4</span>
						</div> 
						<div class="stepper-label">
							<h3 class="stepper-title">Assinar Plano</h3>
						</div> 
					</div> 
					<div class="stepper-item" data-kt-stepper-element="nav"> 
						<div class="stepper-line w-40px"></div> 
						<div class="stepper-icon w-40px h-40px">
							<i class="stepper-check fas fa-check"></i>
							<span class="stepper-number">5</span>
						</div> 
						<div class="stepper-label">
							<h3 class="stepper-title">Finalizado</h3>
						</div> 
					</div> 
				</div> 
			</div> 
			<div class="d-flex flex-row-auto bgi-no-repeat bgi-position-x-center bgi-size-contain bgi-position-y-bottom min-h-150px min-h-lg-300px" style="background-image: url(assets/media/illustrations/sigma-1/16.png"></div>
		 
		</div> 
	</div> 
	<div class="d-flex flex-column flex-lg-row-fluid py-10"> 
		<div class="d-flex flex-center flex-column flex-column-fluid"> 
			<div class="w-lg-700px p-10 p-lg-15 mx-auto"> 

			<form @submit.prevent="finalizarAdm" autocomplete="off" class="my-auto pb-5">
			 	 <div class="current" data-kt-stepper-element="content">
						 <div class="w-100">
							 <div class="pb-10 pb-lg-15">
								 <h2 class="fw-bolder text-dark">Completar Perfil</h2>
								 <div class="text-muted fw-bold fs-6">Preencha com seus dados.</div>
							 </div>
							 <div class="fv-row mb-10">
								 <label class="d-flex align-items-center form-label">
									<span class="required">Data de Nascimento</span>
									<i class="fas fa-exclamation-circle ms-2 fs-7" data-bs-toggle="tooltip" title="Selecione o tipo de conta conforme documento utilizado"></i></h2>
								</label>
								 <input name="business_descriptor" class="form-control form-control-lg form-control-solid" 
								 v-model.trin="$v.data_nascimento.$model" :class=" {'is-invalid':$v.data_nascimento.$error, 'is-valid':!$v.data_nascimento.$invalid }"
								 v-mask="'##/##/####'" placeholder="29/10/1980" required/>

								 <div class="erros" v-if="$v.data_nascimento.$error">
												<div class="erro_texte" v-if="!$v.data_nascimento.required">Valor
													é necessária</div>
												<div class="erro_texte" v-if="!$v.data_nascimento.minLength">
													adicione 8 digito para a data de nascimento.</div>
											</div>
											<div class="sucesso_texte" v-else>  
												</div>
						 </div>	
					 <div class="mb-10 fv-row" >
						 <label class="form-label mb-3">CPF</label> 
					 <input type="text" class="form-control form-control-lg form-control-solid" name="account_name" v-model="cpf_cnpj" v-mask="'###.###.###-##'" placeholder="000.000.000-00" required/>
					 </div>

											</div> 
					</div> 
					
					
				 
				  <div class="alert alert-danger d-flex align-items-center p-5 m-5" v-if="error!=null">
				  <!--begin::Svg Icon | path: icons/duotune/general/gen048.svg-->
				  <span class="svg-icon svg-icon-2hx svg-icon-danger me-4">
				  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
															  <rect opacity="0.5" x="6" y="17.3137" width="16" height="2" rx="1" transform="rotate(-45 6 17.3137)" fill="black"></rect>
															  <rect x="7.41422" y="6" width="16" height="2" rx="1" transform="rotate(45 7.41422 6)" fill="black"></rect>
														  </svg>
				  </span>
				  <!--end::Svg Icon-->
				  <div class="d-flex flex-column">
					  <h4 class="mb-1 text-danger">{{error}}</h4>
					   </div>
			  </div>


					<div class="d-flex flex-stack pt-5">
						<div class="mr-2">
							<a type="button" class="btn btn-lg btn-light-primary me-3" href="#/" >
							 <span class="svg-icon svg-icon-4 me-1">
								<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
									<rect opacity="0.5" x="6" y="11" width="13" height="2" rx="1" fill="black" />
									<path d="M8.56569 11.4343L12.75 7.25C13.1642 6.83579 13.1642 6.16421 12.75 5.75C12.3358 5.33579 11.6642 5.33579 11.25 5.75L5.70711 11.2929C5.31658 11.6834 5.31658 12.3166 5.70711 12.7071L11.25 18.25C11.6642 18.6642 12.3358 18.6642 12.75 18.25C13.1642 17.8358 13.1642 17.1642 12.75 16.75L8.56569 12.5657C8.25327 12.2533 8.25327 11.7467 8.56569 11.4343Z" fill="black" />
								</svg>
							</span>
						 Anterior</a>
						</div>
						<div>
						
							<button type="submit" class="btn btn-lg btn-primary">Continuar
						 <span class="svg-icon svg-icon-4 ms-1">
								<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
									<rect opacity="0.5" x="18" y="13" width="13" height="2" rx="1" transform="rotate(-180 18 13)" fill="black" />
									<path d="M15.4343 12.5657L11.25 16.75C10.8358 17.1642 10.8358 17.8358 11.25 18.25C11.6642 18.6642 12.3358 18.6642 12.75 18.25L18.2929 12.7071C18.6834 12.3166 18.6834 11.6834 18.2929 11.2929L12.75 5.75C12.3358 5.33579 11.6642 5.33579 11.25 5.75C10.8358 6.16421 10.8358 6.83579 11.25 7.25L15.4343 11.4343C15.7467 11.7467 15.7467 12.2533 15.4343 12.5657Z" fill="black" />
								</svg>
							</span>
						 </button>
						</div>
					</div>
					 
				</form>  

			</div> 
		</div> 
		<div class="d-flex flex-center flex-wrap fs-6 p-5 pb-0">
		 
			<div class="d-flex flex-center fw-bold fs-6">
				<a href="https://doardigital.com.br" class="text-muted text-hover-primary px-2" target="_blank">Sobre</a>
				<a href="https://crm.digitalcombo.com.br/index.php/about/suporte" class="text-muted text-hover-primary px-2" target="_blank">Suporte</a>
				<a href="/cadastro/index.html#/termos" class="text-muted text-hover-primary px-2" target="_blank">Termos & Condições</a>
					</div> 
		</div> 
	</div> 
</div> 
	`,


	data: function () {
		return { 
			cpf_cnpj: null,
			data_nascimento: null,
			tipo: null,
			token: null,
			jms: "",
			error: null,

		}
	},

	validations: {
		data_nascimento: {
			required,
			minLength: minLength(10)
		},

	},
	methods: {
		async finalizarAdm() {
			this.error = null
			this.$v.$touch()
			if (this.$v.$invalid) {
				this.submitStatus = 'ERROR'
			} else {

				let res = await adm.atualizarFinaliza(
					this.cpf_cnpj,
					this.data_nascimento,
					this.tipo, 
					this.token

				)
				if (!res.next) {
					console.log(res)
					this.error = res.message
					return null
				}
				globalThis._cpf = this.cpf_cnpj
				globalThis._nascimento = this.data_nascimento
				globalThis._tipo = this.tipo
				window.location.href = `#/checkout_endereco`
			}

		},
	},


	async mounted() {
		this.jms = localStorage.getItem('cnpj')

	     this.cpf_cnpj = globalThis._cpf 
		 this.data_nascimento = globalThis._nascimento 
		 this.tipo = globalThis._tipo 
	},



}

