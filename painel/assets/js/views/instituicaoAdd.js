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
										<a class="nav-link text-active-primary ms-0 me-10 py-5 active" href="#/add-instituicoes">Informação da Instituição</a>
									</li>
									<!--end::Nav item-->
									<!--begin::Nav item-->
									<li class="nav-item mt-2">
										<a class="nav-link text-active-primary ms-0 me-10 py-5 " href="#/endereco-instituicoes">Endereço </a>
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
									<h3 class="fw-bolder m-0">Informação da Instituição</h3>
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
											<label class="col-lg-4 col-form-label required fw-bold fs-6">Nome Fantasia</label>
											<!--end::Label-->
											<!--begin::Col-->
											<div class="col-lg-8 fv-row">
												<input type="text" name="Fantasia" class="form-control form-control-lg form-control-solid" placeholder="Nome Fantasia"  />
											</div>
											<!--end::Col-->
										</div>
										<div class="row mb-6">
											<!--begin::Label-->
											<label class="col-lg-4 col-form-label required fw-bold fs-6">Razão Social</label>
											<!--end::Label-->
											<!--begin::Col-->
											<div class="col-lg-8 fv-row">
												<input type="text" name="social" class="form-control form-control-lg form-control-solid"  />
											</div>
											<!--end::Col-->
										</div>
										<!--end::Input group-->
										<!--begin::Input group-->
										<div class="row mb-6">
											<!--begin::Label-->
											<label class="col-lg-4 col-form-label fw-bold fs-6">
												<span class="required">CPF/CNPJ</span>
												
											</label>
											<!--end::Label-->
											<!--begin::Col-->
											<div class="col-lg-8 fv-row">
												<input type="tel" name="cpf" class="form-control form-control-lg form-control-solid" />
											</div>
											<!--end::Col-->
										</div>
										
										<div class="row mb-6">
											<!--begin::Label-->
											<label class="col-lg-4 col-form-label fw-bold fs-6">
												<span class="required">Telefone</span>
												
											</label>
											<!--end::Label-->
											<!--begin::Col-->
											<div class="col-lg-8 fv-row">
												<input type="tel" name="Telefone" class="form-control form-control-lg form-control-solid" />
											</div>
											<!--end::Col-->
										</div>
										<div class="row mb-6">
											<!--begin::Label-->
											<label class="col-lg-4 col-form-label fw-bold fs-6">
												<span class="required">E-mail</span>
												
											</label>
											<!--end::Label-->
											<!--begin::Col-->
											<div class="col-lg-8 fv-row">
												<input type="email" name="email" class="form-control form-control-lg form-control-solid" />
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

