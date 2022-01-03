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

						<div class="content d-flex flex-column flex-column-fluid" id="kt_content">

							<div class="post d-flex flex-column-fluid" id="kt_post">

								<div id="kt_content_container" class="container-xxl">

									<div class="card mb-5 mb-xl-10">
										<div class="card-body pt-9 pb-0">

											<c-detalhe></c-detalhe>

											<ul class="nav nav-stretch nav-line-tabs nav-line-tabs-2x border-transparent fs-5 fw-bolder">
												<li class="nav-item mt-2" >
													<a class="nav-link text-active-primary ms-0 me-10 py-5 active" href="#/perfil-editar">Seus Dados</a>
												</li>
												<li class="nav-item mt-2" >
													<a class="nav-link text-active-primary ms-0 me-10 py-5" href="#/editar-local">Meu Endereço</a>
												</li>
												<li class="nav-item mt-2" >
													<a class="nav-link text-active-primary ms-0 me-10 py-5" href="#/editar-securanca">Alterar Senha </a>
												</li>
											</ul>
										</div>
									</div>
									<div class="card mb-5 mb-xl-10">
										<div class="card-header border-0 cursor-pointer" role="button" data-bs-toggle="collapse" data-bs-target="#kt_account_profile_details" aria-expanded="true" aria-controls="kt_account_profile_details">
											<!--begin::Card title-->
											<div class="card-title m-0">
												<h3 class="fw-bolder m-0">Detalhes de perfil</h3>
											</div>
										</div>
										<div id="kt_account_profile_details" >

											<form  @submit.prevent="alterarAdm" class="form">
												<div class="card-body border-top p-9">

													<div class="row mb-6">
														<label class="col-lg-4 col-form-label required fw-bold fs-6">Nome completo
															<i class="fas fa-exclamation-circle ms-1 fs-7" data-bs-toggle="tooltip" title="Preecha o Seu nome completo"></i>
														</label>
																<div class="col-lg-8 fv-row">
																	<input v-model="nome" type="text" name="fname" class="form-control form-control-lg form-control-solid mb-3 mb-lg-0" placeholder="Primeiro nome" />							
														</div>
													</div>
													<div class="row mb-6">
														<label class="col-lg-4 col-form-label required fw-bold fs-6">CPF
															<i class="fas fa-exclamation-circle ms-1 fs-7" data-bs-toggle="tooltip" title="Adicione o seu CPF"></i></label>

														<div class="col-lg-8 fv-row">
															<input v-model="cpf" type="text" name="cpf" class="form-control form-control-lg form-control-solid" v-mask="'###.###.###-##'" placeholder="000.000.000-00" />
														</div>
													</div>
													<div class="row mb-6">
														<label class="col-lg-4 col-form-label required fw-bold fs-6">Data Nascimento</label>

														<div class="col-lg-8 fv-row">
															<input v-model="data_nascimento" type="text" name="nascimento" class="form-control form-control-lg form-control-solid" v-mask="'##/##/####'" placeholder="dd/mm/aaaa" />
														</div>
													</div>
													<div class="row mb-6">
														<label class="col-lg-4 col-form-label fw-bold fs-6">
															<span class="required">Telefone</span>
															<i class="fas fa-exclamation-circle ms-1 fs-7" data-bs-toggle="tooltip" title="Adicione o nome de Telefone activo"></i>
														</label>
														<div class="col-lg-8 fv-row">
															<input v-model="telefone" type="tel" name="phone" class="form-control form-control-lg form-control-solid" v-mask="'(##) #####-####'" placeholder="(41) 99999-9999" />
														</div>
													</div>

													<div class="row mb-6">
														<label class="col-lg-4 col-form-label fw-bold fs-6">
															<span class="required">Email</span>
															<i class="fas fa-exclamation-circle ms-1 fs-7" data-bs-toggle="tooltip" title="Adicione o nome de Telefone activo"></i>
														</label>
														<div class="col-lg-8 fv-row">
															<input v-model="email" type="email" class="form-control form-control-lg form-control-solid" disabled/>
														</div>
													</div>

												</div>
												<c-mensagem :msg="msg" v-show="msg" ></c-mensagem>

											<div class="card-footer d-flex justify-content-end py-6 px-9">
												<button type="submit" class="btn btn-primary">SALVAR</button>
										
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
	<c-footer />
	</div >
	`,


	data: function () {
		return {
			nome: null,
			token: null,
			email: null,
			cpf: null,
			telefone: null,
			data_nascimento: null,
			error: null,
			data: null,
			msg: "",
			jms: "",
			dados: null,

		}
	},
	methods: {

		async alterarAdm() {
			this.error = null

			let res = await adm.atualizar(
				this.token,
				this.nome,
				this.cpf,
				this.telefone,
				this.data_nascimento,
				
			)
			if (!res.next) {
				console.log(res)
				this.msg = res.message,
				this.error = res.message
				return null
			}
			this.msg = res.message,
				setTimeout(() => this.msg = "", 3000);
		},

		updateForm(event) {
			this[event.name] = event.value
		},

		async listar() {
			let res = await adm.ListarPerfil(localStorage.getItem('token'))
			return res
		},
	},
	async mounted() {
		this.token = localStorage.getItem('token')
		let dados = (await this.listar()).dados

		console.log(dados)
		this.nome = dados.nome
		this.email = dados.email
		this.cpf = dados.cpf
		this.telefone = dados.telefone
		this.token = dados.token
		this.data_nascimento = dados.data_nascimento
	},



}

