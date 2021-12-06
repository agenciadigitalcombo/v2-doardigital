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
												<div class="symbol symbol-100px symbol-lg-160px symbol-fixed position-relative">
												<img v-bind:src="gravatar" >
													<div class="position-absolute translate-middle bottom-0 start-100 mb-6 bg-success rounded-circle border border-4 border-white h-20px w-20px"></div>
												</div>
											</div>
											<!--end::Pic-->
											<!--begin::Info-->
												<div class="flex-grow-1">
													<!--begin::Title-->
													<div class="d-flex justify-content-between align-items-start flex-wrap mb-2">
														<!--begin::User-->
														<div class="d-flex flex-column">
															<!--begin::Name-->
															<div class="d-flex align-items-center">
																<a href="#" class="text-gray-900 text-hover-primary fs-2 fw-bolder me-1">{{nome}}</a>
																
																<div>
																<a href="#">
																	<!--begin::Svg Icon | path: icons/duotune/general/gen026.svg-->
																	<span class="svg-icon svg-icon-1 svg-icon-primary">
																			<svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" viewBox="0 0 24 24">
																				<path d="M10.0813 3.7242C10.8849 2.16438 13.1151 2.16438 13.9187 3.7242V3.7242C14.4016 4.66147 15.4909 5.1127 16.4951 4.79139V4.79139C18.1663 4.25668 19.7433 5.83365 19.2086 7.50485V7.50485C18.8873 8.50905 19.3385 9.59842 20.2758 10.0813V10.0813C21.8356 10.8849 21.8356 13.1151 20.2758 13.9187V13.9187C19.3385 14.4016 18.8873 15.491 19.2086 16.4951V16.4951C19.7433 18.1663 18.1663 19.7433 16.4951 19.2086V19.2086C15.491 18.8873 14.4016 19.3385 13.9187 20.2758V20.2758C13.1151 21.8356 10.8849 21.8356 10.0813 20.2758V20.2758C9.59842 19.3385 8.50905 18.8873 7.50485 19.2086V19.2086C5.83365 19.7433 4.25668 18.1663 4.79139 16.4951V16.4951C5.1127 15.491 4.66147 14.4016 3.7242 13.9187V13.9187C2.16438 13.1151 2.16438 10.8849 3.7242 10.0813V10.0813C4.66147 9.59842 5.1127 8.50905 4.79139 7.50485V7.50485C4.25668 5.83365 5.83365 4.25668 7.50485 4.79139V4.79139C8.50905 5.1127 9.59842 4.66147 10.0813 3.7242V3.7242Z" fill="#00A3FF" />
																				<path class="permanent" d="M14.8563 9.1903C15.0606 8.94984 15.3771 8.9385 15.6175 9.14289C15.858 9.34728 15.8229 9.66433 15.6185 9.9048L11.863 14.6558C11.6554 14.9001 11.2876 14.9258 11.048 14.7128L8.47656 12.4271C8.24068 12.2174 8.21944 11.8563 8.42911 11.6204C8.63877 11.3845 8.99996 11.3633 9.23583 11.5729L11.3706 13.4705L14.8563 9.1903Z" fill="white" />
																			</svg>
																		</span>
																	<!--end::Svg Icon-->
																</a>
																<a href="#" class="btn btn-sm btn-light-success fw-bolder ms-2 fs-8 py-1 px-3" data-bs-toggle="modal" data-bs-target="#kt_modal_upgrade_plan">Atualize</a>
															</div>
																</div>
															<!--end::Name-->
															<!--begin::Info-->
															<div class="d-flex flex-wrap fw-bold fs-6 mb-4 pe-2">
																<a href="#" class="d-flex align-items-center text-gray-400 text-hover-primary me-5 mb-2">
																	<!--begin::Svg Icon | path: icons/duotune/communication/com006.svg-->
																	<span class="svg-icon svg-icon-4 me-1">
																		<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
																			<path opacity="0.3" d="M22 12C22 17.5 17.5 22 12 22C6.5 22 2 17.5 2 12C2 6.5 6.5 2 12 2C17.5 2 22 6.5 22 12ZM12 7C10.3 7 9 8.3 9 10C9 11.7 10.3 13 12 13C13.7 13 15 11.7 15 10C15 8.3 13.7 7 12 7Z" fill="black" />
																			<path d="M12 22C14.6 22 17 21 18.7 19.4C17.9 16.9 15.2 15 12 15C8.8 15 6.09999 16.9 5.29999 19.4C6.99999 21 9.4 22 12 22Z" fill="black" />
																		</svg>
																	</span>
																	<!--end::Svg Icon-->Admin</a>
																<a href="#" class="d-flex align-items-center text-gray-400 text-hover-primary me-5 mb-2">
																	<!--begin::Svg Icon | path: icons/duotune/general/gen018.svg-->
																	<span class="svg-icon svg-icon-4 me-1">
																		<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
																			<path opacity="0.3" d="M18.0624 15.3453L13.1624 20.7453C12.5624 21.4453 11.5624 21.4453 10.9624 20.7453L6.06242 15.3453C4.56242 13.6453 3.76242 11.4453 4.06242 8.94534C4.56242 5.34534 7.46242 2.44534 11.0624 2.04534C15.8624 1.54534 19.9624 5.24534 19.9624 9.94534C20.0624 12.0453 19.2624 13.9453 18.0624 15.3453Z" fill="black" />
																			<path d="M12.0624 13.0453C13.7193 13.0453 15.0624 11.7022 15.0624 10.0453C15.0624 8.38849 13.7193 7.04535 12.0624 7.04535C10.4056 7.04535 9.06241 8.38849 9.06241 10.0453C9.06241 11.7022 10.4056 13.0453 12.0624 13.0453Z" fill="black" />
																		</svg>
																	</span>
																	<!--end::Svg Icon-->cidade, estado bairro</a>
																<a href="#" class="d-flex align-items-center text-gray-400 text-hover-primary mb-2">
																	<!--begin::Svg Icon | path: icons/duotune/communication/com011.svg-->
																	<span class="svg-icon svg-icon-4 me-1">
																		<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
																			<path opacity="0.3" d="M21 19H3C2.4 19 2 18.6 2 18V6C2 5.4 2.4 5 3 5H21C21.6 5 22 5.4 22 6V18C22 18.6 21.6 19 21 19Z" fill="black" />
																			<path d="M21 5H2.99999C2.69999 5 2.49999 5.10005 2.29999 5.30005L11.2 13.3C11.7 13.7 12.4 13.7 12.8 13.3L21.7 5.30005C21.5 5.10005 21.3 5 21 5Z" fill="black" />
																		</svg>
																	</span>
																	<!--end::Svg Icon-->{{email}}</a>
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
														<div class="d-flex align-items-center w-200px w-sm-300px flex-column ">
															<div class="d-flex justify-content-between w-100 mt-auto mb-2">
																<span class="fw-bold fs-6 text-gray-400">Preenchimento de Perfil</span>
																<span class="fw-bolder fs-6">50%</span>
															</div>
															<div class="h-5px mx-3 w-100 bg-light mb-3">
																<div class="bg-success rounded h-5px" role="progressbar" style="width: 50%;" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
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
										<ul class="nav nav-stretch nav-line-tabs nav-line-tabs-2x border-transparent fs-5 fw-bolder">
										<!--begin::Nav item-->
												<li class="nav-item mt-2"  v-if="step === 6">
													<a class="nav-link text-active-primary ms-0 me-10 py-5" href="#/perfil">Visão geral</a>
												</li>
												<!--end::Nav item-->
												<!--begin::Nav item-->
												<li class="nav-item mt-2"  v-if="step === 1 || step === 2 ||  step === 3 || step === 6">
													<a class="nav-link text-active-primary ms-0 me-10 py-5" href="#/perfil-editar">Seus Dados</a>
												</li>
												<!--end::Nav item-->
											<!--begin::Nav item-->
											<li class="nav-item mt-2" v-if="step === 3 || step === 2 || step === 6"">
												<a class="nav-link text-active-primary ms-0 me-10 py-5" href="#/editar-local">Meu Endereço</a>
											</li>
											<li class="nav-item mt-2" v-if="step === 3 || step === 6"">
												<a class="nav-link text-active-primary ms-0 me-10 py-5 active" href="#/editar-securanca">Seguranca</a>
											</li>
											<!--end::Nav item-->
										</ul>
										<!--begin::Navs-->
							</div>
						</div>
						<!--end::Navbar-->
						<!--begin::Sign-in Method-->
							<div class="card mb-5 mb-xl-10">
								<!--begin::Card header-->
								<div class="card-header border-0 cursor-pointer" role="button" data-bs-toggle="collapse" data-bs-target="#kt_account_signin_method">
									<div class="card-title m-0">
										<h3 class="fw-bolder m-0">Seguranca</h3>
									</div>
								</div>
								<!--end::Card header-->
								<!--begin::Content-->
								<div id="kt_account_signin_method" >
									<!--begin::Card body-->
									<div class="card-body border-top p-9">
										<!--begin::Email Address-->
									   <!-- 	<div class="d-flex flex-wrap align-items-center">
										
                                            <div id="kt_signin_email_edit" class="flex-row-fluid">
										
												<form id="kt_signin_change_email" class="form" novalidate="novalidate">
													<div class="row mb-6">
														<div class="col-lg-6 mb-4 mb-lg-0">
															<div class="fv-row mb-0">
																<label for="emailaddress" class="form-label fs-6 fw-bolder mb-3">Digite o novo endereço de e-mail</label>
																<input v-model="email" type="email" class="form-control form-control-lg form-control-solid" id="emailaddress" placeholder="Email Address" name="emailaddress" value="support@keenthemes.com" />
															</div>
														</div>
														<div class="col-lg-6">
															<div class="fv-row mb-0">
																<label for="confirmemailpassword" class="form-label fs-6 fw-bolder mb-3">Confirmar Senha</label>
																<input type="password" class="form-control form-control-lg form-control-solid" name="confirmemailpassword" id="confirmemailpassword" />
															</div>
														</div>
													</div>
													<div class="d-flex">
														<button  @click="alterarEmail" id="kt_signin_submit" type="button" class="btn btn-primary me-2 px-6">Alterar Email</button>
														<button id="kt_signin_cancel" type="button" class="btn btn-color-gray-400 btn-active-light-primary px-6">Cancelar</button>
													</div>
												</form>
											
											</div>
											
										
										</div>
										<div class="separator separator-dashed my-6"></div>
										-->
										<!--begin::Password-->
										<div class="d-flex flex-wrap align-items-center mb-10">
										
											<!--end::Label-->
											<!--begin::Edit-->
                                            <!-- <div id="kt_signin_password_edit" class="flex-row-fluid d-none"> -->
											<div id="kt_signin_password_edit" class="flex-row-fluid ">
												<!--begin::Form-->
												<form id="kt_signin_change_password" class="form" novalidate="novalidate">
													<div class="row mb-1">
														<div class="col-lg-4">
															<div class="fv-row mb-0">
																<label for="currentpassword" class="form-label fs-6 fw-bolder mb-3">Senha atual</label>
																<input   type="password" class="form-control form-control-lg form-control-solid" name="currentpassword" id="currentpassword" />
															</div>
														</div>
														<div class="col-lg-4">
															<div class="fv-row mb-0">
																<label for="newpassword" class="form-label fs-6 fw-bolder mb-3">Nova Senha</label>
																<input v-model="senha" type="password" class="form-control form-control-lg form-control-solid" name="newpassword" id="newpassword" />
															</div>
														</div>
														<div class="col-lg-4">
															<div class="fv-row mb-0">
																<label for="confirmpassword" class="form-label fs-6 fw-bolder mb-3">Confirma Nova Senha</label>
																<input  type="password" class="form-control form-control-lg form-control-solid" name="confirmpassword" id="confirmpassword" />
															</div>
														</div>
														<div class="col-lg-4">
															<div class="fv-row mb-0">
															<label for="confirmpassword" class="form-label fs-6 fw-bolder mb-3">token</label>
														<input v-model="token" type="password" class="form-control form-control-lg form-control-solid" name="newpassword" id="newpassword" />
															</div>
														</div>
													</div>
													<div class="form-text mb-5">A senha deve ter pelo menos 8 caracteres</div>
													<div class="d-flex">
														<button  @click="alterarSenha()" id="kt_password_submit" type="button" class="btn btn-primary me-2 px-6">Mudar Senha</button>
														<button id="kt_password_cancel" type="button" class="btn btn-color-gray-400 btn-active-light-primary px-6">Cancel</button>
													</div>
												</form>
												<!--end::Form-->
											</div>
											<!--end::Edit-->
									
										</div>
										<!--end::Password-->
										<!--begin::Notice-->
										<div class="notice d-flex bg-light-primary rounded border-primary border border-dashed p-6">
											<!--begin::Icon-->
											<!--begin::Svg Icon | path: icons/duotune/general/gen048.svg-->
											<span class="svg-icon svg-icon-2tx svg-icon-primary me-4">
												<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
													<path opacity="0.3" d="M20.5543 4.37824L12.1798 2.02473C12.0626 1.99176 11.9376 1.99176 11.8203 2.02473L3.44572 4.37824C3.18118 4.45258 3 4.6807 3 4.93945V13.569C3 14.6914 3.48509 15.8404 4.4417 16.984C5.17231 17.8575 6.18314 18.7345 7.446 19.5909C9.56752 21.0295 11.6566 21.912 11.7445 21.9488C11.8258 21.9829 11.9129 22 12.0001 22C12.0872 22 12.1744 21.983 12.2557 21.9488C12.3435 21.912 14.4326 21.0295 16.5541 19.5909C17.8169 18.7345 18.8277 17.8575 19.5584 16.984C20.515 15.8404 21 14.6914 21 13.569V4.93945C21 4.6807 20.8189 4.45258 20.5543 4.37824Z" fill="black" />
													<path d="M10.5606 11.3042L9.57283 10.3018C9.28174 10.0065 8.80522 10.0065 8.51412 10.3018C8.22897 10.5912 8.22897 11.0559 8.51412 11.3452L10.4182 13.2773C10.8099 13.6747 11.451 13.6747 11.8427 13.2773L15.4859 9.58051C15.771 9.29117 15.771 8.82648 15.4859 8.53714C15.1948 8.24176 14.7183 8.24176 14.4272 8.53714L11.7002 11.3042C11.3869 11.6221 10.874 11.6221 10.5606 11.3042Z" fill="black" />
												</svg>
											</span>
											<!--end::Svg Icon-->
											<!--end::Icon-->
											<!--begin::Wrapper-->
											<div class="d-flex flex-stack flex-grow-1 flex-wrap flex-md-nowrap">
												<!--begin::Content-->
												<div class="mb-3 mb-md-0 fw-bold">
													<h4 class="text-gray-900 fw-bolder">Proteja sua conta</h4>
													<div class="fs-6 text-gray-700 pe-7">
                                                     
                                             escolha senha dificil, Para fazer login, você também precisará fornecer um código
                                                    </div>
												</div>
												<!--end::Content-->
												<!--begin::Action-->
												<a href="#" class="btn btn-primary px-6 align-self-center text-nowrap" data-bs-toggle="modal" data-bs-target="#kt_modal_two_factor_authentication">Permitir</a>
												<!--end::Action-->
											</div>
											<!--end::Wrapper-->
										</div>
										<!--end::Notice-->
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
			nome: null,
            token: null,
            senha: null,
			email: null,
			telefone: null,
            error: null
        }
    },
	methods: {
		async alterarSenha() {
			this.error = null
			
			localStorage.removeItem('token')
            let res = await adm.alterar_senha(
                this.senha,
                this.token,
            )
            if (!res.next) {
				console.log(res)
                this.error = res.message
                return null
            }
            localStorage.setItem('token', res.token)
            window.location.href = `#/dash`
        },

        async alterarEmail() {
			this.error = null
			
			localStorage.removeItem('token')
            let res = await adm.recuperar_email(
                this.email
            )
            if (!res.next) {
				console.log(res)
                this.error = res.message
                return null
            }
            localStorage.setItem('token', res.token)
            window.location.href = `#/dash`
        },

		async listar() {
            let res = await adm.ListarPerfil( localStorage.getItem('token') )
			return res
        },

        updateForm(event) {
            this[event.name] = event.value
        }
    },
	async mounted() {
        this.user = localStorage.getItem('user')

		
		let dados = (await this.listar()).dados

		console.log(dados)
		this.nome = dados.nome
		this.email = dados.email
		this.cpf = dados.cpf
		this.telefone = dados.telefone
		this.step =   parseInt(dados.step)
    },

	created() {
		this.token = localStorage.getItem('token')
	},
}

