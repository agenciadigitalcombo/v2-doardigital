

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
					<div class="stepper-item current" data-kt-stepper-element="nav"> 
						<div class="stepper-line w-40px"></div> 
						<div class="stepper-icon w-40px h-40px">
							<i class="stepper-check fas fa-check"></i>
							<span class="stepper-number">1</span>
						</div> 
						<div class="stepper-label">
							<h3 class="stepper-title">Tipo de Conta</h3>
						</div> 
					</div> 
					<div class="stepper-item" data-kt-stepper-element="nav"> 
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
				<form class="my-auto pb-5" novalidate="novalidate" id="kt_create_account_form">
				 
					
					<div class="current" data-kt-stepper-element="content"> 
						<div class="w-100"> 
							<div class="pb-10 pb-lg-15"> 
								<h2 class="fw-bolder d-flex align-items-center text-dark">Escolha seu tipo de Conta
								<i class="fas fa-exclamation-circle ms-2 fs-7" data-bs-toggle="tooltip" title="Selecione o tipo de conta conforme documento utilizado"></i></h2>
							 
								<div class="text-muted fw-bold fs-6">Esta conta será a conta cadastrada para a assinatura do sistema.
								<a href="#" target="_blank" class="link-primary fw-bolder">Saiba mais</a>.</div>
						 
							</div> 
							<div class="fv-row"> 
								<div class="row"> 
									<div class="col-lg-6"> 
										<input   @click="jms = false"  type="radio" class="btn-check" name="account_type" value="personal"  id="fisica" />
										<label class="btn btn-outline btn-outline-dashed btn-outline-default p-7 d-flex align-items-center mb-10" for="fisica">
										 <span class="svg-icon svg-icon-3x me-5">
												<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
													<path d="M20 14H18V10H20C20.6 10 21 10.4 21 11V13C21 13.6 20.6 14 20 14ZM21 19V17C21 16.4 20.6 16 20 16H18V20H20C20.6 20 21 19.6 21 19ZM21 7V5C21 4.4 20.6 4 20 4H18V8H20C20.6 8 21 7.6 21 7Z" fill="black" />
													<path opacity="0.3" d="M17 22H3C2.4 22 2 21.6 2 21V3C2 2.4 2.4 2 3 2H17C17.6 2 18 2.4 18 3V21C18 21.6 17.6 22 17 22ZM10 7C8.9 7 8 7.9 8 9C8 10.1 8.9 11 10 11C11.1 11 12 10.1 12 9C12 7.9 11.1 7 10 7ZM13.3 16C14 16 14.5 15.3 14.3 14.7C13.7 13.2 12 12 10.1 12C8.10001 12 6.49999 13.1 5.89999 14.7C5.59999 15.3 6.19999 16 7.39999 16H13.3Z" fill="black" />
												</svg>
											</span>
										 <span class="d-block fw-bold text-start">
												<span class="text-dark fw-bolder d-block fs-4 mb-2">Pessoa Física</span>
											</span>
										 </label>
								 </div>
									 <div class="col-lg-6">
										 <input  @click="jms = true" type="radio" class="btn-check" name="account_type" value="corporate" checked="checked" id="juridico" />
										<label class="btn btn-outline btn-outline-dashed btn-outline-default p-7 d-flex align-items-center" for="juridico">
											 <span class="svg-icon svg-icon-3x me-5">
												<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
													<path opacity="0.3" d="M20 15H4C2.9 15 2 14.1 2 13V7C2 6.4 2.4 6 3 6H21C21.6 6 22 6.4 22 7V13C22 14.1 21.1 15 20 15ZM13 12H11C10.5 12 10 12.4 10 13V16C10 16.5 10.4 17 11 17H13C13.6 17 14 16.6 14 16V13C14 12.4 13.6 12 13 12Z" fill="black" />
													<path d="M14 6V5H10V6H8V5C8 3.9 8.9 3 10 3H14C15.1 3 16 3.9 16 5V6H14ZM20 15H14V16C14 16.6 13.5 17 13 17H11C10.5 17 10 16.6 10 16V15H4C3.6 15 3.3 14.9 3 14.7V18C3 19.1 3.9 20 5 20H19C20.1 20 21 19.1 21 18V14.7C20.7 14.9 20.4 15 20 15Z" fill="black" />
												</svg>
											</span>
										 <span class="d-block fw-bold text-start">
												<span class="text-dark fw-bolder d-block fs-4 mb-2">Pessoa Jurídica</span>
											</span>
									 </label>
									 </div>
								 </div>
							 </div>

							 <div class="mb-0 fv-row">
							 <label class="d-flex align-items-center form-label mb-5">Selecione em qual 
							<i class="fas fa-exclamation-circle ms-2 fs-7" data-bs-toggle="tooltip" title="Monthly billing will be based on your account plan"></i></label>
							 <div class="mb-0">
								 <label class="d-flex flex-stack mb-5 cursor-pointer">
									 <span class="d-flex align-items-center me-2">
									 <span class="symbol symbol-50px me-6">
											<span class="symbol-label">
												 <span class="svg-icon svg-icon-1 svg-icon-gray-600">
													<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
														<path d="M20 19.725V18.725C20 18.125 19.6 17.725 19 17.725H5C4.4 17.725 4 18.125 4 18.725V19.725H3C2.4 19.725 2 20.125 2 20.725V21.725H22V20.725C22 20.125 21.6 19.725 21 19.725H20Z" fill="black" />
														<path opacity="0.3" d="M22 6.725V7.725C22 8.325 21.6 8.725 21 8.725H18C18.6 8.725 19 9.125 19 9.725C19 10.325 18.6 10.725 18 10.725V15.725C18.6 15.725 19 16.125 19 16.725V17.725H15V16.725C15 16.125 15.4 15.725 16 15.725V10.725C15.4 10.725 15 10.325 15 9.725C15 9.125 15.4 8.725 16 8.725H13C13.6 8.725 14 9.125 14 9.725C14 10.325 13.6 10.725 13 10.725V15.725C13.6 15.725 14 16.125 14 16.725V17.725H10V16.725C10 16.125 10.4 15.725 11 15.725V10.725C10.4 10.725 10 10.325 10 9.725C10 9.125 10.4 8.725 11 8.725H8C8.6 8.725 9 9.125 9 9.725C9 10.325 8.6 10.725 8 10.725V15.725C8.6 15.725 9 16.125 9 16.725V17.725H5V16.725C5 16.125 5.4 15.725 6 15.725V10.725C5.4 10.725 5 10.325 5 9.725C5 9.125 5.4 8.725 6 8.725H3C2.4 8.725 2 8.325 2 7.725V6.725L11 2.225C11.6 1.925 12.4 1.925 13.1 2.225L22 6.725ZM12 3.725C11.2 3.725 10.5 4.425 10.5 5.225C10.5 6.025 11.2 6.725 12 6.725C12.8 6.725 13.5 6.025 13.5 5.225C13.5 4.425 12.8 3.725 12 3.725Z" fill="black" />
													</svg>
												</span>
										 </span>
										</span>
									 <span class="d-flex flex-column">
											<span class="fw-bolder text-gray-800 text-hover-primary fs-5">Instituição</span>
										</span>
									 </span>
									 <span class="form-check form-check-custom form-check-solid">
										<input class="form-check-input" type="radio" checked="checked" name="account_plan" value="Instituicao" v-model="tipo"/>
									</span>
								 </label>
								 <label class="d-flex flex-stack mb-5 cursor-pointer">
									 <span class="d-flex align-items-center me-2">
										 <span class="symbol symbol-50px me-6">
											<span class="symbol-label">
												 <span class="svg-icon svg-icon-1 svg-icon-gray-600">
													<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
														<path d="M13 5.91517C15.8 6.41517 18 8.81519 18 11.8152C18 12.5152 17.9 13.2152 17.6 13.9152L20.1 15.3152C20.6 15.6152 21.4 15.4152 21.6 14.8152C21.9 13.9152 22.1 12.9152 22.1 11.8152C22.1 7.01519 18.8 3.11521 14.3 2.01521C13.7 1.91521 13.1 2.31521 13.1 3.01521V5.91517H13Z" fill="black" />
														<path opacity="0.3" d="M19.1 17.0152C19.7 17.3152 19.8 18.1152 19.3 18.5152C17.5 20.5152 14.9 21.7152 12 21.7152C9.1 21.7152 6.50001 20.5152 4.70001 18.5152C4.30001 18.0152 4.39999 17.3152 4.89999 17.0152L7.39999 15.6152C8.49999 16.9152 10.2 17.8152 12 17.8152C13.8 17.8152 15.5 17.0152 16.6 15.6152L19.1 17.0152ZM6.39999 13.9151C6.19999 13.2151 6 12.5152 6 11.8152C6 8.81517 8.2 6.41515 11 5.91515V3.01519C11 2.41519 10.4 1.91519 9.79999 2.01519C5.29999 3.01519 2 7.01517 2 11.8152C2 12.8152 2.2 13.8152 2.5 14.8152C2.7 15.4152 3.4 15.7152 4 15.3152L6.39999 13.9151Z" fill="black" />
													</svg>
												</span>
											 </span>
										</span>
										 <span class="d-flex flex-column">
											<span class="fw-bolder text-gray-800 text-hover-primary fs-5">ONG</span>
										</span>
									 </span>
									 <span class="form-check form-check-custom form-check-solid">
										<input class="form-check-input" type="radio"  name="account_plan" value="ONG" v-model="tipo"/>
									</span>
								 </label>
							 <label class="d-flex flex-stack mb-5 cursor-pointer">
									 <span class="d-flex align-items-center me-2">
										 <span class="symbol symbol-50px me-6">
											<span class="symbol-label">
											 <span class="svg-icon svg-icon-1 svg-icon-gray-600">
													<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
														<path d="M13 10.9128V3.01281C13 2.41281 13.5 1.91281 14.1 2.01281C16.1 2.21281 17.9 3.11284 19.3 4.61284C20.7 6.01284 21.6 7.91285 21.9 9.81285C22 10.4129 21.5 10.9128 20.9 10.9128H13Z" fill="black" />
														<path opacity="0.3" d="M13 12.9128V20.8129C13 21.4129 13.5 21.9129 14.1 21.8129C16.1 21.6129 17.9 20.7128 19.3 19.2128C20.7 17.8128 21.6 15.9128 21.9 14.0128C22 13.4128 21.5 12.9128 20.9 12.9128H13Z" fill="black" />
														<path opacity="0.3" d="M11 19.8129C11 20.4129 10.5 20.9129 9.89999 20.8129C5.49999 20.2129 2 16.5128 2 11.9128C2 7.31283 5.39999 3.51281 9.89999 3.01281C10.5 2.91281 11 3.41281 11 4.01281V19.8129Z" fill="black" />
													</svg>
												</span>
												 </span>
										</span>
									 <span class="d-flex flex-column">
											<span class="fw-bolder text-gray-800 text-hover-primary fs-5">Missionário</span>
										</span> 
									</span> 
									<span class="form-check form-check-custom form-check-solid">
										<input class="form-check-input" type="radio" name="account_plan" value="Missionario" v-model="tipo"/>
									</span> 
								</label> 
								<label class="d-flex flex-stack mb-0 cursor-pointer">
								<span class="d-flex align-items-center me-2">
									<span class="symbol symbol-50px me-6">
									   <span class="symbol-label">
										<span class="svg-icon svg-icon-1 svg-icon-gray-600">
										<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-tsunami" viewBox="0 0 16 16">
										<path d="M.036 12.314a.5.5 0 0 1 .65-.278l1.757.703a1.5 1.5 0 0 0 1.114 0l1.014-.406a2.5 2.5 0 0 1 1.857 0l1.015.406a1.5 1.5 0 0 0 1.114 0l1.014-.406a2.5 2.5 0 0 1 1.857 0l1.015.406a1.5 1.5 0 0 0 1.114 0l1.757-.703a.5.5 0 1 1 .372.928l-1.758.703a2.5 2.5 0 0 1-1.857 0l-1.014-.406a1.5 1.5 0 0 0-1.114 0l-1.015.406a2.5 2.5 0 0 1-1.857 0l-1.014-.406a1.5 1.5 0 0 0-1.114 0l-1.015.406a2.5 2.5 0 0 1-1.857 0l-1.757-.703a.5.5 0 0 1-.278-.65zm0 2a.5.5 0 0 1 .65-.278l1.757.703a1.5 1.5 0 0 0 1.114 0l1.014-.406a2.5 2.5 0 0 1 1.857 0l1.015.406a1.5 1.5 0 0 0 1.114 0l1.014-.406a2.5 2.5 0 0 1 1.857 0l1.015.406a1.5 1.5 0 0 0 1.114 0l1.757-.703a.5.5 0 1 1 .372.928l-1.758.703a2.5 2.5 0 0 1-1.857 0l-1.014-.406a1.5 1.5 0 0 0-1.114 0l-1.015.406a2.5 2.5 0 0 1-1.857 0l-1.014-.406a1.5 1.5 0 0 0-1.114 0l-1.015.406a2.5 2.5 0 0 1-1.857 0l-1.757-.703a.5.5 0 0 1-.278-.65zM2.662 8.08c-.456 1.063-.994 2.098-1.842 2.804a.5.5 0 0 1-.64-.768c.652-.544 1.114-1.384 1.564-2.43.14-.328.281-.68.427-1.044.302-.754.624-1.559 1.01-2.308C3.763 3.2 4.528 2.105 5.7 1.299 6.877.49 8.418 0 10.5 0c1.463 0 2.511.4 3.179 1.058.67.66.893 1.518.819 2.302-.074.771-.441 1.516-1.02 1.965a1.878 1.878 0 0 1-1.904.27c-.65.642-.907 1.679-.71 2.614C11.076 9.215 11.784 10 13 10h2.5a.5.5 0 0 1 0 1H13c-1.784 0-2.826-1.215-3.114-2.585-.232-1.1.005-2.373.758-3.284L10.5 5.06l-.777.388a.5.5 0 0 1-.447 0l-1-.5a.5.5 0 0 1 .447-.894l.777.388.776-.388a.5.5 0 0 1 .447 0l1 .5a.493.493 0 0 1 .034.018c.44.264.81.195 1.108-.036.328-.255.586-.729.637-1.27.05-.529-.1-1.076-.525-1.495-.426-.42-1.19-.77-2.477-.77-1.918 0-3.252.448-4.232 1.123C5.283 2.8 4.61 3.738 4.07 4.79c-.365.71-.655 1.433-.945 2.16-.15.376-.301.753-.463 1.13z"/>
									  </svg>
										   </span>
											</span>
								   </span>
								<span class="d-flex flex-column">
									   <span class="fw-bolder text-gray-800 text-hover-primary fs-5">Grupo de Oração</span>
								   </span> 
							   </span> 
							   <span class="form-check form-check-custom form-check-solid">
								   <input class="form-check-input" type="radio" name="account_plan" value="Missionario" v-model="tipo"/>
							   </span> 
						   </label> 
							</div> 
						</div> 


						 </div>
				 </div>

					<div class="d-flex flex-stack pt-15">
						<div class="mr-2">
						 
						</div>
						<div>
							 
							<a @click="addcnpj()" type="button" class="btn btn-lg btn-primary">Continuar
						 <span class="svg-icon svg-icon-4 ms-1">
								<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
									<rect opacity="0.5" x="18" y="13" width="13" height="2" rx="1" transform="rotate(-180 18 13)" fill="black" />
									<path d="M15.4343 12.5657L11.25 16.75C10.8358 17.1642 10.8358 17.8358 11.25 18.25C11.6642 18.6642 12.3358 18.6642 12.75 18.25L18.2929 12.7071C18.6834 12.3166 18.6834 11.6834 18.2929 11.2929L12.75 5.75C12.3358 5.33579 11.6642 5.33579 11.25 5.75C10.8358 6.16421 10.8358 6.83579 11.25 7.25L15.4343 11.4343C15.7467 11.7467 15.7467 12.2533 15.4343 12.5657Z" fill="black" />
								</svg>
							</span>
						 </a>
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
			cnpj: null,
			tipo: null,
				valor: null,
				email: null,
				jms: true

        }
    },
	methods: {
	

		addcnpj() {
			window.localStorage.setItem("cnpj", this.jms )
			window.location.href = "#/checkout_perfil"
				   },

		descartavel() {
			this.tipo = window.localStorage.setItem("tipo", this.tipo)
			this.valor = window.localStorage.setItem("valor", this.valor)
			this.email = window.localStorage.setItem("email", this.email)
		}
       

    },
	
}

