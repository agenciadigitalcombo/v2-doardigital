import adm from "../../../../../static/js/api/adm.js"

export default {
    template:`
	
    <div>
    <div>
 
    <c-header></c-header>
    <c-aside></c-aside>

    <!--begin::Root-->
    <div class="d-flex flex-column flex-root">
        <div class="page d-flex flex-row flex-column-fluid">
         
            <div class="wrapper d-flex flex-column flex-row-fluid" id="kt_wrapper">
              
						<div class="content d-flex flex-column flex-column-fluid" id="kt_content">
						
							<div class="post d-flex flex-column-fluid" id="kt_post">
							
								<div id="kt_content_container" class="container-xxl">
								
									<div class="card mb-5 mb-xl-10">
										<div class="card-body pt-9 pb-0">
										
										<c-detalhe></c-detalhe>

											<ul class="nav nav-stretch nav-line-tabs nav-line-tabs-2x border-transparent fs-5 fw-bolder">
												
												<li class="nav-item mt-2">
													<a class="nav-link text-active-primary ms-0 me-10 py-5 active" href="#/perfil">Visão geral</a>
												</li>
												
												<li class="nav-item mt-2">
													<a class="nav-link text-active-primary ms-0 me-10 py-5" href="#/perfil-editar">Alterar Dados</a>
												</li>
											<li class="nav-item mt-2">
												<a class="nav-link text-active-primary ms-0 me-10 py-5" href="#/editar-local">Meu Endereço</a>
											</li>
											<li class="nav-item mt-2">
												<a class="nav-link text-active-primary ms-0 me-10 py-5" href="#/editar-securanca">Seguranca</a>
											</li>
											</ul>
										</div>
									</div>
									<div class="card mb-5 mb-xl-10" id="kt_profile_details_view">
										
										<div class="card-header cursor-pointer">
										
											<div class="card-title m-0">
												<h3 class="fw-bolder m-0">Detalhes de perfil</h3>
											</div>
											<a href="" class="btn btn-primary align-self-center">Editar Perfil</a>
										
										</div>
										
										<div class="card-body p-9">
										
											<div class="row mb-7">
												<label class="col-lg-4 fw-bold text-muted">Nome completo
												<i class="fas fa-exclamation-circle ms-1 fs-7" data-bs-toggle="tooltip" title="Seu nome completo"></i>
												</label>
												<div class="col-lg-8">
													<span class="fw-bolder fs-6 text-gray-800">{{nome}}</span>
													
												</div>
												
											</div>
											<div class="row mb-7">
												
												<label class="col-lg-4 fw-bold text-muted">CPF</label>
												
												<div class="col-lg-8 fv-row">
													<span class="fw-bold text-gray-800 fs-6">{{cpf}}</span>
												</div>
												
											</div>
										
											<div class="row mb-7">
												
												<label class="col-lg-4 fw-bold text-muted">telefone de contato
													<i class="fas fa-exclamation-circle ms-1 fs-7" data-bs-toggle="tooltip" title="Numero de telefone activado"></i></label>
												
												<div class="col-lg-8 d-flex align-items-center">
													<span class="fw-bolder fs-6 text-gray-800 me-2">{{telefone}}</span>
												
												</div>
												
											</div>
											<div class="row mb-7">
												
												<label class="col-lg-4 fw-bold text-muted">CEP</label>
												
												<div class="col-lg-8">
													<span class="fw-bold fs-6 text-gray-800 text-hover-primary">{{cep}}</span>
												</div>
												
											</div>
											<div class="row mb-7">
												
												<label class="col-lg-4 fw-bold text-muted">
													Rua
												
													<i class="fas fa-exclamation-circle ms-1 fs-7" data-bs-toggle="tooltip" title="Sua atualizado "></i></label>
												
												<div class="col-lg-8">
													<span class="fw-bolder fs-6 text-gray-800">{{logadouro}}</span>
												</div>
												
											</div>
											<div class="row mb-7">
												
												<label class="col-lg-4 fw-bold text-muted">	Numero</label>
												
												<div class="col-lg-8">
													<span class="fw-bolder fs-6 text-gray-800">{{numero}}</span>
												</div>
												
											</div>
											<div class="row mb-10">
												
												<label class="col-lg-4 fw-bold text-muted">
													Complemento</label>
												<div class="col-lg-8">
													<span class="fw-bold fs-6 text-gray-800">{{complemento}}</span>
												</div>
												
											</div>
											<div class="row mb-10">
												
												<label class="col-lg-4 fw-bold text-muted">
													Bairro</label>
												<div class="col-lg-8">
													<span class="fw-bold fs-6 text-gray-800">{{bairro}}</span>
												</div>
												
											</div>
											<div class="row mb-10">
												
												<label class="col-lg-4 fw-bold text-muted">
													Cidade</label>
												<div class="col-lg-8">
													<span class="fw-bold fs-6 text-gray-800"> {{cidade}} </span>
												</div>
												
											</div>
											<div class="row mb-10">
												
												<label class="col-lg-4 fw-bold text-muted">
													Estado</label>
												<div class="col-lg-8">
													<span class="fw-bold fs-6 text-gray-800"> {{estado}}</span>
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
		let dados = (await this.listar()).dados
		this.nome = dados.nome
		this.email = dados.email
		this.cpf = dados.cpf
		this.telefone = dados.telefone
    
		
		
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

