

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
							<input type="text" name="text_input"
								class="form-control form-control-solid mb-3 mb-lg-0"
								placeholder="" value="" />
						</div>
					</div>
					<!--end::Label-->
					<!--begin::Col-->
					<div class="col-lg-6">
						<div class="fv-row mb-10">
							<label class="required fw-bold fs-6 mb-2">Tags Google</label>
							<input type="text" name="text_input"
								class="form-control form-control-solid mb-3 mb-lg-0"
								placeholder="" value="" />
						</div>
					</div>
					<!--end::Col-->

					<!--begin::Col-->
					<div class="col-lg-12">
						<div class="fv-row mb-10">
							<label class="required fw-bold fs-6 mb-2">Descrição Google</label>
							<textarea name="textarea_input"
								class="form-control form-control-solid"></textarea>
						</div>
					</div>
					<!--end::Col-->
					<!--begin::Col-->
					<div class="col-lg-12">
						<div class="fv-row mb-10">
							<label class="required fw-bold fs-6 mb-2">Cor de Fundo</label>
							<br>
							<input style="width: 130px; height: 50px;" class="" type="color"
								maxlength="75">
						</div>
					</div>

					<div class="col-lg-12">
						<div class="fv-row mb-10">
							<div class="mb-7">
								<!--begin::Label-->
								<label class="fs-6 fw-bold mb-2">
									<span>Atualizar Avatar</span>
									<i class="fas fa-exclamation-circle ms-1 fs-7"
										data-bs-toggle="tooltip"
										title="Tipos de arquivo permitidos: png, jpg, jpeg."></i>
								</label>
								<!--end::Label-->
								<!--begin::Image input wrapper-->
								<div class="mt-1">
									<!--begin::Image input-->
									<!--begin::Image input-->
 <div class="image-input image-input-empty" data-kt-image-input="true" style="background-image: url(../painel/assets/icons/blank.png)">
	<!--begin::Image preview wrapper-->
	<div class="image-input-wrapper w-125px h-125px"></div>
	<!--end::Image preview wrapper-->

	<!--begin::Edit button-->
	<label class="btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-white shadow"
	   data-kt-image-input-action="change"
	   data-bs-toggle="tooltip"
	   data-bs-dismiss="click"
	   title="Mudar Avatar">
		<i class="bi bi-pencil-fill fs-7"></i>

		<!--begin::Inputs-->
		<input type="file" name="avatar" accept=".png, .jpg, .jpeg" />
		<input type="hidden" name="avatar_remove" />
		<!--end::Inputs-->
	</label>
	<!--end::Edit button-->

	<!--begin::Cancel button-->
	<span class="btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-white shadow"
	   data-kt-image-input-action="cancel"
	   data-bs-toggle="tooltip"
	   data-bs-dismiss="click"
	   title="Cancel avatar">
		<i class="bi bi-x fs-2"></i>
	</span>
	<!--end::Cancel button-->

	<!--begin::Remove button-->
	<span class="btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-white shadow"
	   data-kt-image-input-action="remove"
	   data-bs-toggle="tooltip"
	   data-bs-dismiss="click"
	   title="Remove avatar">
		<i class="bi bi-x fs-2"></i>
	</span>
	<!--end::Remove button-->
</div>
<!--end::Image input-->
									<!--end::Image input-->
								</div>
								<!--end::Image input wrapper-->
								<span> 1MB o tamanho máximo da imgem.</span>
							</div>
						</div>
					</div>
					<!--begin::Actions-->
					<div class="card-footer py-6 px-9">
						<button type="submit" class="btn btn-primary m-2">SALVAR</button>
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
		</div>

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

