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
									<!--end::details View-->
									<!--begin::Row-->
								
									<!--end::Row-->
								
								</div>
								<!--end::Container-->
							</div>
							<!--end::Post-->
						</div>
						<!--end::Content-->
              
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
			cpf: null
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
 
    async mounted() { 
	this.nome = globalThis._doador.nome
		this.recorente = globalThis._doador.tipo
		 
		this.tipo = globalThis._doador.tipo
		this.valor = globalThis._doador.valor,
		this.data = globalThis._doador.data,
		this.hora = globalThis._doador.hora
		this.status = globalThis._doador.status_pagamento

		this.cpf = globalThis._doador.cpf

    	 
    }, 
 
}

  
