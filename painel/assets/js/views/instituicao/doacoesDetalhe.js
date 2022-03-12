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
         
            <!--begin::Wrapper-->
            <div class="wrapper d-flex flex-column flex-row-fluid" id="kt_wrapper">
              
            <!--begin::Content-->
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
												 
												<div class="col-lg-6">
												<span class=" fw-bold text-muted">
												Nome</span>
												<a href="#/doadorHitorico" >
													<p class="fw-bolder fs-6 text-gray-800">{{ nome }}</p>
													</a>
												
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
													
													<p class="fw-bolder fs-6 text-gray-800">{{ valor | is_price}}</p>
												

													<span class=" fw-bold text-muted">
													Recorrente</span>
													
													<p class="fw-bolder fs-6 text-gray-800">{{ recorente | este_recorente }}</p>

													<span class=" fw-bold text-muted">
													Status</span>
													<p class="fw-bolder fs-6 text-gray-800">{{ status | este_status }}</p>
												
												</div>
												<div class="col-lg-2">
											
												<a class="btn btn-outline btn-outline-dashed btn-outline-primary btn-active-light-primary mb-2">Reenviar E-mail</a>
												
												<a class="btn btn-outline btn-outline-dashed btn-outline-success btn-active-light-success mb-2">Reenviar Whatsapp</a>

												</div>
											</div>
										
										
										</div>
										<!--end::Card body-->
									</div>
									
								</div>
				 
							</div>
							<!--end::Post-->
						</div>
			
						



















						<div> 
						<div class="container"> 
							<div class="text-center mb-5">
					 
								<div id="block2" v-if="tipo=='boleto'"> 
								<h3 class="fs-2 text-dark mb-5">
									Sua doação esta em aberto!.</h3> 
									<h3 class="fs-1 text-dark mb-5">
										<span>Clique abaixo para acessar o seu boleto.</span>
									</h3>
									
									<a target="_blank" :href="url_geral" class="btn btn-primary er fs-6 px-8 my-14">
										<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor"
											class="bi bi-upc" viewBox="0 0 16 16">
											<path
												d="M3 4.5a.5.5 0 0 1 1 0v7a.5.5 0 0 1-1 0v-7zm2 0a.5.5 0 0 1 1 0v7a.5.5 0 0 1-1 0v-7zm2 0a.5.5 0 0 1 1 0v7a.5.5 0 0 1-1 0v-7zm2 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-7zm3 0a.5.5 0 0 1 1 0v7a.5.5 0 0 1-1 0v-7z" />
										</svg>
										VER MEU BOLETO
									</a>
									<div class="mw-lg-600px mx-auto"> 
										<div class="mb-13 text-center"> 
											<div class="text-muted fw-bold fs-5">ou copie o
												<a href="#" class="link-primary fw-bolder"> código de barras:</a>.
											</div> 
										</div> 
										<div class="mb-10">
										<div class="d-flex">
											<input tipo="text" v-model="codigo_geral"  ref="codigo" 
												class="form-control  me-3 flex-grow-1" name="search" >
											<button @click="copiar('codigo')" class="btn btn-light btn-primary fw-bolder flex-shrink-0" >Copiar</button>
										</div> 
									</div>
		
									</div>
									<h3> Importante: Este boleto é uma contribuição espontânea e não gera protesto. </h3>
									</div>
								
								<div id="block2" v-if="tipo=='pix'">
								
								<h3 class="fs-1 text-dark mb-15">
									Sua doação está sendo processada, após o pagamento você receberá uma confirmação.</h3>
	
							 
									<div class="mw-lg-600px mx-auto"> 
										<div class="mb-13 text-center"> 
											<div class="text-muted fw-bold fs-5 ">
												<h2 class="text-gray-600">
												Seu codigo PIX..
												</h2>
											</div> 
										</div>  
									</div>
								</div>
		 
								<center>
								<div ref="print_qr"></div>
							</center>
							 
				
									
							<div id="block12" v-if="tipo=='pix'">
							
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
				refunded: 'Reembolsado',
				processing: 'Em processamento',
				authorized: 'Autorizado ',
				unpaid: 'Não Pago',
				pending: 'Pentende',
				waiting_payment: 'Aguardando Pagamento',
				refused: 'Cancelado',
				paid: 'Pago',
				pending_refund: 'Reembolso pendente ',
				chargedback: 'Estorno',
			}
			return apresentar[status]
		},
   
		este_tipo(status) {
            let apresentar = {
                boleto: 'Boleto',
                credit_card: 'Crédito',
                pix: 'PIX',
            }
            return apresentar[status]
        },

         
		este_recorente(status) {
            let apresentar = {
                mes: 'SIM',
                unico: 'NÃO', 
            }
            return apresentar[status]
        },

 
        	  
    },

	methods: {
	 	copiar(ref) {
			this.$refs[ref].select(); document.execCommand('copy');
		}

	},

    async mounted() { 
	this.nome = globalThis._doador.nome
		this.recorente = globalThis._doador.tipo
		 
		this.tipo = globalThis._doador.tipo
		this.valor = globalThis._doador.valor,
		this.data = globalThis._doador.data,
		this.hora = globalThis._doador.hora
		this.status = globalThis._doador.status_pagamento

		this.cpf = globalThis._doador.cpf

		if (this.tipo == 'pix') {
			let code_pix = `${this.codigo_geral}`
			var qrcode = new QRCode(this.$refs.print_qr, {
				text: code_pix,
				width: 230,
				height: 230,
				height: 230,
				colorDark: "#000000",
				colorLight: "#ffffff",
				correctLevel: QRCode.CorrectLevel.L
			});
		}
    	 
    }, 
 
}

  
