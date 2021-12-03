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
						
							<!--begin::Basic info-->
							<div class="card mb-5 mb-xl-10">
								<!--begin::Card header-->
								<div class="card-header border-0 cursor-pointer" role="button" data-bs-toggle="collapse"
									data-bs-target="#kt_account_profile_details" aria-expanded="true"
									aria-controls="kt_account_profile_details">
									<!--begin::Card title-->
									<div class="card-title m-0">
										<h3 class="fw-bolder m-0">E-vendas</h3>
									</div>
									<!--end::Card title-->
								</div>
								<!--begin::Card header-->
								<!--begin::Content-->
								<div id="kt_account_profile_details">
									<!--begin::Form-->
									<form id="kt_account_profile_details_form" class="form">
		
										<!--begin::Wrapper-->
											<div class=" m-2 p-6">
												<div class="mb-3">
													<label for="Chave" class="form-label">Chave</label>
													<input type="text" class="form-control form-control-lg form-control-solid" id="Chave" disabled >
												  </div>
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
			gravatar: '../painel/assets/image/gravatar.png',
	
        }
    },
	methods: {
	
     
       

    },
	

	
}

