import adm from "../../../../../../static/js/api/adm.js"
const { required, sameAs, minLength, between, email } = window.validators

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
										<div class="card-header border-0 cursor-pointer" role="button"
											data-bs-toggle="collapse" data-bs-target="#kt_account_signin_method">
											<div class="card-title m-0">
												<h3 class="fw-bolder m-0">Novo Usuário</h3>
											</div>
										</div>
										<div id="kt_account_signin_method">

											<div class="card-body border-top p-9">
												<div class="d-flex flex-wrap align-items-center mb-10">

													<!-- <div id="kt_signin_password_edit" class="flex-row-fluid d-none"> -->
														<div id="kt_signin_password_edit" class="flex-row-fluid ">

															<form @submit.prevent="addUsuario" class="form" >
																<div class="row mb-1">

																	<div class="col-lg-6">
																		<div class="fv-row mb-5">
																			<label for="nome" required
																				class="form-label fs-6 fw-bolder mb-3">Nome</label>
																			<input type="text" v-model="nome"
																				class="form-control form-control-lg form-control-solid" required/>
																		</div>
																	</div>
																	<div class="col-lg-6">
																		<div class="fv-row mb-5">
																			<label for="Email" required
																				class="form-label fs-6 fw-bolder mb-3">Email</label>
																			<input type="email" v-model="email"
																				class="form-control form-control-lg form-control-solid" required/>
																		</div>
																	</div>

																	<div class="col-lg-6">
																		<div class="fv-row mb-5">
																			<label for="Telefone" required
																				class="form-label fs-6 fw-bolder mb-3">Telefone</label>
																		</label>
																	</label>
																	<input type="text" v-model="telefone" v-mask="'(###) #####-####'" placeholder="(41) 99999-9999"
																		class="form-control form-control-lg form-control-solid" required/>
																</div>
														</div>
														<div class="col-lg-6">
															<div class="fv-row mb-5">
																<label for="Credencial"
																	class="form-label fs-6 fw-bolder mb-3 ">Credencial</label>
																<select v-model="credencial_id" class="form-select form-control form-control-lg form-control-solid" required>
																	<option selected>Qual a sua Credencial</option>
																	<option v-for="dado in lista_credencial" :key="dado.id" :value="dado.id" >{{ dado.nome_identificacao }}</option>

															</select>
														</div>
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

													<div class="col-lg-12">
														<div class="fv-row mb-15">
															<label for="Credencial"
																class="form-label fs-6 fw-bolder mb-10">Selecione a
																instituições de acesso</label>

															<div class="text-center" >

																<div class="row g-5">
																	<div class="col-lg-4" v-for="dado in lista_instituicao" :key="dado.id" >
																		<div class="card card-stretch mb-2">
																			<label
																				class="form-check form-switch form-check-custom form-check-solid">

																				<input class="form-check-input" v-model="instituicao_id" :value="dado.id"
																					type="checkbox" />
																				<span class="form-check-label">
																				{{dado.nome_fantasia}} id {{dado.id}}
																				</span>
																			</label>
																		</div>
																	</div>
																	id {{instituicao_id}}
																  
																</div>

															</div>
														</div>
													</div>

													<div v-if="jms===true"> 
													<c-mensagem :msg="msg" ></c-mensagem>
												  </div>
												  <div v-else> 
													<c-mensagem :error="error" ></c-mensagem>
												  </div>
													
													<div class="d-flex">
														<button type="submit" class="btn btn-primary">
														<span class="indicator-label">SALVAR</span>
														<span class="indicator-progress">Por favor, aguarde...
															<span class="spinner-border spinner-border-sm align-middle ms-2"></span></span>
													</button>

													<button id="kt_password_cancel" type="button"
														class="btn btn-color-gray-400 btn-active-light-primary px-6">Cancelar</button>
												</div>
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
		</div >

		<!--end:: Root-->

	<c-footer />
		
	</div >
	`,

	data: function () {
		return {

			id: null,
			nome: null,
			email: null,
			senha: null,
			repetirsenha: null,
			mostrarsenha: false,
			telefone: null,
			credencial_id: "",
			token: null,
			sicret: null,
			lista_credencial: [],
			lista_instituicao: [],
			instituicao_id:  [],
			nome_identificacao: null,
			recursos: null,
				msg: null,
			error: null,
			jms: true,

		}
	},

	validations: {
		senha: {
			required,
			minLength: minLength(8)
		},
		repetirsenha: {
			sameAsPassword: sameAs('senha')
		},
	
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
				this.jms= res.next,
				this.error = res.message
				return null
			}

			this.jms= res.next,
			this.msg = res.message
			setTimeout(() => {
					window.location.href = "#/usuarios"
			}, 1200)
			return res
			
		},

		async vinclular() {
			alert("ola vincular")
		},
		async listarCred() {
			let res = await adm.listarCredencial(localStorage.getItem('token'))
			return res
		},

			async listarInstit() {
			let res = await adm.listarInstutuicao(localStorage.getItem('token'))
			return res
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
       this.lista_credencial = (await this.listarCred()).dados 

	   this.lista_instituicao = (await this.listarInstit()).dados
	   this.nome_fantasia = this.lista_instituicao.nome_fantasia,
	   this.subdomaim = this.lista_instituicao.subdomaim,
	   this.id = this.lista_instituicao.id
	},


	created() {


	},


}


// confirmButton
