import adm from "../../../../../static/js/api/adm.js"

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

								<div class="container-xxl">

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
													<a class="nav-link text-active-primary ms-0 me-10 py-5 active"
														href="#/editar-local">Meu Endereço</a>
												</li>
												<li class="nav-item mt-2">
													<a class="nav-link text-active-primary ms-0 me-10 py-5"
														href="#/editar-securanca">Alterar Senha</a>
												</li>

											</ul>
										</div>
									</div>
									<div class="card mb-5 mb-xl-10">
										<div class="card-header">
											<div class="card-title">
												<h3>Meus Endereço</h3>
											</div>
										</div>

										<form @submit.prevent="editarEndereco" autocomplete="off" name="formulario" class="form">

											<div class="card-body border-top p-9">
												<div class="row mb-6">
													<label class="col-lg-4 col-form-label required fw-bold fs-6">Nome
														identificacao</label>
													<input v-model="id" type="hidden" name="nome"
														class="form-control form-control-lg form-control-solid"
														placeholder="Nome identificacao" />

													<div class="col-lg-8 fv-row">
														<input v-model="nome_identificacao" type="text"
															class="form-control form-control-lg form-control-solid"
															placeholder="Nome identificacao" />
													</div>
												</div>
												<div class="row mb-6">
													<label class="col-lg-4 col-form-label required fw-bold fs-6">CEP</label>
													<div class="col-lg-8 fv-row">
														<div class="input-group mb-3">
															<input v-model="cep" @keyup="searchCep()" v-mask="'########'" type="text"
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
											</div>
											<div class="row mb-6">
												<label
													class="col-lg-4 col-form-label required fw-bold fs-6">Rua/Avenida
													Nº</label>
												<div class="col-lg-8 fv-row">
													<input id="logradouro" v-model="logadouro" type="text" disabled
														class="form-control form-control-lg form-control-solid"
														placeholder="Localização" />
												</div>
											</div>
											<div class="row mb-6">
												<label
													class="col-lg-4 col-form-label required fw-bold fs-6">Numero</label>

												<div class="col-lg-8 fv-row">
													<input v-model="numero" type="text"
														class="form-control form-control-lg form-control-solid"
														placeholder="Numero" />
												</div>
											</div>
											<div class="row mb-6">
												<label class="col-lg-4 col-form-label fw-bold fs-6">
													<span class="required">Complemento</span>

												</label>
												<div class="col-lg-8 fv-row">
													<input v-model="complemento" type="text" name="Complemento"
														class="form-control form-control-lg form-control-solid" />
												</div>
											</div>

											<div class="row mb-6">
												<label class="col-lg-4 col-form-label fw-bold fs-6">
													<span class="required">Bairro</span>

												</label>
												<div class="col-lg-8 fv-row">
													<input id="bairro" v-model="bairro" type="text" name="Bairro" disabled
														class="form-control form-control-lg form-control-solid" />
												</div>
											</div>
											<div class="row mb-6">
												<label class="col-lg-4 col-form-label fw-bold fs-6">
													<span class="required">Cidade</span>

												</label>
												<div class="col-lg-8 fv-row">
													<input v-model="cidade" type="text" disabled
														class="form-control form-control-lg form-control-solid" />
												</div>
											</div>

											<div class="row mb-6">
												<label class="col-lg-4 col-form-label fw-bold fs-6">
													<span class="required">Estado</span>

												</label>
												<div class="col-lg-8 fv-row">
													<input id="uf" v-model="estado" type="text" disabled
														class="form-control form-control-lg form-control-solid" />
												</div>
											</div>

									</div>

									<c-mensagem :msg="msg" v-show="msg" ></c-mensagem>

									<div class="card-footer d-flex justify-content-end py-6 px-9">
										<button type="submit" class="btn btn-primary">
										<span class="indicator-label">SALVAR</span>
									</button>

							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
				</div>
			</div >
		</div >

	<c-footer />
	</div >
	`,


	data: function () {
		return {
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
			msg: "",
			items: [],
			data: null,
		}
	},
	methods: {

		async editarEndereco() {
			this.error = null

			let res = await adm.atualizarEndereco(
				this.token,
				this.nome_identificacao,
				this.cep,
				this.logadouro,
				this.numero,
				this.complemento,
				this.bairro,
				this.cidade,
				this.estado,

			)
			if (!res.next) {
				// this.error = res.message
				this.msg = res.message
				return null
			}

			this.msg = res.message,
				setTimeout(() => this.msg = "", 6000);
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

		mask_cep() {
			let mascara = this.cep
			mascara = mascara.replace(/\D/gi, '')
			mascara = mascara.replace(/(\d{5})(.*)/gi, '$1-$2')
			mascara = mascara.replace(/(\d{4}\s)(\d{1,3})(.*)/gi, '$1-$2')
			this.cep = mascara
		},

		searchCep() {
			if (this.cep.length == 8) {
				axios.get(`https://viacep.com.br/ws/${this.cep}/json/`)
					.then(response => {
						this.cep = this.cep.replace(/[^\d]+/g, '')
						this.logadouro = response.data.logradouro,
							this.bairro = response.data.bairro,
							this.cidade = response.data.localidade,
							this.estado = response.data.uf
					}
					)
					.catch(error =>
						console.log(error)
					)
			}
		}
	},

	async mounted() {

		// Rua/Avenida Nº
		let enderecoDados = (await this.listarEndereco()).dados || {}
		this.logadouro = enderecoDados.logadouro
		this.cep = enderecoDados.cep
		this.nome_identificacao = enderecoDados.nome_identificacao
		this.numero = enderecoDados.numero
		this.complemento = enderecoDados.complemento
		this.bairro = enderecoDados.bairro
		this.cidade = enderecoDados.cidade
		this.estado = enderecoDados.estado
		this.id = enderecoDados.id


	},

	created() {
		this.token = localStorage.getItem('token')
	},
}