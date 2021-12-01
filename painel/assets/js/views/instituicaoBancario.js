import adm from "../../../../static/js/api/adm.js" 

export default {
    template:` 
	<div>

    <c-header></c-header>
    <c-aside></c-aside>

	<!--begin::Root-->
 <div class="d-flex flex-column flex-root">
	<!--begin::Page-->
	<div class="page d-flex flex-row flex-column-fluid">

		<!--begin::Wrapper-->
		<div class="wrapper d-flex flex-column flex-row-fluid" id="kt_wrapper">
		

			<!--begin::Content-->
			<div class="content d-flex flex-column flex-column-fluid" id="kt_content">
				<!--begin::Post-->
				<div class="post d-flex flex-column-fluid" id="kt_post">
					<!--begin::Container-->
					<div id="kt_content_container" class="container-xxl">
						<!--begin::Navbar-->
						<div class="card mb-5 mb-xl-10">
							<div class="card-body pt-5 pb-0">
						
										<!--begin::Navs-->
										<ul class="nav nav-stretch nav-line-tabs nav-line-tabs-2x border-transparent fs-5 fw-bolder">
										<!--begin::Nav item-->
												<li class="nav-item mt-2">
													<a class="nav-link text-active-primary ms-0 me-10 py-5 " href="#/add-instituicoes">Informação da Instituição</a>
												</li>
												<!--end::Nav item-->
												<!--begin::Nav item-->
												<li class="nav-item mt-2">
													<a class="nav-link text-active-primary ms-0 me-10 py-5 " href="#/endereco-instituicoes">Endereço </a>
												</li>
												<!--end::Nav item-->
											
										
											<li class="nav-item mt-2">
												<a class="nav-link text-active-primary ms-0 me-10 py-5 active" href="#/banco-instituicoes">Dados Bancario</a>
											</li>
											<li class="nav-item mt-2">
									<a class="nav-link text-active-primary ms-0 me-10 py-5" href="#/dominio-instituicoes">Domínio</a>
								</li>
											<!--end::Nav item-->
										</ul>
										<!--begin::Navs-->
							</div>
						</div>
						<!--end::Navbar-->
						<!--begin::Basic info-->
						<div class="card mb-5 mb-xl-10">
							<!--begin::Card header-->
							<div class="card-header border-0 cursor-pointer" role="button" data-bs-toggle="collapse" data-bs-target="#kt_account_profile_details" aria-expanded="true" aria-controls="kt_account_profile_details">
								<!--begin::Card title-->
								<div class="card-title m-0">
									<h3 class="fw-bolder m-0">Dados Bancario</h3>
								</div>
								<!--end::Card title-->
							</div>
							<!--begin::Card header-->
							<!--begin::Content-->
							<div id="kt_account_profile_details" >
								<!--begin::Form-->
								<form id="kt_account_profile_details_form" class="form">
									<!--begin::Card body-->
									<div class="card-body border-top p-9">
										<!--begin::Input group-->
									
										<!--end::Input group-->
										<!--begin::Input group-->
										<div class="row mb-6">
											<!--begin::Label-->
											<label class="col-lg-4 col-form-label required fw-bold fs-6">Código Banco</label>
											<!--end::Label-->
											<!--begin::Col-->
											<div class="col-lg-8 fv-row">
											<div class="input-group mb-3">
												<span class="input-group-text" id="basic-addon2">
													<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-shield-lock" viewBox="0 0 16 16">
														<path d="M5.338 1.59a61.44 61.44 0 0 0-2.837.856.481.481 0 0 0-.328.39c-.554 4.157.726 7.19 2.253 9.188a10.725 10.725 0 0 0 2.287 2.233c.346.244.652.42.893.533.12.057.218.095.293.118a.55.55 0 0 0 .101.025.615.615 0 0 0 .1-.025c.076-.023.174-.061.294-.118.24-.113.547-.29.893-.533a10.726 10.726 0 0 0 2.287-2.233c1.527-1.997 2.807-5.031 2.253-9.188a.48.48 0 0 0-.328-.39c-.651-.213-1.75-.56-2.837-.855C9.552 1.29 8.531 1.067 8 1.067c-.53 0-1.552.223-2.662.524zM5.072.56C6.157.265 7.31 0 8 0s1.843.265 2.928.56c1.11.3 2.229.655 2.887.87a1.54 1.54 0 0 1 1.044 1.262c.596 4.477-.787 7.795-2.465 9.99a11.775 11.775 0 0 1-2.517 2.453 7.159 7.159 0 0 1-1.048.625c-.28.132-.581.24-.829.24s-.548-.108-.829-.24a7.158 7.158 0 0 1-1.048-.625 11.777 11.777 0 0 1-2.517-2.453C1.928 10.487.545 7.169 1.141 2.692A1.54 1.54 0 0 1 2.185 1.43 62.456 62.456 0 0 1 5.072.56z"/>
														<path d="M9.5 6.5a1.5 1.5 0 0 1-1 1.415l.385 1.99a.5.5 0 0 1-.491.595h-.788a.5.5 0 0 1-.49-.595l.384-1.99a1.5 1.5 0 1 1 2-1.415z"/>
													  </svg>
												</span>
												<input type="text" name="codigo" class="form-control form-control-lg form-control-solid" placeholder="Código Banco" />
												
												</div>
											</div>
											<!--end::Col-->
										</div>
										<div class="row mb-6">
											<!--begin::Label-->
											<label class="col-lg-4 col-form-label required fw-bold fs-6">Agencia</label>
											<!--end::Label-->
											<!--begin::Col-->
											<div class="col-lg-8 fv-row">
												<input type="text" name="agencia" class="form-control form-control-lg form-control-solid" placeholder="Agencia " />
											</div>
											<!--end::Col-->
										</div>
										<!--end::Input group-->
										<!--begin::Input group-->
										<div class="row mb-6">
											<!--begin::Label-->
											<label class="col-lg-4 col-form-label fw-bold fs-6">
												<span class="required">Agencia Dígito</span>
											
											</label>
											<!--end::Label-->
											<!--begin::Col-->
											<div class="col-lg-8 fv-row">
												<input type="text" name="agenciaD" class="form-control form-control-lg form-control-solid" />
											</div>
											<!--end::Col-->
										</div>
										
										<div class="row mb-6">
											<!--begin::Label-->
											<label class="col-lg-4 col-form-label fw-bold fs-6">
												<span class="required">Conta</span>
											
											</label>
											<!--end::Label-->
											<!--begin::Col-->
											<div class="col-lg-8 fv-row">
												<input type="text" name="conta" class="form-control form-control-lg form-control-solid" />
											</div>
											<!--end::Col-->
										</div>
										<div class="row mb-6">
											<!--begin::Label-->
											<label class="col-lg-4 col-form-label fw-bold fs-6">
												<span class="required">Conta Dígito</span>
											
											</label>
											<!--end::Label-->
											<!--begin::Col-->
											<div class="col-lg-8 fv-row">
												<input type="text" name="cDigito" class="form-control form-control-lg form-control-solid" value="1" />
											</div>
											<!--end::Col-->
										</div>
										
										<div class="row mb-6">
											<!--begin::Label-->
											<label class="col-lg-4 col-form-label fw-bold fs-6">
												<span class="required">Tipo</span>
											
											</label>
											<!--end::Label-->
											<!--begin::Col-->
											<div class="col-lg-8 fv-row">
												<select class="form-select form-control form-control-lg form-control-solid" aria-label="Default select example">
													<option selected>seleciono o tipo de conta </option>
													<option value="Conta Corrente">Conta Corrente</option>
													<option value="Conta Poupança">Conta Poupança</option>
													<option value="Conta Corrente Conjunta">Conta Corrente Conjunta</option>
													<option value="Conta Poupança Conjunta">Conta Poupança Conjunta</option>
												 </select>
											
											</div>
											<!--end::Col-->
										</div>



										<div class="row mb-6">
											<!--begin::Label-->
											<label class="col-lg-4 col-form-label fw-bold fs-6">
												<span class="required">CNPJ</span>
											
											</label>
											<!--end::Label-->
											<!--begin::Col-->
											<div class="col-lg-8 fv-row">
												<input type="text" name="CNPJ" class="form-control form-control-lg form-control-solid" />
											</div>
											<!--end::Col-->
										</div>

										<div class="row mb-6">
											<!--begin::Label-->
											<label class="col-lg-4 col-form-label fw-bold fs-6">
												<span class="required">Nome</span>
											
											</label>
											<!--end::Label-->
											<!--begin::Col-->
											<div class="col-lg-8 fv-row">
												<input type="text" name="nome" class="form-control form-control-lg form-control-solid" />
											</div>
											<!--end::Col-->
										</div>
										
									</div>
									<!--end::Card body-->
								
									<!--begin::Actions-->
									<div class="card-footer d-flex justify-content-end py-6 px-9">
										<button  type="submit" class="btn btn-primary" id="kt_account_profile_details_submit">SALVAR</button>
									</div>
									<!--end::Actions-->
								</form>
								<!--end::Form-->
							</div>
							<!--end::Content-->
						</div>
						<!--end::Basic info-->
				
					
					</div>
					<!--end::Container-->
				</div>
				<!--end::Post-->
			</div>
			<!--end::Content-->

		</div>
	</div>
</div>	
		<!--end::Root-->

		<c-footer/>
	</div>
    `,


     data: function () {
		return {
			gravatar: '../painel/assets/image/gravatar.png',
			nome: null,
            token: null,
			email: null,
			cpf: null,
			telefone: null,
            error: null
        }
    },
	methods: {
	
      async alterarAdm() {
			this.error = null
			
			localStorage.removeItem('token')
            let res = await adm.atualizar_adm(
                this.nome,
                this.telefone,
            )
            if (!res.next) {
				console.log(res)
                this.error = res.message
                return null
            }
            localStorage.setItem('token', res.token)
            window.location.href = `#/dash`
        },
        updateForm(event) {
            this[event.name] = event.value
        },

		async listar() {
            let res = await adm.ListarPerfil( localStorage.getItem('token') )
			return res
        },
    },
	async mounted() {
        // this.user = localStorage.getItem('user')

		let dados = (await this.listar()).dados

		console.log(dados)
		this.nome = dados.nome
		this.email = dados.email
		this.cpf = dados.cpf
		this.telefone = dados.telefone
    },

	
}

