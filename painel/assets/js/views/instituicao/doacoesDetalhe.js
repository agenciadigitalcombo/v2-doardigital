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
												<!--begin::Label-->
												<div class="col-lg-6">
												<span class=" fw-bold text-muted">
												Nome</span>
													<p class="fw-bolder fs-6 text-gray-800">{{ nome }}</p>
												
													<span class=" fw-bold text-muted">
													Tipo</span>
													
													<p class="fw-bolder fs-6 text-gray-800">{{ tipo | is_tipo | is_tipo2 | is_tipo3 }}</p>
												

													<span class=" fw-bold text-muted">
													Data</span>
													
													<p class="fw-bolder fs-6 text-gray-800">{{ data | is_data }} - {{ hora }}</p>
												

												
												</div>
												<!--end::Label-->
												<!--begin::Col-->
												<div class="col-lg-6">
												<span class=" fw-bold text-muted">
												Valor</span>
													
													<p class="fw-bolder fs-6 text-gray-800">{{ valor | is_price}}</p>
												

													<span class=" fw-bold text-muted">
													Recorrente</span>
													
													<p class="fw-bolder fs-6 text-gray-800">{{ recorente | is_recorente | is_recorente2}}</p>

													<span class=" fw-bold text-muted">
													Status</span>
													<p class="fw-bolder fs-6 text-gray-800">{{ status | is_status | is_status2 }}</p>
												
												</div>
												<!--end::Col-->
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
			status: null
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

        is_status(status) {
            let status_pagamento = status.split('waiting_payment').join('Aguardando Pagamento')
           return `${status_pagamento}`
        },

        is_status2(status) {
            let status_pagamento = status.split('paid').join('Pago')
           return `${status_pagamento}`
        },
        
        is_tipo(tipo) {
            let tipo_pagamento = tipo.split('boleto').join('Boleto ')
           return `${tipo_pagamento}`
        },
        	
        is_tipo2(tipo) {
            let tipo_pagamento = tipo.split('credit_card').join('Crédito')
           return `${tipo_pagamento}`
        },

        is_tipo3(tipo) {
            let tipo_pagamento = tipo.split('pix').join('PIX ')
           return `${tipo_pagamento}`
        },

		

		is_recorente(recorente) {
            let recorente_pagamento = recorente.split('mes').join('SIM')
           return `${recorente_pagamento}`
        },

        is_recorente2(recorente) {
            let recorente_pagamento = recorente.split('unico').join('NÃO ')
           return `${recorente_pagamento}`
        },
    },

    async mounted() { 
	this.nome = globalThis._doacao.nome
		this.recorente = globalThis._doacao.tipo
		 
		this.tipo = globalThis._doacao.tipo
		this.valor = globalThis._doacao.valor,
		this.data = globalThis._doacao.data,
		this.hora = globalThis._doacao.hora
		this.status = globalThis._doacao.status_pagamento

    	 
    }, 
 
}

  
