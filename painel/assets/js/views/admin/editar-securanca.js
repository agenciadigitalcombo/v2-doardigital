import adm from "../../../../../static/js/api/adm.js"
const { required, sameAs, minLength } = window.validators

export default {
	template: `
	<div>
    <c-header></c-header>
    <c-aside></c-aside>


	<!--begin::Root-->
		<div class="d-flex flex-column flex-root">
		
			<div class="page d-flex flex-row flex-column-fluid">

				<div class="wrapper d-flex flex-column flex-row-fluid" id="kt_wrapper">

					<div class="content d-flex flex-column flex-column-fluid" id="kt_content">
			
						<div class="post d-flex flex-column-fluid" id="kt_post">
				
							<div id="kt_content_container" class="container-xxl">
				
								<div class="card mb-5 mb-xl-10">
									<div class="card-body pt-9 pb-0">
								
																	
	<c-detalhe></c-detalhe>
										<ul
											class="nav nav-stretch nav-line-tabs nav-line-tabs-2x border-transparent fs-5 fw-bolder">
											
											<li class="nav-item mt-2">
												<a class="nav-link text-active-primary ms-0 me-10 py-5"
													href="#/perfil">Visão geral</a>
											</li>
											<li class="nav-item mt-2">
												<a class="nav-link text-active-primary ms-0 me-10 py-5"
													href="#/perfil-editar">Seus Dados</a>
											</li>
											<li class="nav-item mt-2">
												<a class="nav-link text-active-primary ms-0 me-10 py-5"
													href="#/editar-local">Meu Endereço</a>
											</li>
											<li class="nav-item mt-2">
												<a class="nav-link text-active-primary ms-0 me-10 py-5 active"
													href="#/editar-securanca">Seguranca</a>
											</li>
										</ul>
									</div>
								</div>
								<div class="card mb-5 mb-xl-10">
									<div class="card-header border-0 cursor-pointer" role="button"
										data-bs-toggle="collapse" data-bs-target="#kt_account_signin_method">
										<div class="card-title m-0">
											<h3 class="fw-bolder m-0">Seguranca</h3>
										</div>
									</div>
									<div id="kt_account_signin_method">
									
										<div class="card-body border-top p-9">
											<div class="d-flex flex-wrap align-items-center mb-10">

												<!-- <div id="kt_signin_password_edit" class="flex-row-fluid d-none"> -->
												<div id="kt_signin_password_edit" class="flex-row-fluid ">

												<form class="form" @submit.prevent="alterarSenha" novalidate="novalidate">
														<div class="fv-row mb-10">
															<label class="required form-label fs-6 mb-2">Senha
																atual</label>

															<input
																class="form-control form-control-lg form-control-solid"
																type="password" placeholder="" name="current_password"
																autocomplete="off" />
														</div>

														<div class="row mb-1">
															<div class="col-lg-6">
																<div class="mb-10 fv-row" data-kt-password-meter="true">
																
																	<div class="mb-1">
																	
																		<label
																			class="form-label fw-bold  fs-6 mb-2 required  ">
																			Nova Senha
																		</label>
																		<div class="position-relative mb-3">
																			<input  id="senha" v-model.trin="$v.senha.$model"
																			:class=" {'is-invalid':$v.senha.$error, 'is-valid':!$v.senha.$invalid }"
																				class="form-control form-control-lg form-control-solid" type="password" />
																				<div class="erros" v-if="$v.senha.$error">
																	<div class="erro_texte" v-if="!$v.senha.required">
																	A Senha é necessária</div>
																	<div class="erro_texte" v-if="!$v.senha.minLength">
															 	Use 8 ou mais caracteres com uma mistura de letras, números e símbolos.
																</div>
																</div>

																<div class="sucesso_texte" v-else> 
																		
																	</div>

																		</div>
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
																	</div>
																	<div>
														<input type="checkbox" id="mostrarsenha" @click="togleMostraSenha" v-model="mostrarsenha">
														<label classe="" for="mostrarsenha">Mostrar Senha</label>
														</div>
																</div>
															</div>

															<div class="col-lg-6">
																<div class="fv-row mb-10">
																	<label
																		class="form-label fw-bold fs-6 mb-2 required">Confirma
																		Nova Senha</label>

																	<input type="password" v-model.trin="$v.repetirsenha.$model"
																	:class=" {'is-invalid':$v.repetirsenha.$error, 'is-valid': (senha != '') ? !$v.repetirsenha.$invalid : ''}"
																		class="form-control form-control-lg form-control-solid"/>

																	
																		<div class="erro_texte"  v-if="!$v.repetirsenha.sameAsPassword">
																		As senhas devem ser idênticas
																		</div>
	
																	<div class="sucesso_texte" v-else> 
																			
																		</div>
																</div>
															</div>
														</div>

						
														<button type="submit" class="btn btn-primary">
															<span class="indicator-label">
																Mudar Senha
															</span>
														</button>
														<button id="kt_password_cancel" type="button"
															class="btn btn-color-gray-400 btn-active-light-primary px-6">Cancel</button>
								</form>
												</div>
											</div>
											<div
												class="notice d-flex bg-light-primary rounded border-primary border border-dashed p-6">
											<span class="svg-icon svg-icon-2tx svg-icon-primary me-4">
													<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
														viewBox="0 0 24 24" fill="none">
														<path opacity="0.3"
															d="M20.5543 4.37824L12.1798 2.02473C12.0626 1.99176 11.9376 1.99176 11.8203 2.02473L3.44572 4.37824C3.18118 4.45258 3 4.6807 3 4.93945V13.569C3 14.6914 3.48509 15.8404 4.4417 16.984C5.17231 17.8575 6.18314 18.7345 7.446 19.5909C9.56752 21.0295 11.6566 21.912 11.7445 21.9488C11.8258 21.9829 11.9129 22 12.0001 22C12.0872 22 12.1744 21.983 12.2557 21.9488C12.3435 21.912 14.4326 21.0295 16.5541 19.5909C17.8169 18.7345 18.8277 17.8575 19.5584 16.984C20.515 15.8404 21 14.6914 21 13.569V4.93945C21 4.6807 20.8189 4.45258 20.5543 4.37824Z"
															fill="black" />
														<path
															d="M10.5606 11.3042L9.57283 10.3018C9.28174 10.0065 8.80522 10.0065 8.51412 10.3018C8.22897 10.5912 8.22897 11.0559 8.51412 11.3452L10.4182 13.2773C10.8099 13.6747 11.451 13.6747 11.8427 13.2773L15.4859 9.58051C15.771 9.29117 15.771 8.82648 15.4859 8.53714C15.1948 8.24176 14.7183 8.24176 14.4272 8.53714L11.7002 11.3042C11.3869 11.6221 10.874 11.6221 10.5606 11.3042Z"
															fill="black" />
													</svg>
												</span>
												<div class="d-flex flex-stack flex-grow-1 flex-wrap flex-md-nowrap">
											
													<div class="mb-3 mb-md-0 fw-bold">
														<h4 class="text-gray-900 fw-bolder">Proteja sua conta</h4>
														<div class="fs-6 text-gray-700 pe-7">

															escolha senha dificil, Para fazer login, você também
															precisará fornecer um código
														</div>
													</div>
													<a href="#"
														class="btn btn-primary px-6 align-self-center text-nowrap"
														data-bs-toggle="modal"
														data-bs-target="#kt_modal_two_factor_authentication">Permitir</a>
											
												</div>
											</div>
									
										</div>
									</div>
								</div>	</div>
							</div>
					</div>
					</div>
			</div>
		</div>

		<!--end::Root-->

		<c-footer/>
</div>

    `,


	data: function () {
		return {
			token: null,
			senha: null,
			repetirsenha: null,
			mostrarsenha: false,
			error: null
		}
	},

	validations: {
		senha: {
			required,
			minLength: minLength(8)
		},
		repetirsenha: {
			sameAsPassword: sameAs('senha')
		}
	},

	methods: {
		async alterarSenha() {
			this.error = null

			this.$v.$touch()
			if (this.$v.$invalid) {
				this.submitStatus = 'ERROR'
			} else {

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

				this.submitStatus = 'PENDING'
				setTimeout(() => {
					this.submitStatus = 'OK'
					this.msg = res.message
				}, 500)
			}
		},

		togleMostraSenha(){
			var show = document.getElementById('senha')
			if(this.mostrarsenha == false){
				this.mostrarsenha =true
				show.type = "text"
			}else {
				this.mostrarsenha = false
				show.type = "password"
			}
		}

	},
	async mounted() {


	},

	created() {
		this.token = localStorage.getItem('token')
	},
}


// Proteja sua conta
