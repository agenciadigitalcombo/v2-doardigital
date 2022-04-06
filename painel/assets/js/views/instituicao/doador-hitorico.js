import adm from "../../../../../static/js/api/adm.js"

export default {
	template: `
<div>
	<div>

		<c-header></c-header>
		<c-aside></c-aside>

		<!--begin::Root Usuario-->
		<div class="d-flex flex-column flex-root">
			<div class="page d-flex flex-row flex-column-fluid">

				<div class="wrapper d-flex flex-column flex-row-fluid" id="kt_wrapper">
					<div class="content d-flex flex-column flex-column-fluid" id="kt_content">
						<div class="post d-flex flex-column-fluid" id="kt_post">
							<div id="kt_content_container" class="container-xxl">
								<div class="d-flex flex-column flex-xl-row">
									<div class="flex-column flex-lg-row-auto w-100 w-xl-350px mb-10">
										<div class="card mb-5 mb-xl-8">
											<div class="card-body">
												<div class="d-flex flex-center flex-column py-5">
													<div class="symbol symbol-100px symbol-circle mb-7">
														<img src="../painel/assets/image/gravatar.png" alt="image" />
													</div>
													<a href="#"
														class="fs-3 text-gray-800 text-hover-primary fw-bolder mb-3">{{nome}}</a>
													<div class="mb-9">
														<div class="badge" :class="'tipo_'+tipo">
															{{tipo}}</div>
													</div>
												</div>
												<div class="d-flex flex-stack fs-4 py-3">
													<div class="fw-bolder rotate collapsible" data-bs-toggle="collapse"
														href="#kt_user_view_details" role="button" aria-expanded="false"
														aria-controls="kt_user_view_details">Detalhes
														<span class="ms-2 rotate-180">
															<span class="svg-icon svg-icon-3">
																<svg xmlns="http://www.w3.org/2000/svg" width="24"
																	height="24" viewBox="0 0 24 24" fill="none">
																	<path
																		d="M11.4343 12.7344L7.25 8.55005C6.83579 8.13583 6.16421 8.13584 5.75 8.55005C5.33579 8.96426 5.33579 9.63583 5.75 10.05L11.2929 15.5929C11.6834 15.9835 12.3166 15.9835 12.7071 15.5929L18.25 10.05C18.6642 9.63584 18.6642 8.96426 18.25 8.55005C17.8358 8.13584 17.1642 8.13584 16.75 8.55005L12.5657 12.7344C12.2533 13.0468 11.7467 13.0468 11.4343 12.7344Z"
																		fill="black" />
																</svg>
															</span>
														</span>
													</div>
												</div>
												<div class="separator"></div>
												<div id="kt_user_view_details" class="collapse show">
													<div class="pb-5 fs-6">
														<div class="fw-bolder mt-5">Email</div>
														<div class="text-gray-600">
															<a href="#"
																class="text-gray-600 text-hover-primary">{{email}}</a>
														</div>
														<div class="fw-bolder mt-5">Telefone</div>
														<div class="text-gray-600">{{telefone}}</div>
														<div class="fw-bolder mt-5">CPF</div>
														<div class="text-gray-600">{{cpf}}</div>
														<!--begin::Details item-->
														<!--begin::Details item-->
														<div class="fw-bolder mt-5">Endereço</div>
														<div class="text-gray-600">
															<span style="color: black;">CEP: </span>
															{{end.cep}},
															<br />
															<span style="color: black;">Rua: </span>
															{{end.logadouro}}
															<br />
															<span style="color: black;">Número: </span>
															{{end.numero}}
															<br />
															<span style="color: black;">Bairro: </span>
															{{end.bairro}}
															<br />
															<span style="color: black;">Cidade: </span>
															{{end.cidade}}
															<br />
															<span style="color: black;">Estado: </span>
															{{end.estado}}
														</div>

														<div class="rotaObscura">
															<input v-mask="'#####-###'" v-model="end.cep"
																class="invisivel" />
															<input v-mask="'###.###.###-##'" v-model="cpf"
																class="invisivel" />
															<input v-mask="'(##) # ####-####'" v-model="telefone"
																class="invisivel" />
														</div>

														<!--begin::Details item-->

													</div>
												</div>
												<!--end::Details content-->
											</div>
											<!--end::Card body-->
										</div>
										<!--end::Card-->

									</div>
									<!--end::Sidebar-->
									<!--begin::Content-->
									<div class="flex-lg-row-fluid ms-lg-15">
										<!--begin:::Tabs-->
										<ul
											class="nav nav-custom nav-tabs nav-line-tabs nav-line-tabs-2x border-0 fs-4 fw-bold mb-8">
											<!--begin:::Tab item-->
											<li class="nav-item">
												<a class="nav-link text-active-primary pb-4" @click="visaoV()"
													:class="{ active: visao }">Visão Geral</a>
											</li>
											<!--end:::Tab item-->

											<!--begin:::Tab item Security-->
											<li class="nav-item" v-if="tipo !== 'UNICO'" >
												<a class="nav-link text-active-primary pb-4" @click="assinaturaV()"
													data-bs-toggle="tab" :class="{ active: assinatura }">
													Assinaturas</a>
											</li>
											<!--end:::Tab item-->
											<!--begin:::Tab item-->
											<li class="nav-item">
												<a class="nav-link text-active-primary pb-4" @click="historicoV()"
													data-bs-toggle="tab" :class="{ active: historico }">Histórico</a>
											</li>

										</ul>

										<div class="tab-content" id="myTabContent">

											<div class="tab-pane fade show active" v-if="show === '1'" role="tabpanel">

												<!--begin::Card-->
												<div class="card pt-4 mb-6 mb-xl-9">
													<!--begin::Card header-->
													<div class="card-header border-0">
														<!--begin::Card title-->
														<div class="card-title">
															<h2>Historico de Transação</h2>
														</div>

													</div>
													<div class="card-body pt-0 pb-5">
														<!--begin::Table-->
														<table class="table align-middle table-row-dashed gy-5"
															id="kt_table_customers_payment">
															<!--begin::Table head-->
															<thead class="border-bottom border-gray-200 fs-7 fw-bolder">
																<!--begin::Table row-->
																<tr class="text-start text-muted text-uppercase gs-0">
																	<th class="min-w-100px">Data</th>
																	<th>Valor</th>
																	<th>Método </th>
																	<th class="min-w-100px">Status</th>
																	<th class="text-end min-w-100px pe-4">ação</th>
																</tr>
															</thead>
															<!--end::Table head-->
															<!--begin::Table body-->
															<tbody class="fs-6 fw-bold text-gray-600">

																<!--begin::Table row-->
																<tr v-for="item in filtraDoacao">

																	<td>
																		{{item.data | is_data}}
																	</td>

																	<td>{{item.valor+'00' | is_price }}</td>
																	</td>

																	<td>
																		<div class="badge badge-light"> {{item.tipo |
																			este_tipo}}</div>
																	</td>

																	<td>
																		<div class="badge"
																			:class="'status_'+item.status_pagamento">
																			{{item.status_pagamento | este_status }}
																		</div>
																	</td>

																	<td class="pe-0 text-end">

																		<a @click="editar(item.instituicao_id)"
																			title="Para Visualizar da um click"
																			class="btn btn-icon btn-active-light-primary w-35px h-35px btn-primary"
																			style="margin: 2px;">
																			<svg xmlns="http://www.w3.org/2000/svg"
																				width="16" height="16"
																				fill="currentColor"
																				class="bi bi-eye-fill"
																				viewBox="0 0 16 16">
																				<path
																					d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
																				<path
																					d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8zm8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7z" />
																			</svg>
																		</a>
																	</td>
																</tr>
															</tbody>
														</table>
													</div>
												</div>
											</div>
											<div class="tab-pane fade show active" v-if="show === '2'" role="tabpanel">
												<div class="card pt-4 mb-6 mb-xl-9">

													<div class="card-header border-0">
														<!--begin::Card title-->
														<div class="card-title">
															<h2>Minhas Assinatura</h2>
														</div>

														<!--begin::Card toolbar-->
														<div class="card-toolbar">
															<!--begin::Button-->
															<label
																class="form-check form-switch form-switch-sm form-check-custom form-check-solid">
																<!--begin::Input-->
																<input class="form-check-input" name="github"
																	type="checkbox" value="1"
																	checked="checked">
																 
																<span class="form-check-label fw-bold text-muted"
																	for="assina"></span>
														 
															</label> 
														</div>
												 
													</div>
													<!--end::Card header-->
													<!--begin::Card body-->
													<div class="card-body pt-0">
														<!--begin::Tab Content-->
														<div id="kt_referred_users_tab_content" class="tab-content">
															<!--begin::Tab panel-->
															<div id="kt_customer_details_invoices_1"
																class="py-0 tab-pane fade show active" role="tabpanel">
																<!--begin::Table-->
																<div id="kt_customer_details_invoices_table_1_wrapper"
																	class="dataTables_wrapper dt-bootstrap4 no-footer">
																	<div class="table-responsive">
																	<table class="table align-middle table-row-dashed gy-5"
																	id="kt_table_customers_payment">
																	<!--begin::Table head-->
																	<thead class="border-bottom border-gray-200 fs-7 fw-bolder">
																		<!--begin::Table row-->
																		<tr class="text-start text-muted text-uppercase gs-0">
																			<th class="min-w-100px">Data da Assinatura</th>
																			<th>Valor</th> 
																			<th class="min-w-100px">Status</th>
																			<th class="text-end min-w-100px pe-4"></th>
																		</tr>
																	</thead>
																	<!--end::Table head-->
																	<!--begin::Table body-->
																	<tbody class="fs-6 fw-bold text-gray-600">
		
																		<!--begin::Table row-->
																		<tr>
		
																			<td>
																				{{assina.data | is_data}}
																			</td>
		
																			<td>{{assina.valor | is_price }}</td>
																			</td>
		 
		
																			<td>
																			<div class="badge" :class="'tipo_'+tipo">
																			{{tipo}}</div>
																			</td>
		
																			<td class="pe-0 text-end">
																				<a class="btn btn-primary" >
																				 Cancelar Assinatura
																				</a>
																			</td>
																		</tr>
																	</tbody>
																</table>
																	</div>
																 
																</div>
																<!--end::Table-->
															</div>
															 
														</div>
													 
													</div>
													 
												</div>

											</div>

											<div class="tab-pane fade show active" v-if="show === '3'" role="tabpanel">

												<div class="card mb-6 mb-xl-9">


													<div class="card-header border-0">
														<!--begin::Card title-->
														<div class="card-title">
															<h2>Historico</h2>
														</div>
														<!--end::Card title-->

													</div>
													<!--end::Card header-->
													<!--begin::Card body-->
													<div class="card-body py-0">
														<!--begin::Table wrapper-->
														<div class="table-responsive">
															<!--begin::Table-->
															<table
																class="table align-middle table-row-dashed fw-bold text-gray-600 fs-6 gy-5"
																id="kt_table_customers_logs">
																<!--begin::Table body-->
																<tbody>
																	<!--begin::Table row-->
																	<tr>
																		<!--begin::Badge=-->
																		<td class="min-w-70px">
																			<div class="badge badge-light-success">200
																				OK</div>
																		</td>
																		<!--end::Badge=-->
																		<!--begin::Status=-->
																		<td>POST /v1/invoices/in_6814_4901/payment</td>
																		<!--end::Status=-->
																		<!--begin::Timestamp=-->
																		<td class="pe-0 text-end min-w-200px">20 Jun
																			2022, 8:43 pm</td>
																		<!--end::Timestamp=-->
																	</tr>
																	<!--end::Table row-->
																	<!--begin::Table row-->
																	<tr>
																		<!--begin::Badge=-->
																		<td class="min-w-70px">
																			<div class="badge badge-light-danger">500
																				ERR</div>
																		</td>
																		<!--end::Badge=-->
																		<!--begin::Status=-->
																		<td>POST /v1/invoice/in_7705_2575/invalid</td>
																		<!--end::Status=-->
																		<!--begin::Timestamp=-->
																		<td class="pe-0 text-end min-w-200px">05 May
																			2022, 11:05 am</td>
																		<!--end::Timestamp=-->
																	</tr>
																	<!--end::Table row-->
																	<!--begin::Table row-->
																	<tr>
																		<!--begin::Badge=-->
																		<td class="min-w-70px">
																			<div class="badge badge-light-success">200
																				OK</div>
																		</td>
																		<!--end::Badge=-->
																		<!--begin::Status=-->
																		<td>POST /v1/invoices/in_1296_7615/payment</td>
																		<!--end::Status=-->
																		<!--begin::Timestamp=-->
																		<td class="pe-0 text-end min-w-200px">21 Feb
																			2022, 2:40 pm</td>
																		<!--end::Timestamp=-->
																	</tr>
																	<!--end::Table row-->
																	<!--begin::Table row-->
																	<tr>
																		<!--begin::Badge=-->
																		<td class="min-w-70px">
																			<div class="badge badge-light-warning">404
																				WRN</div>
																		</td>
																		<!--end::Badge=-->
																		<!--begin::Status=-->
																		<td>POST /v1/customer/c_622f40cf5e46f/not_found
																		</td>
																		<!--end::Status=-->
																		<!--begin::Timestamp=-->
																		<td class="pe-0 text-end min-w-200px">10 Mar
																			2022, 6:05 pm</td>
																		<!--end::Timestamp=-->
																	</tr>
																	<!--end::Table row-->
																	<!--begin::Table row-->
																	<tr>
																		<!--begin::Badge=-->
																		<td class="min-w-70px">
																			<div class="badge badge-light-danger">500
																				ERR</div>
																		</td>
																		<!--end::Badge=-->
																		<!--begin::Status=-->
																		<td>POST /v1/invoice/in_1515_4291/invalid</td>
																		<!--end::Status=-->
																		<!--begin::Timestamp=-->
																		<td class="pe-0 text-end min-w-200px">21 Feb
																			2022, 6:43 am</td>
																		<!--end::Timestamp=-->
																	</tr>
																	<!--end::Table row-->
																	<!--begin::Table row-->
																	<tr>
																		<!--begin::Badge=-->
																		<td class="min-w-70px">
																			<div class="badge badge-light-danger">500
																				ERR</div>
																		</td>
																		<!--end::Badge=-->
																		<!--begin::Status=-->
																		<td>POST /v1/invoice/in_7494_7390/invalid</td>
																		<!--end::Status=-->
																		<!--begin::Timestamp=-->
																		<td class="pe-0 text-end min-w-200px">24 Jun
																			2022, 6:05 pm</td>
																		<!--end::Timestamp=-->
																	</tr>
																	<!--end::Table row-->
																	<!--begin::Table row-->
																	<tr>
																		<!--begin::Badge=-->
																		<td class="min-w-70px">
																			<div class="badge badge-light-success">200
																				OK</div>
																		</td>
																		<!--end::Badge=-->
																		<!--begin::Status=-->
																		<td>POST /v1/invoices/in_4805_4302/payment</td>
																		<!--end::Status=-->
																		<!--begin::Timestamp=-->
																		<td class="pe-0 text-end min-w-200px">24 Jun
																			2022, 10:30 am</td>
																		<!--end::Timestamp=-->
																	</tr>
																	<!--end::Table row-->
																	<!--begin::Table row-->
																	<tr>
																		<!--begin::Badge=-->
																		<td class="min-w-70px">
																			<div class="badge badge-light-warning">404
																				WRN</div>
																		</td>
																		<!--end::Badge=-->
																		<!--begin::Status=-->
																		<td>POST /v1/customer/c_622f40cf5e470/not_found
																		</td>
																		<!--end::Status=-->
																		<!--begin::Timestamp=-->
																		<td class="pe-0 text-end min-w-200px">20 Jun
																			2022, 10:10 pm</td>
																		<!--end::Timestamp=-->
																	</tr>
																	<!--end::Table row-->
																	<!--begin::Table row-->
																	<tr>
																		<!--begin::Badge=-->
																		<td class="min-w-70px">
																			<div class="badge badge-light-success">200
																				OK</div>
																		</td>
																		<!--end::Badge=-->
																		<!--begin::Status=-->
																		<td>POST /v1/invoices/in_6814_4901/payment</td>
																		<!--end::Status=-->
																		<!--begin::Timestamp=-->
																		<td class="pe-0 text-end min-w-200px">20 Jun
																			2022, 5:20 pm</td>
																		<!--end::Timestamp=-->
																	</tr>
																	<!--end::Table row-->
																	<!--begin::Table row-->
																	<tr>
																		<!--begin::Badge=-->
																		<td class="min-w-70px">
																			<div class="badge badge-light-warning">404
																				WRN</div>
																		</td>
																		<!--end::Badge=-->
																		<!--begin::Status=-->
																		<td>POST /v1/customer/c_622f40cf5e46f/not_found
																		</td>
																		<!--end::Status=-->
																		<!--begin::Timestamp=-->
																		<td class="pe-0 text-end min-w-200px">19 Aug
																			2022, 10:30 am</td>
																		<!--end::Timestamp=-->
																	</tr>
																	<!--end::Table row-->
																</tbody>
																<!--end::Table body-->
															</table>
															<!--end::Table-->
														</div>
														<!--end::Table wrapper-->
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
			foto: '../painel/assets/image/gravatar.png',

			instituicao_id: null,
			id: null,
			token: null,
			nome: null,
			tipo: null,
			cpf: "",
			telefone: null,
			email: null,
			data: null,
			doacoes: [],
			assinaturas: [],
			end: {
				cep: null,
				logadouro: null,
				numero: null,
				complemento: null,
				bairro: null,
				cidade: null,
				estado: null,
			},
			assina: {
				data: null,
				valor: null,
				status: null,
				identificador: null,
			},
			show: '1',
			visao: true,
			assinatura: false,
			historico: false,
			dataFinal: null,
		}

	},

	filters: {
		is_price(price) {
			let valor = (price / 100).toLocaleString('pt-br', { minimumFractionDigits: 2 })
			return `R$ ${valor}`
		},


		is_data(datas) {
			let data = datas.split('-').reverse().join('/');
			return `${data}`
		},



		este_status(status) {
            let apresentar = {
                PENDING: 'Aguardando Pagamento',
                refused: 'Cancelado',
                CONFIRMED: 'Pago',
                OVERDUE: 'Vencida',
                REFUNDED: 'Reembolsado',
                processing: 'Em processamento',
                authorized: 'Autorizado ',
                pending_refund: 'Reembolso pendente ',
                chargedback: 'Estorno',
            }
            return apresentar[status]
        },


        este_tipo(status) {
            let apresentar = {
                BOLETO: 'Boleto',
                CREDIT_CARD: 'Crédito',
                PIX: 'PIX',
            }
            return apresentar[status]
        },

	},


	computed: {

		filtraDoacao() {

			let valores

			valores = this.doacoes.filter((filtrar) => {
				return filtrar.data.split('-').join('') <= this.dataFinal;
			})

			return valores

		},

	},

	async mounted() {

		let dateObj = new Date()
		 this.dataFinal = dateObj.toLocaleString('en-GB', {
			year: 'numeric',
			month: '2-digit',
			day: '2-digit',
		}).split('/').reverse().join('');
 
		this.cpf = globalThis._doador.cpf
		this.tipo = globalThis._doador.tipo


		let dados = (await this.listar()).dados
		this.doacoes = (await this.listar()).dados.doacoes

		var assinaturas = (await this.listar()).dados.doacoes[0]
		this.assina.data = assinaturas.data,
			this.assina.valor = assinaturas.valor,
			this.assina.identificador = assinaturas.plano_id,
 
		// let date_created = datas.split('-').reverse().join('/'); 

		this.nome = dados.nome
		//this.cpf = dados.cpf
		this.telefone = dados.telefone
		this.email = dados.email

		this.end.cep = dados.endereco.cep
		this.end.logadouro = dados.endereco.logadouro
		this.end.numero = dados.endereco.numero
		this.end.complemento = dados.endereco.complemento
		this.end.bairro = dados.endereco.bairro
		this.end.cidade = dados.endereco.cidade
		this.end.estado = dados.endereco.estado

	},

	methods: {

		visaoV() {
			this.show = '1',
				this.visao = true,
				this.assinatura = false,
				this.historico = false
		},

		assinaturaV() {
			this.show = '2',
				this.visao = false,
				this.assinatura = true,
				this.historico = false
		},

		historicoV() {
			this.show = '3',
				this.visao = false,
				this.assinatura = false,
				this.historico = true
		},

		async listar() {
			let res = await adm.visualizarDoador(
				this.token,
				this.cpf
			)
			return res
		},

		async editar(instituicao_id) {
			globalThis._doacoes = this.doacoes.find(doad => doad.instituicao_id == instituicao_id)
			window.location.href = "#/doador/detalhe"
		},

	},
}

