import adm from "../../../../../static/js/api/adm.js"
const { required, minLength, between } = window.validators

export default {
    template:`

	<div class="d-flex flex-column flex-lg-row flex-column-fluid stepper stepper-pills stepper-column" id="kt_create_account_stepper">
		 
	<div class="d-flex flex-column flex-lg-row-auto w-xl-500px bg-lighten shadow-sm">
 
		<div class="d-flex flex-column position-xl-fixed top-0 bottom-0 w-xl-500px scroll-y"> 
			<div class="d-flex flex-row-fluid flex-column flex-center p-10 pt-lg-20"> 
				<a href="../../demo9/dist/index.html" class="mb-10 mb-lg-20">
					<img alt="Logo" src="assets/media/logos/logotipo1.png" class="h-40px" />
				</a> 
				<div class="stepper-nav"> 
					<div class="stepper-item completed"> 
						<div class="stepper-line w-40px"></div> 
						<div class="stepper-icon w-40px h-40px">
							<i class="stepper-check fas fa-check"></i>
							<span class="stepper-number">1</span>
						</div> 
						<div class="stepper-label">
							<h3 class="stepper-title">Tipo de Conta</h3>
						</div> 
					</div> 
					<div class="stepper-item completed"> 
						<div class="stepper-line w-40px"></div> 
						<div class="stepper-icon w-40px h-40px">
							<i class="stepper-check fas fa-check"></i>
							<span class="stepper-number">2</span>
						</div> 
						<div class="stepper-label">
							<h3 class="stepper-title">Completar Perfil</h3>
						</div> 
					</div> 
					<div class="stepper-item current"> 
						<div class="stepper-line w-40px"></div> 
						<div class="stepper-icon w-40px h-40px">
							<i class="stepper-check fas fa-check"></i>
							<span class="stepper-number">3</span> </div>
						<div class="stepper-label">
							<h3 class="stepper-title">Endereço</h3>
						</div> 
					</div> 
					<div class="stepper-item"> 
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
				<form @submit.prevent="editarEndereco" autocomplete="off" class="my-auto pb-5" novalidate="novalidate" id="kt_create_account_form">
					<div class="current" data-kt-stepper-element="content"> 
						<div class="w-100"> 
							<div class="pb-10 pb-lg-12"> 
								<h2 class="fw-bolder text-dark">Endereço de Cobrança</h2> 
								<div class="text-muted fw-bold fs-6">Complete os dados de endereço 
								.</div> 
							</div> 
							
							<div class="fv-row mb-10"> 
								<label class="form-label required">CEP</label>
								 
								<input v-model="nome_identificacao" type="text"/>
						 <input v-model="cep" @keyup="searchCep()" name="business_name" class="form-control form-control-lg form-control-solid" value="sem registro"/>
								
					 
							</div> 
							<div class="fv-row mb-0"> 
								<label class="fs-6 fw-bold form-label required">Logradouro</label>
								 
								<input id="logradouro" v-model="logadouro" name="business_name" class="form-control form-control-lg form-control-solid" disabled />
								 
							</div>
						<br>
							 <div class="fv-row mb-0">
								
								<label class="fs-6 fw-bold form-label required">Número</label>
								
								<input id="numero" v-model="numero" type="text" 
								 name="business_name" class="form-control form-control-lg form-control-solid" placeholder="Localização"  />
								
							</div>
							<br>
							<div class="fv-row mb-0">
								
							<label class="fs-6 fw-bold form-label required">Complemento</label>
							
							<input v-model="complemento" name="Complemento" class="form-control form-control-lg form-control-solid" value="Boa Vista" />
							
						</div>
						<br>
								 <div class="fv-row mb-0">
								
								<label class="fs-6 fw-bold form-label required">Bairro</label>
								
								<input v-model="bairro" name="bairro" class="form-control form-control-lg form-control-solid" disabled />
								
							</div>
						
						<br> 
							<div class="fv-row mb-0"> 
								<label class="fs-6 fw-bold form-label required">Cidade</label> 
								<input v-model="cidade" type="text" disabled class="form-control form-control-lg form-control-solid" />
								
							</div>
						<br> 
							<div class="fv-row mb-0">
								
								<label class="fs-6 fw-bold form-label required">Estado</label>
								
								<input id="uf" v-model="estado" type="text" disabled name="business_name" class="form-control form-control-lg form-control-solid"  />
								
							</div> 
						</div> 
					</div> 

					<div class="d-flex flex-stack pt-15">
						<div class="mr-2">
							<a type="button" class="btn btn-lg btn-light-primary me-3"  >
							 <span class="svg-icon svg-icon-4 me-1">
								<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
									<rect opacity="0.5" x="6" y="11" width="13" height="2" rx="1" fill="black" />
									<path d="M8.56569 11.4343L12.75 7.25C13.1642 6.83579 13.1642 6.16421 12.75 5.75C12.3358 5.33579 11.6642 5.33579 11.25 5.75L5.70711 11.2929C5.31658 11.6834 5.31658 12.3166 5.70711 12.7071L11.25 18.25C11.6642 18.6642 12.3358 18.6642 12.75 18.25C13.1642 17.8358 13.1642 17.1642 12.75 16.75L8.56569 12.5657C8.25327 12.2533 8.25327 11.7467 8.56569 11.4343Z" fill="black" />
								</svg>
							</span>
						 Anterior</a>
						</div>
						<div> 
							<button type="submit" class="btn btn-lg btn-primary" >Continuar
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
				<a href="https://doardigital.com.br" class="text-muted text-hover-primary px-2" target="_blank">Termos & Condições</a>
			</div> 
		</div> 
	</div> 
</div> 
	`,


     data: function () {
		return {
			
			id: null,
			nome_identificacao: null,
			cep: null,
			logadouro: null,
			numero: null,
			complemento: null,
			bairro: null,
			cidade: null,
			estado: null,
			secret: null,
			token: null,

        }
    },

	validations: {
		cep: {
			required,
			minLength: minLength(8)
		},

	},

	methods: {
	
		async editarEndereco() {
			this.error = null

			let res = await adm.atualizarEndereco(
				this.token,
				this.nome_identificacao,
				this.cep,
				this.logadouro,
				this.numero,
				this.complemento,
				this.bairro,
				this.cidade,
				this.estado,

			)
			if (!res.next) {
				// this.error = res.message
				this.msg = res.message
				return null
			}

			window.location.href = `#/checkout_plano`
		},

       
		searchCep() {
			if (this.cep.length == 8) {
				axios.get(`https://viacep.com.br/ws/${this.cep}/json/`)
					.then(response => {
						this.cep = this.cep.replace(/[^\d]+/g, '')
						this.logadouro = response.data.logradouro,
							this.bairro = response.data.bairro,
							this.cidade = response.data.localidade,
							this.estado = response.data.uf
					}
					)
					.catch(error =>
						console.log(error)
					)
			}
		}

    },
	
	created() {
		this.token = localStorage.getItem('token')
	},
	
}

