import adm from "../../../../../static/js/api/adm.js"

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


												<div class="col-lg-8 fv-row">
													<input v-model="nome_identificacao" type="text" name="text_input" 
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
															<input v-model="cep" @keyup="searchCep()"
																type="text" name="text_input"
																class="form-control form-control-lg form-control-solid"
																 placeholder="00000-000" />
															<span class="input-group-text" id="basic-addon2">
																<a @click="searchCep()" >
																	<svg xmlns="http://www.w3.org/2000/svg" width="30"
																		height="30" fill="currentColor"
																		class="bi bi-search" viewBox="0 0 16 16">
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
													<input id="" v-model="numero" type="text" name="text_input"
														class="form-control form-control-lg form-control-solid"
														placeholder="Numero" />
												</div>
												<!--end::Col-->
											</div>
											<!--begin::Input group-->
											<div class="row mb-6">
												<!--begin::Label-->
												<label class="col-lg-4 col-form-label fw-bold fs-6">
													<span >Complemento</span>

												</label>
												<!--end::Label-->
												<!--begin::Col-->
												<div class="col-lg-8 fv-row">
													<input id="complemento" v-model="complemento" type="text" 
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
													<input id="bairro" v-model="bairro" type="text" name="text_input"
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
													<input id="localidade" v-model="cidade" type="text" name="text_input"
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
													<input id="uf" v-model="estado" type="text" name="text_input"
														class="form-control form-control-lg form-control-solid" />
												</div>
												<!--end::Col-->
											</div>


										</div>
										<!--end::Card body-->
										<!--begin::Actions-->
										<div class="card-footer d-flex justify-content-end py-6 px-9">
											
											<button  id="kt_docs_formvalidation_text_submit" type="submit" class="btn btn-primary" @click="cadastrarEndereco()">
												<span class="indicator-label">SALVAR</span>
												<span class="indicator-progress">Por favor, aguarde...
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
		
		async cadastrarEndereco() {
			this.error = null

			let res = await adm.enderecoInstituicao(
				this.id,
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
		
		searchCep() {
			if (this.cep.length == 8) {
				axios.get(`https://viacep.com.br/ws/${this.cep}/json/`)
					.then(response => {

						this.logadouro = response.data.logradouro,
							// this.complemento = response.data.complemento,
							this.bairro = response.data.bairro,
							this.cidade = response.data.localidade,
							this.estado = response.data.uf,

							console.log(response.data)
						
					}
					)
					.catch(error => console.log(error))

			}
		}

	},

	async mounted() {
		
		let validacao = document.createElement('script'); validacao.setAttribute('src', "../../assets/assets/js/custom/documentation/forms/formvalidation/basic.js");
		document.head.appendChild(validacao);

		this.id = localStorage.getItem('instituicao_id')
	// 	let cep = document.createElement('script'); cep.setAttribute('src', "../../painel/assets/js/cep.js");
	// document.head.appendChild(cep);

		
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

