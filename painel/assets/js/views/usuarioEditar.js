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

								<!--begin::Sign-in Method-->
								<div class="card mb-5 mb-xl-10">
									<!--begin::Card header-->
									<div class="card-header border-0 cursor-pointer" role="button"
										data-bs-toggle="collapse" data-bs-target="#kt_account_signin_method">
										<div class="card-title m-0">
											<h3 class="fw-bolder m-0">Novo Usuário</h3>
										</div>
									</div>
									<!--end::Card header-->
									<!--begin::Content-->
									<div id="kt_account_signin_method">
										<!--begin::Card body-->
										<div class="card-body border-top p-9">
											<!--begin::Email Address-->

											<!--begin::Password-->
											<div class="d-flex flex-wrap align-items-center mb-10">

												<!--end::Label-->
												<!--begin::Edit-->
												<!-- <div id="kt_signin_password_edit" class="flex-row-fluid d-none"> -->
												<div id="kt_signin_password_edit" class="flex-row-fluid ">
													<!--begin::Form-->
													<form id="kt_signin_change_password" class="form"
														novalidate="novalidate">
														<div class="row mb-1">


														<div class="col-lg-6">
														<div class="fv-row mb-5">
															<label for="secret"
																class="form-label fs-6 fw-bolder mb-3">secret</label>
															<input type="text" v-model="secret" 
																class="form-control form-control-lg form-control-solid"
																name="secret" id="secret" />
														</div>
													</div>


															<div class="col-lg-6">
																<div class="fv-row mb-5">
																	<label for="nome"
																		class="form-label fs-6 fw-bolder mb-3">Nome</label>
																	<input type="text" v-model="nome" 
																		class="form-control form-control-lg form-control-solid"
																		name="nome" id="nome" />
																</div>
															</div>
														

															<div class="col-lg-6">
																<div class="fv-row mb-5">
																	<label for="Telefone"
																		class="form-label fs-6 fw-bolder mb-3">Telefone</label>
																	<input type="text" v-model="telefone"  v-mask="'(##) #####-####'" placeholder="(41) 99999-9999"
																		class="form-control form-control-lg form-control-solid"
																		name="Telefone" id="Telefone" />
																</div>
															</div>
															<div class="col-lg-6">
																<div class="fv-row mb-5">
																	<label for="Credencial"
																		class="form-label fs-6 fw-bolder mb-3 ">Credencial</label>
																	<select v-model="credencial_id" class="form-select form-control form-control-lg form-control-solid"
																		aria-label="Default select example">
																		<option selected>Qual a sua Credencial</option>
																		<option v-for="dado in lista_dados" :key="dado.id" :value="dado.id" >{{dado.nome_identificacao}}</option>
																		
																	</select>
																</div>
															</div>
				
														</div>



														<div class="d-flex">
																<button @click="editarUsuario()" id="kt_password_submit" type="button"
																class="btn btn-success me-2 px-6">Alterar</button>
																
															<button id="kt_password_cancel" type="button"
																class="btn btn-color-gray-400 btn-active-light-primary px-6">Cancelar</button>
														</div>
													</form>
													<!--end::Form-->
												</div>
												<!--end::Edit-->

											</div>
											<!--end::Password-->

										</div>
										<!--end::Card body-->
									</div>
									<!--end::Content-->
								</div>
								<!--end::Sign-in Method-->


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
			jms: false,
			id: null,
			nome: null,
			email: null,
			senha: null,
			telefone: null,
			credencial_id: null,
			token: null,
			secret: null,
			lista_dados: [],
			id: null,
			nome_identificacao: null,
			recursos: null,

		}
	},
	methods: {
		async addUsuario() {
			this.error = null

			let res = await adm.cadastrarSubadm(
				this.nome,
				this.email,
				this.senha,
				this.telefone,
				this.credencial_id,
				this.secret,
				this.token,
			)
			if (!res.next) {
				this.error = res.message
				return null
			}

			console.log(this.telefone,)
		},

		async editarUsuario() {
			this.error = null

			let res = await adm.editarSubadm(
				this.nome,
				this.telefone,
				this.credencial_id,
				this.email = "j@gmail.com",
				this.secret = "61b52bb61d57d",
				this.token,

			)
			if (!res.next) {
				this.error = res.message
				return null
			}

		},

		// async listar() {
		//     let res = await adm.listarSubadm( localStorage.getItem('token') )
		// 	return res
		// },
	},


	async mounted() {
		// this.nome = globalThis._usuario.nome
		// this.telefone = globalThis._usuario.telefone
		// this.credencial_id = globalThis._usuario.credencial_id
		// this.secret = globalThis._usuario.secret
		// this.email = globalThis._usuario.email

		// this.lista_dados = (await this.listar()).dados
		// this.id = lista_dados.id
		// this.nome_identificacao = lista_dados.nome_identificacao
		// this.recursos = lista_dados.recursos
		// this.telefone = lista_dados.telefone
		// this.secret = lista_dados.secret
		// this.email = lista_dados.email
	
		
	},


	created() {


	},


}



