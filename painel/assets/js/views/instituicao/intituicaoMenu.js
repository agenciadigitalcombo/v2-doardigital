import adm from "../../../../../static/js/api/adm.js"

export default {
	template: `
<div>
	<div>

		<c-header></c-header>
		<c-aside></c-aside>

		<!--begin::Root-->
		<div class="d-flex flex-column flex-root">
			<div class="page d-flex flex-row flex-column-fluid">
				<div class="wrapper d-flex flex-column flex-row-fluid" id="kt_wrapper">
					<div class="d-flex flex-column flex-root">
						<div class="content d-flex flex-column flex-column-fluid" id="kt_content">
							<div class="post d-flex flex-column-fluid" id="kt_post">
								<div id="kt_content_container" class="container-xxl">
									<div class="card card-flush">
										<div class="card-header mt-5">
											<div class="card-title flex-column">
												<h3 class="fw-bolder mb-1"> Minhas Instituições</h3>
											</div>
											<div class="card-toolbar">
												<a type="button" class="btn btn-light-primary"
													href="#/add-instituicoes">
													<span class="svg-icon svg-icon-3">
														<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
															viewBox="0 0 24 24" fill="none">
															<rect opacity="0.3" x="2" y="2" width="20" height="20"
																rx="5" fill="black" />
															<rect x="10.8891" y="17.8033" width="12" height="2" rx="1"
																transform="rotate(-90 10.8891 17.8033)" fill="black" />
															<rect x="6.01041" y="10.9247" width="12" height="2" rx="1"
																fill="black" />
														</svg>
													</span>
													Add Instituição
												</a>
											</div>
										</div>
										<div class="card-body pt-0">
											<div class="d-flex flex-column flex-root">
												<div class="page d-flex flex-row flex-column-fluid">
												</div>
											</div>
											<div class="row g-5">
												<div class="col-lg-6" v-for="item in dados" :key="item.id">
													<div
														class="notice d-flex bg-light-primary rounded border-primary border border-dashed p-6">
														<span class="svg-icon svg-icon-2tx svg-icon-primary me-4">
															<svg xmlns="http://www.w3.org/2000/svg" width="16"
																height="16" fill="currentColor" class="bi bi-bank2"
																viewBox="0 0 16 16">
																<path
																	d="M8.277.084a.5.5 0 0 0-.554 0l-7.5 5A.5.5 0 0 0 .5 6h1.875v7H1.5a.5.5 0 0 0 0 1h13a.5.5 0 1 0 0-1h-.875V6H15.5a.5.5 0 0 0 .277-.916l-7.5-5zM12.375 6v7h-1.25V6h1.25zm-2.5 0v7h-1.25V6h1.25zm-2.5 0v7h-1.25V6h1.25zm-2.5 0v7h-1.25V6h1.25zM8 4a1 1 0 1 1 0-2 1 1 0 0 1 0 2zM.5 15a.5.5 0 0 0 0 1h15a.5.5 0 1 0 0-1H.5z" />
															</svg>
														</span>
														<div
															class="d-flex flex-stack flex-grow-1 flex-wrap flex-md-nowrap">
															<div class="mb-3 mb-md-0 fw-bold">
																<h4 class="text-gray-900 fw-bolder">
																	{{item.nome_fantasia}}</h4>
																<div class="fs-6 text-gray-700 pe-7">
																	{{item.subdomaim}}
																</div>
															</div>
															<a @click="addLocahostore(item)"
																class="btn btn-primary px-6 align-self-center text-nowrap">Gerenciar</a>
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
				</div>
			</div>
		</div>

		<c-footer />
	</div>

</div>
`,


	data: function () {

		return {
			token: null,
			id: null,
			nome_fantasia: null,
			razao_social: null,
			subdomaim: null,



			dados: [],
			item: []
			// .doardigital.com.br
		}

	},

	async mounted() {

		this.dados = (await this.listar()).dados
		this.nome_fantasia = this.dados.nome_fantasia,
			this.subdomaim = this.dados.subdomaim,
			this.id = this.dados.id

	},



	methods: {
		addLocahostore(item) {
			this.id = item.id
			this.nome_fantasia = item.nome_fantasia
			this.subdomaim = item.subdomaim

			localStorage.setItem("instituicao_id", this.id);
			localStorage.setItem("instituicao_nome", this.nome_fantasia);
			localStorage.setItem("instituicao_subdomaim", this.subdomaim);
			window.location.href = "#/dash"
		},

		async listar() {
			let res = await adm.listarInstutuicao(localStorage.getItem('token'))
			return res
		},
	},
}