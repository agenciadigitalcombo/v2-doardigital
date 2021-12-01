import adm from "../../../../static/js/api/adm.js" 

export default {
    template: `
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
													<a class="nav-link text-active-primary ms-0 me-10 py-5 active" href="#/endereco-instituicoes">Endereço </a>
												</li>
												<!--end::Nav item-->
											
										
											<li class="nav-item mt-2">
												<a class="nav-link text-active-primary ms-0 me-10 py-5" href="#/banco-instituicoes">Dados Bancario</a>
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
									<h3 class="fw-bolder m-0">Endereço</h3>
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
											<label class="col-lg-4 col-form-label required fw-bold fs-6">CEP</label>
											<!--end::Label-->
											<!--begin::Col-->
											<div class="col-lg-8 fv-row">
											<div class="input-group mb-3">
												<input type="text" name="CEP" class="form-control form-control-lg form-control-solid" placeholder="CEP" />
												<span class="input-group-text" id="basic-addon2">
													<a href="http://">
														<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
														<path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
													  </svg>
													</a>
													
												</span>
												</div>
											</div>
											<!--end::Col-->
										</div>
										<div class="row mb-6">
											<!--begin::Label-->
											<label class="col-lg-4 col-form-label required fw-bold fs-6">Rua/Avenida Nº</label>
											<!--end::Label-->
											<!--begin::Col-->
											<div class="col-lg-8 fv-row">
												<input type="text" name="local" class="form-control form-control-lg form-control-solid" placeholder="Localização" />
											</div>
											<!--end::Col-->
										</div>
										<!--end::Input group-->
										<!--begin::Input group-->
										<div class="row mb-6">
											<!--begin::Label-->
											<label class="col-lg-4 col-form-label fw-bold fs-6">
												<span class="required">Complemento</span>
											
											</label>
											<!--end::Label-->
											<!--begin::Col-->
											<div class="col-lg-8 fv-row">
												<input type="text" name="Complemento" class="form-control form-control-lg form-control-solid" />
											</div>
											<!--end::Col-->
										</div>
										
										<div class="row mb-6">
											<!--begin::Label-->
											<label class="col-lg-4 col-form-label fw-bold fs-6">
												<span class="required">Bairro</span>
											
											</label>
											<!--end::Label-->
											<!--begin::Col-->
											<div class="col-lg-8 fv-row">
												<input type="text" name="Bairro" class="form-control form-control-lg form-control-solid" />
											</div>
											<!--end::Col-->
										</div>
										<div class="row mb-6">
											<!--begin::Label-->
											<label class="col-lg-4 col-form-label fw-bold fs-6">
												<span class="required">Cidade</span>
											
											</label>
											<!--end::Label-->
											<!--begin::Col-->
											<div class="col-lg-8 fv-row">
												<input type="text" name="cidade" class="form-control form-control-lg form-control-solid" />
											</div>
											<!--end::Col-->
										</div>
										
										<div class="row mb-6">
											<!--begin::Label-->
											<label class="col-lg-4 col-form-label fw-bold fs-6">
												<span class="required">Estado</span>
											
											</label>
											<!--end::Label-->
											<!--begin::Col-->
											<div class="col-lg-8 fv-row">
												<input type="text" name="estado" class="form-control form-control-lg form-control-solid" />
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

