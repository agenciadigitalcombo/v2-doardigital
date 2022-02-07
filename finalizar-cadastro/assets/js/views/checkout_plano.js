import adm from "../../../../../static/js/api/adm.js"
const { required, minLength, maxLength } = window.validators

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
					<div class="stepper-item completed" data-kt-stepper-element="nav"> 
						<div class="stepper-line w-40px"></div> 
						<div class="stepper-icon w-40px h-40px">
							<i class="stepper-check fas fa-check"></i>
							<span class="stepper-number">2</span>
						</div> 
						<div class="stepper-label">
							<h3 class="stepper-title">Completar Perfil</h3>
						</div> 
					</div> 
					<div class="stepper-item completed" data-kt-stepper-element="nav"> 
						<div class="stepper-line w-40px"></div> 
						<div class="stepper-icon w-40px h-40px">
							<i class="stepper-check fas fa-check"></i>
							<span class="stepper-number">3</span> </div>
						<div class="stepper-label">
							<h3 class="stepper-title">Endereço</h3>
						</div> 
					</div> 
					<div class="stepper-item current" data-kt-stepper-element="nav"> 
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
				<form @submit.prevent="transacaoRecorrencia" class="my-auto pb-5" novalidate="novalidate" id="kt_create_account_form">
				
					<div class="current" data-kt-stepper-element="content"> 
						<div class="w-100">
							 
							<div class="pb-10 pb-lg-15">
								 
								<h2 class="fw-bolder text-dark">Selecionar Plano</h2> 
								<div class="text-muted fw-bold fs-6">If you need more info, please check out
								<a href="#" class="text-primary fw-bolder">Help Page</a>.</div>
							 
							</div>

												 
							<div class="row fv-row mb-7 "> 
							<div class="col-6">
							<label class="d-flex align-items-center fs-6 fw-bold form-label mb-2">
									<span class="required">Instituições</span>
									<i class="fas fa-exclamation-circle ms-2 fs-7" data-bs-toggle="tooltip" title="Specify a card holder's name"></i>
								</label>
								<select name="card_expiry_month" class="form-select form-select-solid" data-control="select2" data-hide-search="true" placeholder="Month">
									<option disabled selected hidden>Qual a Plano da Instituicao</option>
									<option value="1">1</option>
									<option value="2">2</option>
									<option value="3">3</option>
									<option value="4">4</option>
								
								</select>
							</div> 
							<div class="col-6">
							<label class="d-flex align-items-center fs-6 fw-bold form-label mb-2">
									<span class="required">Disparos Whatsapp</span>
									<i class="fas fa-exclamation-circle ms-2 fs-7" data-bs-toggle="tooltip" title="Specify a card holder's name"></i>
								</label>
								<select name="card_expiry_year" class="form-select form-select-solid" data-control="select2" data-hide-search="true" data-placeholder="Year">
									<option disabled selected hidden>Selecione o disparo</option>
								    <option value="2022">Nenhum Disparo</option>
                                        <option value="2023">1 Mil Disparos</option>
                                        <option value="2024">2024</option>
                                        <option value="2025">2025</option>
                                        <option value="2025">2025</option>
								</select>
							</div> 
						</div> 

							 <div class="d-flex flex-column mb-7 fv-row">
								
								<label class="d-flex align-items-center fs-6 fw-bold form-label mb-2">
									<span class="required">Name On Card</span>
									<i class="fas fa-exclamation-circle ms-2 fs-7" data-bs-toggle="tooltip" title="Specify a card holder's name"></i>
								</label>
								
								<input type="text" class="form-control form-control-solid" placeholder="" name="card_name" v-model="cart_nome"/>
							</div> 
							<div class="d-flex flex-column mb-7 fv-row">
								
								<label class="required fs-6 fw-bold form-label mb-2">Card Number</label>
							 <div class="position-relative">
								 <input type="text" class="form-control form-control-solid" placeholder="Enter card number" name="card_number" v-model="cart_numero" />
									 <div class="position-absolute translate-middle-y top-50 end-0 me-5">
										<img src="assets/media/svg/card-logos/visa.svg" alt="" class="h-25px" />
										<img src="assets/media/svg/card-logos/mastercard.svg" alt="" class="h-25px" />
										<img src="assets/media/svg/card-logos/american-express.svg" alt="" class="h-25px" />
									</div> 
								</div> 
							</div> 
							<div class="row mb-10"> 
								<div class="col-md-8 fv-row">
									
									<label class="required fs-6 fw-bold form-label mb-2">Expiration Date</label>
									 
									<div class="row fv-row"> 
										<div class="col-6">
											<select name="card_expiry_month" class="form-select form-select-solid" data-control="select2" data-hide-search="true" placeholder="Month">
												<option disabled selected hidden>Mês</option>
												<option value="1">1</option>
												<option value="2">2</option>
												<option value="3">3</option>
												<option value="4">4</option>
												<option value="5">5</option>
												<option value="6">6</option>
												<option value="7">7</option>
												<option value="8">8</option>
												<option value="9">9</option>
												<option value="10">10</option>
												<option value="11">11</option>
												<option value="12">12</option>
											</select>
										</div> 
										<div class="col-6">
											<select name="card_expiry_year" class="form-select form-select-solid" data-control="select2" data-hide-search="true" data-placeholder="Year">
												<option disabled selected hidden>Ano</option>
												<option value="2021">2021</option>
												<option value="2022">2022</option>
												<option value="2023">2023</option>
												<option value="2024">2024</option>
												<option value="2025">2025</option>
												<option value="2026">2026</option>
												<option value="2027">2027</option>
												<option value="2028">2028</option>
												<option value="2029">2029</option>
												<option value="2030">2030</option>
												<option value="2031">2031</option>
											</select>
										</div> 
									</div> 
								</div> 
								<div class="col-md-4 fv-row">
									
									<label class="d-flex align-items-center fs-6 fw-bold form-label mb-2">
										<span class="required">CVV</span>
										<i class="fas fa-exclamation-circle ms-2 fs-7" data-bs-toggle="tooltip" title="Enter a card CVV code"></i>
									</label>
									 
									<div class="position-relative"> 
										<input type="text" class="form-control form-control-solid" minlength="3" maxlength="4" placeholder="CVV" name="card_cvv" v-model="cart_cvv" />
										 
										<div class="position-absolute translate-middle-y top-50 end-0 me-3">
											 <span class="svg-icon svg-icon-2hx">
												<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
													<path d="M22 7H2V11H22V7Z" fill="black" />
													<path opacity="0.3" d="M21 19H3C2.4 19 2 18.6 2 18V6C2 5.4 2.4 5 3 5H21C21.6 5 22 5.4 22 6V18C22 18.6 21.6 19 21 19ZM14 14C14 13.4 13.6 13 13 13H5C4.4 13 4 13.4 4 14C4 14.6 4.4 15 5 15H13C13.6 15 14 14.6 14 14ZM16 15.5C16 16.3 16.7 17 17.5 17H18.5C19.3 17 20 16.3 20 15.5C20 14.7 19.3 14 18.5 14H17.5C16.7 14 16 14.7 16 15.5Z" fill="black" />
												</svg>
											</span> 
										</div> 
									</div> 
								</div> 
							</div> 
							<div class="d-flex flex-stack">
								
								<div class="me-5">
									<label class="fs-6 fw-bold form-label">Save Card for further billing?</label>
									<div class="fs-7 fw-bold text-muted">If you need more info, please check budget planning</div>
								</div> 
								<label class="form-check form-switch form-check-custom form-check-solid">
									<input class="form-check-input" type="checkbox" value="1" checked="checked" />
									<span class="form-check-label fw-bold text-muted">Save Card</span>
								</label> 
							</div>
						
						</div> 
					</div> 


					<div class="d-flex flex-stack pt-15">
						<div class="mr-2">
							<a href="#/checkout_endereco" type="button" class="btn btn-lg btn-light-primary me-3" >
							 <span class="svg-icon svg-icon-4 me-1">
								<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
									<rect opacity="0.5" x="6" y="11" width="13" height="2" rx="1" fill="black" />
									<path d="M8.56569 11.4343L12.75 7.25C13.1642 6.83579 13.1642 6.16421 12.75 5.75C12.3358 5.33579 11.6642 5.33579 11.25 5.75L5.70711 11.2929C5.31658 11.6834 5.31658 12.3166 5.70711 12.7071L11.25 18.25C11.6642 18.6642 12.3358 18.6642 12.75 18.25C13.1642 17.8358 13.1642 17.1642 12.75 16.75L8.56569 12.5657C8.25327 12.2533 8.25327 11.7467 8.56569 11.4343Z" fill="black" />
								</svg>
							</span>
						 Anterior</a>
						</div>
						<div>
							<button type="submit" class="btn btn-lg btn-primary"  >
								<span class="indicator-label">Finalizar Cadastro
								 <span class="svg-icon svg-icon-4 ms-2">
									<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
										<rect opacity="0.5" x="18" y="13" width="13" height="2" rx="1" transform="rotate(-180 18 13)" fill="black" />
										<path d="M15.4343 12.5657L11.25 16.75C10.8358 17.1642 10.8358 17.8358 11.25 18.25C11.6642 18.6642 12.3358 18.6642 12.75 18.25L18.2929 12.7071C18.6834 12.3166 18.6834 11.6834 18.2929 11.2929L12.75 5.75C12.3358 5.33579 11.6642 5.33579 11.25 5.75C10.8358 6.16421 10.8358 6.83579 11.25 7.25L15.4343 11.4343C15.7467 11.7467 15.7467 12.2533 15.4343 12.5657Z" fill="black" />
									</svg>
								</span>
							 </span>
								<span class="indicator-progress">Aguarda...
								<span class="spinner-border spinner-border-sm align-middle ms-2"></span></span>
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
				token: null,
				plano_token: "709362", 
				amount: "122222",
				cart_nome: null,
				cart_numero: null,
				cart_cvv: null,
				cart_validade: "12/23",
        }
    },

	methods: {
		
		async transacaoRecorrencia() { 
			this.error = null
			let res = await adm.recorrenciaDigital(
				this.token,
				this.plano_token,
				this.amount,
				this.cart_nome,
				this.cart_numero,
				this.cart_cvv,
				this.cart_validade, 

			)
			if (!res.next) {
				// this.error = res.message
				this.msg = res.message
				return null
			}

			 
		},

		descartavel() {
			window.location.href = "/painel/index.html#/perfil-editar";
		}
       

    },
	

	
}

