import adm from "../../../../static/js/api/adm.js"

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
												<h3 class="fw-bolder m-0">Detalhe do Doador</h3>
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
													<p class="fw-bolder fs-6 text-gray-800">john</p>
												
													<span class=" fw-bold text-muted">
													Email</span>
													
													<p class="fw-bolder fs-6 text-gray-800">Email</p>
												
												<h2>Endereço</h2>

													<span class=" fw-bold text-muted">
													CEP</span>
													
													<p class="fw-bolder fs-6 text-gray-800">30/10/2021 - 15:04</p>
												
													<span class=" fw-bold text-muted">
													Bairro</span>
													
													<p class="fw-bolder fs-6 text-gray-800">xxxxxxxxxxx</p>
												
													<span class=" fw-bold text-muted">
													Cidade</span>
													
													<p class="fw-bolder fs-6 text-gray-800">Luanda</p>
												

												
												</div>
												<!--end::Label-->
												<!--begin::Col-->
												<div class="col-lg-6">
												<span class=" fw-bold text-muted">
												Telefone</span>
													
													<p class="fw-bolder fs-6 text-gray-800">8888888888,90</p>
												
													<span class=" fw-bold text-muted">
													CPF</span>
													
													<p class="fw-bolder fs-6 text-gray-800">8888888888,90</p>
												
<h1> </h1>

													<span class=" fw-bold text-muted">
													Número</span>
													
													<p class="fw-bolder fs-6 text-gray-800">8888888888,90</p>
												
													<span class=" fw-bold text-muted">
													Rua</span>
													
													<p class="fw-bolder fs-6 text-gray-800">SIM</p>

													<span class=" fw-bold text-muted">
													Complemento</span>
													<p class="fw-bolder fs-6 text-gray-800">pago</p>
												

													<span class=" fw-bold text-muted">
													Estado</span>
													<p class="fw-bolder fs-6 text-gray-800">pago</p>
												
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
			gravatar: '../painel/assets/image/gravatar.png',
			token: null,
			nome: null,
			cpf: null,
			telefone: null,
			email: null
        }
    
    },
	
    async mounted() {
        // this.user = localStorage.getItem('user')
		
        // let plugin = document.createElement('script')
        // plugin.setAttribute('src', './front-js/scripts.bundle.js')
        // plugin.async = true;
        // document.head.appendChild(plugin)

		let dados = (await this.listar()).dados

		console.log(dados)
		this.nome = dados.nome
		this.email = dados.email
		this.cpf = dados.cpf
		this.telefone = dados.telefone
    
		
    }, 

	methods: {
		async listar() {
            let res = await adm.ListarPerfil( localStorage.getItem('token') )
			return res
        },
	},
}

// Taxa de Doações

// Preenchimento de Perfil
