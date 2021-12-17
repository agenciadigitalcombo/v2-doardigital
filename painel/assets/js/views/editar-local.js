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
								<div class="card-body pt-9 pb-0">
									<!--begin::Details-->
									<div class="d-flex flex-wrap flex-sm-nowrap mb-3">
										<!--begin: Pic-->
										<div class="me-7 mb-4">
											<div
												class="symbol symbol-100px symbol-lg-160px symbol-fixed position-relative">
												<img v-bind:src="gravatar">
												<div
													class="position-absolute translate-middle bottom-0 start-100 mb-6 bg-success rounded-circle border border-4 border-white h-20px w-20px">
												</div>
											</div>
										</div>
										<!--end::Pic-->
										<!--begin::Info-->
										<div class="flex-grow-1">
											<!--begin::Title-->
											<div
												class="d-flex justify-content-between align-items-start flex-wrap mb-2">
												<!--begin::User-->
												<div class="d-flex flex-column">
													<!--begin::Name-->
													<div class="d-flex align-items-center">
														<a href="#"
															class="text-gray-900 text-hover-primary fs-2 fw-bolder me-1">{{nome}}</a>

														<div>
															<a href="#">
																<!--begin::Svg Icon | path: icons/duotune/general/gen026.svg-->
																<span class="svg-icon svg-icon-1 svg-icon-primary">
																	<svg xmlns="http://www.w3.org/2000/svg" width="24px"
																		height="24px" viewBox="0 0 24 24">
																		<path
																			d="M10.0813 3.7242C10.8849 2.16438 13.1151 2.16438 13.9187 3.7242V3.7242C14.4016 4.66147 15.4909 5.1127 16.4951 4.79139V4.79139C18.1663 4.25668 19.7433 5.83365 19.2086 7.50485V7.50485C18.8873 8.50905 19.3385 9.59842 20.2758 10.0813V10.0813C21.8356 10.8849 21.8356 13.1151 20.2758 13.9187V13.9187C19.3385 14.4016 18.8873 15.491 19.2086 16.4951V16.4951C19.7433 18.1663 18.1663 19.7433 16.4951 19.2086V19.2086C15.491 18.8873 14.4016 19.3385 13.9187 20.2758V20.2758C13.1151 21.8356 10.8849 21.8356 10.0813 20.2758V20.2758C9.59842 19.3385 8.50905 18.8873 7.50485 19.2086V19.2086C5.83365 19.7433 4.25668 18.1663 4.79139 16.4951V16.4951C5.1127 15.491 4.66147 14.4016 3.7242 13.9187V13.9187C2.16438 13.1151 2.16438 10.8849 3.7242 10.0813V10.0813C4.66147 9.59842 5.1127 8.50905 4.79139 7.50485V7.50485C4.25668 5.83365 5.83365 4.25668 7.50485 4.79139V4.79139C8.50905 5.1127 9.59842 4.66147 10.0813 3.7242V3.7242Z"
																			fill="#00A3FF" />
																		<path class="permanent"
																			d="M14.8563 9.1903C15.0606 8.94984 15.3771 8.9385 15.6175 9.14289C15.858 9.34728 15.8229 9.66433 15.6185 9.9048L11.863 14.6558C11.6554 14.9001 11.2876 14.9258 11.048 14.7128L8.47656 12.4271C8.24068 12.2174 8.21944 11.8563 8.42911 11.6204C8.63877 11.3845 8.99996 11.3633 9.23583 11.5729L11.3706 13.4705L14.8563 9.1903Z"
																			fill="white" />
																	</svg>
																</span>
																<!--end::Svg Icon-->
															</a>
															<a href="#"
																class="btn btn-sm btn-light-success fw-bolder ms-2 fs-8 py-1 px-3"
																data-bs-toggle="modal"
																data-bs-target="#kt_modal_upgrade_plan">Atualize</a>
														</div>
													</div>
													<!--end::Name-->
													<!--begin::Info-->
													<div class="d-flex flex-wrap fw-bold fs-6 mb-4 pe-2">
														<a href="#"
															class="d-flex align-items-center text-gray-400 text-hover-primary me-5 mb-2">
															<!--begin::Svg Icon | path: icons/duotune/communication/com006.svg-->
															<span class="svg-icon svg-icon-4 me-1">
																<svg xmlns="http://www.w3.org/2000/svg" width="24"
																	height="24" viewBox="0 0 24 24" fill="none">
																	<path opacity="0.3"
																		d="M22 12C22 17.5 17.5 22 12 22C6.5 22 2 17.5 2 12C2 6.5 6.5 2 12 2C17.5 2 22 6.5 22 12ZM12 7C10.3 7 9 8.3 9 10C9 11.7 10.3 13 12 13C13.7 13 15 11.7 15 10C15 8.3 13.7 7 12 7Z"
																		fill="black" />
																	<path
																		d="M12 22C14.6 22 17 21 18.7 19.4C17.9 16.9 15.2 15 12 15C8.8 15 6.09999 16.9 5.29999 19.4C6.99999 21 9.4 22 12 22Z"
																		fill="black" />
																</svg>
															</span>
															<!--end::Svg Icon-->Admin
														</a>
														<a href="#"
															class="d-flex align-items-center text-gray-400 text-hover-primary me-5 mb-2">
															<!--begin::Svg Icon | path: icons/duotune/general/gen018.svg-->
															<span class="svg-icon svg-icon-4 me-1">
																<svg xmlns="http://www.w3.org/2000/svg" width="24"
																	height="24" viewBox="0 0 24 24" fill="none">
																	<path opacity="0.3"
																		d="M18.0624 15.3453L13.1624 20.7453C12.5624 21.4453 11.5624 21.4453 10.9624 20.7453L6.06242 15.3453C4.56242 13.6453 3.76242 11.4453 4.06242 8.94534C4.56242 5.34534 7.46242 2.44534 11.0624 2.04534C15.8624 1.54534 19.9624 5.24534 19.9624 9.94534C20.0624 12.0453 19.2624 13.9453 18.0624 15.3453Z"
																		fill="black" />
																	<path
																		d="M12.0624 13.0453C13.7193 13.0453 15.0624 11.7022 15.0624 10.0453C15.0624 8.38849 13.7193 7.04535 12.0624 7.04535C10.4056 7.04535 9.06241 8.38849 9.06241 10.0453C9.06241 11.7022 10.4056 13.0453 12.0624 13.0453Z"
																		fill="black" />
																</svg>
															</span>
															<!--end::Svg Icon-->{{cidade}}, {{estado}} {{bairro}}
														</a>
														<a href="#"
															class="d-flex align-items-center text-gray-400 text-hover-primary mb-2">
															<!--begin::Svg Icon | path: icons/duotune/communication/com011.svg-->
															<span class="svg-icon svg-icon-4 me-1">
																<svg xmlns="http://www.w3.org/2000/svg" width="24"
																	height="24" viewBox="0 0 24 24" fill="none">
																	<path opacity="0.3"
																		d="M21 19H3C2.4 19 2 18.6 2 18V6C2 5.4 2.4 5 3 5H21C21.6 5 22 5.4 22 6V18C22 18.6 21.6 19 21 19Z"
																		fill="black" />
																	<path
																		d="M21 5H2.99999C2.69999 5 2.49999 5.10005 2.29999 5.30005L11.2 13.3C11.7 13.7 12.4 13.7 12.8 13.3L21.7 5.30005C21.5 5.10005 21.3 5 21 5Z"
																		fill="black" />
																</svg>
															</span>
															<!--end::Svg Icon-->{{email}}
														</a>
													</div>
													<!--end::Info-->
												</div>
												<!--end::User-->
											</div>
											<!--end::Title-->
											<!--begin::Stats-->
											<div class="d-flex flex-wrap flex-stack">
												<!--begin::Wrapper-->
												<div class="d-flex flex-column flex-grow-1 pe-8">
													<!--begin::Progress-->
													<div
														class="d-flex align-items-center w-200px w-sm-300px flex-column ">
														<div class="d-flex justify-content-between w-100 mt-auto mb-2">
															<span class="fw-bold fs-6 text-gray-400">Preenchimento de
																Perfil</span>
															<span class="fw-bolder fs-6">50%</span>
														</div>
														<div class="h-5px mx-3 w-100 bg-light mb-3">
															<div class="bg-success rounded h-5px" role="progressbar"
																style="width: 50%;" aria-valuenow="50" aria-valuemin="0"
																aria-valuemax="100"></div>
														</div>
													</div>
													<!--end::Progress-->
												</div>
												<!--end::Wrapper-->

											</div>
											<!--end::Stats-->
										</div>
										<!--end::Info-->

									</div>
									<!--end::Details-->
									<!--begin::Navs-->
									<ul
										class="nav nav-stretch nav-line-tabs nav-line-tabs-2x border-transparent fs-5 fw-bolder">
										<!--begin::Nav item-->
										<li class="nav-item mt-2">
											<a class="nav-link text-active-primary ms-0 me-10 py-5 "
												href="#/perfil">Visão geral</a>
										</li>
										<!--end::Nav item-->
										<!--begin::Nav item-->
										<li class="nav-item mt-2">
											<a class="nav-link text-active-primary ms-0 me-10 py-5"
												href="#/perfil-editar">Seus Dados</a>
										</li>
										<!--end::Nav item-->
										<!--begin::Nav item-->
										<li class="nav-item mt-2">
											<a class="nav-link text-active-primary ms-0 me-10 py-5 active"
												href="#/editar-local">Meu Endereço</a>
										</li>
										<li class="nav-item mt-2">
											<a class="nav-link text-active-primary ms-0 me-10 py-5"
												href="#/editar-securanca">Seguranca</a>
										</li>
										<!--end::Nav item-->
									</ul>
									<!--begin::Navs-->
								</div>
							</div>
							<!--end::Navbar-->

							<!--begin::Billing Address-->
							<div class="card mb-5 mb-xl-10">
								<!--begin::Card header-->
								<div class="card-header">
									<!--begin::Title-->
									<div class="card-title">
										<h3>Meus Endereço</h3>
									</div>
									<!--end::Title-->
								</div>
								<!--end::Card header-->

								<!--begin::Content-->
								<div id="kt_account_profile_details">
									<!--begin::Form-->

									<form id="kt_docs_formvalidation_text" action="javascript:void(0)"
										autocomplete="off" name="formulario" class="form">
										<!--begin::Card body-->
										<div class="card-body border-top p-9">

											<!--end::Input group-->



											<div class="row mb-6">
												<!--begin::Label-->
												<label class="col-lg-4 col-form-label required fw-bold fs-6">Nome
													identificacao</label>
												<!--end::Label-->
												<!--begin::Col-->

												<input v-model="id" type="hidden" name="nome"
													class="form-control form-control-lg form-control-solid"
													placeholder="Nome identificacao" />

												<div class="col-lg-8 fv-row">
													<input v-model="nome_identificacao" type="text" name="nome"
														class="form-control form-control-lg form-control-solid"
														placeholder="Nome identificacao" />
												</div>
												<!--end::Col-->
											</div>
											<!--begin::Input group-->
											<div class="row mb-6">
												<!--begin::Label-->
												<label class="col-lg-4 col-form-label required fw-bold fs-6">CEP</label>
												<!--end::Label-->
												<!--begin::Col-->
												<div class="col-lg-8 fv-row">
													<div class="input-group mb-3">
														<input id="cep" v-model="cep" @keyup="searchCep()" type="text"
															name="CEP"
															class="form-control form-control-lg form-control-solid"
															v-mask="'###.###.###-##'" placeholder="000.000.000-00" />
														<span class="input-group-text" id="basic-addon2">
															<a @click="pesquisarCep()">
																<svg xmlns="http://www.w3.org/2000/svg" width="30"
																	height="30" fill="currentColor" class="bi bi-search"
																	viewBox="0 0 16 16">
																	<path
																		d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
																</svg>
															</a>

														</span>
													</div>
												</div>
												<!--end::Col-->
											</div>
											<div class="row mb-6">
												<!--begin::Label-->
												<label class="col-lg-4 col-form-label required fw-bold fs-6">Rua/Avenida
													Nº</label>
												<!--end::Label-->
												<!--begin::Col-->
												<div class="col-lg-8 fv-row">
													<input id="logradouro" v-model="logadouro" type="text" name="text_input"
														class="form-control form-control-lg form-control-solid"
														placeholder="Localização" />
												</div>
												<!--end::Col-->
											</div>
											<!--end::Input group-->
											<div class="row mb-6">
												<!--begin::Label-->
												<label
													class="col-lg-4 col-form-label required fw-bold fs-6">Numero</label>
												<!--end::Label-->
												<!--begin::Col-->
												<div class="col-lg-8 fv-row">
													<input id="" v-model="numero" type="text" name="Numero"
														class="form-control form-control-lg form-control-solid"
														placeholder="Numero" />
												</div>
												<!--end::Col-->
											</div>
											<!--begin::Input group-->
											<div class="row mb-6">
												<!--begin::Label-->
												<label class="col-lg-4 col-form-label fw-bold fs-6">
													<span class="required">Complemento</span>

												</label>
												<!--end::Label-->
												<!--begin::Col-->
												<div class="col-lg-8 fv-row">
													<input id="complemento" v-model="complemento" type="text"
														name="Complemento"
														class="form-control form-control-lg form-control-solid" />
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
													<input id="bairro" v-model="bairro" type="text" name="Bairro"
														class="form-control form-control-lg form-control-solid" />
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
													<input id="localidade" v-model="cidade" type="text" name="cidade"
														class="form-control form-control-lg form-control-solid" />
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
													<input id="uf" v-model="estado" type="text" name="estado"
														class="form-control form-control-lg form-control-solid" />
												</div>
												<!--end::Col-->
											</div>


										</div>
										<!--end::Card body-->
										<!--begin::Actions-->
										<div class="card-footer d-flex justify-content-end py-6 px-9">
											<button @click="aeditarEndereco()" type="submit" class="btn btn-primary m-2"
												id="kt_account_profile_details_submit">SALVAR</button>
										
										
												<button id="kt_docs_formvalidation_text_submit" type="submit" class="btn btn-primary">
														<span class="indicator-label">Validation Form</span>
														<span class="indicator-progress">Please wait...
														<span class="spinner-border spinner-border-sm align-middle ms-2"></span></span>
													</button>
										
										
										
												<button @click="eliminaEndereco()" type="submit"
												class="btn btn-primary  m-2"
												id="kt_account_profile_details_submit">ELIMINAR</button>
										
											

										</div>
										<!--end::Actions-->

									</form>
									<!--end::Form-->
								</div>
								<!--end::Content-->

							</div>
							<!--end::Billing Address-->


						</div>
						<!--end::Container-->
					</div>
					<!--end::Post-->
				</div>
				<!--end:: Content-- >
	
			</div >
		</div >
	</div >
	< !--end:: Root-- >

	</div >
	`,


	data: function () {
		return {
			gravatar: '../painel/assets/image/gravatar.png',
			id: null,
			nome_identificacao: null,
			cep: null,
			logadouro: null,
			numero: null,
			complemento: null,
			bairro: null,
			cidade: null,
			estado: null,
			secret: null,
			token: null,

			items: [],

			nome: null,
			cpf: null,
			telefone: null,
			email: null,

			
			data: null,
		}
	},
	methods: {
		
		async aeditarEndereco() {
			this.error = null

			let res = await adm.atualizarEndereco(
				this.nome_identificacao,
				this.cep,
				this.logadouro,
				this.numero,
				this.complemento,
				this.bairro,
				this.cidade,
				this.estado,
				this.token,

			)
			if (!res.next) {
				this.error = res.message
				return null
			}

			console.log(this.logadouro)
		},



		async eliminaEndereco() {
			let res = await adm.eliminaEndereco(
				this.secret,
			)
			if (!res.next) {
				console.log(res)
				this.error = res.message
				return null
			}

		},

		async listar() {
			let res = await adm.ListarPerfil(localStorage.getItem('token'))
			return res
		},

		async listarEndereco() {
			let res = await adm.listarEndereco(
				(this.token)
			)
			return res
		},
		
		async searchCep() {
			if (this.cep.length == 8) {
				axios.get(`https://viacep.com.br/ws/${this.cep}/json/`)
					.then(response => 
					this.logadouro = response.data.logradouro,
					this.numero = response.data.ddd,
					this.complemento = response.data.complemento,
					this.bairro = response.data.bairro,
					this.cidade = response.data.localidade,
					this.estado = response.data.uf,
					this.data = response.data,
					console.log(this.data)
					
					)
					.catch(error => console.log(error))
			}
		}

	},

	async mounted() {
		
		let validacao = document.createElement('script'); validacao.setAttribute('src', "../../painel/assets/assets/js/custom/documentation/forms/formvalidation/basic.js");
	document.head.appendChild(validacao);

	// Rua/Avenida Nº
		// let enderecoDados = (await this.listarEndereco()).dados|| {}
		
        // this.logadouro = enderecoDados.logadouro
		// this.cep = enderecoDados.cep
		// this.nome_identificacao = enderecoDados.nome_identificacao
		// this.numero = enderecoDados.numero
		// this.complemento = enderecoDados.complemento
		// this.bairro = enderecoDados.bairro
		// this.cidade = enderecoDados.cidade
		// this.estado = enderecoDados.estado
		// this.id = enderecoDados.id

		

	},

	created() {
		this.token = localStorage.getItem('token')

	},
}