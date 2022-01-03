import adm from "../../../../../static/js/api/adm.js"
const { required, sameAs, minLength } = window.validators

export default {
	template:`
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
														href="#/perfil-editar">Seus Dados</a>
												</li>
												<li class="nav-item mt-2">
													<a class="nav-link text-active-primary ms-0 me-10 py-5"
														href="#/editar-local">Meu Endereço</a>
												</li>
												<li class="nav-item mt-2">
													<a class="nav-link text-active-primary ms-0 me-10 py-5 active"
														href="#/editar-securanca">Alterar Senha</a>
												</li>
											</ul>
										</div>
									</div>
									<div class="card mb-5 mb-xl-10">
										<div class="card-header border-0 cursor-pointer" role="button"
											data-bs-toggle="collapse" data-bs-target="#kt_account_signin_method">
											<div class="card-title m-0">
												<h3 class="fw-bolder m-0">Alterar Senha</h3>
											</div>
										</div>
										
											<div class="card-body border-top p-9">
												<div class="d-flex flex-wrap align-items-center mb-10">

														<div class="flex-row-fluid">

															<form class="form" @submit.prevent="alterarSenha" novalidate="novalidate">
													
															<div class="row mb-1">

																<div class="col-lg-6">
																	<div class="mb-10 fv-row" data-kt-password-meter="true">

																		<div class="mb-1">
																			<label
																				class="form-label fw-bold  fs-6 mb-2 required  ">
																				Nova Senha
																			</label>
																			<div class="position-relative mb-3">
																				<input id="senha" v-model.trin="$v.senha.$model"
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


																		<div class="erro_texte" v-if="!$v.repetirsenha.sameAsPassword">
																			As senhas devem ser idênticas
																		</div>

																		<div class="sucesso_texte" v-else>

																		</div>
																	</div>
																</div>
															</div>

															<c-mensagem :msg="msg" v-show="msg" ></c-mensagem>

															<button type="submit" class="btn btn-primary">
																<span class="indicator-label">
																	Mudar Senha
																</span>
															</button>
						
														</form>
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

			<!--end::Root-->

			<c-footer />
		</div>

    `,


	data: function () {
		return {
			token: null,
			senha: null,
			repetirsenha: null,
			mostrarsenha: false,
			msg: "",
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
	created() {
		this.token = localStorage.getItem('token')
	},
}


