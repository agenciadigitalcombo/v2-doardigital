import adm from "../../../../../static/js/api/adm.js"

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
													<input v-model="nome_fantasia" type="text" 	name="text_input" 
														class="form-control form-control-lg form-control-solid"
														placeholder="Nome Fantasia" />
												</div> 
											</div>

											<div class="row mb-6"> 
												<label class="col-lg-4 col-form-label required fw-bold fs-6">Razão
													Social</label> 
												<div class="col-lg-8 fv-row">
													<input v-model="razao_social" type="text" name="text_input" placeholder="adicione a Razão Social"
														class="form-control form-control-lg form-control-solid" />
												</div> 
											</div> 
											<div class="row mb-6"> 
												<label class="col-lg-4 col-form-label fw-bold fs-6">
													<span class="required">CPF/CNPJ</span>
												</label> 
												<div class="col-lg-8 fv-row">
													<input v-model="cnpj" type="tel" name="text_input"  v-mask="'##.###.###/####-##'" placeholder="00.000.000/0000-00"
														class="form-control form-control-lg form-control-solid" />
												</div> 
											</div> 
											<div class="row mb-6"> 
												<label class="col-lg-4 col-form-label fw-bold fs-6">
													<span class="required">Telefone</span>

												</label> 
												<div class="col-lg-8 fv-row">
													<input v-model="telefone" type="tel" name="Telefone" v-mask="'(###) #####-####'" placeholder="(41) 99999-9999"
														class="form-control form-control-lg form-control-solid" />
												</div> 
											</div>
											<div class="row mb-6"> 
												<label class="col-lg-4 col-form-label fw-bold fs-6">
													<span class="required">E-mail</span>

												</label> 
												<div class="col-lg-8 fv-row">
													<input v-model="email" type="email" name="text_input" placeholder="doardigital@gmail.com"
														class="form-control form-control-lg form-control-solid" />
												</div> 
											</div>

											<div class="row mb-6"> 
												<label class="col-lg-4 col-form-label fw-bold fs-6">
													<span class="required">Cor</span>

												</label> 
												<div class="col-lg-8 fv-row">
													<input v-model="cor" type="text" name="cor"
														class="form-control form-control-lg form-control-solid" />
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
														<input v-model="sub_domain" type="text" name="text_input"
															class="form-control form-control-lg " />
														<span class="input-group-text"
															id="basic-addon2">.doardigital.com.br</span>
													</div> 
												</div>
										 
											</div> 
										</div> 
										<div class="card-footer d-flex justify-content-end py-6 px-9">
											

												<button  type="submit" class="btn btn-primary">
												<span class="indicator-label">SALVAR</span>
												<span class="indicator-progress">Por favor, aguarde...
												<span class="spinner-border spinner-border-sm align-middle ms-2"></span></span>
												</button>

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
			gravatar: '../painel/assets/image/gravatar.png',
			nome_fantasia: null,
			razao_social: null,
			sub_domain: null,
			email: null,
			cor: null,
			
			logo: null,
			cnpj: null,
			telefone: null,
			jms: false,
		}
	},

	methods: {
		async addInstituicao() {
			this.error = null

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
			console.log("cadastrado")
		},


	},
	async mounted() {
	

	},


}

