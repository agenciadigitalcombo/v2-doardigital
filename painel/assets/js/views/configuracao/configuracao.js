import adm from "../../../../../static/js/api/adm.js"

export default {
	template: ` 
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
								<form class="form" @submit.prevent="AddConfiguracao" enctype="multipart/form-data">
								<div class="card-body p-9"> 
									<div class="row"> 
										<div class="col-lg-12">
											<div class="fv-row mb-10">
												<label class="required fw-bold fs-6 mb-2">Titulo do Site</label>
												<input required type="text" name="text_input"  v-model="titulo_site" 
													class="form-control form-control-solid mb-3 mb-lg-0"
													placeholder=""/>
											</div>
										</div> 
									 
										<div class="col-lg-12">
											<div class="fv-row mb-10">
												<label class="required fw-bold fs-6 mb-2">Tags Google</label>
												<textarea name="textarea_input"  v-model="tags" placeholder="As suas tags"
													class="form-control form-control-solid"></textarea>
											</div>
										</div> 

										<div class="col-lg-12">
										<div class="fv-row mb-10">
											<label class="required fw-bold fs-6 mb-2">Descrição Google</label>
											<textarea name="textarea_input" v-model="descricao_site"  
												class="form-control form-control-solid"></textarea>
										</div>
									</div> 
 
										<div class="col-lg-12">
											<div class="fv-row mb-10">
												<label class="required fw-bold fs-6 mb-2">Escolha uma Cor de Fundo</label>
												<br>
												<div>
											A cor deve ter um bom contraste com o branco
												</div>
													<input required style="width: 130px; height: 50px;" class="" type="color" v-model="cor"  
														maxlength="75">
													</div>
									 
											</div>

											<div class="col-lg-12">
												<div class="fv-row mb-10">
													<div class="mb-7">
												  
														<label class="fs-6 fw-bold mb-2">
															<span>Atualizar Logo</span>
															<i class="fas fa-exclamation-circle ms-1 fs-7"
																data-bs-toggle="tooltip"
																title="Tipos de arquivo permitidos: png, jpg, jpeg."></i>
														</label> 
														<div class="mt-1"> 
 
															<div class="image-input image-input-empty" data-kt-image-input="true">
															<img  :src="imagemVer" @click="openUpload" alt="Girl in a jacket" width="200" height="200">
															  
																<label class="btn btn-icon btn-circle btn-active-color-primary w-30px h-30px bg-white shadow"
																	data-kt-image-input-action="change"
																	data-bs-toggle="tooltip"
																	data-bs-dismiss="click"
																	title="Mudar Avatar">
																	<i class="fs-7 ms-8">
																	<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-pen-fill" viewBox="0 0 16 16">
																<path d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5 1.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001z"/>
																</svg>
																	</i>

																	<input ref="file" v-on:change="updatePreview" required type="file" name="avatar" accept=".png, .jpg, .jpeg" />
																	
																	<input type="hidden" name="avatar_remove"  />
																 
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
																	<i class="bi bi-x fs-2">
																	</i>
																</span> 
															</div> 
														</div> 
														<a @click="carregarImg()" class="xxbtn btn btn-outline btn-outline-dashed btn-outline-primary btn-active-light-primary">
														<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-upload" viewBox="0 0 16 16">
														<path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"/>
														<path d="M7.646 1.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 2.707V11.5a.5.5 0 0 1-1 0V2.707L5.354 4.854a.5.5 0 1 1-.708-.708l3-3z"/>
														</svg>
														Carregar foto</a>
														<br>
														<span> 1MB o tamanho máximo da imgem.</span>
														<br>
													 
														<span> De Preferência uma imagem com fundo trasparente.</span>
														aqui {{logo}}
													</div>
													
												</div>
											</div> 
										
														
											<div class="card-footer  px-9">
												<button type="submit" class="btn btn-primary m-2">SALVAR</button>
											</div> 
										</div>
									</div> 
 
								</form>
 
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
			token: null,
			instituicao_id: null,
			titulo_site: null,
			tags: null,
			descricao_site: null,
			cor: null,
			logo: null,
			msg: null,
			error: null,
			file: "",
			imagemVer:  null,  

		}
	},

	methods: {
		async sendFile() {
			let file = new FormData();
			for (let files of this.$refs.file) {
				file.append(`file`, files);
			}
			this.error = null

			let res = await adm.uploadImg(
				this.file
			)
			if (!res.next) {
				this.error = res.message
				return null
			}
			this.msg = res.message,
				setTimeout(() => this.msg = "", 3000);
		},


		openUpload() {


		},

		updatePreview(e) {
			console.log(e)

			var file, files = e.target.files
			if (files.length === 0) {
				console.log('vazio')
			}
			file = new FileReader();
			file.onload = (e) => {
				this.imagemVer = e.target.result
			}
			file.readAsDataURL(files[0])
		},



		async carregarImg() {
			let file = new FormData();

			file.append('file', this.$refs.file.files[0]);

			this.error = null

			let res = await adm.uploadImg(
				file
			)
			if (!res.next) {
				this.error = res.message
				return null
			}

			globalThis._foto = res.nome_image
			this.msg = res.message,
				setTimeout(() => this.msg = "", 3000);
		},



		async AddConfiguracao() {
			this.error = null

			let res = await adm.configuracaoInstituicao(
				this.token,
				this.instituicao_id,
				this.titulo_site,
				this.tags,
				this.descricao_site,
				this.cor,
				this.logo = globalThis._foto,


			)
			if (!res.next) {
				this.error = res.message
				return null
			}
			this.msg = res.message,
				setTimeout(() => this.msg = "", 3000);
		},

		async lisConfiguracao() {
			  let res = await adm.listConf(this.instituicao_id = window.localStorage.getItem("instituicao_id"))
				return res
			},


	},


	async mounted() {
		
		let config = (await this.lisConfiguracao()).dados
		this.logo = "https://doardigital.tk/api/upload/"+config.logo
		this.cor = config.cor
		this.tags = config.tags,
		this.descricao_site = config.descricao_site,
		this.titulo_site = config.titulo_site,
 
		this.imagemVer =  this.logo || "../painel/assets/icons/blank.png"

		this.instituicao_id = window.localStorage.getItem("instituicao_id")
	},
}

