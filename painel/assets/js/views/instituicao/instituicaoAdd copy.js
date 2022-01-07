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
				<div class="content d-flex flex-column flex-column-fluid" >
				 
					<div class="post d-flex flex-column-fluid" > 
						<div class="container-xxl"> 
							<div class="card mb-5 mb-xl-10">
								<div class="card-body pt-5 pb-0"> 
									<ul
										class="nav nav-stretch nav-line-tabs nav-line-tabs-2x border-transparent fs-5 fw-bolder">
								
										<li class="nav-item mt-2">
											<a class="nav-link text-active-primary ms-0 me-10 py-5 active"
												href="#/add-instituicoes">Informação da Instituição</a>
										</li> 
										<li class="nav-item mt-2">
											<a class="nav-link text-active-primary ms-0 me-10 py-5 "
												href="#/endereco-instituicoes">Endereço </a>
										</li> 
										<li class="nav-item mt-2">
											<a class="nav-link text-active-primary ms-0 me-10 py-5"
												href="#/banco-instituicoes">Dados Bancario</a>
										</li>

										<li class="nav-item mt-2">
												<a class="nav-link text-active-primary ms-0 me-10 py-5 " href="#/dominio-instituicoes">Domínio</a>
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
												<label class="col-lg-4 col-form-label fw-bold fs-6">
													<span class="required">CPF/CNPJ</span>
												</label> 
												<div class="col-lg-8 fv-row">
													<input type="tel"  v-mask="'##.###.###/####-##'" placeholder="00.000.000/0000-00"
														class="form-control form-control-lg form-control-solid" required  v-model.trin="$v.cnpj.$model"
																:class=" {'is-invalid':$v.cnpj.$error, 'is-valid':!$v.cnpj.$invalid }"/>
												</div> 
											</div> 
											<div class="row mb-6"> 
												<label class="col-lg-4 col-form-label fw-bold fs-6">
													<span class="required">Telefone</span>

												</label> 
												<div class="col-lg-8 fv-row">
													<input type="tel" name="Telefone" v-mask="'(###) #####-####'" placeholder="(41) 99999-9999"
														class="form-control form-control-lg form-control-solid" required  v-model.trin="$v.telefone.$model"
																:class=" {'is-invalid':$v.telefone.$error, 'is-valid':!$v.telefone.$invalid }"/>
												</div> 
											</div>
											<div class="row mb-6"> 
												<label class="col-lg-4 col-form-label fw-bold fs-6">
													<span class="required">E-mail</span>

												</label> 
												<div class="col-lg-8 fv-row">
													<input type="email" placeholder="doardigital@gmail.com"
														class="form-control form-control-lg form-control-solid" required  v-model.trin="$v.email.$model"
																:class=" {'is-invalid':$v.email.$error, 'is-valid':!$v.email.$invalid }"/>
												</div> 
											</div>

											<div class="row mb-6"> 
												<label class="col-lg-4 col-form-label fw-bold fs-6">
													<span class="required">Cor</span>

												</label> 
												<div class="col-lg-8 fv-row">
													<input type="text" name="cor"
														class="form-control form-control-lg form-control-solid" required  v-model.trin="$v.cor.$model"
																:class=" {'is-invalid':$v.cor.$error, 'is-valid':!$v.cor.$invalid }"/>
												</div> 
											</div>
										</div> 
										<div class="card  mb-xl-5"> 
											<div class="card-header border-0 cursor-pointer" role="button"
												data-bs-toggle="collapse" data-bs-target="#kt_account_profile_details"
												aria-expanded="true" aria-controls="kt_account_profile_details">
											 
												<div class="card-title m-0">
													<h3 class="fw-bolder m-0">Subdomínio</h3>
												</div> 
											</div> 
 
											<div
												class="notice d-flex bg-light-primary rounded border-primary border border-dashed flex-stack h-xl-100 m-8 -10 p-6">
										 
												<div class="d-flex flex-stack flex-grow-1 flex-wrap flex-md-nowrap">
												 
													<div class="input-group mb-3">
														<input type="text" class="form-control form-control-lg " required  v-model.trin="$v.sub_domain.$model"
														:class=" {'is-invalid':$v.sub_domain.$error, 'is-valid':!$v.sub_domain.$invalid }"/>
														<span class="input-group-text" id="basic-addon2">.doardigital.com.br</span>
													</div> 
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

									<div >
										
									ivalidoasddddddfaaefwtfg4q3gf4q3g4gt34tg
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
			sub_domain: null,
			email: null,
			cor: null,
			logo: null,
			cnpj: null,
			telefone: null,
			msg: null,
			submitStatus: null
		}
	},


	validations: {
		nome_fantasia: {
			required,
			minLength: minLength(2)
		},
		razao_social: {
			required,
			minLength: minLength(4)
		},

		sub_domain: {
			required,
			minLength: minLength(2)
		},
		email: {
			required,
			minLength: minLength(4)
		},
		cnpj: {
			required,
			minLength: minLength(2)
		},
		telefone: {
			required,
			minLength: minLength(2)
		},
		cor: {
			required,
			minLength: minLength(2)
		},
		logo: {
			required,
			minLength: minLength(4)
		}
	},

	methods: {

		async addInstituicao() {
			this.error = null
			this.$v.$touch()
			if (this.$v.$invalid) {
				this.submitStatus = 'ERROR'
			} else {
				let res = await adm.cadastrarInstituicao(
					this.nome_fantasia,
					this.razao_social,
					this.sub_domain,
					this.email,
					this.cor,
					this.logo,
					this.cnpj,
					this.telefone,
					this.token,
				)
				if (!res.next) {
					console.log(res)
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



	},
	async mounted() {


	},


}

