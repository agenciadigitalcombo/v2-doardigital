

export default {
	template:`
		<div>

			<c-header></c-header>
			<c-aside></c-aside>

			<!--begin::Root-->
			<div class="d-flex flex-column flex-root"> 
				<div class="page d-flex flex-row flex-column-fluid"> 
					<div class="wrapper d-flex flex-column flex-row-fluid"> 
						<div class="content d-flex flex-column flex-column-fluid"  > 
							<div class="post d-flex flex-column-fluid"  > 
								<div class="container-xxl"> 
									<div class="card " > 
										<div class="card-header cursor-pointer"> 
											<div class="card-title m-0">
												<h3 class="fw-bolder m-0">Configuração</h3>
											</div>
										</div> 
										<div class="card-body p-9"> 
											<div class="row"> 
												<div class="col-lg-6">
													<div class="fv-row mb-10">
														<label class="required fw-bold fs-6 mb-2">Titulo do Site</label>
														<input type="text" name="text_input"
															class="form-control form-control-solid mb-3 mb-lg-0"
															placeholder="" value="" />
													</div>
												</div> 
												<div class="col-lg-6">
													<div class="fv-row mb-10">
														<label class="required fw-bold fs-6 mb-2">Tags Google</label>
														<input type="text" name="text_input"
															class="form-control form-control-solid mb-3 mb-lg-0"
															placeholder="" value="" />
													</div>
												</div> 
												<div class="col-lg-12">
													<div class="fv-row mb-10">
														<label class="required fw-bold fs-6 mb-2">Descrição Google</label>
														<textarea name="textarea_input"
															class="form-control form-control-solid"></textarea>
													</div>
												</div> 
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
															 
																<label class="fs-6 fw-bold mb-2">
																	<span>Atualizar Avatar</span>
																	<i class="fas fa-exclamation-circle ms-1 fs-7"
																		data-bs-toggle="tooltip"
																		title="Tipos de arquivo permitidos: png, jpg, jpeg."></i>
																</label> 
																<div class="mt-1"> 
																	<div class="image-input image-input-empty" data-kt-image-input="true" style="background-image: url(../painel/assets/icons/blank.png)">
																	 
																		<div class="image-input-wrapper w-125px h-125px"></div>
																	 
																		<label class="btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-white shadow"
																			data-kt-image-input-action="change"
																			data-bs-toggle="tooltip"
																			data-bs-dismiss="click"
																			title="Mudar Avatar">
																			<i class="bi bi-pencil-fill fs-7"></i>
 
																			<input type="file" name="avatar" accept=".png, .jpg, .jpeg" />
																			<input type="hidden" name="avatar_remove" />
																		 
																		</label> 
																		<span class="btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-white shadow"
																			data-kt-image-input-action="cancel"
																			data-bs-toggle="tooltip"
																			data-bs-dismiss="click"
																			title="Cancel avatar">
																			<i class="bi bi-x fs-2"></i>
																		</span> 
																		<span class="btn btn-icon btn-circle btn-active-color-primary w-25px h-25px bg-white shadow"
																			data-kt-image-input-action="remove"
																			data-bs-toggle="tooltip"
																			data-bs-dismiss="click"
																			title="Remove avatar">
																			<i class="bi bi-x fs-2"></i>
																		</span> 
																	</div> 
																</div> 
																<span> 1MB o tamanho máximo da imgem.</span>
															</div>
														</div>
													</div> 
													<div class="card-footer  px-9">
														<button type="submit" class="btn btn-primary m-2">SALVAR</button>
													</div> 
												</div>
											</div> 
										</div> 
									</div> 
								</div> 
							</div>  
						</div> 
					</div> 
				</div>
  
			</div>

			<c-footer />
		</div>
    `,


     data: function () {
		return {
			cpf: null,
			data_nascimento: null,
			token: null,
        }
    },
	methods: {
	
		async alterarAdm() {
			this.error = null

			let res = await adm.atualizar(
				this.cpf,
				this.data_nascimento,
				this.token
				
			)
			if (!res.next) {
				console.log(res)
				this.error = res.message
				return null
			}
			this.msg = res.message,
				setTimeout(() => this.msg = "", 3000);
		},
     
       

    },
	

	
}

