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
													<form id="kt_docs_formvalidation_text" class="form"
														novalidate="novalidate">
														<div class="row mb-1">
														
															<div class="col-lg-6">
																<div class="fv-row mb-5">
																	<label for="nome"
																		class="form-label fs-6 fw-bolder mb-3">Nome</label>
																	<input type="text" v-model="nome" 
																		class="form-control form-control-lg form-control-solid"
																		name="text_input"  id="nome" />
																</div>
															</div>
															<div class="col-lg-6">
																<div class="fv-row mb-5">
																	<label for="Email"
																		class="form-label fs-6 fw-bolder mb-3">Email</label>
																	<input type="email" v-model="email" 
																		class="form-control form-control-lg form-control-solid"
																		name="email_input" id="Email" />
																</div>
															</div>

															<div class="col-lg-6">
																<div class="fv-row mb-5">
																	<label for="Telefone"
																		class="form-label fs-6 fw-bolder mb-3">Telefone</label>
			</label>
			</label>
																	<input type="text" v-model="telefone" v-mask="'(###) #####-####'" placeholder="(41) 99999-9999"
																		class="form-control form-control-lg form-control-solid"
																		name="text_input" id="Telefone" />
																</div>
															</div>
															<div class="col-lg-6">
																<div class="fv-row mb-5">
																	<label for="Credencial"
																		class="form-label fs-6 fw-bolder mb-3 ">Credencial</label>
																	<select v-model="credencial_id" class="form-select form-control form-control-lg form-control-solid"
																		aria-label="Default select example" name="text_input">
																		<option selected>Qual a sua Credencial</option>
																		<option v-for="dado in lista_dados" :key="dado.id" :value="dado.id" >{{dado.nome_identificacao}}</option>
																		
																	</select>
																</div>
															</div>












															











															<div class="row mb-1">
															<div class="col-lg-6">
																<!--begin::Input group  -->
																<div class="mb-10 fv-row" data-kt-password-meter="true">
																	<!--begin::Wrapper-->
																	<div class="mb-1">
																		<!--begin::Label-->
																		<label
																			class="form-label fw-bold  fs-6 mb-2 required  ">
																			Nova Senha
																		</label>
																		<!--end::Label-->

																		<!--begin::Input wrapper-->
																		<div class="position-relative mb-3">
																			<input v-model="senha"
																				class="form-control form-control-lg form-control-solid"
																				type="password" placeholder=""
																				name="new_password"
																				autocomplete="off" />

																			<span
																				class="btn btn-sm btn-icon position-absolute translate-middle top-50 end-0 me-n2"
																				data-kt-password-meter-control="visibility">
																				<i class="bi bi-eye-slash fs-2"></i>

																				<i class="bi bi-eye fs-2 d-none"></i>
																			</span>
																		</div>
																		<!--end::Input wrapper-->

																		<!--begin::Meter-->
																		<div class="d-flex align-items-center mb-3"
																			data-kt-password-meter-control="highlight">
																			<div
																				class="flex-grow-1 bg-secondary bg-active-success rounded h-5px me-2">
																			</div>
																			<div
																				class="flex-grow-1 bg-secondary bg-active-success rounded h-5px me-2">
																			</div>
																			<div
																				class="flex-grow-1 bg-secondary bg-active-success rounded h-5px me-2">
																			</div>
																			<div
																				class="flex-grow-1 bg-secondary bg-active-success rounded h-5px">
																			</div>
																		</div>
																		<!--end::Meter-->
																	</div>
																	<!--end::Wrapper-->

																	<!--begin::Hint-->
																	<div class="text-muted">
																		Use 8 ou mais caracteres com uma mistura de
																		letras, números e símbolos.
																	</div>
																	<!--end::Hint-->
																</div>
																<!--end::Input group--->
															</div>

															<div class="col-lg-6">
																<!--begin::Input group--->
																<div class="fv-row mb-10">
																	<label
																		class="form-label fw-bold fs-6 mb-2 required">Confirma
																		Nova Senha</label>

																	<input
																		class="form-control form-control-lg form-control-solid"
																		type="password" placeholder=""
																		name="confirm_password" autocomplete="off" />
																</div>
																<!--end::Input group--->
															</div>

														</div>


														<div class="form-text mb-5">A senha deve ter pelo menos 8
															caracteres</div>


														<div class="col-lg-12">
															<div class="fv-row mb-15">
																<label for="Credencial"
																	class="form-label fs-6 fw-bolder mb-10">Selecione a
																	instituições de acesso</label>

																<div class="text-center">

																		<div class="row g-5">
																			<div class="col-lg-4">
																				<div class="card card-stretch mb-2">
																					<label
																						class="form-check form-switch form-check-custom form-check-solid">

																						<input class="form-check-input"
																							type="checkbox" />
																						<span class="form-check-label">
																							nome completo da instituicao
																						</span>
																					</label>
																				</div>
																			</div>
																			<div class="col-lg-4">
																				<div class="card card-stretch mb-2">
																					<label
																						class="form-check form-switch form-check-custom form-check-solid">

																						<input class="form-check-input"
																							type="checkbox" />
																						<span class="form-check-label">
																							nome completo da instituicao
																						</span>
																					</label>
																				</div>
																			</div>
																			<div class="col-lg-4">
																				<div class="card card-stretch mb-2">
																					<label
																						class="form-check form-switch form-check-custom form-check-solid">

																						<input class="form-check-input"
																							type="checkbox" />
																						<span class="form-check-label">
																							nome completo da instituicao
																						</span>
																					</label>
																				</div>
																			</div>
																			<div class="col-lg-4">
																				<div class="card card-stretch mb-2">
																					<label
																						class="form-check form-switch form-check-custom form-check-solid">

																						<input class="form-check-input"
																							type="checkbox" />
																						<span class="form-check-label">
																							nome completo da instituicao
																						</span>
																					</label>
																				</div>
																			</div>
																			<div class="col-lg-4">
																				<div class="card card-stretch mb-2">
																					<label
																						class="form-check form-switch form-check-custom form-check-solid">

																						<input class="form-check-input"
																							type="checkbox" />
																						<span class="form-check-label">
																							nome completo da instituicao
																						</span>
																					</label>
																				</div>
																			</div>
																			<div class="col-lg-4">
																				<div class="card card-stretch mb-2">
																					<label
																						class="form-check form-switch form-check-custom form-check-solid">

																						<input class="form-check-input"
																							type="checkbox" />
																						<span class="form-check-label">
																							nome completo da instituicao
																						</span>
																					</label>
																				</div>
																			</div>
										
																			<div class="col-lg-4">
																				<div class="card card-stretch mb-2">
																					<label
																						class="form-check form-switch form-check-custom form-check-solid">

																						<input class="form-check-input"
																							type="checkbox" />
																						<span class="form-check-label">
																							nome completo da instituicao
																						</span>
																					</label>
																				</div>
																			</div>
																			<div class="col-lg-4">
																				<div class="card card-stretch mb-2">
																					<label
																						class="form-check form-switch form-check-custom form-check-solid">

																						<input class="form-check-input"
																							type="checkbox" />
																						<span class="form-check-label">
																							nome completo da instituicao
																						</span>
																					</label>
																				</div>
																			</div>
																		</div>
																	
																</div>
															</div>
														</div>

														<div class="d-flex">

		<!--begin::Actions-->
													<button @click="addUsuario()" id="kt_docs_formvalidation_text_submit" type="submit" class="btn btn-primary">
														<span class="indicator-label">SALVAR</span>
														<span class="indicator-progress">Por favor, aguarde...
														<span class="spinner-border spinner-border-sm align-middle ms-2"></span></span>
													</button>
													<!--end::Actions-->

											
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
			sicret: null,
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
				this.token,	
			)
			if (!res.next) {
				this.error = res.message
				return null
			}

			console.log(this.telefone,)
		},


		async listar() {
            let res = await adm.listarCredencial( localStorage.getItem('token') )
			return res
        },


	},


	async mounted() {

		
		let validacao = document.createElement('script'); validacao.setAttribute('src', "../../assets/assets/js/custom/documentation/forms/formvalidation/basic.js");
		document.head.appendChild(validacao);

        this.lista_dados = (await this.listar()).dados
        this.id = lista_dados.id
         this.nome_identificacao = lista_dados.nome_identificacao
      this.recursos = lista_dados.recursos
            console.log(lista_dados)
   }, 


	created() {


	},


}


// confirmButton
