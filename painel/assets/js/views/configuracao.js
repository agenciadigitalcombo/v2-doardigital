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
							
								<!--begin::details View-->
								<div class="card mb-5 mb-xl-10" id="kt_profile_details_view">
									<!--begin::Card header-->
									<div class="card-header cursor-pointer">
										<!--begin::Card title-->
										<div class="card-title m-0">
											<h3 class="fw-bolder m-0">Configuração</h3>
										</div>
									</div>
									<!--begin::Card header-->
									<!--begin::Card body-->
									<div class="card-body p-9">
										<!--begin::Row-->
										<div class="row mb-7">
											<!--begin::Label-->
											<div class="col-lg-6">
												<div class="fv-row mb-10">
													<label class="required fw-bold fs-6 mb-2">Titulo do Site</label>
													<input type="text" name="text_input" class="form-control form-control-solid mb-3 mb-lg-0" placeholder="" value="" />
												</div>
											</div>
											<!--end::Label-->
											<!--begin::Col-->
											<div class="col-lg-6">
												<div class="fv-row mb-10">
													<label class="required fw-bold fs-6 mb-2">Tags Google</label>
												<input type="text" name="text_input" class="form-control form-control-solid mb-3 mb-lg-0" placeholder="" value="" />
												</div>
											</div>
											<!--end::Col-->

											<!--begin::Col-->
											<div class="col-lg-12">
												<div class="fv-row mb-10">
													<label class="required fw-bold fs-6 mb-2">Descrição Google</label>
													<textarea name="textarea_input" class="form-control form-control-solid"></textarea>											
												</div>
											</div>
											<!--end::Col-->
	<!--begin::Col-->
	<div class="col-lg-12">
		<div class="fv-row mb-10">
			<label class="required fw-bold fs-6 mb-2">Cor de Fundo</label>
			<br>
			<input class="" type="color" maxlength="75">										
		</div>
	</div>

	<div class="col-lg-12">
		<div class="fv-row mb-10">
				
	<label>
		<img src="../painel/assets/image/default.png" width="150">
		<input type="file" @change="preview" name="images" data-name="my_logo" hidden>
	</label>
	<br>
	<br>
	<span> 1MB o tamanho máximo da imgem.</span>								
		</div>
	</div>
<!--begin::Actions-->
<div class="card-footer py-6 px-9">
	<button  type="submit" class="btn btn-primary m-2">SALVAR</button>
</div>
<!--end::Actions-->
	<!--end::Col-->
										</div>
									
									
									</div>
									<!--end::Card body-->
								</div>
								<!--end::details View-->
								<!--begin::Row-->
							
								<!--end::Row-->
							
							</div>
							<!--end::Container-->
						</div>
						<!--end::Post-->
					</div>
					<!--end::Content-->
		  
		</div>
		<!--end::Wrapper-->
	</div>
	<!--end::Page-->
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

