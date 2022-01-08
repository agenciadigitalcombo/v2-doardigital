import adm from "../../../../../static/js/api/adm.js"
const { required, minLength, between } = window.validators

export default {
	template:`

		<div>

			<c-header></c-header>
			<c-aside></c-aside>

			<!--begin::Root-->
			<div class="d-flex flex-column flex-root">
				<div class="page d-flex flex-row flex-column-fluid">
					<div class="wrapper d-flex flex-column flex-row-fluid"  >
						<div class="content d-flex flex-column flex-column-fluid"  >
							<div class="post d-flex flex-column-fluid"  >
								<div class="container-xxl">
									<div class="card mb-5 mb-xl-10">
										<div class="card-body pt-5 pb-0">
											<ul class="nav nav-stretch nav-line-tabs nav-line-tabs-2x border-transparent fs-5 fw-bolder">

												<li class="nav-item mt-2">
													<a class="nav-link text-active-primary ms-0 me-10 py-5 " href="#/add-instituicoes">Informação da Instituição</a>
												</li>
												<li class="nav-item mt-2">
													<a class="nav-link text-active-primary ms-0 me-10 py-5 active" href="#/endereco-instituicoes">Endereço </a>
												</li>
												<li class="nav-item mt-2">
													<a class="nav-link text-active-primary ms-0 me-10 py-5" href="#/banco-instituicoes">Dados Bancario</a>
												</li>

												<li class="nav-item mt-2">
												<a class="nav-link text-active-primary ms-0 me-10 py-5 " href="#/dominio-instituicoes">Domínio</a>
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
				
										<form @submit.prevent="cadastrarEndereco" autocomplete="off" name="formulario" class="form">

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
														<input v-model.trin="$v.cep.$model" @keyup="searchCep()" v-mask="'########'" type="text"
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

												<div class="erros" v-if="$v.cep.$error">
													<div class="erro_texte" v-if="!$v.cep.required">O CEP
														é necessária</div>
													<div class="erro_texte" v-if="!$v.cep.minLength">
														O CEP São 8 numeros.</div>
												</div>

												<div class="sucesso_texte" v-else>

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

	validations: {
		cep: {
			required,
			minLength: minLength(8)
		},
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


	this.id = localStorage.getItem('instituicao_id')

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

