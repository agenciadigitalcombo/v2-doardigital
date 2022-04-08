import adm from "../../../../../static/js/api/adm.js"

export default {
	template: `
	
    <div>
    <div>
 
    <c-header></c-header>
    <c-aside></c-aside>

    <!--begin::Root-->
    <div class="d-flex flex-column flex-root">
        <!--begin::Page-->
        <div class="page d-flex flex-row flex-column-fluid">
         
            <div class="wrapper d-flex flex-column flex-row-fluid" id="kt_wrapper">
              
						<div class="content d-flex flex-column flex-column-fluid" id="kt_content">
							<!--begin::Post-->
							<div class="post d-flex flex-column-fluid" id="kt_post">
								<!--begin::Container-->
								<div id="kt_content_container" class="container-xxl">
								
									<!--begin::details View-->
									<div class="card mb-5 mb-xl-10" id="kt_profile_details_view">
										<!--begin::Card header-->
										<div class="card-header cursor-pointer">
											<!--begin::Card title-->
											<div class="card-title m-0">
												<h3 class="fw-bolder m-0">Detalhe da Doação</h3>
											</div>
										</div>
										<!--begin::Card header-->
										<!--begin::Card body-->
										<div class="card-body p-9">
											<!--begin::Row-->
											<div class="row mb-7">
											 
												<div class="col-lg-5">
												<span class=" fw-bold text-muted">
												Nome</span>
													<p class="fw-bolder fs-6 text-gray-800">
													<a href="#/doadorHitorico" class="fs-4 text-gray-800 text-hover-primary fw-bolder mb-0">{{ nome }}</a>
													</p>
												
													<span class=" fw-bold text-muted">
													Tipo</span>
													
													<p class="fw-bolder fs-6 text-gray-800">{{ tipo | este_tipo }}</p>
												

													<span class=" fw-bold text-muted">
													Data</span>
													
													<p class="fw-bolder fs-6 text-gray-800">{{ data | is_data }} - {{ hora }}</p>
												 
												</div>
											 
												<div class="col-lg-4">
												<span class=" fw-bold text-muted">
												Valor</span>
													
													<p class="fw-bolder fs-6 text-gray-800">{{ valor+'00' | is_price}}</p>
												

													<span class=" fw-bold text-muted">
													Recorrente</span>
													
													<p class="fw-bolder fs-6 text-gray-800">{{ recorente | este_recorente }}</p>

													<span class=" fw-bold text-muted">
													Status</span>
													<p class="fw-bolder fs-6 text-gray-800">{{ status | este_status }}</p>
												
												</div>
												<div class="col-lg-3">

												<a class="btn btn-outline btn-outline-dashed btn-outline-primary btn-active-light-primary w-100 mb-2">Reenviar E-mail</a>
												
												<a class="btn btn-outline btn-outline-dashed btn-outline-success btn-active-light-success w-100 mb-2">Reenviar Whatsapp</a>

												<div v-if="status=='CONFIRMED' && tipo=='CREDIT_CARD'" >
												<a class="btn btn-outline btn-outline-dashed btn-outline-danger btn-active-light-danger w-100">fazer Estorno</a>
												
												<div class="alert alert-dismissible bg-light-danger border border-danger border-dashed d-flex flex-column flex-sm-row w-100 p-5">
												 <div class="d-flex flex-column pe-0"> 
													<span>
													O Estorno e valido somente 30 dias após contando da data de doação paga.
													 Passando 30 dias do pagamento não será possível fazer o estorno.
													</span>
												</div>
											</div>
											</div>
											
												</div>
											</div>
										
										
										</div>
										 

									</div>
									 
								
								</div>
							 
							</div>
					 
							

							<div class="post d-flex flex-column-fluid" v-if="tipo !=='CREDIT_CARD'">
							<div class="container-xxl">
								<div class="card">
							 
														<div class="text-center mt-6">
												 
															<div id="block2" v-if="tipo=='BOLETO'"> 
														
																<a target="_blank" :href="url_geral" class="btn btn-primary er fs-6 px-8 my-5">
																	<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor"
																		class="bi bi-upc" viewBox="0 0 16 16">
																		<path
																			d="M3 4.5a.5.5 0 0 1 1 0v7a.5.5 0 0 1-1 0v-7zm2 0a.5.5 0 0 1 1 0v7a.5.5 0 0 1-1 0v-7zm2 0a.5.5 0 0 1 1 0v7a.5.5 0 0 1-1 0v-7zm2 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-7zm3 0a.5.5 0 0 1 1 0v7a.5.5 0 0 1-1 0v-7z" />
																	</svg>
																	VER MEU BOLETO
																</a>
																<div class="mw-lg-600px mx-auto"> 
																	<div class="mb-5 text-center"> 
																		<div class="text-muted fw-bold fs-5">ou copie o
																			<a href="/doadorHitorico" class="link-primary fw-bolder"> código de barras:</a>.
																		</div> 
																	</div> 
																	<div class="mb-5">
																	<div class="d-flex">
																		<input tipo="text" v-model="codigo_geral"  ref="codigo" 
																			class="form-control  me-3 flex-grow-1" name="search" >
																		<button @click="copiar('codigo')" class="btn btn-light btn-primary fw-bolder flex-shrink-0" >Copiar</button>
																	</div> 
																</div>
									
																</div>
																</div>
															
															<div id="block2" v-if="tipo=='PIX'">
															
															<h3 class="fs-1 text-dark">
															
																<div class="mw-lg-600px mx-auto mb-15""> 
																	<div class="mb-13 text-center"> 
																		<div class="text-muted fw-bold fs-5 ">
																			<h2 class="text-gray-600">
																			Seu codigo PIX..
																			</h2>
																		</div> 
															<center>
															<div ref="print_qr"></div> 
														</center>
														 
																	</div>  
																</div>
															</div>
									 
											
																
														<div id="block12" v-if="tipo=='PIX'">
														
															<div class="mw-lg-600px mx-auto  mt-10"> 
															  
																<div class="mb-10">
																	<div class="d-flex">
																		<input tipo="text" v-model="codigo_geral"  ref="codigo" 
																			class="form-control  me-3 flex-grow-1" name="search" >
																		<button @click="copiar('codigo')" class="btn btn-light btn-primary fw-bolder flex-shrink-0" >Copiar</button>
																	</div> 
																</div>
															</div>
														</div> 
									
														</div> 
													</div> 
												</div> 
												</div>
						 
 
<div class="content d-flex flex-column flex-column-fluid">
<div class="post d-flex flex-column-fluid">

                        <div class="container-xxl">

                            <div class="card">
                                <div class="card-header border-0 pt-6">

                                    <div class="card-title">
                                        <div class="d-flex align-items-center position-relative my-1">
										<h3 class="fw-bolder m-0">Detalhe da Transação</h3>
										 
                                        </div>
                                    </div>
                                   
                                </div>
                                <div class="card-body pt-0">
                                    <div class="table-responsive">
									<table class="table table-striped gy-7 gs-7">
                                            <thead>
											<tr class="fw-bold fs-6 text-gray-800 border-bottom border-gray-200">
											  
                                                    <th class="min-w-100px">NOME</th>
													<th class="min-w-100px">Tipo</th>
                                                    <th class="min-w-100px">Valor</th>
                                                    <th class="min-w-100px">Doar </th>
                                                    <th class="min-w-100px" v-if="tipo ==='PIX'">Pix</th>
                                                    <th class="min-w-100px" v-if="tipo ==='CREDIT_CARD'">Cartão </th>
                                                    <th class="min-w-100px" v-if="tipo ==='BOLETO'">Boleto</th>
													<th class="min-w-150px" v-if="tipo ==='CREDIT_CARD'">Transação</th>
													<th class="min-w-150px">Valor Liquido</th>
                                                </tr>
                                            </thead>
                                            <tbody class="text-gray-600 fw-bold">
                                                <tr>

												<td>
												{{ nome }}
												</td>

                                                    <td>
													{{ tipo | este_tipo }}
                                                    </td>

                                                    <td>
													{{ valor+'00' | is_price}}
                                                    </td>

                                                    <td> 
                                                        <div class="d-flex flex-column">
                                                            <a class="text-gray-800 text-hover-primary mb-1">
															R$ {{doarDigital }}
                                                            </a>
                                                        </div>
                                                    </td>
                                                   
                                                    <td v-if="tipo ==='PIX'">
                                                        <div class=""> 
														R$ 0.79 
                                                        </div>
                                                    </td>
                                                    
                                                    <td v-if="tipo ==='CREDIT_CARD'">
                                                        <div
                                                            class="form-check form-switch form-check-custom form-check-solid me-10">
															R$ {{cartao}}
                                                        </div>

                                                    </td>

                                                    <td v-if="tipo ==='BOLETO'">
													R$ 1.99 
                                                    </td>
													<td v-if="tipo ==='CREDIT_CARD'">
													R$ 0.49
												   </td>
													<td>
													R$ {{valorLiquido}}
												   </td>

                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
							</div>
                        </div>
                    </div>

					</div>
				
            </div>
            <!--end::Wrapper-->
        </div>
        <!--end::Page-->
    </div>
 

    <c-footer/>
	</div>
 
	</div>
    
    `,

 

	data: function () {

		return {
			nome: null,
			tipo: null,
			valor: null,
			recorente: null,
			data: null,
			hora: null,
			status: null,
			cpf: null,
			perDoar: null,
			doarDigital: null,
			cartao: null,
			valorLiquido: null,
			boleto: null,
			url_geral: null,
			codigo_geral: null
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


		este_recorente(status) {
			let apresentar = {
				RECORRENTE: 'SIM',
				UNICO: 'NÃO',
			}
			return apresentar[status]
		},

	},

	async mounted() {

		this.tipo = globalThis._doacoes.tipo
		this.valor = globalThis._doacoes.valor,
		this.data = globalThis._doacoes.data,
		this.hora = globalThis._doacoes.hora
		this.status = globalThis._doacoes.status_pagamento
		this.codigo_geral = globalThis._doacoes.codigo
		this.url_geral = globalThis._doacoes.url
		this.nome = globalThis._doador.nome
		this.recorente = globalThis._doador.tipo


		function formatReal(int) {
			var tmp = int + '';
			tmp = tmp.replace(/([0-9]{2})$/g, ",$1");
			if (tmp.length > 6)
				tmp = tmp.replace(/([0-9]{3}),([0-9]{2}$)/g, ".$1.$2");
			return tmp;
		}


		var doado = formatReal(this.valor + '00')
		var valorDoado = doado.split(',').join('.');
		this.perDoar = (parseFloat(valorDoado) / 100) * 4;


		this.cartao = (parseFloat(valorDoado) / 100) * 2.99;

		if (this.tipo == 'PIX') {
			var pix = parseFloat(this.perDoar) + 0.79
			this.valorLiquido = parseFloat(valorDoado) - pix
		} else if (this.tipo == 'CREDIT_CARD') {
			var cartao = parseFloat(this.perDoar) + parseFloat(this.cartao) + 0.49
			this.valorLiquido = parseFloat(valorDoado) - cartao
		} else {
			var boleto = parseFloat(this.perDoar) + 1.99
			this.valorLiquido = parseFloat(valorDoado) - boleto
		}

		this.doarDigital = this.perDoar.toFixed(2);


		if (this.tipo == 'PIX') {
			let code_pix = `${this.codigo_geral}`
			var qrcode = new QRCode(this.$refs.print_qr, {
				text: code_pix,
				width: 230,
				height: 230,
				height: 230,
				colorDark: "/doadorHitorico000000",
				colorLight: "/doadorHitoricoffffff",
				correctLevel: QRCode.CorrectLevel.L
			});
		}

	},

	methods: {
		copiar(ref) {
			this.$refs[ref].select(); document.execCommand('copy');
		}

	},
}


