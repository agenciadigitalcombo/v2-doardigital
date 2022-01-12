import adm from "../../../../../static/js/api/adm.js"
const { required, minLength } = window.validators

export default {
	template: `
	<div>

    <c-header></c-header>
    <c-aside></c-aside>
	<!--begin::Root-->
	<div class="d-flex flex-column flex-root"> 
		<div class="page d-flex flex-row flex-column-fluid">
 
			<div class="wrapper d-flex flex-column flex-row-fluid" > 
				<div class="content d-flex flex-column flex-column-fluid" >
				 
					<div class="post d-flex flex-column-fluid" > 
						<div class="container-xxl"> 
							<div class="card mb-5 mb-xl-10">
								<div class="card-body pt-5 pb-0"> 
									<ul
										class="nav nav-stretch nav-line-tabs nav-line-tabs-2x border-transparent fs-5 fw-bolder">
								
										<li class="nav-item mt-2">
											<a class="nav-link text-active-primary ms-0 me-10 py-5 active" >Informação da Instituição</a>
										</li> 
										<li class="nav-item mt-2">
											<a class="nav-link text-active-primary ms-0 me-10 py-5 " >Endereço </a>
										</li> 
										<li class="nav-item mt-2">
											<a class="nav-link text-active-primary ms-0 me-10 py-5" >Dados Bancario</a>
										</li>
  
									</ul> 
								</div>
							</div> 
							<div class="card mb-5 mb-xl-10"> 
								<div class="card-header border-0 cursor-pointer" > 
									<div class="card-title m-0">
										<h3 class="fw-bolder m-0">Informação da Instituição</h3>
									</div> 
								</div> 
							
								<form class="form" @submit.prevent="addInstituicao" novalidate="novalidate">
										<div class="card-body border-top p-9"> 
											<div class="row mb-6"> 
												<label class="col-lg-4 col-form-label required fw-bold fs-6">Nome
													Fantasia</label> 
												<div class="col-lg-8 fv-row">
													<input type="text" placeholder="Nome Fantasia"
														class="form-control form-control-lg form-control-solid" required  v-model.trin="$v.nome_fantasia.$model"
																:class=" {'is-invalid':$v.nome_fantasia.$error, 'is-valid':!$v.nome_fantasia.$invalid }"/>
												</div> 
		
												</div>

											<div class="row mb-6"> 
												<label class="col-lg-4 col-form-label required fw-bold fs-6">Razão
													Social</label> 
												<div class="col-lg-8 fv-row">
													<input type="text" placeholder="adicione a Razão Social"
														class="form-control form-control-lg form-control-solid" required  v-model.trin="$v.razao_social.$model"
														:class=" {'is-invalid':$v.razao_social.$error, 'is-valid':!$v.razao_social.$invalid }"/>
												</div> 
											</div> 
											
											<div class="row mb-6"> 
												<div class="col-lg-4 col-form-label fw-bold fs-6">
												<label class="form-check-label" for="kt_docs_formvalidation_radio_option_1">
													<div class="fw-bold text-gray-800">CPF</div>
												</label>
												<input checked  @click="jms = true"  class="form-check-input me-3" name="radio_input" type="radio" value="1" />
													
													<label class="form-check-label" for="kt_docs_formvalidation_radio_option_1">
														<div class="fw-bold text-gray-800">CNPJ</div>
													</label>
														<input  @click="jms = false"  class="form-check-input me-3" name="radio_input" type="radio" value="1" />
												</div>

												<div class="col-lg-8 fv-row" v-if="jms">
													<input type="tel"  v-mask="'###.###.###-##'" placeholder="000.000.000-00"
														class="form-control form-control-lg form-control-solid" required v-model.trin="$v.cnpj.$model"
														:class=" {'is-invalid':$v.cnpj.$error, 'is-valid':!$v.cnpj.$invalid }"/>
												</div> 

												<div class="col-lg-8 fv-row" v-else>
												<input type="tel" v-mask="'##.###.###/####-##'" placeholder="00.000.000/0000-00"
													class="form-control form-control-lg form-control-solid" required v-model.trin="$v.cnpj.$model"
													:class=" {'is-invalid':$v.cnpj.$error, 'is-valid':!$v.cnpj.$invalid }"/>
											</div> 

											</div> 
											<div class="row mb-6"> 
												<label class="col-lg-4 col-form-label fw-bold fs-6">
													<span class="required">Telefone</span>

												</label> 
												<div class="col-lg-8 fv-row">
													<input type="tel" name="Telefone" v-mask="'(###) #####-####'" placeholder="(41) 99999-9999"
														class="form-control form-control-lg form-control-solid" required v-model.trin="$v.telefone.$model"
														:class=" {'is-invalid':$v.telefone.$error, 'is-valid':!$v.telefone.$invalid }"/>
												</div> 
											</div>
											<div class="row mb-6"> 
												<label class="col-lg-4 col-form-label fw-bold fs-6">
													<span class="required">E-mail</span>

												</label> 
												<div class="col-lg-8 fv-row">
													<input type="email" placeholder="doardigital@gmail.com"
														class="form-control form-control-lg form-control-solid" required v-model.trin="$v.email.$model"
														:class=" {'is-invalid':$v.email.$error, 'is-valid':!$v.email.$invalid }"/>
												</div> 
											</div>

										</div> 
										<div class="card  mb-xl-5"> 
											<div class="card-header border-0 cursor-pointer">
											 
												<div class="card-title m-0">
													<h3 class="fw-bolder m-0">Subdomínio</h3>
												</div> 
											</div> 
 
											<div
												class="notice d-flex bg-light-primary rounded border-primary border border-dashed flex-stack h-xl-100 m-8 -10 p-6">
										 
												<div class="d-flex flex-stack flex-grow-1 flex-wrap flex-md-nowrap">
												 
													<div class="input-group mb-3">
														<input type="text" class="form-control form-control-lg " required v-on:blur="validDomain"
														 v-model.trin="$v.subdomaim.$model" :class=" {'is-invalid':$v.subdomaim.$error, 'is-valid':!$v.subdomaim.$invalid }"/>
														<span class="input-group-text" id="basic-addon2">.doardigital.com.br</span>
													</div> 
												</div>
											</div> 
										</div> 
	
										<div v-if="jms===true"> 
										<c-mensagem :msg="msg" ></c-mensagem>
									  </div>
									  <div v-else> 
										<c-mensagem :error="error" ></c-mensagem>
									  </div>


										<div class="card-footer d-flex justify-content-end py-6 px-9">
											<button class="btn btn-primary"" type=" submit"
												:disabled="submitStatus === 'PENDING'">SALVAR!</button>
										
										</div>
										<div class=" d-flex justify-content-end py-2 px-9">
										<p class="typo__p" v-if="submitStatus === 'OK'"> 
										</p>
										<p class="typo__p" v-if="submitStatus === 'ERROR'">
										Por favor, preencha o formulário corretamente.</p>
										<p class="typo__p" v-if="submitStatus === 'PENDING'">Salvando...
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
	<!--end::Root-->

		<c-footer/>
	</div>
    `,

	data: function () {
		return {
			token: null,
			nome_fantasia: null,
			razao_social: null,
			subdomaim: null,
			email: null,
			cnpj: null,
			telefone: null,
			msg: null,
			error: null,
			submitStatus: null,
			jms: true,
		}
	},


	validations: {
		nome_fantasia: {
			required,
			minLength: minLength(2)
		},
		razao_social: {
			required,
			minLength: minLength(2)
		},
		cnpj: {
			required,
			minLength: minLength(2)
		},
		telefone: {
			required,
			minLength: minLength(2)
		},
		email: {
			required,
			minLength: minLength(2)
		},
		subdomaim: {
			required,
			minLength: minLength(2)
		},
	},

	methods: {

		async validDomain() {
			this.error = null
			let res = await adm.validarDomain(this.subdomaim)
			if (!res.next) {
				// this.next = res.next
				this.jms= res.next,
				this.error = res.message
				return null
			}
			// this.next = res.next
			this.jms= res.next,
			this.msg = res.message
			return res
		},



		async listar() {

		},

		async addInstituicao() {
			this.error = null
			this.$v.$touch()
			if (this.$v.$invalid) {
				this.submitStatus = 'ERROR'
			}else if (this.jms === false) {
				this.error = "Porfavor adicione um subdominio valido "
			  } else {

				let res = await adm.cadastrarInstituicao(
					this.nome_fantasia,
					this.razao_social,
					this.subdomaim,
					this.email,
					this.cnpj,
					this.telefone,
					this.token,
				)
				if (!res.next) {
					console.log(res)
					this.error = res.message
					return null
				}

				globalThis._subdomaim =  this.subdomaim  

				this.submitStatus = 'PENDING'
				setTimeout(() => {
					this.submitStatus = 'OK' 
		        	window.location.href = "#/endereco-instituicoes"
				}, 500)
			}

		},
	},
	// async mounted() {
	// 	this.instituicao_id = globalThis._planos.id
	// 	this.nome = globalThis._planos.nome
	// }, 

}

