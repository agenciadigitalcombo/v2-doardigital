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
									<ul
										class="nav nav-stretch nav-line-tabs nav-line-tabs-2x border-transparent fs-5 fw-bolder">
										<!--begin::Nav item-->
										<li class="nav-item mt-2">
											<a class="nav-link text-active-primary ms-0 me-10 py-5 "
												href="#/add-instituicoes">Informação da Instituição</a>
										</li>
										<!--end::Nav item-->
										<!--begin::Nav item-->
										<li class="nav-item mt-2">
											<a class="nav-link text-active-primary ms-0 me-10 py-5 "
												href="#/endereco-instituicoes">Endereço </a>
										</li>
										<!--end::Nav item-->


										<li class="nav-item mt-2">
											<a class="nav-link text-active-primary ms-0 me-10 py-5"
												href="#/banco-instituicoes">Dados Bancario</a>
										</li>
										<li class="nav-item mt-2">
											<a class="nav-link text-active-primary ms-0 me-10 py-5 active"
												href="#/dominio-instituicoes">Domínio</a>
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
								<div class="card-header border-0 cursor-pointer" role="button" data-bs-toggle="collapse"
									data-bs-target="#kt_account_profile_details" aria-expanded="true"
									aria-controls="kt_account_profile_details">
									<!--begin::Card title-->
									<div class="card-title m-0">
										<h3 class="fw-bolder m-0">Subdomínio</h3>
									</div>
									<!--end::Card title-->
								</div>
								<!--begin::Card header-->
								<!--begin::Content-->
								<div id="kt_account_profile_details">
									<!--begin::Form-->
									<form id="kt_account_profile_details_form" class="form">
										<!--begin::Notice-->
										<div
											class="notice d-flex bg-light-primary rounded border-primary border border-dashed flex-stack h-xl-100 m-8 -10 p-6">
											<!--begin::Wrapper-->
											<div class="d-flex flex-stack flex-grow-1 flex-wrap flex-md-nowrap">
												<!--begin::Content-->
												<div class="input-group mb-3">
													<input type="email" name="email"
														class="form-control form-control-lg " />
													<span class="input-group-text"
														id="basic-addon2">.doardigital.com.br</span>
												</div>
												<!--end::Action-->
											</div>
											<!--end::Wrapper-->
										</div>
										<!--end::Notice-->
										<!--begin::Actions-->
										<div class="card-footer d-flex justify-content-end py-6 px-9">
											<button type="submit" class="btn btn-primary"
												id="kt_account_profile_details_submit">SALVAR</button>
										</div>
										<!--end::Actions-->
									</form>
									<!--end::Form-->
								</div>
								<!--end::Content-->
							</div>
							<!--end::Basic info-->

							<div class="form-check form-switch form-check-custom form-check-solid" 
							style="width: 50%; border-radius: 25px; background-color: rgb(216, 216, 216);" >

								<label class="form-check-label col-lg-9 col-form-label required fw-bold fs-6"
									for="flexSwitchDefault">
								Você tem um código promocional 
								
								</label>
								<input @click="jms = !jms" class="form-check-input" type="checkbox" value=""
									id="flexSwitchDefault" />

							</div>
							<!--begin::Basic info-->
							<div class="card mb-5 mb-xl-10" v-if="jms">
								<!--begin::Card header-->
								<div class="card-header border-0 cursor-pointer" role="button" data-bs-toggle="collapse"
									data-bs-target="#kt_account_profile_details" aria-expanded="true"
									aria-controls="kt_account_profile_details">
									<!--begin::Card title-->
									<div class="card-title m-0">
										<h3 class="fw-bolder m-0">Domínio personalizado</h3>
									</div>
									<!--end::Card title-->
								</div>
								<!--begin::Card header-->
								<!--begin::Content-->
								<div id="kt_account_profile_details">
									<!--begin::Form-->
									<form id="kt_account_profile_details_form" class="form">
										<!--begin::Notice-->
										<div
											class="notice d-flex bg-light-primary rounded border-primary border border-dashed flex-stack h-xl-100 m-8 -10 p-6">
											<!--begin::Wrapper-->
											<div class="d-flex flex-stack flex-grow-1 flex-wrap flex-md-nowrap">
												<!--begin::Content-->
												<div class="input-group mb-3">
													<span class="input-group-text" id="basic-addon2">Informe seu Domínio
													</span>
													<input type="email" name="email"
														class="form-control form-control-lg " />
												</div>
												<!--end::Action-->
											</div>
											<!--end::Wrapper-->
										</div>
										<!--end::Notice-->
										<!--begin::Actions-->
										<div class="card-footer d-flex justify-content-end py-6 px-9">
											<button type="submit" class="btn btn-primary"
												id="kt_account_profile_details_submit">SALVAR</button>

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
			
			jms: false,
        }
    },
	
}

