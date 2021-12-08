import adm from "../../../../static/js/api/adm.js"

export default {
    template:` telefone de contato

	
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
									<!--begin::Navbar-->
									<div class="card mb-5 mb-xl-10">
										<div class="card-body pt-9 pb-0">
											<!--begin::Details-->
											<div class="d-flex flex-wrap flex-sm-nowrap mb-3">
												<!--begin: Pic-->
												<div class="me-7 mb-4">
													<div class="symbol symbol-100px symbol-lg-160px symbol-fixed position-relative">
													<img v-bind:src="gravatar" >
														<div class="position-absolute translate-middle bottom-0 start-100 mb-6 bg-success rounded-circle border border-4 border-white h-20px w-20px"></div>
													</div>
												</div>
												<!--end::Pic-->
												<!--begin::Info-->
												<div class="flex-grow-1">
													<!--begin::Title-->
													<div class="d-flex justify-content-between align-items-start flex-wrap mb-2">
														<!--begin::User-->
														<div class="d-flex flex-column">
															<!--begin::Name-->
															<div class="d-flex align-items-center">
																<a href="#" class="text-gray-900 text-hover-primary fs-2 fw-bolder me-1">{{nome}}</a>
																</div>
															<!--end::Name-->
															<!--begin::Info-->
															<div class="d-flex flex-wrap fw-bold fs-6 mb-4 pe-2">
																<a href="#" class="d-flex align-items-center text-gray-400 text-hover-primary me-5 mb-2">
																	<!--begin::Svg Icon | path: icons/duotune/communication/com006.svg-->
																	<span class="svg-icon svg-icon-4 me-1">
																		<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
																			<path opacity="0.3" d="M22 12C22 17.5 17.5 22 12 22C6.5 22 2 17.5 2 12C2 6.5 6.5 2 12 2C17.5 2 22 6.5 22 12ZM12 7C10.3 7 9 8.3 9 10C9 11.7 10.3 13 12 13C13.7 13 15 11.7 15 10C15 8.3 13.7 7 12 7Z" fill="black" />
																			<path d="M12 22C14.6 22 17 21 18.7 19.4C17.9 16.9 15.2 15 12 15C8.8 15 6.09999 16.9 5.29999 19.4C6.99999 21 9.4 22 12 22Z" fill="black" />
																		</svg>
																	</span>
																	<!--end::Svg Icon-->Admin</a>
																<a href="#" class="d-flex align-items-center text-gray-400 text-hover-primary me-5 mb-2">
																	<!--begin::Svg Icon | path: icons/duotune/general/gen018.svg-->
																	<span class="svg-icon svg-icon-4 me-1">
																		<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
																			<path opacity="0.3" d="M18.0624 15.3453L13.1624 20.7453C12.5624 21.4453 11.5624 21.4453 10.9624 20.7453L6.06242 15.3453C4.56242 13.6453 3.76242 11.4453 4.06242 8.94534C4.56242 5.34534 7.46242 2.44534 11.0624 2.04534C15.8624 1.54534 19.9624 5.24534 19.9624 9.94534C20.0624 12.0453 19.2624 13.9453 18.0624 15.3453Z" fill="black" />
																			<path d="M12.0624 13.0453C13.7193 13.0453 15.0624 11.7022 15.0624 10.0453C15.0624 8.38849 13.7193 7.04535 12.0624 7.04535C10.4056 7.04535 9.06241 8.38849 9.06241 10.0453C9.06241 11.7022 10.4056 13.0453 12.0624 13.0453Z" fill="black" />
																		</svg>
																	</span>
																	<!--end::Svg Icon-->
																	{{cidade}}, {{estado}} {{logadouro}}</a>
																<a href="#" class="d-flex align-items-center text-gray-400 text-hover-primary mb-2">
																	<!--begin::Svg Icon | path: icons/duotune/communication/com011.svg-->
																	<span class="svg-icon svg-icon-4 me-1">
																		<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
																			<path opacity="0.3" d="M21 19H3C2.4 19 2 18.6 2 18V6C2 5.4 2.4 5 3 5H21C21.6 5 22 5.4 22 6V18C22 18.6 21.6 19 21 19Z" fill="black" />
																			<path d="M21 5H2.99999C2.69999 5 2.49999 5.10005 2.29999 5.30005L11.2 13.3C11.7 13.7 12.4 13.7 12.8 13.3L21.7 5.30005C21.5 5.10005 21.3 5 21 5Z" fill="black" />
																		</svg>
																	</span>
																	<!--end::Svg Icon-->{{email}}</a>
															</div>
															<!--end::Info-->
														</div>
														<!--end::User-->
													</div>
													<!--end::Title-->
													<!--begin::Stats-->
													<div class="d-flex flex-wrap flex-stack">
														<!--begin::Wrapper-->
														<div class="d-flex flex-column flex-grow-1 pe-8">
														<!--begin::Progress-->
														<div class="d-flex align-items-center w-200px w-sm-300px flex-column ">
															<div class="d-flex justify-content-between w-100 mt-auto mb-2">
																<span class="fw-bold fs-6 text-gray-400">Preenchimento de Perfil</span>
																<span class="fw-bolder fs-6">50%</span>
															</div>
															<div class="h-5px mx-3 w-100 bg-light mb-3">
																<div class="bg-success rounded h-5px" role="progressbar" style="width: 50%;" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
															</div>
														</div>
														<!--end::Progress-->
														</div>
														<!--end::Wrapper-->
												
													</div>
													<!--end::Stats-->
												</div>
												<!--end::Info-->
											</div>
											<!--end::Details-->
											<!--begin::Navs-->
											<ul class="nav nav-stretch nav-line-tabs nav-line-tabs-2x border-transparent fs-5 fw-bolder">
												<!--begin::Nav item-->
												<li class="nav-item mt-2">
													<a class="nav-link text-active-primary ms-0 me-10 py-5 active" href="#/perfil">Visão geral</a>
												</li>
												<!--end::Nav item-->
												<!--begin::Nav item-->
												<li class="nav-item mt-2">
													<a class="nav-link text-active-primary ms-0 me-10 py-5" href="#/perfil-editar">Alterar Dados</a>
												</li>
												<!--end::Nav item-->
												<!--begin::Nav item-->
											<li class="nav-item mt-2">
												<a class="nav-link text-active-primary ms-0 me-10 py-5" href="#/editar-local">Meu Endereço</a>
											</li>
											<li class="nav-item mt-2">
												<a class="nav-link text-active-primary ms-0 me-10 py-5" href="#/editar-securanca">Seguranca</a>
											</li>
											<!--end::Nav item-->
											</ul>
											<!--begin::Navs-->
										</div>
									</div>
									<!--end::Navbar-->
									<!--begin::details View-->
									<div class="card mb-5 mb-xl-10" id="kt_profile_details_view">
										<!--begin::Card header-->
										<div class="card-header cursor-pointer">
											<!--begin::Card title-->
											<div class="card-title m-0">
												<h3 class="fw-bolder m-0">Detalhes de perfil</h3>
											</div>
											<!--end::Card title-->
											<!--begin::Action-->
											<a href="" class="btn btn-primary align-self-center">Editar Perfil</a>
											<!--end::Action-->
										</div>
										<!--begin::Card header-->
										<!--begin::Card body-->
										<div class="card-body p-9">
											<!--begin::Row-->
											<div class="row mb-7">
												<!--begin::Label-->
												<label class="col-lg-4 fw-bold text-muted">Nome completo
												<i class="fas fa-exclamation-circle ms-1 fs-7" data-bs-toggle="tooltip" title="Seu nome completo"></i>
												</label>
												<!--end::Label-->
												<!--begin::Col-->
												<div class="col-lg-8">
													<span class="fw-bolder fs-6 text-gray-800">{{nome}}</span>
													
												</div>
												<!--end::Col-->
											</div>
											<!--end::Row-->
											<!--begin::Input group-->
											<div class="row mb-7">
												<!--begin::Label-->
												<label class="col-lg-4 fw-bold text-muted">CPF</label>
												<!--end::Label-->
												<!--begin::Col-->
												<div class="col-lg-8 fv-row">
													<span class="fw-bold text-gray-800 fs-6">{{cpf}}</span>
												</div>
												<!--end::Col-->
											</div>
										
											<!--begin::Input group-->
											<div class="row mb-7">
												<!--begin::Label-->
												<label class="col-lg-4 fw-bold text-muted">telefone de contato
													<i class="fas fa-exclamation-circle ms-1 fs-7" data-bs-toggle="tooltip" title="Numero de telefone activado"></i></label>
												<!--end::Label-->
												<!--begin::Col-->
												<div class="col-lg-8 d-flex align-items-center">
													<span class="fw-bolder fs-6 text-gray-800 me-2">{{telefone}}</span>
												
												</div>
												<!--end::Col-->
											</div>
											<!--end::Input group-->
											<!--begin::Input group-->
											<div class="row mb-7">
												<!--begin::Label-->
												<label class="col-lg-4 fw-bold text-muted">CEP</label>
												<!--end::Label-->
												<!--begin::Col-->
												<div class="col-lg-8">
													<span class="fw-bold fs-6 text-gray-800 text-hover-primary">{{cep}}</span>
												</div>
												<!--end::Col-->
											</div>
											<!--end::Input group-->
											<!--begin::Input group-->
											<div class="row mb-7">
												<!--begin::Label-->
												<label class="col-lg-4 fw-bold text-muted">
													Rua
												
													<i class="fas fa-exclamation-circle ms-1 fs-7" data-bs-toggle="tooltip" title="Sua atualizado "></i></label>
												<!--end::Label-->
												<!--begin::Col-->
												<div class="col-lg-8">
													<span class="fw-bolder fs-6 text-gray-800">{{logadouro}}</span>
												</div>
												<!--end::Col-->
											</div>
											<!--end::Input group-->
											<!--begin::Input group-->
											<div class="row mb-7">
												<!--begin::Label-->
												<label class="col-lg-4 fw-bold text-muted">	Numero</label>
												<!--end::Label-->
												<!--begin::Col-->
												<div class="col-lg-8">
													<span class="fw-bolder fs-6 text-gray-800">{{numero}}</span>
												</div>
												<!--end::Col-->
											</div>
											<!--end::Input group-->
											<!--begin::Input group-->
											<div class="row mb-10">
												<!--begin::Label-->
												<label class="col-lg-4 fw-bold text-muted">
													Complemento</label>
												<!--begin::Label-->
												<!--begin::Label-->
												<div class="col-lg-8">
													<span class="fw-bold fs-6 text-gray-800">{{complemento}}</span>
												</div>
												<!--begin::Label-->
											</div>
											<!--end::Input group-->
											<!--begin::Input group-->
											<div class="row mb-10">
												<!--begin::Label-->
												<label class="col-lg-4 fw-bold text-muted">
													Bairro</label>
												<!--begin::Label-->
												<!--begin::Label-->
												<div class="col-lg-8">
													<span class="fw-bold fs-6 text-gray-800">{{bairro}}</span>
												</div>
												<!--begin::Label-->
											</div>
											<!--end::Input group-->
											<!--begin::Input group-->
											<div class="row mb-10">
												<!--begin::Label-->
												<label class="col-lg-4 fw-bold text-muted">
													Cidade</label>
												<!--begin::Label-->
												<!--begin::Label-->
												<div class="col-lg-8">
													<span class="fw-bold fs-6 text-gray-800"> {{cidade}} </span>
												</div>
												<!--begin::Label-->
											</div>
											<!--end::Input group-->
											<!--begin::Input group-->
											<div class="row mb-10">
												<!--begin::Label-->
												<label class="col-lg-4 fw-bold text-muted">
													Estado</label>
												<!--begin::Label-->
												<!--begin::Label-->
												<div class="col-lg-8">
													<span class="fw-bold fs-6 text-gray-800"> {{estado}}</span>
												</div>
												<!--begin::Label-->
											</div>
											<!--end::Input group-->
										
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
			email: null,

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
			step: null,
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
    
		
		
		let enderecoDados = (await this.listarEndereco()).dados|| {}
		
        this.logadouro = enderecoDados.logadouro
		this.cep = enderecoDados.cep
		this.nome_identificacao = enderecoDados.nome_identificacao
		this.numero = enderecoDados.numero
		this.complemento = enderecoDados.complemento
		this.bairro = enderecoDados.bairro
		this.cidade = enderecoDados.cidade
		this.estado = enderecoDados.estado
		this.id = enderecoDados.id


		console.log(enderecoDados)
		
    }, 

	methods: {
		async listar() {
            let res = await adm.ListarPerfil( localStorage.getItem('token') )
			return res
        },
		async listarEndereco() {
			let res = await adm.listarEndereco(
				(this.token)
			)
			return res
		},
	},
}

// Taxa de Doações

// Preenchimento de Perfil
